
/* eslint-disable @typescript-eslint/naming-convention */
import {type CashRegisterState, type CashDictionary, type CashInDrawer} from './checkCashRegister.types';
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
    let delta = cash - price;

    if (delta < 0) {
        throw new Error('Error: price is more than given cash!');
    }

    const sortedCid = cid.sort(([cur1, am1], [cur2, am2]) => am2 - am1); // Sort from higher to lower amount

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
        const availableUnitsCount = amount / unitAmount;

        if (unitsToGive > 0) {
            const changeInCurrency = unitAmount * (availableUnitsCount >= unitsToGive ? unitsToGive : availableUnitsCount);

            amount -= changeInCurrency;

            change[currenctUnit] += changeInCurrency;

            delta -= changeInCurrency;
        }
    }

    if (delta > 0) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    if (delta < 0) {
        throw new Error('Unexpected error: the change is more than required!');
    }

    if (sortedCid.every(([_, amount]) => amount === 0)) {
        return {status: 'CLOSED', change: toCashInDrawer(change)};
    }

    return {status: 'OPEN', change: toCashInDrawer(change).filter(([curr, amount]) => amount !== 0)};
}
