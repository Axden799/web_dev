#include <stdio.h>
#include <stdlib.h>

double add(double num1, double num2);

double subtract(double num1, double num2);

double multiply(double num1, double num2);

double divide(double num1, double num2);

int main() {

    double num1;
    double num2;
    char operation;

    printf("Enter the first number: ");
    scanf("%lf", &num1);

    printf("Enter the second number: ");
    scanf("%lf", &num2);


    // want a space before %c to discard spaces, tabs, newlines
    printf("Enter the operation character: ");
    scanf(" %c", &operation);

    double result;

    if (operation == '+') {
       result = add(num1, num2);
       printf("Answer: %lf", result);
    } else if (operation == '-') {
        result = subtract(num1, num2);
        printf("Answer: %lf", result);
    } else if (operation == '*') {
        result = multiply(num1, num2);
        printf("Answer: %lf", result);
    } else if (operation == '/') {
        result = divide(num1, num2);
        printf("Answer: %lf", result);
    } else {
        printf("Invalid Operator\n");
    }

    return 0;

}

double add(double num1, double num2) {
    return num1 + num2;
}

double subtract(double num1, double num2) {
    return num1 - num2;
}

double multiply(double num1, double num2) {
    return num1 * num2;
}

double divide(double num1, double num2) {
    return num1 / num2;
}