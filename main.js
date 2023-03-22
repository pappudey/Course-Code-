
function StudentData (fName, lName, roll, clg){
    this.firstName = fName,
    this.lastName = lName,
    this.roll = roll,
    this.clg = clg
    this.fullName = function(){
        return this.firstName + " " + this.lastName
    }
}


let nasifa = new StudentData("nasifa", "dey", 20, "CPI");
let sourov = new StudentData("Sourov", "Dey", "23","CPI")

nasifa.dept = "Computer"

console.log(nasifa)
console.log(sourov)


let name = new String("pappu")
let name2 = "pappu"

console.log(name2.toUpperCase())








