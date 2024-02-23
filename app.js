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

// const day = 'Saturday'


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

// function Greetings(greet) {
//     greet();
// }

// function callback() {
//     console.log('Good morning');
// }

// Greetings(callback);

// const myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// console.log(myArray)

// const myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// const numArray = [90, 60, 50]

// console.log(numArray)

// const myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// const numArray = [90, 60, 50]

// const emptyArray = []

// console.log(emptyArray.length)


// const myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// const numArray = [90, 60, 50]

// const thirdElement = myArray[4]
// myArray[4] = 45
// console.log(myArray)


// const myWeekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// const numArray = [90, 60, 50]
// const emptyArray = []

// emptyArray[0] = 'FirstElement'
// emptyArray[1] = 'Second Element'
// emptyArray[3] = 'Forth Element'

// console.log(myWeekArray[5])


// const emptyArray = []

// emptyArray[0] = 'First Index'

// console.log(emptyArray)

// const emptyArray = []

// emptyArray.push('First Element', 'Second Element')

// emptyArray.push('Pushed Element')

// console.log(emptyArray)


// const notEmptyArray = ['First Element', 'Second Element']


// notEmptyArray.push('Pushed Element')

// console.log(notEmptyArray)


// const notEmptyArray = ['First Element', 'Second Element', 477, true]
// notEmptyArray.pop()
// notEmptyArray.pop()
// notEmptyArray.pop()

// console.log(notEmptyArray)

// const notEmptyArray = ['First Element', 'Second Element', 477, true]
// for(let start = 0; start <= notEmptyArray.length; start=start+1) {
//     notEmptyArray.pop()
// }
// console.log(notEmptyArray)


// const notEmptyArray = ['First Element', 'Second Element', 477, true]

// notEmptyArray.unshift('Pre-Element', 'Post-Element')

// console.log(notEmptyArray)


// const notEmptyArray = ['First Element', 'Second Element', 477, true]

// notEmptyArray.shift()
// notEmptyArray.shift()

// console.log(notEmptyArray)


// const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// months.slice(2,4)
// // months.slice(1,7)
// // months.slice(3,9)
// // months.slice(3,8)
// // months.slice(7,12)

// console.log(months.slice(2,4))


// const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// months.splice(4,2)


// // console.log(months, months.splice(2,4, 'My custom month'))

// console.log(months, months.splice(4,2))


// const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// console.log(months.indexOf('Dec'))


// const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Mar', 'July','April', 'Aug', 'Mar', 'Sep', 'April', 'Oct', 'Nov', 'Mar', 'Dec']

// console.log(months.lastIndexOf('Mar'))


// const myObject = {
//     name:'car',
//     color:'red',
//     price: 25000
// }

// const door = {
//     isOpen:false,
//     material:'wood',
//     height: 8,

    // console.log(door.material)

// console.log(door['height'])



// const myObject = {
//     name:'car',
//     color:'red',
//     price: 25000
// }

// const door = {
//     isOpen:false,
//     material:'wood',
//     height: 8,
//     toggleOpenAndClose: function(){
//         if(door.isOpen===true)  {
//             door.isOpen = false
//         } else {
//             door.isOpen = true
//         }
//     }
// }


// const person = {
//     name:'Nick',
//     age: 24,
//     siblings: ['Richard', 'Ken', 'Jane'],
//     addsiblings: function(name){
//         person.siblings.push(name)
//     }
// }


// person.addsiblings('Henry')
// person.hairColor = 'black'
// console.log(person)



// const myObject = {
//     name:'car',
//     color:'red',
//     price: 25000
// }

// const door = {
//     isOpen:false,
//     material:'wood',
//     height: 8,
//     toggleOpenAndClose: function(){
//         if(door.isOpen===true)  {
//             door.isOpen = false
//         } else {
//             door.isOpen = true
//         }
//     }
// }


// const person = {
//     name:'Nick',
//     age: 24,
//     siblings: [
//         {
//             name: 'Richard',
//             age: 20,
//         },
//         {
//             name: 'Rose',
//             age: 17,
//         },
//         { 
//             name: 'Ben',
//             age: 27,
//         }
//     ],
//     addsiblings: function(name){
//         person.siblings.push(name)
//     }
// }


// person.addsiblings({
//     name: 'Henry',
//     age: 0,
// })
// person.hairColor = 'black'
// console.log(person)


// const myObject = {
//     name: 'vehicle',
//     type: 'car',
//     color: 'black',
// }
// const json = JSON.stringify(myObject)
// // console.log(json)

// console.log(JSON.parse(json))