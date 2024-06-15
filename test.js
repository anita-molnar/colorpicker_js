
let colorTest = document.getElementById("test-button")

colorTest.addEventListener("click", () => {
  let response = prompt("Type a color!");

  document.getElementById("myDIV").style.backgroundColor = response;
})