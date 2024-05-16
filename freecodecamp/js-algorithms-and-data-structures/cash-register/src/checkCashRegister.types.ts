export type CurrencyUnit =
    | 'PENNY'
    | 'NICKEL'
    | 'DIME'
    | 'QUARTER'
    | 'ONE'
    | 'FIVE'
    | 'TEN'
    | 'TWENTY'
    | 'ONE HUNDRED';

export type CidTuple = [CurrencyUnit, number];

export type CashInDrawer = CidTuple[];

export type CashDictionary = Record<CurrencyUnit, number>;

export type CashRegisterStatus = 'OPEN' | 'CLOSED' | 'INSUFFICIENT_FUNDS';

export type CashRegisterState = {
    status: CashRegisterStatus;
    change: CashInDrawer;
};
