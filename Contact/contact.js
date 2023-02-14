//Get Session storage data
let username = sessionStorage.getItem("username");
if (username == null) {
  document.body.innerHTML = "<h1>404 Not Found!</h1>";
  document.body.classList.add("illigal");
}
// LOGOUT CODE START
let logoutBtn = document.getElementById("logout-btn");
logoutBtn.style.cursor = "pointer";
logoutBtn.style.color = "red";
logoutBtn.addEventListener("click", () => {
  window.location = "../index.html";
  sessionStorage.removeItem("username");
})
// LOGOUT CODE END

//Welcome code Start
let welcome = document.getElementById("welcome");
let user_data = JSON.parse(localStorage.getItem(username));
welcome.innerHTML = "Welcome " + user_data.f_name + " " + user_data.l_name;
//Welcome code End

//CREATE CONTACT CODE START
let createBtn = document.querySelector(".create-btn");
let contact_detail = document.querySelector(".contact-details");

createBtn.onclick = function(e) {
  e.preventDefault();
  newContactAdd();
}

const newContactAdd = () => {
let accordion = document.createElement("DIV");
  accordion.classList = "accordion mb-3";
let accordion_item = document.createElement("DIV");
  accordion_item.classList = "accordion-item";
let accordion_header = document.createElement("H5");
accordion_header.classList = "accordion-header";
let accordion_button = document.createElement("BUTTON");
accordion_button.classList = "accordion-button";
let accordion_collapse = document.createElement("DIV");
 accordion_collapse.classList = "accordion-collapse collapse";
let accordion_body = document.createElement("DIV");
 accordion_body.classList = "accordion-body";
let row = document.createElement("DIV");
 accordion_body.classList = "accordion-body";
  
}
//CREATE CONTACT CODE END