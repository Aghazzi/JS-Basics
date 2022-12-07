document.getElementById("validate").onclick = function() {
    shoe_size=document.getElementById("shoe_size").value, year=document.getElementById("year").value;
    alert((shoe_size*2+5)*50-year+1766);
}