/* eslint-disable @typescript-eslint/naming-convention */
import {
    type CashRegisterState,
    type CashDictionary,
    type CashInDrawer,
} from './checkCashRegister.types';
import {currencyDictionary, toCashInDrawer} from './lib/currencyDictionary';

/**
 * Checks cash register (ability to make purchase and how many change should be returned)
 * @param price purchase price
 * @param cash payment
 * @param cid cash-in-drawer
 */
export function checkCashRegister(
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
        let [currenctUnit, amount] = cidEl;

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

            console.log(`sortedCid before amount ${currenctUnit} amount -= ${changeInCurrency}`, sortedCid);
            amount -= changeInCurrency;
            console.log(`sortedCid after amount ${currenctUnit} amount -= ${changeInCurrency}`, sortedCid);

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

    // Console.log('change', change);
    // console.log('sortedCid', sortedCid);

    if (sortedCid.every(([_, amount]) => amount === 0)) {
        return {status: 'CLOSED', change: toCashInDrawer(change).reverse()};
    }

    return {
        status: 'OPEN',
        change: toCashInDrawer(change)
            .filter(([curr, amount]) => amount !== 0)
            .reverse(),
    };
}
