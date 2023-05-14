const hamburgerToggler = document.getElementById('hamburger_toggler');
const collapsibleMenu = document.getElementById('collapsible_menu');

hamburgerToggler.addEventListener('click',()=>{
    if(collapsibleMenu.classList.contains('d-none')){
        collapsibleMenu.classList.remove("d-none");
        collapsibleMenu.classList.add("d-block");
    }else{
        collapsibleMenu.classList.remove("d-block");
        collapsibleMenu.classList.add("d-none");
    }

})