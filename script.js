const bdy = document.querySelector("body");
const changeTheme = document.querySelector(".theme");

let change = 1;

changeTheme.addEventListener("click", () => {
    if(change % 2 == 0){
        changeTheme.innerHTML = '<i class="fa-solid fa-moon"></i>'
        bdy.classList.remove("themeChanges")
        change++
        console.log("lua")
    }
    else{
        changeTheme.innerHTML = '<i class="fa-solid fa-sun"></i>'
        bdy.classList.add("themeChanges")
        console.log("sol")
        change++     
    }
})