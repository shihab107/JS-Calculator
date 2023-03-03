function calculator(newvalue){
document.querySelector("#Result").value+= newvalue;
}
function clearme(){
  document.querySelector("#Result").value = " ";
}
function deletme(){
  let disV = document.querySelector("#Result");
let myV = disV.value.toString().slice(0,-1);
disV.value = myV;
  
}
function Answer(){
  let a = document.querySelector("#Result").value;
  let b = eval(a);
 document.querySelector("#Result").value = b;
}
