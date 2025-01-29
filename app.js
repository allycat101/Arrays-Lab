/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

let foods = ['pizza','cheeseburger'];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:*/
//added 'pizza'and 'cheeseburger above in ex 1 to read const foods = [pizza, cheeseburger


console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift ("tacos");

console.log('Exercise 3 result:', foods);

 /*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let favFood = "pizza" //number 1 in the array


console.log('Exercise 4 result:', favFood);

foods.splice(2, 3, "pizza"); //returns pizza twice b/c we said to repeat 

let removed = foods.splice(2, 1, "pizzarolls"); //it removed the last element of the array and replaced it with a new element


console.log(foods);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

//my array is now 'tacos', 'pizza', 'pizzarolls' adding tofu in spot 2
foods[2] = "tofu"; //adds to the end but we want to keep pizzarolls
foods[3] = "pizzarolls"; //so now array = ['tacos', 'pizza', 'tofu', 'pizzarolls]
console.log('Exercise 5 result:', foods);



/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

//pizza is #1 so to replace with sushi, cupcake
foods[1] = "sushi" //#1 is now sushi
foods[4]= "cupcakes"; 

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
console.log(foods);
foods[0] = 'tacos';
foods[1] = 'sushi';
foods[2] = 'tofu';
foods[3]= 'pizzarolls';
foods[4]= "cupcake";
let yummy = foods.slice(1,2);
yummy = [...yummy, ...foods.slice(4,5)];

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
const soyIdx=foods[1];//just assigning name to the index virable



console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/


let allFoods=foods.join('-->'); //delcaring the function will turn into a string seperated with -->

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/


const hasSoup = foods.includes('hasSoup');// we definded that we want to search for 'has soup/
//the indclude method is looking for 'hasSoup' in the array
console.log('Exercise 10 result:', hasSoup); //spits out false b/c 'hasSoup' is not listed in the array
//if:
const tofu = foods.includes('tofu');
console.log(tofu); //comes back true b/c tofu is incldued in our array

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]; 
//for...of loop
//for (const element of nums) {
   // console.log(nums); //here we create a look to go through the numbers
 // }//this creates our loop that will keep running as long as it meets the below functions
  //the loop runs until it runs through all the odd numbers
  //adding slice so we can copy over only the odd numbers
let odds=nums.slice(1,5); //creating a new array just for the odds
//we are selecting index numbers, 1, 2, 3, 4, 5, 6, 7, 9, 10 to put in our "odd" array
odds = [...odds, ...nums.slice(6,8)]; //slicing only parts of the nums arrays we want to go into our odds arrays

odds = [...odds, ...odds, ...nums.slice(9, 11)];
//for slicing (1,5) will give us the index vaules of 1 thorugh 5 
//same on for the others-the first number is the start of the slice and the second number is the end of the slice




console.log("odds", odds); //made it to where it the array actually reads "odds"
console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/



for (const element of nums) {
    console.log(nums);
  }
  
let fizz=nums.slice(3, 7);
fizz = [...fizz, ...nums.slice(7, 9)];
fizz = [...fizz, ...fizz, ...nums.slice(10,11)];
console.log("fizz", fizz);
//I seperated all the numbers divded by 3 and placed them in thier own array called Fizz
//had to use slice() method b/c they weren't all in a row
for (const element of fizz) {
    console.log(fizz); //will keep looping same numbers over and over
  }
  

let buzz=nums.slice(0,2);
buzz = [...buzz, ...nums.slice(3,4)];
buzz = [...buzz, ...buzz, ...nums.slice(7,8)];
buzz = [...buzz, ...buzz, ...buzz, ...nums.slice(11)];
console.log("buzz", buzz);
for (const element of buzz) {
    console.log(buzz);
  } //will keep looking numbers

let fizzBuzz=nums.slice(3,4);
fizzBuzz = [...fizzBuzz, ...nums.slice(7,8)];
fizzBuzz = [...fizzBuzz, ...fizzBuzz, ...nums.slice(11)];
console.log("fizzBuzz", fizzBuzz);
for (const element of fizzBuzz) {
    console.log(fizzBuzz); //added loop to each function since differnt function name
  }
  
  

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzBuzz:', fizzBuzz);


/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

let numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90] 
]; 

console.log(fizzBuzz); //our last array in the above example

//which was 15, 45, 90
let numList = [15, 45, 90]; //changing fizzBuzz to numList, new name but same values
console.log(numList); 
//from above:
//Assume you don't know how many nested arrays `numArrays` contains.
//need to find the value of the elements inside the array
console.log(numList.length); //console will tell us 3
console.log('Exercise 13 result:', numList);
//shows the 3 nested elements inside the one big arrray

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

//want to locate the locatioin of "66"

console.log(numArrays[0]); //calling the array but saying array isn't defined

console.log('Exercise 14 result:', numArrays[2][1]); 

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/
//want to create the loop for the array:
let total = 0

numArrays.forEach((numA, numB) => {
    numA.forEach((element) => total+= element);
    
    console.log(numA, numB)})//we want it to pull the elements which are numbers and want to add them
    //console.log(numaA + numB); //add the numbers

  

console.log('Exercise 15 result:', total); //still saying not defined
