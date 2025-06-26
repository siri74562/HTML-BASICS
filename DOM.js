// DOM in JavaScript
// DOM stands for Document Object Model. It is a programming interface for HTML and XML documents.
document.title="DOM in JavaScript";
document.getElementById("header").innerHTML="Helloo, World!!";
document.getElementById("paragraph").style.color = "blue";
document.getElementById("paragraph").style.fontSize = "30px";
document.getElementById("header").style.color = "black";
document.body.style.backgroundColor="lightblue";
document.getElementsByClassName("DS")[0].style.color="Red";
document.getElementsByClassName("DS")[1].style.color="Green";
document.getElementsByClassName("DS")[2].style.color="violet";
document.getElementsByClassName("DS")[3].style.color="Orange";
let 
siri = document.getElementsByClassName("ds");
siri[0].style.color = "Red";
siri[1].style.color = "Green";
siri[2].style.color = "Yellow";
siri[3].style.color = "Orange";
document.querySelector(".query").style.color = "Red";
let depts = document.querySelectorAll("query");
depts[0].style.color = "violet";
depts[1].style.color = "Green";
depts[2].style.color = "Black";

function changeBackground(){
    if(document.body.style.backgroundColor === "red")
    {
        document.body.style.backgroundColor = "blue";
    }
    else{
        document.body.style.backgroundColor = "red";
    }
}
function changetext(){
    document.getElementById("Clg").innerHTML="CMRCET","MLRD";
    document.getElementById("Clg").style.backgroundColor="coral";
    document.getElementById("Clg").style.backgroundColor="white";
    document.getElementById("Clg").style.backgroundColor="30px";
    document.getElementById("Clg").style.backgroundColor="cor";
    
    
    
}