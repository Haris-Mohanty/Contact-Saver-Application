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