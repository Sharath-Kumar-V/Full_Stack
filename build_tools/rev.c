#include<stdio.h>
#include<string.h>
reverse()
{
    char mystrg[60];
    int leng, g;

    printf("\nProgram in C for reversing a given string \n ");
    printf("\nPlease insert the string you want to reverse: ");

    scanf( "%s", mystrg );

    leng = strlen(mystrg);

    for(g = leng - 1; g >= 0; g--) {
        printf("%c", mystrg[g]);        
    }
}
