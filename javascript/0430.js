//반복1 - while
let i = 0
while(i<10){
    console.log(i)
    i++
}

//반복2 - for
for(let j=0; j<10; j++){
    console.log(j)
}

//반복3 - for of
for(let number of [1,2,3,4,5]){// const로도 선언 가능
    console.log(number)

//Array
const numbers = [1,2,3,4]

console.log(numbers[0])
console.log(numbers[-1])

}

// JSON - JavaScript Object Notation (JS 객체 표기법)
JSON.stringify() // Object -> JSON String

JSON.parse() // JSON String -> Object

//함수
//방법1 - 선언식
function add(num1, num2){
    return num1+num2
}

console.log('result: '+add(1,2))

//방법2 - 표현식
const sub = function(num1, num2){
    return num1 - num2
}

console.log('sub: ' + sub(5, 3))

//Arrow Function
//기존 방법
const mul = function(num1, num2){
    return num1 * num2
}

//Arrow
const mul_ = (num1, num2) =>{
    return num1 * num2
}

let square = (num) =>{
    return num**2
}

let square = (num) => num**2 //함수가 return 한 줄일 때 {} & return 생략 가능

// square = num =>num**2 parameter이 하나일 경우 () 생략 가능(인자가 없으면 생략 안됨)

let noArgs = () =>'No args' // 인자가 없는 경우

let returnObject = () => ({key:'value'}) //object를 return 하는 경우 ()가 없으면 {}를 함수로 인식하므로 이렇게 표시

//함수의 기본 인자
const sayHello = (name='noName') => `Hi ${name}`
sayHello('john')
sayHello()

function (num) {return num**3} // 세제곱
(num) =>{return num**0.5} //제곱금

//익명 함수 즉시 호출
(function (num) {return num**3}(3))//3의 세제곱