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




// function taskTrash(id){
//     document.getElementById(`taskTrash${id}`).parentElement.remove()
// }




// function taskEdit(id) {
//     let editText = document.createElement('input');
//     editText.setAttribute('type','text')
//     editText.setAttribute('id','editText')
//     let editButton = document.createElement('input');
//     editButton.setAttribute('type','submit')
//     editButton.setAttribute('id','editButton')
//     editButton.setAttribute('onclick', `editList(${id})`)
//     document.getElementById('listItem1').append(editText)
//     document.getElementById('listItem1').append(editButton)
//     localStorage.setItem('listItem1', listItem1)    
// }

function taskEdit1(){
let editText = document.createElement('input');
editText.setAttribute('type','text')
editText.setAttribute('id','editText')
let editButton = document.createElement('input');
editButton.setAttribute('type','submit')
editButton.setAttribute('id','editButton')
editButton.setAttribute('onclick', 'editList1()')
document.getElementById('listItem1').append(editText)
document.getElementById('listItem1').append(editButton)
localStorage.setItem('listItem1', listItem1)
}
function taskEdit2(){
let editText = document.createElement('input');
editText.setAttribute('type','text')
editText.setAttribute('id','editText')
let editButton = document.createElement('input');
editButton.setAttribute('type','submit')
editButton.setAttribute('id','editButton')
editButton.setAttribute('onclick', 'editList2()')
document.getElementById('listItem2').append(editText)
document.getElementById('listItem2').append(editButton)
localStorage.setItem('listItem2', listItem2)
}
function taskEdit3(){
let editText = document.createElement('input');
editText.setAttribute('type','text')
editText.setAttribute('id','editText')
let editButton = document.createElement('input');
editButton.setAttribute('type','submit')
editButton.setAttribute('id','editButton')
editButton.setAttribute('onclick', 'editList3()')
document.getElementById('listItem3').append(editText)
document.getElementById('listItem3').append(editButton)
localStorage.setItem('listItem3', listItem3)
}
function taskEdit4(){
let editText = document.createElement('input');
editText.setAttribute('type','text')
editText.setAttribute('id','editText')
let editButton = document.createElement('input');
editButton.setAttribute('type','submit')
editButton.setAttribute('id','editButton')
editButton.setAttribute('onclick', 'editList4()')
document.getElementById('listItem4').append(editText)
document.getElementById('listItem4').append(editButton)
localStorage.setItem('listItem4', listItem4)
}
function taskEdit5(){
let editText = document.createElement('input');
editText.setAttribute('type','text')
editText.setAttribute('id','editText')
let editButton = document.createElement('input');
editButton.setAttribute('type','submit')
editButton.setAttribute('id','editButton')
editButton.setAttribute('onclick', 'editList5()')
document.getElementById('listItem5').append(editText)
document.getElementById('listItem5').append(editButton)
localStorage.setItem('listItem5', listItem5)
}
function taskEdit6(){
let editText = document.createElement('input');
editText.setAttribute('type','text')
editText.setAttribute('id','editText')
let editButton = document.createElement('input');
editButton.setAttribute('type','submit')
editButton.setAttribute('id','editButton')
editButton.setAttribute('onclick', 'editList6()')
document.getElementById('listItem6').append(editText)
document.getElementById('listItem6').append(editButton)
localStorage.setItem('listItem6', listItem6)
}
// function editList(id){
//     let list = document.getElementById('listItem1')
//     list.innerHTML = editText.value
//     console.log(list)
//     let trash = document.createElement('i');
//     trash.className = "fa fa-trash red _10px sideList";
//     trash.setAttribute('onclick', `taskTrash()`)
//     trash.setAttribute('id', "taskTrash"+ id)
//     trash.style.position = "absolute"
//     trash.style.right = "10px"
//     let edit = document.createElement('i');
//     edit.className = "fa fa-pencil edit _10px"
//     edit.setAttribute('onclick', `taskEdit(${id})`)
//     edit.setAttribute('id', `taskEdit(${id})`)
//     edit.style.position = "absolute";
//     edit.style.right = "60px"
//    let checkbox = document.getElementById('checkboxId')
//    list.prepend(checkbox)
//    list.append(edit)
//    list.append(trash)
//    }
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Renders the ShoppingList
function loopList(){
    console.log(currentList)
    let id = 0;
for (let i = 0; i < currentList.length; i++) {
    id++
    var li = document.createElement("li"); li.innerHTML = currentList[i].text; ul.appendChild(li);   //Putting lists in as well as filling them in with array
    li.className += " list-group-item";
    li.setAttribute('id', `listItem` + id)
    console.log(i)
    //------------------------------------------------------------------------------
    let input = document.createElement('input');
    input.type = "checkbox";                                                       //Putting Checkboxes in
    input.className = "checkbox";
    input.setAttribute('id', 'checkboxId');
    input.style.position = "relative"
    let trash = document.createElement('i');
    trash.className = "fa fa-trash red _10px sideList";
    trash.setAttribute('onclick', `taskTrash${id}()`)
    trash.setAttribute('id', "taskTrash"+ id)
    trash.style.position = "absolute"
    trash.style.right = "10px"
    let edit = document.createElement('i');
    edit.className = "fa fa-pencil edit _10px"
    edit.setAttribute('onclick', `taskEdit${id}()`)
    edit.setAttribute('id', 'taskEdit' + id)
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

    window.setInterval(function(){
        function checkboxIsFilled(){
            let checkboxes = document.getElementById('checkboxId');
            if(checkboxes.checked === true) {
                checkboxes.parentElement.style.backgroundColor = "rgb(51, 194, 120)"
                window.setInterval(function(){
                    
                    checkboxes.parentElement.remove();
                }, 1000)
                
          
        }
        }
        checkboxIsFilled();
      }, 2000);
  
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

    window.setInterval(function(){
        function checkboxIsFilled(){
            let checkboxes = document.getElementById('checkboxId');
            if(checkboxes.checked === true) {
                checkboxes.parentElement.style.backgroundColor = "rgb(51, 194, 120)"
                window.setInterval(function(){
                    
                    checkboxes.parentElement.remove();
                }, 3000)
                
          
        }
        }
        checkboxIsFilled();
      }, 2000);
  
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

    window.setInterval(function(){
        function checkboxIsFilled(){
            let checkboxes = document.getElementById('checkboxId');
            if(checkboxes.checked === true) {
                checkboxes.parentElement.style.backgroundColor = "rgb(51, 194, 120)"
                window.setInterval(function(){
                    
                    checkboxes.parentElement.remove();
                }, 3000)
                
          
        }
        }
        checkboxIsFilled();
      }, 2000);
  
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

    window.setInterval(function(){
        function checkboxIsFilled(){
            let checkboxes = document.getElementById('checkboxId');
            if(checkboxes.checked === true) {
                checkboxes.parentElement.style.backgroundColor = "rgb(51, 194, 120)"
                window.setInterval(function(){
                    
                    checkboxes.parentElement.remove();
                }, 3000)
                
          
        }
        }
        checkboxIsFilled();
      }, 2000);
  
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
    li.prepend(listHeading);
    
    
       
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
    let addList = document.getElementById('addList')
    ul.insertBefore(li, addList)
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
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'checkboxId');
    let id = document.getElementById('ul').childElementCount -1;
    console.log(id)
    let edit = document.createElement('i');
    edit.className = "fa fa-pencil edit _10px"
    edit.setAttribute('onclick', `taskEdit${id}()`)
    edit.setAttribute('id', `taskEdit${id}`)
    edit.style.position = "absolute";
    edit.style.right = "60px"
    li.append(edit)
    let trash = document.createElement('i');
    trash.className = "fa fa-trash red _10px sideList";
    trash.setAttribute('onclick', `taskTrash${id}()`)
    trash.setAttribute('id', `taskTrash${id}()`)
    trash.style.position = "absolute"
    trash.style.right = "10px"
    li.append(trash)
    
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
    let id = document.getElementById('ul').childElementCount -1;
    let edit = document.createElement('i');
    edit.className = "fa fa-pencil edit _10px"
    edit.setAttribute('onclick', `taskEdit${id}()`)
    edit.setAttribute('id', `taskEdit${id}`)
    edit.style.position = "absolute";
    edit.style.right = "60px"
    li.append(edit)
    let trash = document.createElement('i');
    trash.className = "fa fa-trash red _10px sideList";
    trash.setAttribute('onclick', `taskTrash${id}()`)
    trash.setAttribute('id', `taskTrash${id}()`)
    trash.style.position = "absolute"
    trash.style.right = "10px"
    li.append(trash)
}
function submitButtonHoney(){
    let theValue = document.getElementById('newShoppingList');
    let itemInner = theValue.value
    let ul = document.getElementById('ul');
    let li = document.createElement('li')
    li.innerHTML = itemInner;
    li.className = 'list-group-item';
    let addList = document.getElementById('addList')
    ul.insertBefore(li, addList)
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
    let edit = document.createElement('i');
    edit.className = "fa fa-pencil edit _10px"
    let id = document.getElementById('ul').childElementCount -1;

    edit.setAttribute('onclick', `taskEdit${id}()`)
    edit.setAttribute('id', `taskEdit${id}`)
    edit.style.position = "absolute";
    edit.style.right = "60px"
    li.append(edit)
    let trash = document.createElement('i');
    trash.className = "fa fa-trash red _10px sideList";
    trash.setAttribute('onclick', `taskTrash${id}()`)
    trash.setAttribute('id', `taskTrash${id}()`)
    trash.style.position = "absolute"
    trash.style.right = "10px"
    li.append(trash)
}
function submitButtonAdd(){
    let theValue = document.getElementById('newShoppingList');
    let itemInner = theValue.value
    let ul = document.getElementById('ul');
    let li = document.createElement('li')
    li.innerHTML = itemInner;
    li.className = 'list-group-item';
    let addList = document.getElementById('addList')
    ul.insertBefore(li, addList)
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
    let edit = document.createElement('i');
    edit.className = "fa fa-pencil edit _10px"
    edit.setAttribute('onclick', `taskEdit${id}()`)
    edit.setAttribute('id', `taskEdit${id}`)
    edit.style.position = "absolute";
    edit.style.right = "60px"
    li.append(edit)
    let trash = document.createElement('i');
    trash.className = "fa fa-trash red _10px sideList";
    trash.setAttribute('onclick', `taskTrash${id}()`)
    trash.setAttribute('id', `taskTrash${id}()`)
    trash.style.position = "absolute"
    trash.style.right = "10px"
    li.append(trash)
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
function taskTrash1(){
    document.getElementById('taskTrash1').parentElement.remove()
    }
    function taskTrash2(){
    document.getElementById('taskTrash2').parentElement.remove()
    }
    function taskTrash3(){
    document.getElementById('taskTrash3').parentElement.remove()
    }
    function taskTrash4(){
    document.getElementById('taskTrash4').parentElement.remove()
    }
    function taskTrash5(){
    document.getElementById('taskTrash5').parentElement.remove()
    }
    function taskTrash6(){
    console.log(document.getElementById('taskTrash6').parentElement)
    document.getElementById('taskTrash6').parentElement.remove()
    }
    function taskTrash7(){
    document.getElementById('taskTrash7').parentElement.remove()
    }
    function taskTrash8(){
    document.getElementById('taskTrash8').parentElement.remove()
    }
    function taskTrash9(){
    document.getElementById('taskTrash9').parentElement.remove()
    }
    function taskTrash10(){
    document.getElementById('taskTrash10').parentElement.remove()
    }

    function editList1(){
        let list = document.getElementById('listItem1')
        list.innerHTML = editText.value
        console.log(list)
        let trash = document.createElement('i');
        trash.className = "fa fa-trash red _10px sideList";
        trash.setAttribute('onclick', `taskTrash1()`)
        trash.setAttribute('id', "taskTrash1")
        trash.style.position = "absolute"
        trash.style.right = "10px"
        let edit = document.createElement('i');
        edit.className = "fa fa-pencil edit _10px"
        edit.setAttribute('onclick', `taskEdit1()`)
        edit.setAttribute('id', 'taskEdit1')
        edit.style.position = "absolute";
        edit.style.right = "60px"
       let checkbox = document.createElement('input');
       checkbox.setAttribute('type', 'checkbox');
       checkbox.setAttribute('id', 'checkboxId');
       list.prepend(checkbox)
       list.append(edit)
       list.append(trash)
       }
       //---------------------------------------------------
       function editList2(){
           let list = document.getElementById('listItem2')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash2()`)
           trash.setAttribute('id', "taskTrash2()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit2()`)
           edit.setAttribute('id', 'taskEdit2')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList3(){
           let list = document.getElementById('listItem3')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash3()`)
           trash.setAttribute('id', "taskTrash3()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit3()`)
           edit.setAttribute('id', 'taskEdit3')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList4(){
           let list = document.getElementById('listItem4')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash4()`)
           trash.setAttribute('id', "taskTrash4()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit4()`)
           edit.setAttribute('id', 'taskEdit4')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList5(){
           let list = document.getElementById('listItem5')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash5()`)
           trash.setAttribute('id', "taskTrash5()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit5()`)
           edit.setAttribute('id', 'taskEdit5')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList6(){
           let list = document.getElementById('listItem6')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash6()`)
           trash.setAttribute('id', "taskTrash6()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit6()`)
           edit.setAttribute('id', 'taskEdit6')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList7(){
           let list = document.getElementById('listItem7')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash7()`)
           trash.setAttribute('id', "taskTrash7()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit7()`)
           edit.setAttribute('id', 'taskEdit7')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList8(){
           let list = document.getElementById('listItem8')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash8()`)
           trash.setAttribute('id', "taskTrash8()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit8()`)
           edit.setAttribute('id', 'taskEdit8')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList9(){
           let list = document.getElementById('listItem9')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash9()`)
           trash.setAttribute('id', "taskTrash9()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit9()`)
           edit.setAttribute('id', 'taskEdit9')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
       function editList10(){
           let list = document.getElementById('listItem10')
           list.innerHTML = editText.value
           console.log(list)
           let trash = document.createElement('i');
           trash.className = "fa fa-trash red _10px sideList";
           trash.setAttribute('onclick', `taskTrash10()`)
           trash.setAttribute('id', "taskTrash10()")
           trash.style.position = "absolute"
           trash.style.right = "10px"
           let edit = document.createElement('i');
           edit.className = "fa fa-pencil edit _10px"
           edit.setAttribute('onclick', `taskEdit10()`)
           edit.setAttribute('id', 'taskEdit10')
           edit.style.position = "absolute";
           edit.style.right = "60px"
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');
           checkbox.setAttribute('id', 'checkboxId');
          list.prepend(checkbox)
          list.append(edit)
          list.append(trash)
       }
