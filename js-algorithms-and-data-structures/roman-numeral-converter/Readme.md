# Roman Numeral Converter

## Requirements
Convert the given number into a roman numeral.

| Roman numerals | Arabic numerals |
| ---   | ---       |
| M     |   1000    |
| CM    |   900     |
| D     |   500     |
| CD    |   400     |
| C     |   100     |
| XC    |   90      |
| L     |   50      |
| XL    |   40      |
| X     |   10      |
| IX    |   9       |
| V     |   5       |
| IV    |   4       |
| I     |   1       |

All roman numerals answers should be provided in upper-case.

### Implementation

```typescript
/**
 * Converts number from
 * @param num input number (i.e. 59)
 * @returns Roman number string (i.e. "LIX" )
 */
export function convertToRoman(num: number): string {
    /* #region init variables */
    let res = "";

    /* eslint-disable @typescript-eslint/naming-convention */
    const romanNumDict = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    };
    /* eslint-enable @typescript-eslint/naming-convention */
    /* #endregion */

    /* #region add thousands */
    const thousandsCount = Math.floor(num / 1000);

    res += romanNumDict[1000].repeat(thousandsCount);

    num %= 1000;
    /* #endregion */

    /* #region add hundreds */
    let hundredsCount = Math.floor(num / 100);

    switch (hundredsCount) {
        case 9:
            res += romanNumDict[900];
            break;
        case 4:
            res += romanNumDict[400];
            break;
        default:
            res += romanNumDict[500].repeat(hundredsCount / 5);
            hundredsCount %= 5;
            res += romanNumDict[100].repeat(hundredsCount);
    }

    num %= 100;
    /* #endregion */

    /* #region add tens */
    let tensCount = Math.floor(num / 10);

    switch (tensCount) {
        case 9:
            res += romanNumDict[90];
            break;
        case 4:
            res += romanNumDict[40];
            break;
        default:
            res += romanNumDict[50].repeat(tensCount / 5);
            tensCount %= 5;
            res += romanNumDict[10].repeat(tensCount);
    }

    num %= 10;
    /* #endregion */

    /* #region add ones */
    let onesCount = num;

    switch (onesCount) {
        case 9:
            res += romanNumDict[9];
            break;
        case 4:
            res += romanNumDict[4];
            break;
        default:
            res += romanNumDict[5].repeat(onesCount / 5);
            onesCount %= 5;
            res += romanNumDict[1].repeat(onesCount);
    }
    /* #endregion */

    return res;
}

```
