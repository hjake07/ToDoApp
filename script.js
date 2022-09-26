const lists = [
    {name: 'Shopping List'},
    {name: 'Honey Do List'},
    {name: 'Other List'}
];
let newList = []
let newArray = [];
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
// may need to add an animation with these
{/* <div class="success-checkmark">
  <div class="check-icon">
    <span class="icon-line line-tip"></span>
    <span class="icon-line line-long"></span>
    <div class="icon-circle"></div>
    <div class="icon-fix"></div>
  </div>
</div> */}




    let newListInput = document.createElement('input');                 //creates input called newListInput
    newListInput.setAttribute('id', 'newShoppingList');                 //gives it an id
    newListInput.setAttribute('type', "text"); 
    function render(){
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
      }, 500);
  
    
    

        
      
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

//---------------------------------------------------------------------------------------------------------------------------------------------------
// Renders the ShoppingList

function shoppingList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    let listH1 = document.getElementById('listOfToDos');
    listH1.innerHTML = firstList;
  
render();

var ul = document.getElementById('ul')
console.log(firstListArray.todo)
for (let i of firstListArray.todo) {
     var li = document.createElement("li"); li.innerHTML = i.text; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
     li.className += " list-group-item";
     li.setAttribute('id', 'listItem')
     //------------------------------------------------------------------------------
     let input = document.createElement('input');
     input.type = "checkbox";                                                       //Putting Checkboxes in
     input.className = "checkbox";
     input.setAttribute('id', 'checkboxId')
    
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
    render();
    let listH1 = document.getElementById('listOfToDos');

    listH1.innerHTML = secondList;
    // let listTitle = document.createElement('h1');
    // listTitle.innerHTML = secondListArray.name;
    // listh1.prepend(listTitle);
    for (let i of secondListArray.todo) {
        var li = document.createElement("li"); li.innerHTML = i.text; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
        li.className += " list-group-item";
     li.setAttribute('id', 'listItem')

        //------------------------------------------------------------------------------
        let input = document.createElement('input');
        input.type = "checkbox";                                                       //Putting Checkboxes in
        input.className = "checkbox";
        input.setAttribute('id', 'inputBox')
        li.prepend(input);
        //--------------------------------------------------
        input.setAttribute('id', 'checkboxId')
     

       }
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
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
     
    }
    clear();
    render();

    let listH1 = document.getElementById('listOfToDos');
    
    listH1.innerHTML = thirdList;

    // let listTitle = document.createElement('h1');
    // listTitle.innerHTML = thirdListArray.name;
    // listh1.prepend(listTitle);
    for (let i of thirdListArray.todo) {
        var li = document.createElement("li"); li.innerHTML = i.text; ul.appendChild(li);   //Putting lists in as well ass filling them in with array
        li.className += " list-group-item";
        //------------------------------------------------------------------------------
        let input = document.createElement('input');
        input.type = "checkbox";                                                       //Putting Checkboxes in
        input.className = "checkbox";
        input.setAttribute('id', 'inputBox')
        li.prepend(input);
     li.setAttribute('id', 'listItem')

        //--------------------------------------------------
     input.setAttribute('id', 'checkboxId')

       }
       let div = document.createElement('div');
       let icon = document.createElement('i')
    icon.className = "fa fa-pencil"
    icon.setAttribute('id', 'addList')
    ul.append(div)
    div.appendChild(icon)
    icon.setAttribute('onclick', 'addWithinOther()')
    
    // icon.onclick = function() {addWithinShopping();
    // }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function for adding lists on the sideUl

function addTheList (){
    let div = document.createElement('div');
    div.className = 'd-flex space'
    div.setAttribute('id', 'addDiv')
    var li = document.createElement("li");                                                              // creates list
    li.className += " list-group-item list-group-item list-group-item-action list-group-item-primary sideList" // Adds the classes to list
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
function selectList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    render();
                                                                                      
   let listHeading = document.getElementById('enterListName').value; 
   let listh1 = document.getElementById('listOfToDos')                                                               
   let listTitle = document.createElement('h1');                                                       // Creates h1 Element
   listTitle.innerHtml = listHeading;
   listh1.prepend(listHeading)
   let icon = document.createElement('i')
   icon.className = "fa fa-pencil"
   icon.setAttribute('id', 'addList')
  
   icon.setAttribute('onclick', 'addWithinAdd()')
   let li = document.createElement('li')
   ul.append(li)
//    newList.push(listHeading)                                 
    // li.prepend(listHeading);                                                                   // Puts inputs value in list item
    li.prepend(newArray[0].text)
    li.className += " list-group-item";
    li.setAttribute('id','listItem')
    let input = document.createElement('input');
        input.type = "checkbox";                                                       //Putting Checkboxes in
        input.className = "checkbox";
        input.setAttribute('id', 'inputBox')
        li.prepend(input);
    ul.append(icon)
    // for(let i = 0; i < newArray.length; i++) {
    //     var li = document.createElement("li"); li.innerHTML = i.text; ul.appendChild(li); 
    //     li.className += " list-group-item";
    //     console.log('within for looop')
    //     li.setAttribute('id','listItem')
      


    // }

    window.setInterval(function(){
        function checkboxIsFilled(){
            let checkboxes = document.getElementById('inputBox');
            if(checkboxes.checked === true) {
                checkboxes.parentElement.style.backgroundColor = "rgb(51, 194, 120)"
                window.setInterval(function(){
                    
                    checkboxes.parentElement.remove();
                }, 5000)
                
          
        }
    
        else {
            console.log('Boxes Not Checked!')
           }
        
        }
        checkboxIsFilled();
      }, 500);
  
}
function addList(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
    }
    clear();
    render();
   
    

    let div = document.createElement('div');
    div.className = 'd-flex space'
    div.setAttribute('id', 'addDiv')
    var li = document.createElement("li");                                                              // creates list
    li.className += " list-group-item list-group-item list-group-item-action list-group-item-primary sideList" // Adds the classes to list
    li.setAttribute('onclick', 'selectList()')
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


// addWithinAdd();
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
    
}
function takeNewTrash(){
    function clear(){
        document.getElementById('listOfToDos').innerHTML = "";
        document.getElementById('ul').innerHTML = "";
        document.getElementById('addDiv').remove();
        document.getElementById('newTrash').remove();
    }
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
    input.setAttribute('id', 'inputBox')
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
    input.setAttribute('id', 'inputBox')
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
    input.setAttribute('id', 'inputBox')
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
   newArray.push(newlistObject)
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



