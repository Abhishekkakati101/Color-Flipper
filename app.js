const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // Get ramndom number between 0-3 colors[]
    const ramndomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[ramndomNumber];
    color.textContent = colors[ramndomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length) ;
}