 //slider
var box = document.querySelectorAll('.comment-box');
var count =0;
setInterval(startSlide,2000);
  function startSlide(){

    for(var i=0 ;i < box.length; i++) {
      box[i].style.display='none';
  }
  if(count === box.length-1) count =-1;
  box[count + 1].style.display='block';
  count++;
  }
      // Login
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
//contact
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
