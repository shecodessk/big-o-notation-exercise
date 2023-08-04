animals = ['alligator', 'bear', 'cat', 'dog', 'elephant', 'fish', 'goose', 'hamster', 'iguana', 'jaguar', 'kangaroo'];
console.log(animals.length) // 11

function countAnimals(animals) {
  let count = 0;
  for (let i = 0 ; i < animals.length ; i++) {
    count++;
  }
  return count;
}
// Count how many animals are in the list // response: 11
// Time complexity: O(?) //response: This function will execute count++ 11 times. This means is a linear growth with 0(n) time complexity.
// Space complexity: O(?): It's a constant space complexity 0(1) because count stays constant no matter how big/small animals.length is, the memory required to store the result stays same.



function countAnimals2(animals) {
  return animals.length;
}


// Count how many animals are in the list //response: 11
// Time complexity: O(?) //response: It's a constant time complexity 0(1): This function will iterate through each value in the animals array to count the total number of elements the array has. No matter the size, it will take the same amount of time to get the length of the array.
// Space complexity: O(?) This function has a 0(1) it will return one answer no matter how big or small it stays constant in memory.
// Print the first 10 animals in the list
console.log(`animal: `+ animals[0])
console.log(`animal: `+ animals[1])
console.log(`animal: `+ animals[2])
console.log(`animal: `+ animals[3])
console.log(`animal: `+ animals[4])
console.log(`animal: `+ animals[5])
console.log(`animal: `+ animals[6])
console.log(`animal: `+ animals[7])
console.log(`animal: `+ animals[8])
console.log(`animal: `+ animals[9])

// Time complexity: O(?) //response: We will execute console.log(animals[i]) 10 times outside of the function. Because of this we will have a 0(1) + 10 and Big O notation does not pay attention to anything we log out outside our function input.
// Space complexity: O(?) //response: this is outside our function, and we are not adding extra space, we are not creating anything inside our function when consoling.

function printTenAnimals(animals) {
  if (animals.length < 10) {
    throw Error("not enough animals")
  }

  console.log(animals[0]);
  console.log(animals[1]);
  console.log(animals[2]);
  console.log(animals[3]);
  console.log(animals[4]);
  console.log(animals[5]);
  console.log(animals[6]);
  console.log(animals[7]);
  console.log(animals[8]);
  console.log(animals[9]);
}

// Print out all the animals 
printTenAnimals(animals)
// Time complexity: O(?) This would be a constant time complexity. No matter n gets bigger, it will print 10 animals 0(1) + 10.
// Space complexity: O(?) This would be a constant space complexity. No matter n gets bigger, it will not store anything.

function printAnimals(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
}

// Print out all the animals twice
 printAnimals(animals)
 printAnimals(animals)
 
// Time complexity: O(?) This would be 0(n) linear because we are executing the code 2 times but with the same n value, and big O notation does not take co-efficient into consideration
// Space complexity: O(?) This would be a constant space complexity. We are storing the same n number of animals 
function printAnimalsTwice(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
  for (let j = 0 ; j < animals.length ; j++) {
    console.log(animals[j]);
  }
}

// Print all possible pairs of animals

// Time complexity: O(?) Stays linear O(n + n) => O(2n) => O(n). We omit any co-efficient. 
// Space complexity: O(?) Stays constant. we are not storing anything. 0(1)

function printAnimalPairs(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(?) We are using nested loops where O(n ^2), this would be a quadratic time complexity where code will be executed n times for the first loop, and n times for each other loop value.
// Space complexity: O(?) space complexity will O(n^2)
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      pairs.push([animals[i], animals[j]]);
    }
  }
  return pairs;
}


// Return an array containing all possible pairs of animals
// Time complexity: O(?) 0(n^3)
// Space complexity: O(?) O(n^3) space required.
function getAnimalTriples(animals) {
  const triples = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      for (let k = 0 ; k < animals.length ; k++) {
        triples.push([animals[i], animals[j], animals[k]]);
      }
    }
  }
  return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(?) this algorithm performs differently based on how long it takes to find the match.
// Space complexity: O(?) space remains constant as it will return only animal[i] that matches the target. or -1 if it doesn't
function findAnimal(animals, target) {
  for (let i = 0 ; i < animals.length ; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}