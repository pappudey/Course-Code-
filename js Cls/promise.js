
// let present = false

// let myPresent = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(present === true){
//             resolve("OKh")
//         }else{
//             reject("No")
//         }
//     }, 2000)
// })



// myPresent
//     .then(function(value){
//         console.log(value)
//     })
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(err){
//         console.log(err)
//     })

// console.log("Roll No 01 ")

// console.log("Roll No 03 ")

let point = 4;
let result = "fail"

function admission(){
    console.log("Admission.......");

    let promise = new Promise(function(fullfunc, erroFunc){

        setTimeout(function(){
            if(point === 4){
                fullfunc()
            }else{
                erroFunc("Exit")
            }
        }, 2000)
    })
    

    return promise
}

function studyProgress(){
    console.log("Study Progress .....");

    let promise = new Promise(function(fullFunc, errorFunc){
        setTimeout(function(){
            if(result === "pass"){
                fullFunc()
            }else {
                errorFunc("Fail")
            }
        }, 3000)
    })


    return promise
   
}


function certificate(){
    console.log("Certificate....");

    let promise = new Promise(function(fullFunc, errorFunc){
        setTimeout(function(){
            fullFunc("Certificate ok")
        }, 1000)
    })

    return promise 
}

// admission()
    // .then(studyProgress)
    // .then(certificate)
    // .then(function(value){
    //     console.log(value)
    // })
    // .catch(function(value){
    //     console.log(value)
    // })


async function diploma(){
    try{
        await admission()
        await studyProgress()
        let result = await certificate()
        console.log(result)
    }catch(error){
        console.log(error)

    }
}


diploma()