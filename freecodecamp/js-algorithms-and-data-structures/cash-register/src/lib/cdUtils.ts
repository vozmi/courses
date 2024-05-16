import {type CurrencyUnit, type CashDictionary} from '../checkCashRegister.types';

export const cdUtils = {
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
