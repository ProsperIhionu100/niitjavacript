// Question 1: Create an array named words with elements 'Hello' and 'World', and then join them into a single string separated by a space.

// Question 2: Given an array named data with elements 'apple', 'banana', and 'cherry', remove the last element and return a string with the remaining elements separated by a hyphen. 

// Question 3: Add 'grape' to the end of an array named fruits containing 'apple', 'banana', and 'cherry', and then convert the array to a string with elements separated by commas.

// Question 4: Remove the first element from an array named colors containing 'red', 'green', and 'blue', and then convert the array to a string in lowercase.

// Question 5: Add 'David' to the beginning of an array named people containing 'Alice', 'Bob', and 'Charlie', and then return a string with elements enclosed in parentheses.

// Question 6: Create an array named sentences with elements 'This is', 'a challenging', 'question'. Remove the second element, concatenate the remaining elements into a single string, and convert it to lowercase.

// Answer 1:
// let words = ['Hello','World'];
// let strWord = words.toString().replace(",", " ");
// console.log(strWord);

// // Answer 2:
// let data =['apple', 'banana', 'cherry']
// let secData = data.pop()
// let data3 = data.toString().replace(",","-")
// console.log(data3)

// // Answer 3:
// let fruits = ['apple', 'banana', 'cherry']
// let addFruits = fruits.push("grape")
// let strFruits = fruits.toString().replaceAll(",", ", ")
// console.log(strFruits)

// // Answer 4:
// let colors = ['Red', 'Green', 'Blue']
// let removecolor = colors.shift()
// console.log(colors.toString().toLowerCase())

// // Answer 5:
// let people = ['Alice', 'Bob', 'Charlie'];
// let thisPeople = people.unshift('David');
// let thosePeople = people.toString();
// console.log(`(${thosePeople})`)

// Answer 6  :
// let sentences = ['This is', 'a challenging','question' ]
// let popWord = sentences.toString()
// let replaceAllWord = popWord.replaceAll(",", "");
// let replaceWord = replaceAllWord.replace("a challenging", "").toLowerCase()
// console.log(replaceWord)

// // another method

// let words1 = ['Hello','World'];
// let strWord1 = words1.join(" ")
// console.log(strWord1);
//answer 6
// let newSentence

//ClassWork

// // Find the middle letter in a string
// // round 3.1456230 to 4 significant figures

// let middle = "Mango"

// let midpoint = middle.length / 2

// let theMiddle = middle.charAt(midpoint);

// console.log(theMiddle);

// let num = 3.1456230;

// let num_round = Math.round(num*1000)
// console.log(num_round) 

// // Correction

// let number = 3.1456630;
// console.log(Number(number.toPrecision(5)))
// console.log(number.toFixed(4))
// console.log(Math.round(number*10000)/10000)

// let people1 = ['Alice', 'Bob', 'Charlie'];
// let add = people1.unshift('David');
// let thosePeople1 = people.join(",");
// console.log(`(${thosePeople1})`)

// function calName(){
//     let name = "mariam";
//     console.log(name);
// }
// calName();

// function calNumber(a, b){
//     let num = a *b;
//     console.log(num);
// }
// calNumber(5,3);

// function calMinus(a, b){ 
//     let num = a-b;
//     console.log(num);
// }
// calMinus(5,3);


//Create a function that finds the hypothenos of a triangle

function findHypo(){
    let num1 = 25
    let num2 = 30
    let num3 = Math.sqrt(num1 **2 + num2**2)
    console.log(num3)
}
findHypo()

//Second method for inputting any number
function findHypo1(a, b){
    let num1 = a
    let num2 = b
    let num3 = Math.sqrt(num1**2 + num2**2)
    console.log(num3)
}
findHypo1(25, 30)

function findHypo2(a,b){
    let num1 = Math.sqrt(a**2 + b**2)
    console.log(num1)
}
findHypo2(25,30)

function ageVerifier(age) {
    if (age <18){
        console.log("you are not up to 18");
    }
    else if (age >18 && age <25){
        console.log("you are qualified");
    }
}

ageVerifier(12)

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;

    default:
       console.log('this is night');
}
console.log(day)
// let age = 40
// if (ago <10){

// }

let arr = [4,5,6,7];
arr.forEach(function cal(text, i) {
    text = arr.values.length
    console.log(`this are your array ${text} ${i}`);
});
