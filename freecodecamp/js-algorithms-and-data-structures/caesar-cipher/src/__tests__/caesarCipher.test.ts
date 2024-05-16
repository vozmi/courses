import {rot13} from '..';

describe('caesarCipher', () => {
    it('converts "SERR PBQR PNZC" to roman "FREE CODE CAMP"', () => {
        expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
        expect(rot13('Serr pbqr pnzc')).toBe('Free code camp');
    });

    it('converts "SERR CVMMN!" to roman "FREE PIZZA!"', () => {
        expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
        expect(rot13('Serr cvmmn!')).toBe('Free pizza!');
    });

    it('converts "SERR YBIR?" to roman "FREE LOVE?"', () => {
        expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
        expect(rot13('Serr ybir?')).toBe('Free love?');
    });

    it('converts "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." to roman "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
        expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
        expect(rot13('Gur dhvpx oebja sbk whzcf bire gur ynml qbt.')).toBe('The quick brown fox jumps over the lazy dog.');
    });
});
