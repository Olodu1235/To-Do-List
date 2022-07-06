const button = document.querySelector(".addbtn")
var list = document.querySelector(".list")
let todo = document.querySelector(".todo-container")

button.addEventListener("click",function(e){
   e.preventDefault();
   let input = document.querySelector(".input")
   realValue = input.value
let  output = document.createElement("li")
let button = document.createElement("button")
button.classList.add("deletebtn")
button.style.marginLeft="20px";
button.innerHTML="Delete";
if(input.value===""){
   alert("put somthing")
   return false
}



output.innerText = realValue;
list.appendChild(output)
list.appendChild(button)


input.value=""

output.addEventListener('click', function(){
   output.style.textDecoration="line-through"
})
button.addEventListener('click', function(){
   list.removeChild(output)
   list.removeChild(button)

})
 
})


