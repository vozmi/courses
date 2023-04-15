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

type CashInDrawer = Array<[CurrencyUnit, number]>;

/* eslint-disable @typescript-eslint/naming-convention */
type CashDictionary = Record<CurrencyUnit, number>;

const cashDictionary: CashDictionary = {
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
/* eslint-enable @typescript-eslint/naming-convention */

type CashRegisterStatus = 'OPEN' | 'CLOSED' | 'INSUFFICIENT_FUNDS';

type CashRegisterState = {
    status: CashRegisterStatus;
    change: CashInDrawer;
};

/**
 * Checks cash register (ability to make purchase and how many change should be returned)
 * @param price purchase price
 * @param cash payment
 * @param cid cash-in-drawer
 */
export function checkCashRegister(price: number, cash: number, cid: CashInDrawer): CashRegisterState {
    throw 'Not implemented!';
}
