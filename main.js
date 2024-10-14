const imgs = document.querySelectorAll(".img-q");
const parent = document.querySelectorAll(".parent div");
let p = document.querySelectorAll("p");
let theDivInParent =  document.querySelectorAll(".parent > div");


document.addEventListener("keydown",function (event) {
    if (event.key == "Enter") {
        p.forEach((e) => {
            e.classList.remove("none")
        })
        imgs.forEach((img) => {
            img.src = "./assets/images/icon-minus.svg"
        })
    }
    if (event.key == "Escape") {
        p.forEach((e) => {
            e.classList.add("none")
        })
        imgs.forEach((img) => {
            img.src = "./assets/images/icon-plus.svg"
        })
    }
})


parent.forEach((div) => {
    let imgdiv = div.children[0];
    let pSib = div.nextElementSibling;
    div.addEventListener("click" , () => {
        pSib.classList.toggle("none");
        if (!pSib.classList.contains("none")) {
            imgdiv.src = "./assets/images/icon-minus.svg"
        }else {
            imgdiv.src = "./assets/images/icon-plus.svg" 
        }
    });
})

