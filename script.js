//mouseover
var mouse_over = document.createElement("div");
mouse_over.addEventListener("mouseover",foo);
mouse_over.innerHTML = `The text color will change into red`;

function foo(){
    mouse_over.setAttribute("style","color:red");
}

//prompt
var button = document.createElement("button");
button.setAttribute("type","button");
button.addEventListener("click",foo1);
button.innerHTML = "click to enter the age";

function foo1(){
    var age = prompt("Enter the age");
    var value = document.createElement("span");
    value.innerHTML = `The age of the person is : ${age}`;
    document.body.append(value);
}




document.body.append(mouse_over,button);
