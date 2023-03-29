import {stripNonAlphaChars} from '..';

describe('stripNonAlphaChars', () => {
    it('removes spaces', () => {
        expect(stripNonAlphaChars('H e l l o   W o r l d')).toBe('HelloWorld');
        expect(stripNonAlphaChars('test string with 5 words')).toBe('teststringwith5words');
    });

    it('removes symbols', () => {
        expect(stripNonAlphaChars('Hello ! @ # $ % ^ & * ( ) - = + ~ ` World')).toBe('HelloWorld');
        expect(stripNonAlphaChars('2_A3*3#A2')).toBe('2A33A2');
    });
});
