var ul=document.getElementById("list-container");
var input=document.getElementById("input");
function update(){
    var listItem=document.createElement("li");
    listItem.innerHTML=input.value +"<button onclick='change(this)'>edit</button>"+"<button onclick='removes(event)'>delete</button>";
    ul.append(listItem);
}
function removes(event){
    event.target.parentElement.remove();
}
var currentItem=null;
function change(event)
{
    currentItem=event.parentElement;
    var popup=document.getElementById("popup");
    popup.style.display="block";

}
function update2(event)
{
    var input2=document.getElementById("input2");
     var inputvalue=input2.value;
     currentItem.innerHTML=inputvalue+"<button onclick='change(this)'>edit</button>"+"<button onclick='removes(event)'>delete</button>";
     popup.style.display="none";
     input.value='';

}