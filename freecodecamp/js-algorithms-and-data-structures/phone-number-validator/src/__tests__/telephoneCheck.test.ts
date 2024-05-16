import {telephoneCheck} from '..';

describe('telephoneCheck', () => {
    it('"1 555-555-5555" is valid', () => {
        expect(telephoneCheck('1 555-555-5555')).toBeTruthy();
    });

    it('"1 (555) 555-5555" is valid', () => {
        expect(telephoneCheck('1 (555) 555-5555')).toBeTruthy();
    });

    it('"5555555555" is valid', () => {
        expect(telephoneCheck('5555555555')).toBeTruthy();
    });

    it('"555-555-5555" is valid', () => {
        expect(telephoneCheck('555-555-5555')).toBeTruthy();
    });

    it('"(555)555-5555" is valid', () => {
        expect(telephoneCheck('(555)555-5555')).toBeTruthy();
    });

    it('"1(555)555-5555" is valid', () => {
        expect(telephoneCheck('1(555)555-5555')).toBeTruthy();
    });

    it('"555-5555" is not valid', () => {
        expect(telephoneCheck('555-5555')).toBeFalsy();
    });

    it('"5555555" is not valid', () => {
        expect(telephoneCheck('5555555')).toBeFalsy();
    });

    it('"1 555)555-5555" is not valid', () => {
        expect(telephoneCheck('1 555)555-5555')).toBeFalsy();
    });

    it('"1 555 555 5555" is valid', () => {
        expect(telephoneCheck('1 555 555 5555')).toBeTruthy();
    });

    it('"1 456 789 4444" is valid', () => {
        expect(telephoneCheck('1 456 789 4444')).toBeTruthy();
    });

    it('"123**&!!asdf#" is not valid', () => {
        expect(telephoneCheck('123**&!!asdf#')).toBeFalsy();
    });

    it('"55555555" is not valid', () => {
        expect(telephoneCheck('55555555')).toBeFalsy();
    });

    it('"(6054756961)" is not valid', () => {
        expect(telephoneCheck('(6054756961)')).toBeFalsy();
    });

    it('"2 (757) 622-7382" is not valid', () => {
        expect(telephoneCheck('2 (757) 622-7382')).toBeFalsy();
    });

    it('"0 (757) 622-7382" is not valid', () => {
        expect(telephoneCheck('0 (757) 622-7382')).toBeFalsy();
    });

    it('"-1 (757) 622-7382" is not valid', () => {
        expect(telephoneCheck('-1 (757) 622-7382')).toBeFalsy();
    });

    it('"2 757 622-7382" is not valid', () => {
        expect(telephoneCheck('2 757 622-7382')).toBeFalsy();
    });

    it('"10 (757) 622-7382" is not valid', () => {
        expect(telephoneCheck('10 (757) 622-7382')).toBeFalsy();
    });

    it('"27576227382" is not valid', () => {
        expect(telephoneCheck('27576227382')).toBeFalsy();
    });

    it('"(275)76227382" is not valid', () => {
        expect(telephoneCheck('(275)76227382')).toBeFalsy();
    });

    it('"2(757)6227382" is not valid', () => {
        expect(telephoneCheck('2(757)6227382')).toBeFalsy();
    });

    it('"2(757)622-7382" is not valid', () => {
        expect(telephoneCheck('2(757)622-7382')).toBeFalsy();
    });

    it('"555)-555-5555" is not valid', () => {
        expect(telephoneCheck('555)-555-5555')).toBeFalsy();
    });

    it('"(555-555-5555" is not valid', () => {
        expect(telephoneCheck('(555-555-5555')).toBeFalsy();
    });

    it('"(555)5(55?)-5555" is not valid', () => {
        expect(telephoneCheck('(555)5(55?)-5555')).toBeFalsy();
    });

    it('"55 55-55-555-5" is not valid', () => {
        expect(telephoneCheck('55 55-55-555-5')).toBeFalsy();
    });

    it('"11 555-555-5555" is not valid', () => {
        expect(telephoneCheck('11 555-555-5555')).toBeFalsy();
    });
});
