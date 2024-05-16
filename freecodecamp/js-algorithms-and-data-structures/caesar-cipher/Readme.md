# Caesar Cipher

## Requirements
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/) cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a [ROT13](https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

### Implementation
```typescript
type Alphabet = string[];

/**
 * Decrypts string encrypted with caeser cypher
 * @param encrypted encrypted string
 * @param shift number of letters to shift
 * @returns
 */
function decryptCaesarCypher(encrypted: string, shift: number) {
    const alphabetUpper: Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alphabetLower: Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let result = '';

    for (const c of encrypted) {
        let isUpper = false;

        if (c.toUpperCase() === c) {
            isUpper = true;
        }

        const alphabet: Alphabet = isUpper ? alphabetUpper : alphabetLower;

        const encryptedCharPos = alphabet.findIndex(x => x === c);

        if (encryptedCharPos === -1) {
            result += c; // Not character (i.e. number, symbol, e.t.c.)
        } else {
            const decryptedCharPos = (encryptedCharPos + shift) % alphabet.length;

            result += alphabet[decryptedCharPos];
        }
    }

    return result;
}

export function rot13(encrypted: string): string {
    return decryptCaesarCypher(encrypted, 13);
}
```
