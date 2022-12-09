var inputColor = document.querySelector("button")
var password = document.getElementById("password")
var Confirm = document.getElementById("confirmation")
inputColor.onclick = () => {
    if (password.value != Confirm.value){
        password.style.border="3px solid red"
        Confirm.style.border="3px solid red"
    }
}