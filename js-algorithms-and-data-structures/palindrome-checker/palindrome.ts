import {reverseString} from './lib';

/**
 * Check if string is palindrome
 * @param str input string
 * @returns true if string is palindrome
 */
export function isPalindrome(str: string): boolean {
	return str === reverseString(str);
}
