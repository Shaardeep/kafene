console.log("we are here now");

/* login page */
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const span = document.querySelector("#span");
const btn = document.querySelector("button");

function formValidate(e) {
  e.preventDefault();
  if (username.value == password.value) {
    window.location = "orders.html";
  } else {
    alert("Enter correct details");
  }
}
btn.addEventListener("click", formValidate);

/* login page */
