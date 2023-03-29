type Alphabet = string[];

function decryptCaesarCypher(encrypted: string, indent: number) {
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
            const decryptedCharPos = (encryptedCharPos + indent) % alphabet.length;

            result += alphabet[decryptedCharPos];
        }
    }

    return result;
}

export function rot13(encrypted: string): string {
    return decryptCaesarCypher(encrypted, 13);
}
