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
/*  --------------------------------------------------------------------
const currentList = {                                                  |
    name: "Shopping List",                                             | 
    todo: [                                                            | Recommended Code But First Trying My Own Method
        {                                                              | 
            text: 'Bananas',                                           | 
            completed: false                                           | 
        },
        {
            text: 'Oranges',
            completed: false
        },
        {
            text: 'Steak',
            completed: false
        },
        {
            text: 'Onion',
            completed: false
        },
        {
            text: 'Bread',
            completed: false
        }
     ]
}
-------------------------------------------------------------------------
*/
//if(){}

function shoppingList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    let listH1 = document.getElementById('listOfToDos');
let listTitle = document.createElement('h1');
listTitle.innerHTML = "Shopping List";
listH1.prepend(listTitle);

var ul = document.getElementById('ul')
for (let i of firstListArray) {
     var li = document.createElement("li"); li.innerHTML = i; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
     li.className += " list-group-item";
     //------------------------------------------------------------------------------
     let input = document.createElement('input');
     input.type = "checkbox";                                                       //Putting Checkboxes in
     input.className = "checkbox";
     input.setAttribute('id', 'inputBox')
     li.prepend(input);
     //--------------------------------------------------
    }
    let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(icon)
}

function honeyDoList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    let listh1 = document.getElementById('listOfToDos');
    let listTitle = document.createElement('h1');
    listTitle.innerHTML = "Honey Do List";
    listh1.prepend(listTitle);
    for (let i of secondListArray) {
        var li = document.createElement("li"); li.innerHTML = i; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
        li.className += " list-group-item";
        //------------------------------------------------------------------------------
        let input = document.createElement('input');
        input.type = "checkbox";                                                       //Putting Checkboxes in
        input.className = "checkbox";
        input.setAttribute('id', 'inputBox')
        li.prepend(input);
        //--------------------------------------------------
       }
       let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(icon)
}
function otherList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
     
    }
    clear();
    let listh1 = document.getElementById('listOfToDos');
    let listTitle = document.createElement('h1');
    listTitle.innerHTML = "Other List";
    listh1.prepend(listTitle);
    for (let i of thirdListArray) {
        var li = document.createElement("li"); li.innerHTML = i; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
        li.className += " list-group-item";
        //------------------------------------------------------------------------------
        let input = document.createElement('input');
        input.type = "checkbox";                                                       //Putting Checkboxes in
        input.className = "checkbox";
        input.setAttribute('id', 'inputBox')
        li.prepend(input);
        //--------------------------------------------------
       }
       let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(icon)
    icon.setAttribute('onclick', 'addWithinShopping()')
    icon.onclick = function() {addWithinShopping();
    }
}
function addList(){
    var li = document.createElement("li");                                                              // creates list
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
let inputBox = document.getElementById('inputBox');
    if(inputBox === true) {
        console.log("IT IS TRUE")
    }
function takeShoppingTrash(){
    console.log("IT WORKS");
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
        document.getElementById('sideShoppingList').remove();
        document.getElementById('shoppingTrashIcon').remove();
     
    }
    clear();
    
}
function takeHoneyTrash(){
    console.log("IT WORKS");
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
        document.getElementById('sideHoneyList').remove();
        document.getElementById('honeyTrashIcon').remove();
     
    }
    clear();
    
}
function takeOtherTrash(){
    console.log("IT WORKS");
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
        document.getElementById('sideOtherList').remove();
        document.getElementById('otherTrashIcon').remove();
    }
    clear();
    
}
function addWithinShopping(){
    console.log('this')
    let li = document.getElementById('li')                              //gets list
    let newListInput = document.createElement('input');                 //creates input called newListInput
    newListInput.setAttribute('id', 'newShoppingList');                 //gives it an id
    newListInput.setAttribute('type', "text");                          //Makes it a text input
    ul.appendChild(newListInput);                                            //appends NewListInput to list
    console.log('first test')            
    let submitButton = document.createElement('input');                 //Creates another input
    submitButton.setAttribute('type', 'submit'); console.log('second Test')      //Makes it a submit button
    submitButton.setAttribute('onclick', 'submitInput();');console.log('three')             //adds an onclick that runs submitInput function
    submitButton.append('ul')                                            //appends submit button to Unordered list
    let inputsValue = newListInput.value;
    function submitInput(){
    thirdListArray.push(inputsValue)
    console.log('end')
    }
    submitInput();
}