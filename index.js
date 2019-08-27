
//Question 1

//Part One:
//Answer: O(1) 

//Part Two:
//Answer: O(n) because run time is directly porportional to size (n)

//Question 2

function isEven(value) {
  if (value % 2 == 0) {
      return true;
  }
  else
      return false;
  }
}

//Answer: O(1) because no matter size of input value 
//the algorithm will take the same amout of time to complete

//Question 3
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//Answer: O(n^k) because it is a nested loop 
//where it requries 2 levels of looping over input

// Question 4
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//Answer: O(n) because run time is directly porportional to size (n), 
//larger array will take longer

//Question 5
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//Answer: O(n) because run time is directly porportional to size (n), 
//larger array will take longer

// Question 6
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

//Answer: O(n^k) because it is a nested loop 
//where it requries 2 levels of looping over input


//Question 7
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i == 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}



//input 5

// i === 1 => result[0]
// i === 2 => result [0, 1]
// i === 3 => result [1] (1) + result [0] (0) => result [0, 1, 1]
// i === 4 => result [2] (1) + result [1] (1) => result [0, 1, 1, 2]
// i === 5 => result [3] (2) + result [2] (1) => result [0, 1, 1, 2, 3]

//Answer: This algorithm produces a fibonnaci sequence where it generates 
//a sequence where the number is the sum of the previous two
//Runtime complexitiy: O(n)
//because run time is directly porportional to size (n), 
//larger num will take longer than a smaller num

//Question 8

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

//Answer: This problem finds the matching item by finding the middle of the array and then comparing the number to the input.
// If the input is greater than the middle, then it will ignore numbers to the left of the middle
//and if the input is less than the middle it will ignore numbers that are to the right of the middle
//this logic will continue until it finds the input as the middle number
//Runtime Complexity: O(log(n))
//larger the input, the longer time it takes but because the problem size is cut in half each round, running time increases slowly

//Question 9
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//finding a number in an array by mulitplying array length with random number between 0-1
//Runtime Complexity: O(1)
//no matter lenght of array input,  the algorithm will take the same amount of time to complete. 

//Question 10
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}
//check if n is divisible by i
//Runtime complexitiy: O(n)
//because run time is directly porportional to size (n), 
//larger n will take longer than a smaller 