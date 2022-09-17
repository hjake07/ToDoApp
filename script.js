const lists = {
    1: {name: 'Shopping List'},
    2: {name: 'Honey Do List'},
    3: {name: 'Other List'}
};
let firstList = (lists[1]).name;
let firstListArray = ["Bananas", "Oranges", "Steak", "Onion", "Bread"]
let secondList = (lists[2]).name;
let secondListArray = ["Change Lock", "Clean Car", "Go to Dump", "Paint Bedroom"]
let thirdList = (lists[3]).name;
let thirdListArray = ["First Item", "Second Item", "Third Item"]

const currentList = {
    firstList,
}


function shoppingList(){
let listH1 = document.getElementById('listOfToDos');
let listTitle = document.createElement('h1');
listTitle.innerHTML = "Shopping List";
listH1.prepend(listTitle);

var ul = document.getElementById('ul')
for (let i of firstListArray) {
     let li = document.createElement("li"); li.innerHTML = i; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
     li.className += " list-group-item";
     //------------------------------------------------------------------------------
     let input = document.createElement('input');
     input.type = "checkbox";                                                       //Putting Checkboxes in
     input.className = "checkbox";
     li.prepend(input);
     //--------------------------------------------------
    }
}
function honeyDoList(){
    let listh1 = document.getElementById('listOfToDos');
    let listTitle = document.createElement('h1');
    listTitle.innerHTML = "Honey Do List";
    listh1.prepend(listTitle);
    for (let i of secondListArray) {
        let li = document.createElement("li"); li.innerHTML = i; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
        li.className += " list-group-item";
        //------------------------------------------------------------------------------
        let input = document.createElement('input');
        input.type = "checkbox";                                                       //Putting Checkboxes in
        input.className = "checkbox";
        li.prepend(input);
        //--------------------------------------------------
       }
}
function otherList(){
    let listh1 = document.getElementById('listOfToDos');
    let listTitle = document.createElement('h1');
    listTitle.innerHTML = "Other List";
    listh1.prepend(listTitle);
    for (let i of thirdListArray) {
        let li = document.createElement("li"); li.innerHTML = i; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
        li.className += " list-group-item";
        //------------------------------------------------------------------------------
        let input = document.createElement('input');
        input.type = "checkbox";                                                       //Putting Checkboxes in
        input.className = "checkbox";
        li.prepend(input);
        //--------------------------------------------------
       }
}
function addList(){
    let li = document.createElement("li");                                                              // creates list
    li.className += " list-group-item list-group-item list-group-item-action list-group-item-primary";  // Adds the classes to list
    let sideUl = document.getElementById('sideUl');                                                     // Gets Ul (list's Parent Element)
    sideUl.prepend(li);                                                                                 // puts Created list at front in Ul
   let listHeading = document.getElementById('enterListName').value;                                    // Gets value of input
    li.prepend(listHeading);                                                                             // Puts inputs value in list item
    let listh1 = document.getElementById('listOfToDos')                                                               
    let listTitle = document.createElement('h1');                                                       // Creates h1 Element
    listTitle.innerHtml = listHeading;
    listh1.prepend(listHeading)
}