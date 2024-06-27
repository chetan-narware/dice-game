var randomNumber1= (Math.random())*6+1;
var randomNumber2= (Math.random())*6+1;

randomNumber1=Math.floor(randomNumber1);
randomNumber2=Math.floor(randomNumber2);

var randomImage1="dice"+randomNumber1+".png";
var randomImage2="dice"+randomNumber2+".png";

var imgsrc1=randomImage1;
var imgsrc2=randomImage2;

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsrc1);

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",imgsrc2);

var msg=document.querySelector("h1");

if(randomNumber1>randomNumber2){
    msg.textContent="Player 1 Won";
}
else if(randomNumber1<randomNumber2){
    msg.textContent="Player 2 Won";
}
else{
    msg.textContent="It's a Draw";
}