// Your code here

let dodger = document.getElementById("dodger");

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left("px","");
  let left = parseInt( leftNumbers, 10);
  if (left > 0){
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
