
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



//   var firebaseConfig = {
//     apiKey: "AIzaSyBR4XlSKoIKhzhKacW7n7APUbtCR4vHtx4",
//     authDomain: "afrimapinternational.firebaseapp.com",
//     projectId: "afrimapinternational",
//     storageBucket: "afrimapinternational.appspot.com",
//     messagingSenderId: "486636940166",
//     appId: "1:486636940166:web:ce71e65f1410de61a11a07",
//     measurementId: "G-S5LGGJMR2R"
//   };
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   firebase.auth.Auth.Persistence.LOCAL;

//   alert("init")

  $("#btn-login").click(function(){

    var email = $("#email").val();
    var password = $("#password").val();

    // alert("clicking")
    // console.log("clicking");


if(email != "" && password != ""){

    // alert("login");


// alert(email + "  " + password)

    // var result = firebase.auth().signInWithEmailAndPassword(email, password);
    // result.catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // //   console.log(errorCode);
    // //   console.log(errorMessage);
    //   alert("Error" + errorMessage);
    // });


    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var uid = user.uid;
      alert("Success")
    window.location.href = "http://localhost:8080/register2/home.html";


    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

alert(errorCode)

    });



}else{
    alert("Form is incomplete, please fill out all fields");


}


  })




  $("#btnRegister").click(function(){


    var email = $("#email").val();
    var password = $("#password").val();


// alert("register")

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      
// alert("created")
window.location.href = "http://localhost:8080/register2/login.html";


    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      
alert(errorCode + "   "  + errorMessage)

    });
  

})

