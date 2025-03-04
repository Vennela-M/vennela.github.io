#include <stdio.h>

int main() {
    int totalClasses, attendedClasses, futureClasses;
    float currentPercentage, futurePercentage;

    printf("Enter the total number of classes conducted so far: ");
    scanf("%d", &totalClasses);

    printf("Enter the total number of classes you have attended: ");
    scanf("%d", &attendedClasses);

    currentPercentage = (attendedClasses * 100.0) / totalClasses;
    printf("\nYour current attendance percentage is: %.2f%%\n", currentPercentage);

    if (currentPercentage < 75) {
        printf("Your attendance is below 75%%. You need to attend more classes to avoid condonation.\n");
    } else {
        printf("Your attendance is sufficient. Keep it up!\n");
    }

    printf("\nEnter the number of future classes you plan to attend: ");
    scanf("%d", &futureClasses);

    int totalFutureClasses = totalClasses + futureClasses;
    int futureAttendedClasses = attendedClasses + futureClasses;

    futurePercentage = (futureAttendedClasses * 100.0) / totalFutureClasses;

    printf("If you attend %d more classes, your attendance percentage will be: %.2f%%\n", 
           futureClasses, futurePercentage);

    return 0;
}
