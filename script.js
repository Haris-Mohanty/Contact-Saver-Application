let lActive = document.getElementById("l-active-btn");
let sActive = document.getElementById("s-active-btn");


let l_active_el = document.querySelector(".l-active");  
let s_active_el = document.querySelector(".s-active");

//signup
sActive.onclick = function(){
s_active_el.style.opacity = "0";
s_active_el.classList = "animate__animated animate__fadeOutUp active-box s-active";   // It is a Class....After installing Animate.css, add the class animate__animated to an element, along with any of the animation names (don't forget the animate__ prefix!)

l_active_el.style.opacity = "1";
l_active_el.style.zIndex = "1";
l_active_el.classList = "animate__animated animate__fadeInDown active-box l-active";
}
//sign in
lActive.onclick = function(){
l_active_el.style.opacity = "0";
l_active_el.classList = "animate__animated animate__fadeOutUp active-box s-active";   // It is a Class....After installing Animate.css, add the class animate__animated to an element, along with any of the animation names (don't forget the animate__ prefix!)

s_active_el.style.opacity = "1";
s_active_el.style.zIndex = "1";
s_active_el.classList = "animate__animated animate__fadeInDown active-box l-active";
}

//Signup coding start

let signup_btn = document.querySelector(".signup-btn");
let f_name = document.querySelector("#f-name");
let l_name = document.querySelector("#l-name");
let s_emailaddress = document.querySelector("#s-emailaddress");
let s_password = document.querySelector("#s-password");
let s_alert = document.querySelector("#s-alert")

signup_btn.onclick = function(e){
  e.preventDefault(); //Stop the defalut behaviour of from
     if (f_name.value != "" || l_name.value != "" || s_emailaddress.value != "" || s_password.value != "") 
     {
       if (localStorage.getItem(s_emailaddress.value) == null)
       {
         let data = {
    f_name : f_name.value,
    l_name : l_name.value,
    s_emailaddress : s_emailaddress.value,
    s_password : s_password.value
  };
     // console.log(data);
         let s_string = JSON.stringify(data);
         localStorage.setItem(s_emailaddress.value , s_string);
         s_alert.innerHTML = "Sign up Success ! ";
         s_alert.style.color = "green";
    setTimeout(function(){
      s_alert.innerHTML = ""
    },1000)
         
    f_name.value = "";
    l_name.value = "";
    s_emailaddress.value = "";
    s_password.value = "";
         
       }
       else {
         s_alert.innerHTML = "User name already exist ! ";
    s_alert.style.color = "red";
    setTimeout(function(){
      s_alert.innerHTML = ""
    },3000)
       }
       
     }
  else {
    s_alert.innerHTML = "Please fill all the fields ! ";
    s_alert.style.color = "red";
    setTimeout(function(){
      s_alert.innerHTML = ""
    },3000)
  }
}
//Signup coding end

//LOGIN CODEING  start

let login_btn = document.querySelector("#login-btn");
let s_emailaddresslogin = document.querySelector("#emailaddress");
let s_passwordlogin = document.querySelector("#password");
let l_alert = document.querySelector("#l-alert");

login_btn.onclick = function (e){
 e.preventDefault();
  if(s_emailaddresslogin.value != "" || s_passwordlogin.value != "")
  {
    if(localStorage.getItem(s_emailaddresslogin.value) != null)
    {
      let data = localStorage.getItem(s_emailaddresslogin.value);
      let l_obj = JSON.parse(data);
      let password = l_obj.s_password;

      if (s_passwordlogin.value == password) {
        window.location = "Contact/contact.html";
        sessionStorage.setItem("username" , s_emailaddresslogin.value);
      }
      else{
        l_alert.innerHTML = "Password is incorrect !";
    l_alert.style.color = "red";
    setTimeout(function(){
      l_alert.innerHTML = ""
    },3000)
      }
    }
    else{
       l_alert.innerHTML = "Username not found !";
    l_alert.style.color = "red";
    setTimeout(function(){
      l_alert.innerHTML = ""
    },3000)
    }
  }
  else{
    l_alert.innerHTML = "Input field is empty !";
    l_alert.style.color = "red";
    setTimeout(function(){
      l_alert.innerHTML = ""
    },3000)
  }
}
//LOGIN CODEING  END