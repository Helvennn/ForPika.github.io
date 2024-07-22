const button = document.getElementById("button");
const first = document.getElementById("first")
const second = document.getElementById("second")

button.addEventListener('click', function(){
    first.style.display = "none";
    second.style.display = "flex";
});