// menu 設定
let nav = document.getElementsByTagName("nav")[0];
let menu = document.getElementsByTagName("menu")[0];
let liList = document.getElementsByClassName("liList");
let bool = true;
nav.addEventListener("click", function(){
    if(bool){
        menu.style.display = "block";
        this.children[0].style.transform = "rotate(26deg)";
        this.children[2].style.transform = "rotate(-26deg)";
        this.children[1].style.opacity = 0;

        // MENU 內容點選
        for (const lis of liList) {
            lis.addEventListener("click", function(){
                menu.style.display = "none";
                nav.children[0].style.transform = "rotate(0deg)";
                nav.children[2].style.transform = "rotate(0deg)";
                nav.children[1].style.opacity = 1;
                bool = !bool;
            })
    }

    }else{
        menu.style.display = "none";
        this.children[0].style.transform = "rotate(0deg)";
        this.children[2].style.transform = "rotate(0deg)";
        this.children[1].style.opacity = 1;

        
    }
    bool = !bool;


})
// 透過js產生元件與設定css
// gotop
let gotop = document.createElement("a");
gotop.setAttribute("href", "#");
gotop.setAttribute("id", "gotop");
gotop.setAttribute("class", "fa-solid fa-angle-up");
gotop.style.position = "fixed";
gotop.style.right = "1em";
gotop.style.bottom = "1em";
gotop.style.backgroundColor = "#00000088";
gotop.style.color = "#ffffff";
gotop.style.width = "2em";
gotop.style.height = "2em";
gotop.style.borderRadius = "10px";
gotop.style.lineHeight = "2em";
gotop.style.textAlign = "center";
gotop.style.display = "block";
gotop.style.zIndex = 50;



document.getElementsByTagName("body")[0].appendChild(gotop);

// year 設定
let d = new Date();
let footeryear = document.getElementsByClassName("year");
for (const year of footeryear) {
        year.textContent = new Date().getFullYear();
}
