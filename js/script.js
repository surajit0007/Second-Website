let homeListSubmenus=document.querySelector(".home_list_submenus")
let homeListSubmenusUl=document.querySelector(".home_list_submenus_ul")

homeListSubmenus.addEventListener("click",(e)=>{
    e.stopPropagation()
    homeListSubmenusUl.classList.toggle("home_list_submenus_ul_active")
})

let singlePostDropdown= document.querySelector(".single_post_dropdown")

singlePostDropdown.addEventListener("click",(e)=>{
    e.stopPropagation()
    singlePostDropdown.classList.add("open")
})

let homeStandardSubmenus= document.querySelector(".home_standard_submenus_a")

let homeStandardSubmenusUl= document.querySelector(".home_standard_submenus_ul")

homeStandardSubmenus.addEventListener("click", (e)=>{
    e.stopPropagation()
    homeStandardSubmenusUl.classList.toggle("home_standard_submenus_ul_active")
})

let threeDot=document.querySelector("#three_dot")
let mainMenusUl= document.querySelector(".main_menus_ul")

threeDot.addEventListener("click",()=>{
    mainMenusUl.classList.toggle("main_menus_ul_active")
})