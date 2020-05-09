var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

ourList.addEventListener("click", acticateItem);

function acticateItem(e) {
if(e.target.nodeName == "LI") {
    ourHeadline.innerHTML = e.target.innerHTML;
    for(let i = 0; i< e.target.parentNode.children.length; i++){
        e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active"); 
}
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++;
}