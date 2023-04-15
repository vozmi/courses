import {type CashDictionary, type CashInDrawer, type CidTuple} from '../checkCashRegister.types';

export const convert = {
    toCashInDrawer(dict: CashDictionary): CashInDrawer {
        const cid: CashInDrawer = [];

        for (const entry of Object.entries(dict)) {
            const [key, val] = entry as CidTuple;
            cid.push([key, val]);
        }

        return cid;
    },
};
