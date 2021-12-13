var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");

}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");
    
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else
    {
        localStorage.setItem("theme","light");
    }


}

if(localStorage.getItem("theme") == "light")
{
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-mode");
}
else if(localStorage.getItem("theme") == "dark")
{
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-mode");
}
else
{
    localStorage.setItem("theme", "light")
}



localStorage.setItem("theme", "dark");
localStorage.getItem("theme"); // to get the value of local 

var statu = document.getElementById("status")
statu.onclick = function(){
    statu.classList.toggle("showSts")

}