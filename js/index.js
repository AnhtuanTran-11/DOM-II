// Your code goes here
const buttons = document.querySelectorAll('.btn');

buttons.forEach(item => {
    item.addEventListener("onmouseover", function(event) {
        buttons.style.backgroundColor = "red";
    })
});

buttons.addEventListener('click', function(event){
    buttons.style.backgroundColor = "yellow";
});

buttons.addEventListener('mouseleave', (event) => {
    buttons.style.color = "yellow";
});

let destination = document.querySelectorAll('.btn');
let newDestination = Array.from(destination)
newDestination.forEach(item => {
    item.addEventListener('dblclick', () => {
        alert("Ride the bus");
    });
})

let navLink = document.querySelectorAll('.nav-link');
navLink.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = "red";
    })
})

navLink.forEach(item => {
    item.addEventListener('mouseout', () => {
        item.style.color = "black";
    })
})

//dblclick successful
const logoHeading = document.querySelector("h1")
logoHeading.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = "7rem";
})

//scroll successful
const intro = document.querySelector(".intro");
window.addEventListener('scroll', event => {
    console.log("I'm scrolling");
    intro.style.textTransform = "uppercase";
})

//mouseenter successful
document.querySelectorAll('a').forEach(item => {
    item.addEventListener("mouseenter", (event) => {
        event.target.style.color = "blue";
    })
}

//mouseleave successful
document.querySelectorAll('a').forEach(item => {
    item.addEventListener("mouseleave", (event) => {
        event.target.style.color = "pink";
    })
})

//mouseover successful
document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.target.style.transform = "scale(1.2)";
        event.target.style.transition = "all 0.4s";
    })
})

//mousemove successful
let footPara = document.querySelector('footer p')
footPara.addEventListener('mousemove', event => {
    event.target.style.transform = "scale(0.5)";
})

const navLinks = document.getElementsByTagName("nav a");
navLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    navLinks.innerHTML += "Sorry can't do that!";
    event.preventDefault();
  });
});