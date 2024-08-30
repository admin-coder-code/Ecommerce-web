var bar = document.querySelector("#bar")
var nav = document.querySelector(".navbar")
var close = document.querySelector("#close")

bar.addEventListener("click", function () {
    nav.classList.add("active")
})

close.addEventListener("click", function () {
    nav.classList.remove("active")
})



/*------------single p html-------------*/


var image1 = "img/products/f1.jpg"
var small = document.querySelectorAll(".small-img")[0]
var main = document.querySelector("#main-img")

small.addEventListener("click", function () {
   main.setAttribute("src", image1)
})


var image2 = "img/products/f2.jpg"
var small = document.querySelectorAll(".small-img")[1]
var main = document.querySelector("#main-img")

small.addEventListener("click", function () {
   main.setAttribute("src", image2)
})


var image3 = "img/products/f3.jpg"
var small = document.querySelectorAll(".small-img")[2]
var main = document.querySelector("#main-img")

small.addEventListener("click", function () {
   main.setAttribute("src", image3)
})


var image4 = "img/products/f4.jpg"
var small = document.querySelectorAll(".small-img")[3]
var main = document.querySelector("#main-img")

small.addEventListener("click", function () {
   main.setAttribute("src", image4)
})


