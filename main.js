function newPin(){
 const pin = Math.round(Math.random()*10000);
 
 let pinString = pin + "";
 if(pinString.length === 4){
  return pin;
 } else{
  return newPin();
 }
}

document.querySelector(".generate-btn").addEventListener("click", function(){
 let pinNew = newPin();
 const generatedPin = document.querySelector(".generatedPin");
 generatedPin.value = pinNew;
 generatedPin.style.textAlign = "center";
});

document.querySelector(".calc-body").addEventListener("click", function(e){
 let number = e.target.innerText;
 let showValue = document.querySelector(".showValue");
 showValue.style.textAlign = "center";

 if(isNaN(number)){
  if(number == "C"){
   showValue.value = "";
  }
 } else{
  showValue.value += number;
 }
})

// Removing Notification
document.querySelector(".wrong-pin").style.display = "none";
document.querySelector(".correct-pin").style.display = "none";

function verification(){
 let pin = document.querySelector(".generatedPin");
 let showValue = document.querySelector(".showValue");

 if(pin.value == showValue.value){
  document.querySelector(".correct-pin").style.display = "block";
  document.querySelector(".wrong-pin").style.display = "none";

  document.querySelector(".submit-btn").disabled = true;
  document.querySelector(".submit-btn").style.backgroundColor = "green";
 } else{
  if(showValue.value === ""){
   alert("Please Input Value");
  }

  if(pin.value === ""){
   alert("Please Generate A Pin");
  }
  document.querySelector(".wrong-pin").style.display = "block";
  document.querySelector(".correct-pin").style.display = "none";

  const tryLeft = document.getElementById("tryLeft").innerText;
  let newTry = parseInt(tryLeft);

  if(newTry > 0){
   newTry -= 1;
  }

  document.getElementById("tryLeft").innerText = newTry;
  
  if(newTry === 0){
   document.querySelector(".submit-btn").disabled = true;
   document.querySelector(".submit-btn").style.backgroundColor = "red";
  }
 }

 pin.value = "";
 showValue.value = "";
}

document.querySelector(".submit-btn").addEventListener("click", verification);