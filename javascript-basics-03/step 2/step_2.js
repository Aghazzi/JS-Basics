var showLink = document.getElementById("show");
var hideLink = document.getElementById("hide");
var parag = document.getElementById('texte')

showLink.onclick = () => {
    showHideText('show')
}

hideLink.onclick = () => {
    showHideText('hide')
}

const showHideText = (name) => {
    if(name == 'show') {
        parag.style.display = 'block'
    } else {
        parag.style.display = 'none'
    }
}
