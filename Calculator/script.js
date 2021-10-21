const display1Element = document.querySelector(".display-1");  
 const display2Element = document.querySelector(".display-2");  
 const tempResultElement = document.querySelector(".result");  
 const numbersElement = document.querySelectorAll(".number");  
 const operationElement = document.querySelectorAll(".operation");  
 const equalElement = document.querySelector(".equal");  
 const clearAllElement = document.querySelector(".all-clear");  
 const clearLastElement = document.querySelector(".last-entity-clear");  
 let dis1Num = "";  
 let dis2Num = "";  
 let result = null;  
 let lastOperation = "";  
 let haveDot = false;  
 numbersElement.forEach((number) => {  
  number.addEventListener("click", (e) => {  
   if (e.target.innerText === "." && !haveDot) {  
    haveDot = true;  
   } else if (e.target.innerText === "." && haveDot) {  
    return;  
   }  
   dis2Num += e.target.innerText;  
   display2Element.innerText = dis2Num;  
   // console.log();  
  });  
 });  
 operationElement.forEach((operation) => {  
  operation.addEventListener("click", (e) => {  
   if (!dis2Num) return;  
   haveDot = false;  
   const operationName = e.target.innerText;  
   if (dis1Num && dis2Num && lastOperation) {  
    mathOperation();  
   } else {  
    result = parseFloat(dis2Num);  
   }  
   clearVar(operationName);  
   lastOperation = operationName;  
   console.log(result);  
  });  
 });  
 function clearVar(name = "") {  
  dis1Num += dis2Num + " " + name + " ";  
  display1Element.innerText = dis1Num;  
  display2Element.innerText = "";  
  dis2Num = "";  
  tempResultElement.innerText = result;  
 }  
 function mathOperation() {  
  if (lastOperation === "x") {  
   result = parseFloat(result) * parseFloat(dis2Num);  
  } else if (lastOperation === "+") {  
   result = parseFloat(result) + parseFloat(dis2Num);  
  } else if (lastOperation === "-") {  
   result = parseFloat(result) - parseFloat(dis2Num);  
  } else if (lastOperation === "/") {  
   result = parseFloat(result) / parseFloat(dis2Num);  
  } else if (lastOperation === "%") {  
   result = parseFloat(result) % parseFloat(dis2Num);  
  }  
 }  
 // operation();  
 equalElement.addEventListener("click", () => {  
  if (!dis2Num || !dis1Num) return;  
  haveDot = false;  
  mathOperation();  
  clearVar();  
  display2Element.innerText = result;  
  tempResultElement.innerText = "";  
  dis2Num = result;  
  dis1Num = "";  
 });  
 clearAllElement.addEventListener("click", () => {  
  dis1Num = "";  
  dis2Num = "";  
  display1Element.innerText = "";  
  display2Element.innerText = "";  
  result = "";  
  tempResultElement.innerText = "";  
 });  
 clearLastElement.addEventListener("click", () => {  
  display2Element.innerText = "";  
  dis2Num = "";  
 });  
 window.addEventListener("keydown", (e) => {  
  if (  
   e.key === "0" ||  
   e.key === "1" ||  
   e.key === "2" ||  
   e.key === "3" ||  
   e.key === "4" ||  
   e.key === "5" ||  
   e.key === "6" ||  
   e.key === "7" ||  
   e.key === "8" ||  
   e.key === "9" ||  
   e.key === "."  
  ) {  
   clickButtonElement(e.key);  
   // console.log(e.key)  
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {  
   clickOperation(e.key);  
  } else if (e.key === "*") {  
   clickOperation("x");  
   // console.log(e.key)  
  } else if (e.key == "Enter" || e.key === "=") {  
   clickEqual();  
  }  
  // console.log(e.key)  
 });  
 function clickButtonElement(key) {  
  numbersElement.forEach((button) => {  
   if (button.innerText === key) {  
    button.click();  
   }  
  });  
 }  
 function clickOperation(key) {  
  operationElement.forEach((operation) => {  
   if (operation.innerText === key) {  
    operation.click();  
   }  
  });  
 }  
 function clickEqual() {  
  equalElement.click();  
 }  

