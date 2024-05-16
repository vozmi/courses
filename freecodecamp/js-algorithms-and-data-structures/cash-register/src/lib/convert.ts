/* eslint-disable @typescript-eslint/naming-convention */
import {
    type CashDictionary,
    type CashInDrawer,
    type CidTuple,
} from '../checkCashRegister.types';

export const convert = {
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
