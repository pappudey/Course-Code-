

function addClass(){
    let showText = document.querySelector(".text_hide");
    let addBtn = document.querySelector(".add_Btn");
    let removeBtn = document.querySelector(".remove_Btn");


    // paragrap text text show class add 
    showText.classList.add("text_show")

    // add button display none 
    addBtn.classList.add("btn_add_show")

    removeBtn.classList.add("remove_btn_show")
   
}

function removeClass (){
    let showText = document.querySelector(".text_hide");
    let addBtn = document.querySelector(".add_Btn");
    let removeBtn = document.querySelector(".remove_Btn");

    showText.classList.remove("text_show")
    addBtn.classList.remove("btn_add_show")

    removeBtn.classList.remove("remove_btn_show")
}

