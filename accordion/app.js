

function addClass(){
    let hideText = document.querySelector(".text_hide");
    let ctaBtn = document.querySelector(".ctaBtn");
    let toggleBtn = document.querySelector(".toogleBtn");
   
    hideText.classList.toggle("text_show")
    ctaBtn.classList.toggle("rotateBtn")
    console.log( )
    // let btnTxt = toggleBtn.innerHTML;
    

    // if(btnTxt === "Add"){
    //     toggleBtn.innerHTML = "Remove "
        
    // }else{
    //     toggleBtn.innerHTML = "Add "
    // }
    // console.log(btnTxt)

    // paragrap text text show class add 
    // hideText.classList.add("text_show")

    // add button display none 
    // addBtn.classList.add("btn_add_show")

    // removeBtn.classList.add("remove_btn_show")
   
}

function removeClass (){
    let showText = document.querySelector(".text_hide");
    let addBtn = document.querySelector(".add_Btn");
    let removeBtn = document.querySelector(".remove_Btn");

    showText.classList.remove("text_show")
    addBtn.classList.remove("btn_add_show")

    removeBtn.classList.remove("remove_btn_show")
}

