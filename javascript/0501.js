//Array Helper Methods

//case 1.

// var colors = ['red', 'blue', 'green']

// for (var i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

//ES6+ - forEach

const colors = ['red', 'blue', 'green']

colors.forEach(function(color){//callback function (익명함수이기도 함)
    console.log(color)
}) // 익명함수. 특별한 용도로 사용되는 함수

//case 2.
//ES5

// var numbers = [1,2,3]
// var doubleNumbers = []

// for (var i=0; i<numbers.length;i++){
//     doubleNumbers.push(number[i]*2)
// }

// console.log(doubleNumbers)

//ES6+ - map
const numbers = [1,2,3]

const doubleNumbers = numbers.map(function(number){
    return number *2
})

console.log(doubleNumbers)

//case 3.
//ES6+ - filter
const products = [
    {name = 'cucumber', type: 'vegetable'},
    {name = 'banana', type: 'fruit'},
    {name = 'carrot', type: 'vegetable'},
    {name = 'apple', type: 'fruit'},
]

const fruitProducts = products.filter(function(product){
    return product.type ==='fruit'
    //해당 조건이 true일 경우, item을 가져와 배열에 넣음
})

console.log(fruitProducts)

//case 4.
//ES6+ - find

const users = [
    {name: 'rg'},
    {name: 'admin'},
    {name: 'nwith'},
]

const foundUser = users.find(function(user){
    return user.name === 'admin'
})

console.log(foundUser)

//case 5.
//ES6+ - every & some

const computers = [
    {name: 'macbook', ram: 16},
    {name: 'gram', ram: 8},
    {name: 'series9', ram: 32},
]

const everyComputerAvailable = computers.every(function(computer){
    return computer.ram>16
})

const someComputerAvailable = computers.some(function(computer){
    return computer.ram>16
})

console.log(everycomputerAvailable)
console.log(someComputerAvailable)