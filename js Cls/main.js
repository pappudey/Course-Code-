let result = 4
let firstPre = "pass"
let secPre = "pass"
function admission(studyFunc){
    console.log("Admission.......");

    setTimeout(function(){
        if(result === 4){
            studyFunc()
        }else{
            console.log("Exit")
        }
    }, 2000)
}

function studyProgress(secFunc){
    console.log("1st Progress .....");

    setTimeout(function(){
        if(firstPre === "pass"){
            secFunc()
        }else {
            console.log("Fail")
        }
    }, 3000)
}


function secSem(certificateP){
    console.log("2nd Sem.....")

    setTimeout(function(){
        if(secPre === "pass"){
            console.log("Pass 2")
            certificateP()
        }else {
            console.log("Fail 2")
        }
    },2000)
}
function certificate(){
    console.log("Certificate....");

    setTimeout(function(){
        console.log("Certificate Ok")
    }, 1000)
}


admission(function(){
    studyProgress(function(){
        secSem(certificate)
    })
})