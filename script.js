let heading = document.querySelector(".heading");
let subheading = document.querySelector(".subheading");
let text = document.querySelector(".text");

heading.innerHTML = heading.textContent.replace(/\S/g,"<span>$&</span>")
subheading.innerHTML = subheading.textContent.replace(/\S/g,"<span>$&</span>")
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")

let letter = document.querySelectorAll("span");

for(let i=0; i<letter.length ; i++){
    letter[i].addEventListener("mouseover",function(){
        letter[i].classList.add("smoke")
    })
}


