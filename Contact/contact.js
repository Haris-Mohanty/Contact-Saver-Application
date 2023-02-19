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

let input_name = document.querySelector(".name");
let input_number = document.querySelector(".number");

createBtn.onclick = function(e) {
  e.preventDefault();
  if(input_name.value != "" && input_number.value != ""){
     newContactAdd();
    updateLocalStorage();
  }else{
    swal("Empty Field!", "Please fill the input field!", "warning");
  }
}

const newContactAdd = () => {
  let i;
  let name = input_name.value;
  let number = input_number.value;
  //Accordion Create
let accordion = document.createElement("DIV");
  accordion.classList = "accordion mb-3";
  
//for new id 
let all_accordion = contact_detail.getElementsByClassName("accordion");
  for(i=0; i<all_accordion.length; i++){
    
  }
  
let accordion_item = document.createElement("DIV");
  accordion_item.classList = "accordion-item";
  accordion.append(accordion_item);
let accordion_header = document.createElement("H5");
accordion_header.classList = "accordion-header";
  accordion_item.append(accordion_header);
let accordion_button = document.createElement("BUTTON");
accordion_button.classList = "accordion-button";
  accordion_button.innerText = name;
  accordion_button.setAttribute("data-bs-toggle", "collapse");
  accordion_button.setAttribute("data-bs-target", "#collapse-"+i);
  accordion_header.append(accordion_button);
let accordion_collapse = document.createElement("DIV");
 accordion_collapse.classList = "accordion-collapse collapse";
  accordion_collapse.id = "collapse-"+i;
  accordion_item.append(accordion_collapse);
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
  h5.innerText = name;
  col1.append(h5);
let p = document.createElement("P");
  p.innerText = number;
  col1.append(p);
let col2 = document.createElement("DIV");
 col2.classList = "col-md-6 d-flex justify-content-around align-items-center position-relative";
col2.innerHTML = '<i class="fa-regular fa-message"></i><i class="fa-solid fa-square-phone"></i><i class="fa-solid fa-ellipsis-vertical"></i>';
  row.append(col2);
let option_box = document.createElement("DIV");
 option_box.classList = "option-box";
option_box.innerHTML = '<i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-trash"></i>';
col2.append(option_box);
  
  contact_detail.append(accordion);
  
  input_name.value = "";
  input_number.value = "";
}
//CREATE CONTACT CODE END


//DATA STORE IN LOCAL STORAGE START

function updateLocalStorage(){
  let i;
  let array_list = [];
  let accordion_el = contact_detail.querySelectorAll(".accordion");
  for(i=0; i<accordion_el.length; i++){
    let h5 = accordion_el[i].getElementsByTagName("H5");
    let p = accordion_el[i].getElementsByTagName("P");
    
    array_list.push({
      co_name : h5[1].innerHTML,
      co_number : p[0].innerHTML
    });
  }
  
  localStorage.setItem(username+"_list", JSON.stringify(array_list));
}
//DATA STORE IN LOCAL STORAGE END
