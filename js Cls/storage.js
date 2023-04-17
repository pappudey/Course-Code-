let userInput = document.querySelector("#todoTitle");
let tableBody = document.querySelector("#tblData");
let submitBtn = document.querySelector("#addTodo");
let dataCaller = document.querySelector("#dataCaller");

let ourAllStu = [

]

if (!localStorage.getItem("todos")) {
    let makeStorage = localStorage.setItem("todos", JSON.stringify(new Array()));
  }

let stuId = 0
let dataCall = ()  =>{
    let data = localStorage.getItem("todos")
    let serverData = JSON.parse(data);

    tableBody.innerHTML = "";

    serverData.forEach((data, index) => {
        
        tableBody.innerHTML += `<tr id="itemSingle">
                <td>${data.id}</td>
                <td>${data.name}</td>
          
                <td>
                <button data-itemid="${data.id}" class="btn btn-success">Edit</button>
                <button data-itemid="${data.id}" id="deleteBtn" class="btn btn-danger" onclick="deleteFunc(${data.id})">Delete</button>
                </td>
                </tr>`;


    });
 
    
}

const deleteFunc = (id) =>{

    
    let data = localStorage.getItem("todos")
    let serverData = JSON.parse(data);

    let deleteTodo = serverData.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(deleteTodo))
    console.log(ourAllStu)
    dataCall()
}



submitBtn.addEventListener("click", ()=>{
    
    let userInputValue = userInput.value;
    let data = JSON.parse(localStorage.getItem("todos"))
    console.log(data)
    stuId++
    data.push({
        id : stuId,
        name : userInputValue
    })
   
    localStorage.setItem("todos", JSON.stringify(data))
    dataCall()
})
dataCall()





