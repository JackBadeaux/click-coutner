const addButton = document.querySelector(".click-button");
const counter = document.getElementById("counter");
const resetButton= document.getElementById("resetButton")
let Value = Number(counter.textContent)

addButton.addEventListener("click", (e) =>{
    e.preventDefault()
    Value++
    counter.textContent = Value

});
resetButton.addEventListener("click", () =>{
   Value = 0
   counter.textContent = Value
});