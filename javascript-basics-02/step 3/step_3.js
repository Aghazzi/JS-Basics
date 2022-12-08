var g = document.createElement("div");
document.querySelector("body").appendChild(g);
document.getElementById("name").onkeyup=()=>{
a=document.getElementById("name").value;
g.innerHTML=a
}