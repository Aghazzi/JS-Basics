var newDiv = document.createElement("div");
 document.querySelector("body").appendChild(newDiv);
var input = document.getElementById("name");
input.onkeyup = () => {
    newDiv.innerHTML = input.value
}