
let addTodoButon = document.getElementById("addTodo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearTodo = document.getElementById("clearTodo");
let ceo = document.getElementById("ceo");

addTodoButon.addEventListener("click" , function(){

  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-style');
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML = inputText.value;
  inputText.value = "";

  paragraph.addEventListener('click' , function(){
    paragraph.style.textDecoration = 'line-through';
  })

  paragraph.addEventListener('dblclick' , function(){
    toDoContainer.removeChild(paragraph);
  })

  ceo.addEventListener("click" , function(){
  
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";
  
    paragraph.addEventListener('click' , function(){
      paragraph.style.textDecoration = 'line-through';
    })
  
    paragraph.addEventListener('dblclick' , function(){
      toDoContainer.removeChild(paragraph);
    })

    clearTodo.addEventListener("click" , function(){

      paragraph.remove();
    
    })
  
  })

  clearTodo.addEventListener("click" , function(){

    paragraph.remove();
  
  })

})


