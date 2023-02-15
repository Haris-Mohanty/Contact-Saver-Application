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
  accordion.append(accordion_item);
let accordion_header = document.createElement("H5");
accordion_header.classList = "accordion-header";
  accordion_item.append(accordion_header);
let accordion_button = document.createElement("BUTTON");
accordion_button.classList = "accordion-button";
  accordion_header.append(acccordion_button);
let accordion_collapse = document.createElement("DIV");
 accordion_collapse.classList = "accordion-collapse collapse";
  accordion_item.append(accccordion_collapse);
let accordion_body = document.createElement("DIV");
 accordion_body.classList = "accordion-body";
  accordion_collapse.append(accordion_body);
let row = document.createElement("DIV");
 row.classList = "row";
  accordion_body.append(row);
let col1 = document.createElement("DIV");
 col1.classList = "col-md-6";
  row.append(col1);
let h5 = document.createElement("H5");
let p = document.createElement("P");
let col2 = document.createElement("DIV");
 col2.classList = "col-md-6 d-flex justify-content-around align-items-center position-relative";
col2.innerHTML = '<i class="fa-regular fa-message"></i><i class="fa-solid fa-square-phone"></i><i class="fa-solid fa-ellipsis-vertical"></i>';
let option_box = document.createElement("DIV");
 option_box.classList = "option-box";
option_box.innerHTML = '<i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-trash"></i>';

  contact_detail.append(accordion);
}
//CREATE CONTACT CODE END