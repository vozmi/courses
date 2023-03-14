import {reverseString, stripNonAlphaChars} from './lib';

/**
 * Check if string is palindrome
 * @param str input string
 * @returns true if string is palindrome
 */
export function isPalindrome(str: string) {
	str = str.toLowerCase();

	const strippedStr = stripNonAlphaChars(str);

	const isPalindrome = strippedStr === reverseString(strippedStr);

	return isPalindrome;
}
