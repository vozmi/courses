# Palindrome Checker

## Requirements
Return `true` if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**: You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others.

We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.

## Implementation

### Steps to check if string is palindrome:
1. Remove non alphabetical characters
2. Reverse the input string
3. Convert both input and reversed strings to the same case (lower / upper)
4. Check if strings are equal

### Implementation with JS functions

#### Utility functions
```typescript
/**
 * Reverses a string
 * @param str input string
 * @returns reversed string
 */
function reverseString(str: string) {
    return str
        .split('') // Create array of chars
        .reverse() // Reverse array of chars
        .join(''); // Join reversed array to string
}
```

```typescript
/**
 * Stripes non alphabetical characters from string
 * @param str input string
 * @returns string without non alphabetical characters (punctuation, spaces and symbols)
 */
function stripNonAlphaChars(str: string) {
    const pattern = /[^A-Za-z0-9]/g;
    return str.replace(pattern, '');
}
```

#### Main function
```typescript
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

```
