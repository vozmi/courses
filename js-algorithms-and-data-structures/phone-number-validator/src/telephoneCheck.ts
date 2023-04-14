/**
 * Converts number from
 * @param phoneNumber
 * @returns true if the passed string looks like a valid US phone number, false if don't
 */
export function telephoneCheck(phoneNumber: string): boolean {
    // [1]{1}? - one or zero digits (1 - US phone code)
    // [\s-]? - " " or "-"
    // [(]? - one or zero "("
    // [0-9]{3} - three digits
    // [)]? - one or zero ")"
    // [\s-]? - " " or "-"
    // [0-9]{4} - four digits
    const regex = /^[1]{1}?[\s-]?[(]?[0-9]{3}[)]?[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;

    return regex.test(phoneNumber);
}
