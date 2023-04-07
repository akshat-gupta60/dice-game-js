 var randomvariable1=Math.floor(Math.random()*6)+1;
  var randomvariable2=Math.floor(Math.random()*6)+1;
  var s="dice"+randomvariable1+".png";
  var s2="dice"+randomvariable2+".png";
 document.querySelector(".img1").setAttribute("src",s);
 document.querySelector(".img2").setAttribute("src",s2);
 if(randomvariable1>randomvariable2){
   document.querySelector("h1").innerHTML="Player1 wins";

 }
 if(randomvariable2>randomvariable1){
   document.querySelector("h1").innerHTML="Player2 wins";

 }
 else if(randomvariable2==randomvariable1){
   document.querySelector("h1").innerHTML="There is a tie";
 }
