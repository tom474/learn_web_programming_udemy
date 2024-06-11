// Selecting HTML elements
document.firstElementChild.lastElementChild.firstElementChild.style.color = "red";
document.querySelector("input").click();
document.querySelector("ul").lastElementChild.innerHTML = "Cuong Tran";
document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByClassName("item");
document.getElementById("title").innerHTML = "Goodbye";
document.querySelector("#list");
document.querySelector("li a");
document.querySelector("li.item");
document.querySelector("#list a");
document.querySelector("#list .item");
document.querySelectorAll("#list .item")[2].style.color = "blue";
document.querySelector("li a").style.color = "red";


// Changing styles of HTML elements
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.padding = "30%";
document.querySelector("h1").style.visibility = "hidden";
document.querySelector("button").style.backgroundColor = "yellow";


// Adding/Removing the class list
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("h1").classList.toggle("huge");


// Manipulating Text
document.querySelector("h1").innerHTML;
document.querySelector("h1").innerHTML = "<em>Goodbye</em>";
document.querySelector("h1").textContent;
document.querySelector("h1").textContent = "Goodbye";


// Manipulating HTML Element Attributes
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");