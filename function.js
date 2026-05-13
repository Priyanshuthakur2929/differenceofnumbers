/*function greet(priyanshu){
    console.log("Namastae",  priyanshu);
}
greet("priyanshu");*///// Function call


// Function callback

/*function eat(callback){
    console.log("Ram eats mango",callback);
}
function feed(ram,callback){
    console.log("Ram is eating");
    callback(ram);
}
feed("mango", eat);*/

// addition of two numbers
/*function sum(a,b){
    console.log("The sum of two numbers is", a+b);
}
sum(5,6);*/


/*function reversestring(str){
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log("Reversed string:", reversestring("priyanshu"));*/

/// Factorial of a number
/*function factorial(n){
    if(n==0 || n==1){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

console.log("Factorial of 9 is:", factorial(9));*/


// Palindrome function (commented out)
// function Ispalindrome(str){
//     let reversed = '';
//     for(let i=str.length-1; i>=0;i--){
//         reversed += str[i];
//     }
//     if(str === reversed){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log('Ispalindrome:', Ispalindrome("madam"));

// largest number in an array
//function findLargest(arr) {
  //return Math.max(...arr);
//}
// console.log('Largest number in an array:', findLargest([10, 25, 3, 99, 45]));

/*function vowels(str) {
    let count = 0;
    const vowelSet = "aeiouAEIOU";
    for (let char of str) {
        if (vowelSet.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels in a string:", vowels("priyanshu"));*/


// for each callback function
  
//let arr = ['bihar', 'delhi', 'mumbai'];
//arr.forEach((value) => {
  //  console.log( 'State: ' + value.toUpperCase());
//});


// reverse an array
/*let string = "priyanshu";
let reversed = '';
for(let i=string.length-1; i>=0; i--){
    reversed += string[i];
}
console.log("Reversed String:",reversed);*/

// function is prime or not

/*function isprime(num){
    if(num<=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    return true;
}
console.log("Is 17 prime?", isprime(17));*/


/* function user(){
     a = 10;
   b = 20;
    console.log(a+b);
}
user();*/

/*function greet(message){
    console.log(message,"Priyanshu Thakur");
}
greet("Namaste");*/

/*function squareofnumber(num){
    console.log("The square of the number is:", num*num);
}
squareofnumber(5);*/

// FACTORIAL OF A NUMBER
/*function factorial(n){
    console.log("Factorial of a number is:", n);
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n* factorial(n-1);
    }
}
console.log(factorial(5));
*/

/*function division(a,b){
    console.log("The division of two numbers is:", a/b);
}
division(5,6);*/

/*let user = (num1,num2)  => {
    console.log("the subtraction of two numbers is:", num1-num2);

}
user(10,5);
*/
/*function num(num){
    if(num % 2==0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}
num(6);
num(7);*/

/*function maximum(a,b){
   
    if(a>b){
        console.log("The maximum number is:", a);
    }
    else{
        console.log("The maximum number is:", b);
    }
}
maximum(10, 20);*/

/*function string(str){
    let reversed = '';
    for(let i = str.length-1; i>=0; i--){
        reversed += str[i];
    }
    console.log("The reversed string is:", reversed);
}
string("priyanshu");*/

/*const string =(str) => {
    let reversed = '';
    for(let i = str.length-1; i>=0; i--){
        reversed += str[i];
    }

    console.log("The reversed string is:", reversed);

}
string("priyanshu");*./