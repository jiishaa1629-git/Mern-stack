//Select the element with id="header-title" and change its text to "My Awesome Page"
document.getElementById("header-title").textContent = "My Awesome Page";

// Select all elements with class "product-card" and give them a red border (style.border)
document.querySelectorAll(".product-card")
.forEach(el => el.style.border = "2px solid red");

// Change the background color of every <li> inside <ul class="menu"> to lightblue
document.querySelectorAll("ul.menu li")
.forEach(li => li.style.backgroundColor = "lightblue");

// Create a new <button> that says "Click me!" and append it to the element with id="controls
const btn = document.createElement("button");
btn.textContent = "Click me!";
document.getElementById("controls").append(btn);

// Create this structure and append it to <div id="cart">: <div class="item"><span>Apple</span><button>Remove</button></div>
const item = document.createElement("div");
item.className="item";
item.innerHTML='<span>Apple</span><button>Remove</button>';
document.getElementById("cart").append(item);

//Select the first <img> with class "avatar" and change its src to"https://images.unsplash.com/photo-..." (any image)
document.querySelector("img.avatar").src =
"c:\Users\ThinkPad\Downloads\WhatsApp Image 2026-02-10 at 7.37.15 PM.jpeg";

// Add the class "highlight" to all <p> tags that are direct children of .article-body
document.querySelectorAll(".article-body > p")
.forEach(p=>p.classList.add("highlight"));

// Toggle the class "dark-mode" on the <body> every time a button with id="theme-toggle" is clicked
document.getElementById("theme-toggle")
.onclick=()=>document.body.classList.toggle("dark-mode");

// When user clicks any button that has data-action="delete", remove its closest .card parent
document.addEventListener("click",e=>{
if(e.target.dataset.action==="delete"){
e.target.closest(".card")?.remove();
}
});

// 10 TODO LIST
const input=document.getElementById("todo-input");
const list=document.getElementById("todo-list");

document.getElementById("add-todo").onclick=()=>{
if(!input.value) return;
const li=document.createElement("li");
li.innerHTML=`${input.value} <button class="del">Delete</button>`;
list.append(li);
input.value="";
};

list.onclick=e=>{
if(e.target.classList.contains("del"))
e.target.parentElement.remove();
};

// 11 EVENT DELEGATION
document.getElementById("users-list").onclick=e=>{
if(e.target.matches("li")){
console.log("Clicked user ID:",e.target.dataset.userId);
}
};

// 12 COUNTER
let count=0;
const span=document.getElementById("count");

document.getElementById("plus").onclick=()=>{
span.textContent=++count;
};

document.getElementById("minus").onclick=()=>{
if(count>0) span.textContent=--count;
};

// 13 LIVE SEARCH
document.getElementById("search").oninput=e=>{
const val=e.target.value.toLowerCase();
document.querySelectorAll(".country").forEach(li=>{
li.style.display=li.textContent.toLowerCase().includes(val)?"":"none";
});
};

// 14 COLOR PICKER
document.querySelectorAll(".swatch").forEach(s=>{
s.onclick=()=>document.body.style.backgroundColor=s.dataset.color;
});

// 15 DRAG SORT
let drag;
document.querySelectorAll("#sortable li").forEach(li=>{
li.ondragstart=()=>drag=li;
li.ondragover=e=>e.preventDefault();
li.ondrop=function(){
this.parentNode.insertBefore(drag,this);
};
});

// 16 MODAL
document.getElementById("open-modal").onclick=()=>{
const overlay=document.createElement("div");
overlay.className="modal-overlay";

overlay.innerHTML=`
<div class="modal">
<h2>Title</h2>
<p>This is modal</p>
<button id="close-modal">Close</button>
</div>`;

document.body.append(overlay);

overlay.onclick=e=>{
if(e.target===overlay||e.target.id==="close-modal")
overlay.remove();
};
};