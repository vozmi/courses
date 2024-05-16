import {convertToRoman} from '..';

describe('convertToRoman', () => {
    it('converts 2 to roman II', () => {
        expect(convertToRoman(2)).toBe('II');
    });

    it('converts 3 to roman III', () => {
        expect(convertToRoman(3)).toBe('III');
    });

    it('converts 4 to roman IV', () => {
        expect(convertToRoman(4)).toBe('IV');
    });

    it('converts 5 to roman V', () => {
        expect(convertToRoman(5)).toBe('V');
    });

    it('converts 9 to roman IX', () => {
        expect(convertToRoman(9)).toBe('IX');
    });

    it('converts 12 to roman XII', () => {
        expect(convertToRoman(12)).toBe('XII');
    });

    it('converts 16 to roman XVI', () => {
        expect(convertToRoman(16)).toBe('XVI');
    });

    it('converts 29 to roman XXIX', () => {
        expect(convertToRoman(29)).toBe('XXIX');
    });

    it('converts 44 to roman XLIV', () => {
        expect(convertToRoman(44)).toBe('XLIV');
    });

    it('converts 45 to roman XLV', () => {
        expect(convertToRoman(45)).toBe('XLV');
    });

    it('converts 68 to roman LXVIII', () => {
        expect(convertToRoman(68)).toBe('LXVIII');
    });

    it('converts 83 to roman LXXXIII', () => {
        expect(convertToRoman(83)).toBe('LXXXIII');
    });

    it('converts 97 to roman XCVII', () => {
        expect(convertToRoman(97)).toBe('XCVII');
    });

    it('converts 99 to roman XCIX', () => {
        expect(convertToRoman(99)).toBe('XCIX');
    });

    it('converts 400 to roman CD', () => {
        expect(convertToRoman(400)).toBe('CD');
    });

    it('converts 500 to roman D', () => {
        expect(convertToRoman(500)).toBe('D');
    });

    it('converts 501 to roman DI', () => {
        expect(convertToRoman(501)).toBe('DI');
    });

    it('converts 649 to roman DCXLIX', () => {
        expect(convertToRoman(649)).toBe('DCXLIX');
    });

    it('converts 798 to roman DCCXCVIII', () => {
        expect(convertToRoman(798)).toBe('DCCXCVIII');
    });

    it('converts 891 to roman DCCCXCI', () => {
        expect(convertToRoman(891)).toBe('DCCCXCI');
    });

    it('converts 1000 to roman M', () => {
        expect(convertToRoman(1000)).toBe('M');
    });

    it('converts 1004 to roman MIV', () => {
        expect(convertToRoman(1004)).toBe('MIV');
    });

    it('converts 1006 to roman MVI', () => {
        expect(convertToRoman(1006)).toBe('MVI');
    });

    it('converts 1023 to roman MXXIII', () => {
        expect(convertToRoman(1023)).toBe('MXXIII');
    });

    it('converts 2014 to roman MMXIV', () => {
        expect(convertToRoman(2014)).toBe('MMXIV');
    });

    it('converts 3999 to roman MMMCMXCIX', () => {
        expect(convertToRoman(3999)).toBe('MMMCMXCIX');
    });
});
