# Cash Register

## Requirements
Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

| Currency Unit	    | Amount                |
|       ---         |           ---         |
|   Penny	        |    $0.01 (PENNY)      |
|   Nickel	        |    $0.05 (NICKEL)     |
|   Dime	        |    $0.1 (DIME)        |
|   Quarter	        |    $0.25 (QUARTER)    |
|   Dollar	        |    $1 (ONE)           |
|   Five Dollars	|    $5 (FIVE)          |
|   Ten Dollars	    |    $10 (TEN)          |
|   Twenty Dollars	|    $20 (TWENTY)       |

One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```

### Implementation

#### Types
```typescript
type CurrencyUnit =
    | 'PENNY'
    | 'NICKEL'
    | 'DIME'
    | 'QUARTER'
    | 'ONE'
    | 'FIVE'
    | 'TEN'
    | 'TWENTY'
    | 'ONE HUNDRED';

type CidTuple = [CurrencyUnit, number];

type CashInDrawer = CidTuple[];

type CashDictionary = Record<CurrencyUnit, number>;

type CashRegisterStatus = 'OPEN' | 'CLOSED' | 'INSUFFICIENT_FUNDS';

type CashRegisterState = {
    status: CashRegisterStatus;
    change: CashInDrawer;
};
```

#### Lib
```typescript
// lib/convert.ts
const convert = {
    toCashInDrawer(dict: CashDictionary): CashInDrawer {
        const cid: CashInDrawer = [];

        for (const entry of Object.entries(dict)) {
            const [key, val] = entry as CidTuple;
            cid.push([key, val]);
        }

        return cid;
    },
    toCashDictionary(cid: CashInDrawer): CashDictionary {
        const dict: CashDictionary = {
            PENNY: 0,
            NICKEL: 0,
            DIME: 0,
            QUARTER: 0,
            ONE: 0,
            FIVE: 0,
            TEN: 0,
            TWENTY: 0,
            'ONE HUNDRED': 0,
        };
        for (const [key, val] of cid) {
            dict[key] = val;
        }

        return dict;
    },
};
```

```typescript
// lib/cdUtils.ts
const cdUtils = {
    isEqual(a: CashDictionary, b: CashDictionary) {
        for (const entry of Object.entries(a)) {
            const key = entry[0] as CurrencyUnit;
            if (a[key] !== b[key]) {
                return false;
            }
        }

        return true;
    },
};
```

```typescript
// lib/currencyDictionary.ts
const currencyDictionary: CashDictionary = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
};
```

#### Main
```typescript
/**
 * Checks cash register (ability to make purchase and how many change should be returned)
 * @param price purchase price
 * @param cash payment
 * @param cid cash-in-drawer
 */
function checkCashRegister(
    price: number,
    cash: number,
    cid: CashInDrawer,
): CashRegisterState {
    let delta = Number(Number(cash - price).toFixed(2));

    if (delta < 0) {
        throw new Error('Error: price is more than given cash!');
    }

    const sortedCid = cid.sort(
        ([cur1], [cur2]) => currencyDictionary[cur2] - currencyDictionary[cur1],
    ); // Sort from higher to lower amount

    const change: CashDictionary = {
        PENNY: 0,
        NICKEL: 0,
        DIME: 0,
        QUARTER: 0,
        ONE: 0,
        FIVE: 0,
        TEN: 0,
        TWENTY: 0,
        'ONE HUNDRED': 0,
    };

    for (const cidEl of sortedCid) {
        const [currenctUnit, amount] = cidEl;

        const unitAmount = currencyDictionary[currenctUnit];
        const unitsToGive = Math.floor(delta / unitAmount);
        const availableUnitsCount = Math.floor(amount / unitAmount);

        if (unitsToGive > 0) {
            let changeInCurrency
                = unitAmount
                * (availableUnitsCount >= unitsToGive
                    ? unitsToGive
                    : availableUnitsCount);
            changeInCurrency = Number(Number(changeInCurrency).toFixed(2));

            change[currenctUnit] += changeInCurrency;

            delta -= changeInCurrency;
            delta = Number(Number(delta).toFixed(2));
        }
    }

    if (delta > 0) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    if (delta < 0) {
        throw new Error('Unexpected error: the change is more than required!');
    }

    const cidDict = convert.toCashDictionary(cid);
    const isEqual = cdUtils.isEqual(change, cidDict);

    if (isEqual) {
        return {status: 'CLOSED', change: convert.toCashInDrawer(change)};
    }

    return {
        status: 'OPEN',
        change: convert.toCashInDrawer(change).filter(([curr, amount]) => amount !== 0).reverse(),
    };
}
```
