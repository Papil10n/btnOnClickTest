'use strict'

const main = document.querySelector(".main__flex")
const input = document.getElementById("leftText")
const subBtn = document.getElementById("LeftBtn")
const taskField = document.querySelector(".main__right__flex")
const task = document.querySelector(".main__right__task")
const error = document.querySelector(".wrongSpan");
let taskCount = 0;


subBtn.addEventListener("click", (event) => {
  let innerText = input.value;
  const taskCounter = "number";
  if(innerText === "") {
    error.innerHTML = "Empty String";
  } else if (innerText == Number(innerText)) {
    error.innerHTML = "String cannot contain only digits"
  } else {
    error.innerHTML = "";
    const newTask = document.createElement('div');
    newTask.innerHTML = `<p class="innerText">${innerText}</p>`
    taskField.append(newTask)
  }

})
