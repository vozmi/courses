/**
 * Reverses a string
 * @param str input string
 * @returns reversed string
 */
export function reverseString(str: string): string {
	return str
		.split('') // Create array of chars
		.reverse() // Reverse array of chars
		.join(''); // Join reversed array
}
