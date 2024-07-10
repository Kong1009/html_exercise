let load = document.createElement("div");
load.setAttribute("id", "load");
for(i=0; i < 5; i++){
    let Loadbox = document.createElement("div");
    Loadbox.setAttribute("class", "box");
    load.appendChild(Loadbox);
}
document.getElementsByTagName("body")[0].appendChild(load);

setTimeout(function(){
    load.remove();
}, 2000);