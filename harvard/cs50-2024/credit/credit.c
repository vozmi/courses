#include <cs50.h>
#include <math.h>
#include <stdio.h>

bool isChecksumValid(long card_number);
bool isAmericanExpress(int card_length, int first_digit, int second_digit);
bool isVisa(int card_length, int first_digit);
bool isMastercard(int card_length, int first_digit, int second_digith);

int main(void)
{
    long card_number = get_long("Enter card number: ");

    if (!isChecksumValid(card_number))
    {
        printf("INVALID\n");
        return 0;
    }

    // card meta
    int card_length = floor(log10(card_number)) + 1;
    int first_digit = floor(card_number / pow(10, card_length - 1));
    int second_digit = (int) (card_number / pow(10, card_length - 2)) % 10;

    // validate digits and get card name
    if (isAmericanExpress(card_length, first_digit, second_digit))
    {
        printf("AMEX\n");
        return 0;
    }

    if (isMastercard(card_length, first_digit, second_digit))
    {
        printf("MASTERCARD\n");
        return 0;
    }

    if (isVisa(card_length, first_digit))
    {
        printf("VISA\n");
        return 0;
    }

    printf("INVALID\n");
}

bool isChecksumValid(long card_number)
{
    int doubled_d1_sum = 0;
    int d2_sum = 0;

    // goes through card_number tuples (for 12345678 tuples are 12, 34, 56, 78)
    for (long num = card_number; num > 0; num = (long) floor(num / 100))
    {
        // for tuple 78 d1=7, d2=8
        int d1 = (int) (num % 100 / 10);
        int d2 = num % 10;

        d2_sum += d2;

        int doubled_d1 = d1 * 2;
        if (doubled_d1 > 9)
        {
            doubled_d1_sum += 1 + (doubled_d1 % 10);
        }
        else
        {
            doubled_d1_sum += doubled_d1;
        }
    }

    if ((doubled_d1_sum + d2_sum) % 10 == 0)
    {
        return true;
    }

    return false;
}

bool isAmericanExpress(int card_length, int first_digit, int second_digit)
{
    if (card_length != 15)
    {
        return false;
    }

    if (first_digit != 3)
    {
        return false;
    }

    if (!(second_digit == 4 || second_digit == 7))
    {
        return false;
    }

    return true;
}

bool isMastercard(int card_length, int first_digit, int second_digit)
{
    if (card_length != 16)
    {
        return false;
    }

    if (first_digit != 5)
    {
        return false;
    }

    if (!(second_digit == 1 || second_digit == 2 || second_digit == 3 || second_digit == 4 || second_digit == 5))
    {
        return false;
    }

    return true;
}

bool isVisa(int card_length, int first_digit)
{
    if (!(card_length == 13 | card_length == 16))
    {
        return false;
    }

    if (first_digit != 4)
    {
        return false;
    }

    return true;
}
