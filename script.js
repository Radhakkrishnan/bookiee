

var addbtn = document.getElementById("addbtn")
var popupoverlay = document.querySelector(".popup-overlay")
var popupwindow = document.querySelector(".popup-window")


addbtn.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupwindow.style.display="block"

})

var cancelbtn= document.getElementById("cancelpopup")
popupwindow.addEventListener("click",function(event){
    event.preventDefault()
})

cancelbtn.addEventListener("click",function(){
    
    popupoverlay.style.display="none"
    popupwindow.style.display="none"

})

var container = document.querySelector(".container")
var addbookbtn = document.getElementById("addbook")
var bookname = document.getElementById("bookname")
var authorname = document.getElementById("Authorname")
var bookdescription= document.getElementById("bookdescription")


addbookbtn.addEventListener("click",function(event){
    event.preventDefault()

    var div= document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick='deletebook(event)'>Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupwindow.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()

}