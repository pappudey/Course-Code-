let addedBtn = document.querySelector("#addTodo");
let todoTitle = document.querySelector("#todoTitle");

let tableBody = document.querySelector("table tbody")

let todoCount = 0;

let todos = [
    {
        id : 01,
        name : "kjjbhsdf"
    }
]




let addedTodo = () => {
    for (let i = 0 ; i < todos.length;i++){
        console.log(todos[i].name)
    }
 
    let title = todoTitle.value; 
    todoCount++
    if(title === ""){
                alert("add todo")
            }
            else{
                todos.push({id : todoCount, name : title})
                todos.map((todo) => {     
                    tableBody.innerHTML += 
                    ` <tr>
                <td>${todoCount}</td>
                <td>${todo.name}</td>
                <td>
                  <button id="delete" data-key="title" class="btn btn-danger">       DELETE
                 </button>     <button id="edit" class="btn btn-success">EDIT</button>
                </td>
               </tr> `
                })
            }
   

    
    // console.log(todos)
//     if(title === ""){
//         alert("add todo")
//     }
//     else {
//         tableBody.innerHTML += ` <tr>
//     <td>${todoCount}</td>
//     <td>${title}</td>
//     <td>
//       <button id="delete" data-key="title" class="btn btn-danger">
//         DELETE
//       </button>
//       <button id="edit" class="btn btn-success">EDIT</button>
//     </td>
//   </tr> `
//     }

  todoTitle.value = ""
}