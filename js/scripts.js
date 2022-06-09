function openBarrel(){
    document.getElementById("openedItem").style.display = "block"
    document.getElementById("background").style.filter = "blur(5px)"
}

function closeBarrel(){
    document.getElementById("openedItem").style.display = "none"
    document.getElementById("background").style.filter = "blur(0px)"
}