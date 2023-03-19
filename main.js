// Js Error 

// try{
//     alet("hello")
// }
// catch(err){
//     console.log(err.message)
// }

// let x = 16;

// try {
//     if(x === "") throw "empty";
//     if(isNaN(x)) throw "this is not a number";
//     if (x > 10) throw "largest"
// }catch(err){
//     console.log(err)
// }



// ourStudent = () =>{
//     return "hello world"
// }

// "use strict"
// let calculator

// calculator = (a, b) =>{
//     return a * b
// }

// console.log(calculator(10,20))

const person = {
    firstName : "pappu",
    
    lastName : "Dey",
}


// person.fullName()


class personDetails{
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    study(status){
        console.log(`he is a ${status} boy ${this.age}`)
    }
}

let person1 = new personDetails("pappu", 15);
let person2 = new personDetails("Sourov", 56)

person1.study("good")

console.log(person1)
console.log(person2)