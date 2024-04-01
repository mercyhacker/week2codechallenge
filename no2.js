let randomNumbers = [1, 89, 97, 2, 3, 4, 5, 6, 7, 8, 9, 10, 73, 97];

function generatePrimeNumbers(array){
  let result = []; // empty array
  //the for loop should pass though values of the array
    for( value of array){
      //if the value is divisible by 2 or 3, or the value 2 and 3 but not 1 push it to the result array
      if((value % 2) > 0 && (value % 3) > 0  && value !== 1 || value === 3 || value === 2)
      { 
         result.push(value) 
        }
    }
    return result;
}