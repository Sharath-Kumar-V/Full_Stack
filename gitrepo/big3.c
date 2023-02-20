#include <stdio.h>

big()
{
	int A, B, C;

	printf("\nEnter the numbers A, B and C: ");
	scanf("%d %d %d", &A, &B, &C);

	if (A >= B && A >= C)
		printf("\n%d is the largest number.", A);

	if (B >= A && B >= C)
		printf("\n%d is the largest number.", B);

	if (C >= A && C >= B)
		printf("\n%d is the largest number.", C);

}

