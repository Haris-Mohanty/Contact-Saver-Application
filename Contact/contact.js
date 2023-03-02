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

//GET DATA FROM LOCALSTOREAGE CODE START
if(localStorage.getItem(username+"_list") != null){
  let array_list = JSON.parse(localStorage.getItem(username+"_list"));
  array_list.forEach(task =>{
  newContactAdd(task);
});
}
//GET DATA FROM LOCALSTOREAGE CODE END

function newContactAdd(task) {
  let i;
  let name = input_name.value;
  let number = input_number.value;

//SHOWING CONTACT IN PAGE FROM LOCALSTORAGE CODE START
  if(task){
    name = task.co_name;
    number = task.co_number;
  }
//SHOWING CONTACT IN PAGE FROM LOCALSTORAGE CODE END
//for new id 
let all_accordion = contact_detail.getElementsByClassName("accordion");
  
  for(i=0; i<all_accordion.length; i++){ 
  }
  
  //ACCORDION CODE START
contact_detail.innerHTML += `
 <div class="accordion mb-3">
       <div class="accordion-item">
         <h4 class="accordion-header">
           <button class="accordion-button" data-bs-toggle="collapse" 
           data-bs-target="#collapse-${i}">${name}
            </button>
         </h4>
         <div class="accordion-collapse collapse" id="collapse-${i}">
            <div class="accordion-body">
               <div class="row">
                <div class="col-md-6">
                   <h5>${name}</h5>
                   <p>${number}</p>
                 </div>
                 <div class="col-md-6 d-flex justify-content-around
                       align-items-center position-relative">
                       <i class="fa-regular fa-message"></i>
                       <i class="fa-solid fa-square-phone"></i>
                       <i class="fa-solid fa-ellipsis-vertical op-btn"></i>
                       
                        <div class="option-box animate__animated animate__zoomIn border-0">
                         <i class="fa-regular fa-pen-to-square edit mb-1"></i>
                         <i class="fa-solid fa-trash del"></i>
                        </div>
                 </div>
                </div>
             </div>
           </div>
       </div>
 </div>
`;
  //ACCORDION CODE END
  
  input_name.value = "";
  input_number.value = "";

// EDIT CODE START
  let i_edit = contact_detail.querySelectorAll(".edit");
  for(i=0; i<i_edit.length; i++){
    i_edit[i].onclick = function(){
      alert();
    }
  }
// EDIT CODE END
  
  // DELETE CODE START
  let i_del = contact_detail.querySelectorAll(".del");
  for(i=0; i<i_del.length; i++){
    i_del[i].onclick = function(){
      let parent = this.parentElement.
        parentElement.parentElement.parentElement.
        parentElement.parentElement.parentElement;
      //swal start
          swal({
       title: "Are you sure?",
       text: "Once deleted, you will not be able to recover this imaginary file!",
       icon: "warning",
       buttons: true,
       dangerMode: true,
     })
    .then((willDelete) => {
        if (willDelete) {
          parent.remove();
          updateLocalStorage();//delete from database
       swal("Poof! Your imaginary file has been deleted!", {
       icon: "success",
      });
    } else {
    swal("Your imaginary file is safe!");
    }
  });
      //swal end
    }
  }
  //DELETE CODE END
  
  //OPTION BUTTON(3 cDOT) CODE START
  let op_btn = document.querySelectorAll(".op-btn");
  for(i=0; i<op_btn.length; i++){
    op_btn[i].onclick = function() {
      let parent = this.parentElement;
      let op_box = parent.querySelector(".option-box");
     op_box.classList.add("active");
    }
  }
  //OPTION BUTTON(3 DOT) CODE END
}
//CREATE CONTACT CODE END

//DATA STORE IN LOCAL STORAGE START
function updateLocalStorage(){
  let i;
  array_list = [];
  let accordion_el = contact_detail.querySelectorAll(".accordion");
  for(i=0; i<accordion_el.length; i++){
    let h5 = accordion_el[i].getElementsByTagName("H5");
    let p = accordion_el[i].getElementsByTagName("P");
    array_list.push({
      co_name : h5[0].innerHTML,
      co_number : p[0].innerHTML
    });
  }
  
  localStorage.setItem(username+"_list", JSON.stringify(array_list));
}
//DATA STORE IN LOCAL STORAGE END