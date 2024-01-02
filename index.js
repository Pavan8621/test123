alert('js is called');
// let button = document.getElementById("submit");
// let newitem = document.getElementById('inputitem');
// let list = document.getElementById('list');


// button.addEventListener("click", function(event){
    
//     console.log('button is clicked');
//     let textnode = document.createTextNode(newitem.value);

//     let newlistItem = document.createElement("li");

//     newlistItem.appendChild(textnode);

//     list.appendChild(newlistItem);
// })


// reach into DOM and get the button, 
// input, and button
let button = document.getElementById("submit");
let newItem = document.getElementById("iteminput");
let theList = document.getElementById("thelist");

//Modify DOM by adding click to the button
button.addEventListener("click", function(event){
  
    // turn text input value into HTML text node
    let textNode = document.createTextNode(newItem.value);
  
 
    //create an li DOM node to insert into the list
    let newListItem = document.createElement("li");
  
    //insert text node into new li node
    newListItem.appendChild(textNode);
  
    //insert li into the ul list
    theList.appendChild(newListItem);
  
});