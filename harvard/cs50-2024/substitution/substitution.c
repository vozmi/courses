#include <cs50.h>
#include <ctype.h>
#include <stdio.h>

int string_length(string str);

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }

    string key = argv[1];
    int key_length = string_length(key);

    if (key_length != 26)
    {
        printf("Key must contain 26 characters!\n");
        return 1;
    }

    // Track used chars
    bool usedchars[26];
    for (int i = 0; i < 26; i++)
    {
        usedchars[i] = false;
    }

    for (int i = 0; i < key_length; i++)
    {
        char lower_key_char = tolower(key[i]);

        if (!(lower_key_char >= 'a' && lower_key_char <= 'z'))
        {
            printf("Key must not contain symbols!\n");
            return 1;
        }

        int index = (int) lower_key_char - (int) 'a';

        if (usedchars[index] == true)
        {
            printf("Each character in key must be unique!\n");
            return 1;
        }

        key[i] = lower_key_char;
        usedchars[index] = true;
    }

    string text = get_string("plaintext:  ");
    for (int i = 0, n = string_length(text); i < n; i++)
    {
        char plain_char = tolower(text[i]);

        if (plain_char >= 'a' && plain_char <= 'z')
        {
            char cipher_char = key[(int) plain_char - 'a'];

            // revert to original case if needed
            if (plain_char != text[i])
            {
                cipher_char = toupper(cipher_char);
            }

            text[i] = cipher_char;
        }
    }

    printf("ciphertext: %s\n", text);
    return 0;
}

int string_length(string str)
{
    int n = 0;
    while (str[n] != '\0')
    {
        n++;
    }
    return n;
}
