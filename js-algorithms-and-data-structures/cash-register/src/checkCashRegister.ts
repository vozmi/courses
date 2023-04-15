type CashInDrawer = Array<[string, number]>;

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
