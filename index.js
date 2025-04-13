// Your code here
//const dodger = document.getElementById("dodger");
// lets change the color
//dodger.style.backgroundColor = "#000000";
// we are changing the color to something more visible
//dodger.style.backgroundColor = "#FF69B4";
// lets move the dodger up
//dodger.style.bottom = "100px"
// lets get it back down
//dodger.style.bottom = "0px";
//dodger.style.left = "0px";

//document.addEventListener("keydown", function (event) {
    //if (event.key === "ArrowLeft") {
       // const leftNumbers = dodger.style.left.replace("px", "");
       // const left = parseInt(leftNumbers, 10);

        //dodger.style.left = `${left - 1}px`;
   // }
//});
const dodger = document.getElementById("dodger");
//moveDodgerLeft() function
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
//moveDodgerRight() function
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}
//event listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
