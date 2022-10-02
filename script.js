//Required: Users can edit tasks. 2 points
//Required: my animation may count may not
//Requred: Users can create any number of To-Do lists and give them a name 2 points
//Above are unfinished criteria 20/(19) points worth are finished already
const lists = [
    {name: 'Shopping List'},
    {name: 'Honey Do List'},
    {name: 'Other List'}
];
let newList = [];
let newArray = [[],[],[],[]];
let firstList = (lists[0].name);
console.log(firstList)
const firstListArray = {                                                 
    name: "Shopping List",                                             
    todo: [                                                            
        {                                                              
            text: 'Bananas',                                           
            completed: false                                           
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
let secondList = (lists[1].name);
let secondListArray = {
    name: "Honey Do List",
    todo: [
       { text: "Change Lock",
         completed: false
        } ,
        { text: "Clean Car",
          completed: false
        } ,
        { text: "Go to Dump", 
          completed: false
        } ,
        { text: "Paint Bedroom",
          completed: false
}]}

let thirdList = (lists[2].name);
let thirdListArray = { 
    name: 'Other List',
    todo: [
            {text: "First Item",
             completed: false,
            },
            {text:"Second Item",
             completed: false,
            },
            {text:"Third Item",
              completed: false
            }]}

    let newListInput = document.createElement('input');                 //creates input called newListInput
    newListInput.setAttribute('id', 'newShoppingList');                 //gives it an id
    newListInput.setAttribute('type', "text"); 
    function save(){
        document.createElement(localStorage.getItem('newListObject').text)
    }
    
    window.setInterval(function(){
        function checkboxIsFilled(){
            let checkboxes = document.getElementById('checkboxId');
            if(checkboxes.checked === true) {
                checkboxes.parentElement.style.backgroundColor = "rgb(51, 194, 120)"
                window.setInterval(function(){
                    
                    checkboxes.parentElement.remove();
                }, 1000)
                
          
        }
    
        else {
            console.log('Boxes Not Checked!')
           }
        
        }
        checkboxIsFilled();
      }, 2000);
  
    
    

        
      
//---------------------------------------------------------------------------------------------------------------------------------------------------
// function render(){
// let listsHtml = `<ul class= "list-group"</ul>`
// lists.forEach((list) => {
// listsHtml += `<li class="list-group-item">${list.name}</li>`
// });
// listsHtml += `</ul>`;
// document.getElementById('sideUl').innerHTML = listsHtml;
// document.getElementById('listOfToDos').innerHTML = firstListArray.name;
// let todosHtml = `<ul class = "list-group-flush">`;
// firstListArray.todos.forEach(() => {
// todosHtml += `<li class = "list-group-item"> ${todo.text}</li>`;
// } );
// document.getElementById('ul').innerHTML = todosHtml;
// function save() {
//     localStorage.setItem('currentList', JSON.stringify(currentList)); 
//     localStorage.setItem('lists', JSON.stringify(lists));
//    }
//    save();
// }



function taskTrash(){
document.getElementById('taskTrash').parentElement.remove()
}
function taskEdit(){

let editText = document.createElement('input');
editText.setAttribute('type','text')
editText.setAttribute('id','editText')
let editButton = document.createElement('input');
editButton.setAttribute('type','submit')
editButton.setAttribute('id','editButton')
editButton.setAttribute('onclick', 'editList()')
editButton.append('this')
document.getElementById('listItem').append(editText)
document.getElementById('listItem').append(editButton)
//add These (editText);
//add These (editButton);

}
function editList(){
 let list = document.getElementById('listItem')
 list.innerHTML = editText.value
 console.log(list)

let checkbox = document.getElementById('checkboxId')
let edit = document.getElementById('taskEdit')
let trash = document.getElementById('taskTrash')
list.prepend(checkbox)
list.append(edit)
list.append(trash)
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Renders the ShoppingList
function loopList(){
for (let i of currentList) {
    var li = document.createElement("li"); li.innerHTML = i.text; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
    li.className += " list-group-item";
    li.setAttribute('id', 'listItem')
    //------------------------------------------------------------------------------
    let input = document.createElement('input');
    input.type = "checkbox";                                                       //Putting Checkboxes in
    input.className = "checkbox";
    input.setAttribute('id', 'checkboxId');
    input.style.position = "relative"
    let trash = document.createElement('i');
    trash.className = "fa fa-trash red _10px sideList";
    trash.setAttribute('onclick', "taskTrash()")
    trash.setAttribute('id', "taskTrash")
    trash.style.position = "absolute"
    trash.style.right = "10px"
    let edit = document.createElement('i');
    edit.className = "fa fa-pencil edit _10px"
    edit.setAttribute('onclick', 'taskEdit()')
    edit.setAttribute('id', 'taskEdit')
    edit.style.position = "absolute";
    edit.style.right = "60px"
    li.prepend(input);
    li.append(edit);
    li.append(trash)
    //--------------------------------------------------
   }
}
let currentList;
let currentToDo;
function shoppingList(){
    currentList = firstListArray.todo;
    currentToDo = firstList;
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    let listH1 = document.getElementById('listOfToDos');
    listH1.innerHTML = currentToDo;
save();
var ul = document.getElementById('ul')
console.log(currentList)
loopList();
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
    currentList = secondListArray.todo
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    save();
    let listH1 = document.getElementById('listOfToDos');
    listH1.innerHTML = secondList;
    loopList();
    let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(icon)
    icon.setAttribute('onclick', 'addWithinHoney()')
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Renders the otherList
function otherList(){
    function clear(){
        currentList = thirdListArray.todo;
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
     
    }
    clear();
    save();
    let listH1 = document.getElementById('listOfToDos');
    listH1.innerHTML = thirdList;
    loopList();
    let div = document.createElement('div');
    let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(div)
    div.appendChild(icon)
    icon.setAttribute('onclick', 'addWithinOther()')
}

function selectList(){
    currentList = newArray[0];
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    save();                                                                             
   let listHeading = document.getElementById('enterListName').value; 
   let listh1 = document.getElementById('listOfToDos')                                                               
   let listTitle = document.createElement('h1');                                                       // Creates h1 Element
   listTitle.innerHtml = listHeading;
   listh1.prepend(listHeading)
   let icon = document.createElement('i')
   icon.className = "fa fa-pencil"
   icon.setAttribute('id', 'addList')
   icon.setAttribute('onclick', 'addWithinAdd()')
    loopList();
    ul.append(icon)

}
   
function addList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    save();
    let div = document.createElement('div');
    div.className = 'd-flex space'
    div.setAttribute('id', 'addDiv')
    var li = document.createElement("li");                                                              // creates list
    li.className += " list-group-item list-group-item list-group-item-action list-group-item-primary sideList" // Adds the classes to list
    li.setAttribute('onclick', 'selectList()')
    li.setAttribute('id', 'newSideList')
    let sideUl = document.getElementById('sideUl');                                                     // Gets Ul (list's Parent Element)
    sideUl.append(div);
    div.appendChild(li)  
    let trashIcon = document.createElement('i');
    trashIcon.className = "fa fa-trash red _10px sideList";
    trashIcon.setAttribute('id', 'newTrash');
    trashIcon.setAttribute('onclick', 'takeNewTrash()')
    div.appendChild(trashIcon)                                                                                                    
    let listHeading = document.getElementById('enterListName').value; 
    let listh1 = document.getElementById('listOfToDos')                                                               
    let listTitle = document.createElement('h1');                                                       // Creates h1 Element
    listTitle.innerHtml = listHeading;
    listh1.prepend(listHeading)
    let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(icon)
    icon.setAttribute('onclick', 'addWithinAdd()')
    newList.push(listHeading)                                 
    console.log(listHeading)
    li.prepend(listHeading);                                                                   // Puts inputs value in list item
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// trash icon and function for ShoppingList
function takeShoppingTrash(){
    function clear(){
    console.log("IT WORKS");

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
function takeNewTrash(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
        document.getElementById('newSideList').remove();
        document.getElementById('newTrash').remove();
    }
    clear();

}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// The function for the green ADD pencil
function addWithinShopping(){
    let ul = document.getElementById('ul');
   // let icon = document.getElementById('addList');
    
    console.log(newListInput)                         //Makes it a text input
   ul.append(newListInput);                                          //appends NewListInput to list           
    let thesubmitButton = document.createElement('input');                 //Creates another input
    thesubmitButton.setAttribute('type', 'submit');    //Makes it a submit button
    thesubmitButton.setAttribute('onclick', 'submitButtonShop()'); 
    thesubmitButton.setAttribute('id', 'submitId')            //adds an onclick that runs submitInput function
    ul.append(thesubmitButton)                                            //appends submit button to Unordered list
  
}
function addWithinHoney(){
    let ul = document.getElementById('ul');
   // let icon = document.getElementById('addList');
    
    console.log(newListInput)                         //Makes it a text input
   ul.append(newListInput);                                          //appends NewListInput to list           
    let thesubmitButton = document.createElement('input');                 //Creates another input
    thesubmitButton.setAttribute('type', 'submit');    //Makes it a submit button
    thesubmitButton.setAttribute('onclick', 'submitButtonHoney()'); 
    thesubmitButton.setAttribute('id', 'submitId')            //adds an onclick that runs submitInput function
    ul.append(thesubmitButton)                                            //appends submit button to Unordered list
  
}
function addWithinOther(){
    let ul = document.getElementById('ul');
   // let icon = document.getElementById('addList');
    
    console.log(newListInput)                         //Makes it a text input
   ul.append(newListInput);                                          //appends NewListInput to list           
    let thesubmitButton = document.createElement('input');                 //Creates another input
    thesubmitButton.setAttribute('type', 'submit');    //Makes it a submit button
    thesubmitButton.setAttribute('onclick', 'submitButtonOther()'); 
    thesubmitButton.setAttribute('id', 'submitId')            //adds an onclick that runs submitInput function
    ul.append(thesubmitButton)                                            //appends submit button to Unordered list
  
}
function addWithinAdd(){
    let ul = document.getElementById('ul');
   // let icon = document.getElementById('addList');
    
    console.log(newListInput)                         //Makes it a text input
   ul.append(newListInput);                                          //appends NewListInput to list           
    let thesubmitButton = document.createElement('input');                 //Creates another input
    thesubmitButton.setAttribute('type', 'submit');    //Makes it a submit button
    thesubmitButton.setAttribute('onclick', 'submitButtonAdd()'); 
    thesubmitButton.setAttribute('id', 'submitId')            //adds an onclick that runs submitInput function
    ul.append(thesubmitButton)                                            //appends submit button to Unordered list
  
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// The submit button under the lists
function submitButtonShop(){
    let theValue = document.getElementById('newShoppingList');
    let itemInner = theValue.value
    let ul = document.getElementById('ul');
    let li = document.createElement('li')
    li.innerHTML = itemInner;
    li.className = 'list-group-item';
    ul.prepend(li)
    localStorage.setItem('newListInput', newListInput);
  
   let newlistObject = {text: `${itemInner}`, completed: false}
   firstListArray.todo.push(newlistObject)
    let input = document.createElement('input');
    input.type = "checkbox";                                                       //Putting Checkboxes in
    input.className = "checkbox";
    input.setAttribute('id','checkboxId')
    li.prepend(input);
    function removeinputsubmit(){
       let submitClear = document.getElementById('submitId');
       let inputClear =  document.getElementById('newShoppingList');
       submitClear.remove()
       inputClear.remove()

    }
    removeinputsubmit();
    console.log(firstListArray)
}
function submitButtonOther(){
    let theValue = document.getElementById('newShoppingList');
    let itemInner = theValue.value
    let ul = document.getElementById('ul');
    let li = document.createElement('li')
    li.innerHTML = itemInner;
    li.className = 'list-group-item';
    ul.prepend(li)
    localStorage.setItem('newListInput', newListInput);
  
   let newlistObject = {text: `${itemInner}`, completed: false}
   thirdListArray.todo.push(newlistObject)
    let input = document.createElement('input');
    input.type = "checkbox";                                                       //Putting Checkboxes in
    input.className = "checkbox";
    input.setAttribute('id', 'checkboxId')
    li.prepend(input);
    function removeinputsubmit(){
       let submitClear = document.getElementById('submitId');
       let inputClear =  document.getElementById('newShoppingList');
       submitClear.remove()
       inputClear.remove()

    }
    removeinputsubmit();
    console.log(thirdListArray)
}
function submitButtonHoney(){
    let theValue = document.getElementById('newShoppingList');
    let itemInner = theValue.value
    let ul = document.getElementById('ul');
    let li = document.createElement('li')
    li.innerHTML = itemInner;
    li.className = 'list-group-item';
    ul.prepend(li)
    localStorage.setItem('newListInput', newListInput);
  
   let newlistObject = {text: `${itemInner}`, completed: false}
   secondListArray.todo.push(newlistObject)
    let input = document.createElement('input');
    input.type = "checkbox";                                                       //Putting Checkboxes in
    input.className = "checkbox";
    input.setAttribute('id', 'checkboxId')
    li.prepend(input);
    function removeinputsubmit(){
       let submitClear = document.getElementById('submitId');
       let inputClear =  document.getElementById('newShoppingList');
       submitClear.remove()
       inputClear.remove()

    }
    removeinputsubmit();
    console.log(secondListArray)
}
function submitButtonAdd(){
    let theValue = document.getElementById('newShoppingList');
    let itemInner = theValue.value
    let ul = document.getElementById('ul');
    let li = document.createElement('li')
    li.innerHTML = itemInner;
    li.className = 'list-group-item';
    ul.prepend(li)
    localStorage.setItem('newListInput', newListInput);
    localStorage.setItem('newList', newList);
  
   let newlistObject = {text: `${itemInner}`, completed: false}
   newArray[0].push(newlistObject)
    let input = document.createElement('input');
    input.type = "checkbox";                                                       //Putting Checkboxes in
    input.className = "checkbox";
    input.setAttribute('id', 'checkboxId')
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



