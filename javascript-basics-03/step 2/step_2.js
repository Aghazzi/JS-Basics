// var showLink = document.getElementById("show");
// var hideLink = document.getElementById("hide");
// var parag = document.getElementById('texte')

// showLink.onclick = () => {
//     showHideText('show')
// }

// hideLink.onclick = () => {
//     showHideText('hide')
// }

// const showHideText = (name) => {
//     if(name == 'show') {
//         parag.style.display = 'block'
//     } else {
//         parag.style.display = 'none'
//     }
// }
document.querySelectorAll("a").forEach(e => {
    e.onclick=(e)=>{
        if(e.target.id=="show"){
            document.getElementById("texte").style="color:black;"
        }
        else if(e.target.id=="hide"){
            document.getElementById("texte").style.color="transparent"
        }
    }
});
// const show_hide = (show , hide , targetText) => {
//     show.onclick = () => {
//         targetText.style.display = "block"
//     }
//     hide.onclick = () => {
//         targetText.style.display = "none"
//     }
// }

// const show = document.getElementById('show')
// const hide = document.getElementById('hide')
// const text = document.getElementById('texte')
// show_hide(show , hide , text)