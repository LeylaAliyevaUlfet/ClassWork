let email=document.querySelector("#email")
let name=document.querySelector("#name")
let surname=document.querySelector("#surname")
let checkedInput=document.querySelector("#checked")
let checkedLabel=document.querySelector("#checkedLabel")
let yes=document.querySelector("#yes")
let no=document.querySelector("#no")
let notNow=document.querySelector("#notNow")
yes.type="radio"
no.type="radio"
notNow.type="radio"
checkedInput.type="checkbox"
name.addEventListener("focus",function(){
    this.style.backgroundColor="green"
    this.style.color="white"
    
})
name.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
    
})
surname.addEventListener("mousemove",function(){
    this.style.backgroundColor="pink"
    
})
surname.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
    
})


email.addEventListener("contextmenu", function () {
    this.style.backgroundColor="red"
  });
  email.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
    
}) 

checkedInput.addEventListener("focus", function () {
    checkedLabel.style.display = "none"
   
 }
  );
  checkedInput.addEventListener("focus", function () {
   
   
    checkedLabel.style.display = "block"
   
     
   
  }
   );
 
  
  
 
  