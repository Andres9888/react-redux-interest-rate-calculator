/* eslint-disable prettier/prettier */
export const calculateInterest = (principal, interestRate, years) =>
  // Interest Rate is Divided by 100 to get the decimal value
  Number((principal * (1 + (interestRate / 100) * years)).toFixed(0));
