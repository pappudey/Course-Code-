
function menuShow (){
    let btnShow = document.querySelector(".btn_menu_show");
    let mainMenu = document.querySelector(".main_menu_block");
    let menuBarShowDiv = document.querySelector(".menu_bar_show")
    let hideBtnDiv = document.querySelector(".menu_bar_hide")

    mainMenu.classList.add("menu_show")
    menuBarShowDiv.classList.add("btnAddHide")
    hideBtnDiv.classList.add("removeBtnShow")
   
}


function menuHide (){
    
    let mainMenu = document.querySelector(".main_menu_block");
    let menuBarShowDiv = document.querySelector(".menu_bar_show")
    let hideBtnDiv = document.querySelector(".menu_bar_hide")

    mainMenu.classList.remove("menu_show")
    menuBarShowDiv.classList.remove("btnAddHide")
    hideBtnDiv.classList.remove("removeBtnShow")
   
}

