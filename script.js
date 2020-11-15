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
//  for(r=6; r>0; r--) {
//      console.log("hello" ,r);
//  }

 var  m = ["ameen" ,"ulla" , "rahim"]
  for(n=0; n<m.length; n++){
      console.log(m[n]);
  }
  var  n = ["ameen" ,"ulla" , "rahim"]
   for(n of n){
       console.log(n);
   }
// while loop
   
//  let r=0
//  while(r<8){
//      console.log(r);
//      r++
//  }

//  let a=0
//  while(a<8){
//      a++
//      if(a==5)continue;
//      console.log(a)
//  }

//  do-while

 let t=0
   do{
       t++
       console.log(t);
   }while(t<8)

   let w=0
   do{
       w++
       if(w==5) break;
       console.log(w);
   }while(w<10)

//    high order Array

let  name = ["nan" , "ran", "tan", "fan" ];
 name.forEsach(name=>{
       console.log(name);
 });
   