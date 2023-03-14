import {reverseString} from '..';

describe('reverseString', () => {
	it('reverses a string', () => {
		expect(reverseString('abcde')).toBe('edcba');
	});

	it('reverses a string with spaces', () => {
		expect(reverseString('abc def GHI')).toBe('IHG fed cba');
	});

	it('reverses a string with symbols', () => {
		expect(reverseString('abc $#!def!#$ GHI')).toBe('IHG $#!fed!#$ cba');
	});
});
