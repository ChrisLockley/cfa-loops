// LOOPS

// 1. create a loop that prints out the numbers 0 - 5 using a while loop

let whileLoop = () => {
    var dig = 0;
    while (dig <= 5) {
        console.log(dig);
        dig += 1;
    }
}
whileLoop();

// 2. create a loop that prints out the numbers 0 - 5 using a for loop

let forLoop = () => {
    for (let num = 0; num <= 5; num += 1) {
        console.log(num);
    }
}
forLoop();

// 3. create a loop that prints out the numbers 0 - 5 using a for loop 
// but for each number return the squared version

let squaredLoop = () => {
    for (let int = 0; int <= 5; int += 1) {
        console.log(int ** 2);
    }
}
squaredLoop();

//4. iterate over the string below and print out each character

let string = "the fox jumps over the moon"; 

let func = (s) => {
    for (let i = 0; i < s.length; i += 1) {
        console.log(s[i]);
    }
}
func(string);

// toy problem

let betterSum = (left, right) => {
    //input: left is an integer that represents the starting point
    //       right is an integer that represents the end point

    //output: an integer that is the sum of all values left to right
    //create a sum variable
    var sum = 0;
    //iterate from left to right
    for (var i = left; i <= right; i += 1) {
        //add left to sum variable
        sum = sum + i;
    }
    //return sum
    return sum;
}
console.log(betterSum(4, 7))


