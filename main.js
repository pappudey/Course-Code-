// Javascript Loop 


// For loop 

// let person = ["pappu", "dey", 'Swarna', "codex"]

// console.log(person[0])
// console.log(person[1])



// for(let i = 0 ; i <=person.length - 1; i++){
//     console.log(person[i])
// }

// for 
// for in
// for of 
// while 
// do while 

// let studentDetails = {
//     firstName : "Pappu",
//     lastName : "Dey",
//     roll : 588764,
//     group : "B1"
// }

// let fullDetails = " ";

// for (let i in studentDetails){
//     fullDetails += studentDetails[i]
    
// };
// console.log(fullDetails)


// let number = [10,20,30,50,60];

// let totalNum = 0;

// for(let x of number){
//     totalNum += x
    
// }
// console.log(totalNum)

// let i = 0
// while(i < 5){
//     console.log(i)
//     i++
// }

// let i = 6
// do{
//     console.log("the number is " + i)
//     i++
// }while(i < 5)


// for ( let i = 0; i <=20; i++){
//     if(i === 10){
//         continue;
//         break;
//     }else{
//         console.log(i)
//     }
// }

let x = 0;
let y = 0;
for (let i = 0;i <=10; i++){
    for (let l=0; l <=10; l++){
        x += i
        y += l
    }
}


console.log("X = "+ x , "Y = "+y)