#include <stdio.h>
sum() {    

    int number1, number2, sum;
    
    printf("Enter two integers:\n ");
    scanf("%d %d", &number1, &number2);

    sum = number1 + number2;      
    
    printf("%d + %d = %d", number1, number2, sum);
}

