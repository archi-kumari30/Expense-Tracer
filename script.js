let text=document.getElementById("text");
let number=document.getElementById("number");
let transaction=document.getElementById("transaction");
let print=document.getElementById("print");


transaction.addEventListener("click",()=>{
 let textValue=text.value;
 let numberValue=number.value;

 print.innerHTML+="<p>"+textValue+"  "+numberValue+"</p>";
})
