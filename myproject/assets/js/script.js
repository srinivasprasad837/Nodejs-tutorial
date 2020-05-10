// var groceryListTag = document.querySelector("#grocery-list");
// var textBoxElement =  document.querySelector("#text_box_id");
// var ourButton = document.querySelector("#our-button");
// // var ourHeadline = document.querySelector("#our-headline");
// // var listItems = document.getElementById('grocery-list').getElementsByTagName('li');


// // groceryListTag.addEventListener('click', activateItem);
// // function activateItem(event) {
// //     //   alert('click detected');
// //     if (event.target.nodeName == 'LI') {
// //         ourHeadline.innerHTML = event.target.innerHTML;
// //         for (var i = 0; i < event.target.parentNode.children.length; i++) {
// //             event.target.parentNode.children[i].classList.remove('active');
// //         }
// //         event.target.classList.add('active');


// //     }
// // }
// // ourButton.addEventListener('click', addnewitem);

// function insertItemClickHandler(event) {
//     var name = textBoxElement.value;
//     var reqJSON = {
//         "name": name
//     }

//     fetch('http://localhost:3002/insertgroceries', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(reqJSON)
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(resJSON) {
//             var listitems = ""
//             for (var i = 0; i < resJSON.data.length; i++) {
//                     var listitem = listitem + "<li>"+resJSON.data[i]+"</li>";
//                 }

//         });
//     groceryListTag.innerHTML += '<li>new item ' + newitemcounter + '</li>';
//     newitemcounter++;
// }













// function selectitem() {
//     fetch('http://localhost:3002/selectgroceries', {
//         method: 'get'
//     })
//         .then(response => response.json())
//         .then(data => console.log(data));
// }


// function insertitem(name) {
//     var reqJSON = {
//         "name": name
//     }

//     fetch('http://localhost:3002/insertgroceries', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(reqJSON)
//     })
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// function deleteitem(id) {
//     fetch('http://localhost:3002/deletegroceries?id=' + id, {
//         method: 'delete'
//     })
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// function updateitem(id, name) {
//     var reqJSON = {
//         "id": id,
//         "name": name
//     }
//     fetch('http://localhost:3002/updategroceries', {
//         method: 'put',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(reqJSON)
//     })
//         .then(response => response.json())
//         .then(data => console.log(data));
// }
