let aish = document.createElement("p");//Create a new paragraph element
//aish.textContent="I'm Siri";//Set the text content 
aish.innerHTML = "Memory 1 Tera Byte";//Set the inner HTML
aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
let sana = document.getElementsByClassName("list")          
setTimeout(()=>{
    let Siri = document.getElementsByClassName("list")[0];
    if(Siri){
        Siri.remove();
    }
},2000);
let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by JavaScript!";
newHeading.style.color = "purple";
newHeading.style.fontSize = "24px";
document.body.appendChild(newHeading);
setTimeout(()=>{
    let newText = document.createElement("p");
    newText.textContent = "This text is added after 3 seconds!";
    newText.style.color = "green";
    document.body.appendChild(newText);
        
    },3000
);
let tagText = document.createElement("p");
tagText.textContent = "This text is appended to the tag!";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);
let myList = document.createElement("ul");
for(let i =1;i<=3;i++){
    let listitems = document.createElement("li");
    listitems.textContent = "Item"+i;
    listitems.style.color = "blue";
    listitems.style.fontSize = "18px";

    myList.appendChild(li);
    document.body.appendChild(myList);
}