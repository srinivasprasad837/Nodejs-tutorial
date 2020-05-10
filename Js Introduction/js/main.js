var newitemcounter = 1;
var ourlist = document.getElementById('grocery-list');
var ourButton = document.getElementById('our-button');
var ourHeadline = document.getElementById('our-headline');
var listItems = document
  .getElementById('grocery-list')
  .getElementsByTagName('li');

// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('click', activateItem);
// }
ourlist.addEventListener('click', activateItem);
function activateItem(event) {
  //   alert('click detected');
  if (event.target.nodeName == 'LI') {
    ourHeadline.innerHTML = event.target.innerHTML;
    for (var i = 0; i < event.target.parentNode.children.length; i++) {
      //   listItems[i].classList.remove('active');
      event.target.parentNode.children[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
}
ourButton.addEventListener('click', addnewitem);

function addnewitem(event) {
  ourlist.innerHTML += '<li>new item ' + newitemcounter + '</li>';
  newitemcounter++;
}
