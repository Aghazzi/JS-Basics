var images = document.querySelectorAll("img");
 images.forEach(function(e){
    e.addEventListener("mouseover", function(e){
        e.target.src=`images/${e.target.id}_2.jpg`
     })
 })