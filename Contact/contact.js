//Get Session storage data
let username = sessionStorage.getItem("username");
if(username == null){
  document.body.innerHTML = "<h1>404 Not Found!</h1>";
  document.body.classList.add("illigal");
}
// LOGOUT CODE START
let logoutBtn = document.getElementById("logout-btn");
logoutBtn.style.cursor = "pointer";
logoutBtn.style.color = "red";
logoutBtn.addEventListener("click", () => {
window.location ="../index.html";
sessionStorage.removeItem("username"); 
})
// LOGOUT CODE END

//Welcome code Start
let welcome = document.getElementById("welcome");
let user_data = JSON.parse(localStorage.getItem(username));
welcome.innerHTML ="Welcome "+user_data.f_name +" "+ user_data.l_name;
//Welcome code End

//CREATE CONTACT CODE START
let createBtn = document.querySelector(".create-btn");
//CREATE CONTACT CODE END