// console.log("Hello JavaScript");
// Variables
// 

// var name = "john";
// console.log(name)

// Datatypes
// String "This is a boy"
// Integers 0-9
// Floats and doubles 9.4
// Boolean true or false

// console.log(9);
// console.log("My name is John");

// var num = 0;
// console.log(num);

// var decNum = 2.5;
// console.log(decNum);

// var myName = "James";

// myName = "Joseph";
// console.log(myName);

// const firstName = "Femi";
// console.log(firstName);

// let lastName = "Tunde";
// lastName = "Ade";
// console.log(lastName);
/*
    Rules we must follow when defining variable names
    1. Variable Names can contain letters, numbers, underscores and dollar sign
    Eg: name, age name_1, name1,name$1, name$2, name_, etc
    2. Variable names must begin with a  letter( It can also begin with a $ or _ but it's not advised)
    3. Variable name are case sensitive (age and AGE  are two different things)
    4. Reserved words (like Javascript Keywords) cannot be used as variable names
*/

/*
    One Statement, many variables
    let age = 28;
    let school = "NIIT";
    let gender = "Male";
*/
// let age = 28, school = "Name", gender = "Male";

// // Declaring first;
// let brand;
// brand = "Louis Vuttion";

// we can't assign a variable without a value with const
// const wordo ;

// Operators 
// Assignment operator (=): Used to assign values to variables
// Addition Operator (+): Perform basic additions
// console.log(13+14);
// let x = 3;
// let y = 4;
// let z = x + y;
// console.log(z);
// // Substration operator (-): Performs basic substractions
// // z = x - y;
// z = z - x;
// // Multiplication operator (*): Perform basic multiplications
// z = x * y
// // Division operator (/): Perform basic divisions
// z = x / y

// // incrementation (++)

// let a = 5;
// a++
// console.log(a);


// a--
// console.log(a);

// // Exponential (**)
// a = 5 ** 2;
// console.log(a);

// // modules (%)
// a = 5 % 2;
// console.log(a);

// // Assignment Operators
// // Equals

// let b = 10

// // Addition assignment operator (+=)
// b +=5

// // Substraction assignment operator (+=)
// b -=3

// // Multiplication assignment operator (+=)
// b *=2

// // Division assignment operator (+=)
// b /=2

// // Exponential assignment operator (+=)
// b **=2
// console.log(b);

// // Modules assignment operator (%=)
// let c = 10
// // c = c % 5
// c %= 5
// console.log(c);

// // Arrays
// // let fruit1 = "apple" , fruit2 = "orange" fruit3 = "pinrapple"
// let fruit = ["apple", "orange", "pineapple","mango"];
// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit.length);
// console.log(fruit[fruit.length - 1]);

// let numbers = [1, 4,5,7,0,6,4]
// console.log(numbers.sort());

// let cars = []
// cars[0] = "Ford";
// cars[1] = "benz";
// cars[2] = "mazda";
// cars[3] = "toyota";
// console.log(cars);

// // Array methods
// // Converting an array to string

// let carsToString = cars.toString();
// console.log(carsToString);

// let carsjoin = cars.join(" ");
// console.log(carsjoin);

// // Pop
// // Removes an element at the end of the array
// let courses  = ["HTML", "CSS", "JS", "PHP", "SQL"];
// courses.pop()
// console.log(courses);

// // Push 
// // adds an element at the end of the array
// courses.push("python")
// console.log(courses);

// // Shift method
// // removes an element at the begining of the array
// courses.shift()
// console.log(courses);

// // unShift method
// // adds an element at the begining of the array
// courses.unshift("Java")
// console.log(courses);

// // merging arrays (concatinating arrays)

// let myGirls = ["Hannah", "Sandra", "Favour"]
// let myBoys = ["John", "Philip", "James"]
// let myParents = ["Jackson", "Mary"]

// let myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// let myFamily = myGirls.concat(myBoys, myParents)
// console.log(myFamily);

// let niitClass = {
//     course: "JavaScript",
//     time: "9 - 11",
//     days: "Tue - Thu",
//     tutor: "Misan",
//     phone: "0901234567"
// }

// console.log(niitClass.days);

// let myCar = {
//     color: "black",
//     type: "Benz",
//     days: 2008,
//     weight: "850kg"
// }

// // String Methods
// let text = "At exactly 3:00am, she said 'what am I doing here'. She\"s a zombie "

// console.log(text);

// let newText = "This is an escape character \\ ";
// console.log(newText);

// console.log(newText.length);

// // String Slice 
// let textToSlice = "Hello, this is a text";
// let part = textToSlice.slice(7, 14)
// console.log(part);

// let message = "Please visit microsoft";
// // let newMessage = message.replace(/Microsoft/i, "Google");
// // console.log(newMessage);
// message = "Please visit MICROSOFT and buy Microsoft MicroSoft";
// let newMessage = message.replaceAll(/Microsoft/ig, "Google");
// console.log(newMessage);

// // Converting to Upper and Lower Case
// // let text1 = "Hello, World";
// // let text2 = text1.toLowerCase();
// // console.log(text2)
// let text1 = "Hello, World";
// let text2 = text1.toUpperCase();
// console.log(text2)

// let trimText = "   Hello, World      ";
// let trimText2 = trimText.trimEnd()
// console.log(trimText2)
// let trimText3 = trimText.trimStart();
// console.log(trimText3)

// let course = "Javascript";
// let char = course.charAt(5);
// console.log(char);

// let gadgets = "laptop, camera, keyword, smart-watch, mouse";
// let gadgetsArray = gadgets.split(", ");
// console.log(gadgetsArray);

// Functions
// function addition(){
//     console.log(3 + 5);
// }
// addition();

// // Global Variables
// let k = 5;
// function myFunction(){
//     let i = 10;
//     console.log(k + i);
// }
// myFunction()

// // parameters
// function substraction(a ,b, c){
//     console.log(a + b);
//     console.log(a - c);
// }
// substraction(7,3,5);

// // Return Statement 
// function returnFunction(num1, num2){
//     console.log("Test 1");
//     return;
//     console.log("Test")
// }
// returnFunction(2,4)

// function multiplication(num1, num2){
//     return num1 * num2;
//     console.log("Test 3")
// }

// let x = multiplication(10,5);
// console.log(x);

// // write a function that converts celcius to farenheit

// // JavaScript Math objects
// // PI (3.14159)
// console.log(Math.PI);

// // Round (Round to the nearest integer)
// let a = 10.5;
// console.log(Math.round(a))

// let b = 10.4;
// console.log(Math.ceil(b))

// let c = 10.5;
// console.log(Math.floor(c))

// a = 10.9;
// console.log(Math.trunc(a));

// a = 10.9228;
// console.log(Math.sign(a));

// // pow (Raised to power)
// console.log(Math.pow(12,3));

// a = 49;
// console.log(Math.sqrt(a));

// a = 30;
// console.log(Math.sin(a))

// a = 30;
// console.log(Math.cos(a))

// a = 30;
// console.log(Math.tan(a))

// console.log(Math.min(0, 10, -10, 18, -8, 11))

// console.log(Math.max(0, 10, -10, 18, -8, 11))

// Random 
// Gives a random number between 0 and 1
// let i = Math.random();
// console.log(i)

// let r = Math.ceil(Math.random()*100);
// console.log(r)

// i = Math.floor(Math.random() * 20);
// console.log(i);

// // Create a function that converts celcius to  farenheit
// function celciusConvert(temp) {
//     let f = (9/5 *temp) +32; 
//     console.log(f);
        
    
// }
// celciusConvert(19.5)

// let a = 5>6;
// console.log(a);

// a = 5>5;
// console.log(a);

// a = 518>6;
// console.log(a);

// a = 5<6;
// console.log(a);

// a = 5==15;
// console.log(a);

// a = 16=="16";
// console.log(a);

// a = 16==="16";
// console.log(a);

// let y = 10;
// a = y !=5;
// console.log(a);

// y = 10;
// a = y >=5;
// console.log(a);

// y = 10;
// a = y <=11;
// console.log(a);

// // And (&&)
// a = 10 > 8 && 5 < 10;
// console.log(a);

// // or (||)

// a = 10 > 8 || 15 < 10;
// console.log(a);

// // or (||)

// a = !(10 == 11);
// console.log(a);

// // Tenary 
// // ? = True
// // : = False

// let age = 10 
// let votable = (age <18) ? "Too young" : "You can vote"
// console.log(votable);

// let age2 = 15;
// // if statement
// if (age2 > 18) {
//     console.log("Person is above 18");
// }else{
//     console.log("Person is below 18");
// }

// let alphabet = "i";

// if (alphabet == "a") {
//     console.log("Vowel");
// }
// else if (alphabet == "e") {
//     console.log("Vowel");
// }
// else if (alphabet == "i") {
//     console.log("Vowel");
// }
// else if (alphabet == "o") {
//     console.log("Vowel");
// }
// else if (alphabet == "u") {
//     console.log("Vowel");
// }
// else{
//     console.log("Consonant");
// }

// using if and else check if a number is even or odd

// let num = 1;

// if (num <= 0){
//     console.log("Invalid number");
// } else if(num % 2 == 0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }

// let alphabet = "r";

// switch (alphabet) {
//     case "a":
//         console.log("vowel");
//         break;
//     case "e":
//         console.log("vowel");
//         break;
//     case "i":
//         console.log("vowel");
//         break;
//     case "o":
//         console.log("vowel"); 
//         break;
//     case "u":
//         console.log("vowel");
//         break;

//     default:
//         console.log("Consonant");
//         break;
// }

// // Loops 
// // While Loop
// // let i = 0

// // // while (i <= 5) {
// // //     console.log("This is a loop");
// // //     i++;
// // // }

// // // Do While Loop
// // do {
// //     console.log("This is a loop");
// //     i++; 
// // } while (i <= 5);

// // For Loop
// for (let i = 0; i < 3; i++) {
//     console.log("This is a loop");
// }

// // For in 
// // Looping through arrays
// let fruits  = ["Apple", "orange", "Mango", "Banna"];
// for (let i in fruits) {
//    console.log(fruits[i]);
// }

// // Inbuilt Functions
// // Alert
// // alert("Hello")

// // //Prompt
// // prompt("What's your name?")

// // //Confirm
// // confirm("Are you sure?")

// // let result = prompt("What's your name?")
// // alert(result)

// let fruits1 = ["Apple", "Orange", "Mango", "Banana", "Kiwi", "Pawpaw"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

const getName =  () => {
    console.log("prosper")
}
const getName2 =  () => console.log("prosper")


getName()
getName2()

// Set Timeout
// setTimeout (functionName, time-milliseconds)
let i = 100;
const count = document.querySelector("#count")

const countDown = () => {
    i--
    if (i <=0){
        i = 0
    }
    count.innerHTML = i
    setTimeout(countDown, 1000)
}

countDown()

