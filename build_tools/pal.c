#include <stdio.h>
palindrome()
 {
  int n, reversed = 0, remainder, original;
    printf("\n Enter an integer: ");
    scanf("%d", &n);
    original = n;

    while (n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }

    if (original == reversed)
        printf("\n %d is a palindrome.\n", original);
    else
        printf("\n %d is not a palindrome.\n", original);

}
