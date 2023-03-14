import {stripNonAlphaChars} from '..';

describe('stripNonAlphaChars', () => {
	it('removes spaces', () => {
		expect(stripNonAlphaChars('H e l l o   W o r l d')).toBe('HelloWorld');
	});

	it('removes symbols', () => {
		expect(stripNonAlphaChars('Hello ! @ # $ % ^ & * ( ) - = + ~ ` World')).toBe('HelloWorld');
	});

	it('Do not removes numbers and underlines', () => {
		expect(stripNonAlphaChars('Hello_-_12345_-_World!')).toBe('Hello__12345__World');
	});
});
