/* eslint-disable @typescript-eslint/naming-convention */
import {type CashInDrawer, type CashDictionary, CurrencyUnit, type CidTuple} from '../checkCashRegister.types';

export const currencyDictionary: CashDictionary = {
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

export const toCashInDrawer = (dict: CashDictionary): CashInDrawer => {
    const cid: CashInDrawer = [];

    for (const entry of Object.entries(dict)) {
        const [key, val] = entry as CidTuple;
        cid.push([key, val]);
    }

    return cid;
};
