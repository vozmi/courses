import {rot13} from '..';

describe('caesarCipher', () => {
    it('converts "SERR PBQR PNZC" to roman "FREE CODE CAMP"', () => {
        expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
    });

    it('converts "SERR CVMMN!" to roman "FREE PIZZA!"', () => {
        expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
    });

    it('converts "SERR YBIR?" to roman "FREE LOVE?"', () => {
        expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
    });

    it('converts "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." to roman "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
        expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
    });
});
