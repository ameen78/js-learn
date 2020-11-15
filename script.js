window.alert(window.document.querySelector("h1").innerText)

// terenery operator
  distance = 80
  distance>=100?console.log("completed 1KM"):console.log("not completed");
  bangles = 15
  bangles>=12?console.log("one dozen"):console.log("not a dozen");

//   truly or falsy value
 if(1){
     console.log("is true");
 }
 if(""){
     console.log("is true");
 }
//  short circuit
let x=true
x && console.log("excicute");
let y = true
!y && console.log("true");

//  functions assignment1

function result (name , percentage) {
    console.log("my name is "+name +" and my percentage is "+percentage);
}
result ("ameen" , 90)
result ("akif" , 80)
result  ("faizan" , 70)
result ("mohommed faizan" , 85)

// function assignment2
  
function temp (celsius){
    let x = celsius*9/5+32
    console.log("Temp is " + x);
}
temp(28)
temp(34)
temp(10)
temp(65)

// looping
//  for loop 

 for(x=0; x<6; x++ ) {
    console.log("my name is ameen");
 }
 for(y=1; y<=5; y++){
     console.log("hello friends" ,y);
 }

