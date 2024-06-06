
// Menu's Design
let bar = document.getElementsByClassName("bar")[0];
let nav = document.getElementsByTagName("nav")[0];
let nav_t = document.getElementsByClassName("nav_t")[0];
let nav_m= document.getElementsByClassName("nav_m")[0];
let nav_b = document.getElementsByClassName("nav_b")[0];
bar.addEventListener("click", function(){
    if (nav.style.display == "none"){
        nav.style.display = "block";
        nav_t.style.transform = "rotate(27deg)";
        nav_b.style.transform = "rotate(-27deg)";
        nav_m.style.opacity = 0;
    }else{
        MenuClose();
    }
})
let lis = document.getElementsByTagName("li");
for (const li of lis){
    li.addEventListener("click", function(){
        MenuClose();
    })
}
function MenuClose(){
    nav.style.display = "none";
    nav_t.style.transform = "rotate(0deg)";
    nav_b.style.transform = "rotate(0deg)";
    nav_m.style.opacity = 1;
}

// load's design
setTimeout(function(){
    document.getElementById("load").style.display = "none";
}, 2000);
