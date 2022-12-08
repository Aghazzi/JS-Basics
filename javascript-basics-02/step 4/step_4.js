document.querySelector("button").onclick=()=> {
        gg=document.getElementById("name");
        document.getElementById("surname");
        document.getElementById("city");
    if (confirm("Do you want to clear Fields?")){
        gg.value = "";
        surname.value = "";
        city.value = "";
    }
    }