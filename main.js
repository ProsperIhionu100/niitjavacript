// console.log("Hello World")
// console.log(3)
// console.log(true)

// console.log(typeof(-2))

/**
 * PRIMITIVE DATATYPES
 * String = "Hello World"
 * number = 1. 1.2,-9
 * booleans = true , false
 * Null = null
 * Undefined = undefined
 */

/**
 * NON-PRIMITIVE
 * ARRAY = [1, "HWDH",true ["eqeqe", 1],{name:"dan"}]
 * Object =  {
 *      name : "dan"
 *      age : 1 
 * }
 */

// console.log('3' /3)

// var name = "prosper";
// var name = "liberty";
// console.log(name)

// let man = "bola"
// man = "John"

// console.log(man)

/**
 * Do not use a Js KeyWord
 * Spaces between are not allowed
 * Use Lower case to Start
 * to declare a variable start with a letter, an UnderScore or a Dollar sign
 */

// let _niit = "It"
// let $niit = "It"
// let niit = "It"

// String Methods

// toLowerCase
// let firstName = "Favour";

// console.log(firstName.toLowerCase()); 

// // Upper Case
// let class_Name = "prosper";

// console.log(class_Name.toUpperCase()); 

// // Length
// console.log(class_Name.length)

// // indexOf
// console.log(class_Name.indexOf("k"));

// // charAt
// let newName = "nonso";

// console.log(newName.charAt(4));

// let pass = "password"
// console.log(pass.toUpperCase().charAt(0));

// let secondName = "Daniella"
// console.log(secondName.lastIndexOf("l"));

// //charCodeAt

// console.log(secondName.charCodeAt("i"))

//slice

// let recordName = "Freedom Park"

// console.log(recordName.slice(8));

// let bank = "ball"
// console.log(bank.slice(2))

// const userInput = "Favour";

// const inputLength = userInput.length;

// const midpoint =  inputLength / 2 ;

// const Half = userInput.slice( midpoint);

// console.log(Half)

// Assigment

/** 
 * 1. Research on String methods
 * 2. 
*/ 

// let greet = "Hello"
// console.log(greet)

// let randomWord = 'New Palace New King'
// let replaceWord = randomWord.replace('New','old')
// let replaceAllWord = randomWord.replace('New','old')

// console.log(randomWord+" "+replaceWord+" "+" "+replaceAllWord);

// let str = "Hello World"

// console.log(str.substring(0,7))

// let firstWord = ' New Word '
// console.log(firstWord.trim());

// // repeat 
// let man = "Evil Man Johnnie "

// let result = man.repeat(3)
// console.log(result);
// let word = "Egg roll"

// let stri = word.startsWith("E", 0);

// console.log(stri);

// let wr = "new"
// let rw = "word"

// Math Method / Number Method

// let number = 99;
// console.log(number);
// let numberWith = 99;
// console.log(number.toString());

// Math Method
const maths1 = Math.sqrt(16)
console.log(maths1);

let results =Math.cos(45)
console.log(results)

let anodanum =Math.pow(4 ,2)
console.log(anodanum)

let num1 =Math.random()
console.log(num1)

let num2 =Math.floor(Math.random()*100)
let num3 =Math.ceil(Math.random()*100)
let num4 =Math.round(Math.random()*100)
console.log(num2 , num3, num4)

// Array Methods

let word = "how are you doing today?";
console.log(word);
let wordforce = word.length;
console.log(wordforce);
let wordreplace = word.replace(/\s/g, "");
console.log(wordreplace);
let wordAfter = wordreplace.length
console.log(wordAfter);

let text = "Hell no";
console.log(text);
let textBeforeLength = text.length;
console.log(textBeforeLength);
let replacedtext = text.replaceAll(" ", "");
console.log(replacedtext);
let replacedTextLength = replacedtext.length;
console.log(replacedTextLength);

//Array Methods 

let ar = ["Man", 23, true, [2,false]];
let arr = Array("Nile", 3, true, ["Gold", null,["boy", 23]]);

// console.log(ar);
// console.log(arr);

console.log(ar[3][0]);
console.log(arr[3][2][1]);

// Array Methods

const  names =  "Bad Man, Good Man, Yellow boy";

const resultName = names.split(",");
console.log(resultName); 

// Push 
const  newArr = ["Finbarr", 23, true];
const arrResult = newArr.push("Money");
console.log("New length: ", arrResult);
console.log(newArr)

const  arrayPop = [1,2,3,4,5];
const PopArray = arrayPop.pop();
console.log("ArrayPopped", PopArray);
console.log(arrayPop)

// Unshift 

let unshiftArr = [1,2,3,6,7];
let unshiftResult = unshiftArr.unshift(0);
console.log(unshiftResult);
console.log(unshiftArr);

// Shift

let shiftArr = [4,6,8]
let shiftArrResult = shiftArr.shift()
console.log(shiftArrResult);
console.log(shiftArr);

// reverse

let nameo = ["F","i","n","b","a","r","r"]
let reversedArr = nameo.reverse()
console.log(reversedArr)

let nums1 = [1,2,3,4,5,6,7]
let nums2 = nums1.reverse()
console.log(nums2)

let name1 = "hello";
let na =name1.split("")
let ma = na.reverse()
console.log(ma.toString().replaceAll("," ,""))