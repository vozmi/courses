import {reverseString, stripNonAlphaChars} from './lib';

/**
 * Check if string is palindrome
 * @param str input string
 * @returns true if string is palindrome
 */
export function isPalindrome(str: string) {
	const strippedStr = stripNonAlphaChars(str);
	return strippedStr === reverseString(strippedStr);
}
