const lists = {
    1: {name: 'Shopping List'},
    2: {name: 'Honey Do List'},
    3: {name: 'Other List'}
};
let newArray = [];
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
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Renders the ShoppingList
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
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Renders the honeyDoList
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
    icon.setAttribute('onclick', 'addWithinShopping()')

}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Renders the otherList
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
       let div = document.createElement('div');
       let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(div)
    div.appendChild(icon)
    icon.setAttribute('onclick', 'addWithinShopping()')
    // icon.onclick = function() {addWithinShopping();
    // }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Function for adding lists on the sideUl
function addList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    let div = document.createElement('div');
    div.className = 'd-flex space'
    div.setAttribute('id', 'addDiv')
    var li = document.createElement("li");                                                              // creates list
    li.className += " list-group-item list-group-item list-group-item-action list-group-item-primary sideList";  // Adds the classes to list
    let sideUl = document.getElementById('sideUl');                                                     // Gets Ul (list's Parent Element)
    sideUl.append(div);
    div.appendChild(li)                                                                                  // puts Created list at front in Ul
    let trashIcon = document.createElement('i');
    trashIcon.className = "fa fa-trash red _10px sideList";
    trashIcon.setAttribute('id', 'newTrash');
    div.appendChild(trashIcon)                                                                                                    
   let listHeading = document.getElementById('enterListName').value;                                    // Gets value of input
    li.prepend(listHeading);                                                                             // Puts inputs value in list item
    let listh1 = document.getElementById('listOfToDos')                                                               
    let listTitle = document.createElement('h1');                                                       // Creates h1 Element
    listTitle.innerHtml = listHeading;
    listh1.prepend(listHeading)
    let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(icon)
    icon.setAttribute('onclick', 'addWithinAdd()')
    icon.onclick = function() {addWithinShopping();
    }
    console.log('all of this')
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
// trash icon and function for ShoppingList
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
//---------------------------------------------------------------------------------------------------------------------------------------------------
// trash icon and function for HoneyDoList

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
//---------------------------------------------------------------------------------------------------------------------------------------------------
// trash icon and function for OtherList
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
//---------------------------------------------------------------------------------------------------------------------------------------------------
// The function for the green ADD pencil
function addWithinShopping(){
    console.log('this')
    let ul = document.getElementById('ul');
   // let icon = document.getElementById('addList');
    let newListInput = document.createElement('input');                 //creates input called newListInput
    newListInput.setAttribute('id', 'newShoppingList');                 //gives it an id
    newListInput.setAttribute('type', "text"); 
    console.log(newListInput)                         //Makes it a text input
    ul.append(newListInput);                                          //appends NewListInput to list
    console.log('first test')            
    let thesubmitButton = document.createElement('input');                 //Creates another input
    thesubmitButton.setAttribute('type', 'submit'); console.log('second Test')      //Makes it a submit button
    thesubmitButton.setAttribute('onclick', 'submitButton()');console.log('three') 
    thesubmitButton.setAttribute('id', 'submitId')            //adds an onclick that runs submitInput function
    ul.append(thesubmitButton)                                            //appends submit button to Unordered list
    
  
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// The submit button under the lists
function submitButton(){
    let theValue = document.getElementById('newShoppingList');
    let itemInner = theValue.value
    let ul = document.getElementById('ul');
    let li = document.createElement('li')
    li.innerHTML = itemInner;
    li.className = 'list-group-item';
    ul.prepend(li)
    console.log('listed')
   
    let input = document.createElement('input');
    input.type = "checkbox";                                                       //Putting Checkboxes in
    input.className = "checkbox";
    input.setAttribute('id', 'inputBox')
    li.prepend(input);
    function removeinputsubmit(){
       let submitClear = document.getElementById('submitId');
       let inputClear =  document.getElementById('newShoppingList');
       submitClear.remove()
       inputClear.remove()

    }
    removeinputsubmit();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function notNamed(){
let checkboxes = document.getElementById('inputBox');
if(checkboxes === true){
    console.log('True')
}
else {
    console.log('False')
}
}
