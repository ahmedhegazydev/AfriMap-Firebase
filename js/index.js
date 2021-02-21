

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}



// firebase.auth().onAuthStateChanged(function(user) {  
//     if (user) { 
// // User is signed in. 
// // alert("Success")

// window.location.href = "http://localhost:8080/register2/login.html";


// }
//   else {   
//     // No user is signed in.
//     // alert("No user is signed in.")

//   }
// });



// alert("dsdsd");
  var firebaseConfig = {
    apiKey: "AIzaSyBR4XlSKoIKhzhKacW7n7APUbtCR4vHtx4",
    authDomain: "afrimapinternational.firebaseapp.com",
    databaseURL: "https://afrimapinternational-default-rtdb.firebaseio.com",
    projectId: "afrimapinternational",
    storageBucket: "afrimapinternational.appspot.com",
    messagingSenderId: "486636940166",
    appId: "1:486636940166:web:ce71e65f1410de61a11a07",
    measurementId: "G-S5LGGJMR2R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   console.log("initd sdsds");
//   firebase.analytics();
//   firebase.auth.Auth.Persistence.LOCAL;



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var xLogin = document.getElementById("signin");
            xLogin.style.display = "none";
            var xRegister = document.getElementById("signup");
            xRegister.style.display = "none";



            document.getElementById("id_login_register").innerHTML =  user.email
            // document.getElementById("id_login_register").innerHTML =  user.displayName
                    // document.getElementById("id_login_register").innerHTML =  user.uid

            // document.getElementById("id_login_register").href = "";

            // document.getElementById("user_options").style.display = "block";
            document.getElementById("li_user_name").style.display = "block";
            document.getElementById("li_logout").style.display = "block";



  } else {
    // No user is signed in.
    // document.getElementById("id_login_register").href = "#testimonials";
    document.getElementById("id_login_register").innerHTML =  "Login/Register"
    document.getElementById("li_logout").style.display = "none";


    
  }
});


//   alert("init")
//   $("#btn-login").click(function(){
//     var email = $("#email").val();
//     var password = $("#password").val();
//     // alert("clicking")
//     // console.log("clicking");
// if(email != "" && password != ""){
//     // alert("login");
// // alert(email + "  " + password)
//     // var result = firebase.auth().signInWithEmailAndPassword(email, password);
//     // result.catch((error) => {
//     //   var errorCode = error.code;
//     //   var errorMessage = error.message;
//     //   console.log(errorCode);
//     //   console.log(errorMessage);
//     //   alert("Error" + errorMessage);
//     // });
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
//       var uid = user.uid;
//       alert("Success")
//     // window.location.href = "http://localhost:8080/register2/home.html";
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;

// alert(errorCode)

//     });
// }else{
//     alert("Form is incomplete, please fill out all fields");
// }
//   })




//   $("#btnRegister").click(function(){


//     var email = $("#email").val();
//     var password = $("#password").val();


// // alert("register")

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
      
// // alert("created")
// window.location.href = "http://localhost:8080/register2/login.html";


//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
      
// alert(errorCode + "   "  + errorMessage)

//     });
  

// })



// firebase.auth().onAuthStateChanged(function(user) {
//     if (!user) {
//       // User is signed in.

//     //   document.getElementById("register_div").style.display = "block";
//     //   document.getElementById("login_div").style.display = "none";

//     window.location.href = "login.html";

//       var user = firebase.auth().currentUser;
//     //   window.alert("success");

//       if(user != null){

//         var email_id = user.email;
//         // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

//         // alert("sccess");
//         // window.location.href = "home.html";
//       }

//     } else {
//       // No user is signed in.

//     //   document.getElementById("register_div").style.display = "none";
//     //   document.getElementById("login_div").style.display = "block";

//     // alert("Error");
//     window.location.href = "home.html";

//     }
//   });

  function login(){
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    // alert("clicking");

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // alert("success");

   })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    });

  }

  function logout(){
    // firebase.auth().signOut();


    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      // window.location.href=window.location.href
      window.location.reload();
    }).catch((error) => {
      // An error happened.

    });



  }


  $(function() {
    $("li#li_logout").click(function() {
        //alert("clicked:" + this.id);
        logout();
  
    });
  
    // $("li#li_logout").trigger("click");
  });