#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height = get_int("Height: ");

    // height validation
    while (height < 1 || height > 8)
    {
        height = get_int("Height: ");
    }

    // current level (from height to 1)
    int level;
    for (level = height; level > 0; level--)
    {
        int blocks = (height - level) + 1;

        // print spaces before first pyramid blocks
        for (int spaces = height - blocks; spaces > 0; spaces--)
        {
            printf(" ");
        }

        // print first pyramid blocks
        for (int first_pyramid_blocks = blocks; first_pyramid_blocks > 0; first_pyramid_blocks--)
        {
            printf("#");
        }

        // print gap between pyramids
        printf("  ");

        // print second pyramid blocks
        for (int second_pyramid_blocks = blocks; second_pyramid_blocks > 0; second_pyramid_blocks--)
        {
            printf("#");
        }

        printf("\n");
    }
}
