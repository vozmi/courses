import {isPalindrome} from '../palindrome';

describe('isPalindrome', () => {
	it('Correctly checks plain palindromes', () => {
		expect(isPalindrome('eye')).toBeTruthy();
		expect(isPalindrome('racecar')).toBeTruthy();
	});

	it('Correctly checks camelCase palindromes', () => {
		expect(isPalindrome('RaceCar')).toBeTruthy();
	});

	it('Correctly checks palindromes with spaces and characters', () => {
		expect(isPalindrome('race CAR')).toBeTruthy();
		expect(isPalindrome('2A3*3a2')).toBeTruthy();
		expect(isPalindrome('2A3 3a2')).toBeTruthy();
		expect(isPalindrome('2_A3*3#A2')).toBeTruthy();
	});
});
