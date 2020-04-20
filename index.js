
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;//1-6

var imageNumber1="dice"+randomNumber1+".png";//dice1.png - dice6.png
var randImage1="images/"+imageNumber1; //images/dice1.png - images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randImage1);



var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;//1-6

var imageNumber2="dice"+randomNumber2+".png";//dice1.png - dice6.png
var randImage2="images/"+imageNumber2; //images/dice1.png - images/dice6.png

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randImage2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player1 Wins! 🚩";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent="Player2 Wins! 🚩";
}
else
{
  document.querySelector("h1").textContent="Draw!";
}
