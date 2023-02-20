#include <stdio.h>  
   
biggest() 
{  
    int a, b;  
    printf("Please Enter Two different values\n");  
    scanf("%d %d", &a, &b);  
    
    if(a > b) 
    {
        printf("\n%d is Largest\n\n", a);          
    } 
    else if (b > a)
    { 
        printf("\n%d is Largest\n\n", b);  
    } 
    else 
    {
	printf("\nBoth are Equal\n\n");
    }
   
}
