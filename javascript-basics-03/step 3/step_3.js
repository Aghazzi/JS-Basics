document.querySelectorAll(".color").forEach(e => {
    e.onclick=(e)=>{
        if(e.target.className=="color green"){
            document.getElementById("text").style.color="green"
        }
        else if(e.target.className=="color red"){
            document.getElementById("text").style.color="red"
        }
        else {
            document.getElementById("text").style.color="blue"
        }
    }
});