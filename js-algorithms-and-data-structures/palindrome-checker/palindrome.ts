/**
 * Reverses a string
 * @param str input string
 * @returns reversed string
 */
function reverseString(str: string) {
	return str
		.split('') // Create array of chars
		.reverse() // Reverse array of chars
		.join(''); // Join reversed array
}

/**
 * Check if string is palindrome
 * @param str input string
 * @returns true if string is palindrome
 */
export function isPalindrome(str: string): boolean {
	return str === reverseString(str);
}
