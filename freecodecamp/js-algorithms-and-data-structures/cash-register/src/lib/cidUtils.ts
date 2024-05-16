import {type CashInDrawer} from '../checkCashRegister.types';

export const cidUtils = {
    isEqual(a: CashInDrawer, b: CashInDrawer) {
        for (let i = 0; i < a.length; i++) {
            if (a[i][1] !== b[i][1]) {
                return false;
            }
        }

        return true;
    },
};
