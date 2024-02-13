// const myFavLanguage = 'JavaScript'

// const age = 20
// const name = 'Buchi'
// const sentence = 'My name is ' + name +'. '+'I am '+age+' years old'


// console.log(sentence)


// const day = 'Thursday'
// const position = 4

// const sentence = 'Today is ' + day +'. '+'It is the '+position+'th day of the week'


// console.log(sentence)

// const age = 15

// if(age>=18) {
//     console.log('You are eligible to vote')
// }  else {
//     console.log('You are too young to vote')
// }


// const Number = 33

// if(Number%2===0) {
//     console.log('Number is even')
// }  else {
//     console.log('Number is Odd')
// }

const day = 'Saturday'


// if(day==='Friday') {
//     console.log('TGIF!')
// } else if(day==='Saturday') {
//     console.log('Yeh! The weekend is here!')
// }else if(day==='Sunday') {
//     console.log('Happy Sunday!')
// }else {
//     console.log('Go to work!')
// }


// switch(day){
//     case 'Friday':
//         console.log('TGIF')
//         break
//     case 'Saturday':
//         console.log('Yeh! The weekend is here!')
//         break
//     case 'Sunday':
//         console.log('Happy Sunday!')
//         break
//     default:
//         console.log('Go to work!')    
// }   

// let star = 1 // starting point
// while(star <=10) { 
//     if(star===1) {
//         console.log(star +' star')
//     } else {
//         console.log(star +' stars')
//     }
//     star = star + 1
// }

// for(let star = 0; star <=10; star = star+1) {
//     if(star===1 || star===0) {
//         console.log(star +' star')  
//     } else {
//         console.log(star +' stars')
//     }
        
// }


// for(let number = 0; number <=10; number = number+1) {
//     if(number % 2 === 0) {
//         console.log(number +' is an even number')  
//     } else {
//         console.log(number +' is an odd number')
//     }
    
// }

// function MyFunction() { // function declration
//     console.log('My first function!');
// }

// MyFunction(); // function call

// function Greeting(name) {
//     console.log('Good morning, ' + name);
// }

// Greeting('Buchi!');

// function addNumbers (firstNumber, secondNumber) {
//     const sum = firstNumber + secondNumber;
//     console.log(sum);

// }

// addNumbers(30, 40);

// function addNumbers (firstNumber, secondNumber) {
//     const sum = firstNumber + secondNumber;
//     return sum;

// }

// console.log(addNumbers(30, 40));

// function addNumbers (firstNumber, secondNumber) {
//     const sum = firstNumber + secondNumber;
//     return sum;
// }

// const moreOp = addNumbers(30, 40) + 20

// console.log(moreOp);


// function addNumbers (firstNumber, secondNumber) {
//     const sum = firstNumber + secondNumber;
//     const product = firstNumber * secondNumber;
//     return [sum, product];
// }

// function converter(dollar) {
//     // convert to dollar and return the equivalent dollar value
//     // coversion rate is 410 naira to 1 dollar
//     const naira = dollar * 410
//     return naira;
// }

// const nairaValue = converter(100);

// console.log(nairaValue);

// const myName = 'Ben';

// function greet() {
    
//     console.log('Good morning, ' +  myName);
//     function innerGreet() {
//         console.log('Good evening, ' +  myName);
//     }

//     innerGreet();
// }
//     greet();

    

    // function greet() {
    //     const myName = 'Ben';
    //     console.log('Good morning, ' +  myName);
    //     function innerGreet() {
    //         console.log('Good evening, ' +  myName);
    //     }
    
    //     innerGreet();
    // }
    //     greet();
    



// function greet(name) {
//    console.log('Good morning, ' + name);
// }

// const myGreet = function (name) {
//     console.log('Good morning, ' + name);
// };

// myGreet('Nick');

// function Greetings(greet) {
//     greet();
// }

// Greetings(function () {
//     console.log('Good morning');
// }); 

function Greetings(greet) {
    greet();
}

function callback() {
    console.log('Good morning');
}

Greetings(callback);