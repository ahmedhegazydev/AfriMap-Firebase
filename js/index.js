  var firebaseConfig = {
    apiKey: "AIzaSyBR4XlSKoIKhzhKacW7n7APUbtCR4vHtx4",
    authDomain: "afrimapinternational.firebaseapp.com",
    projectId: "afrimapinternational",
    storageBucket: "afrimapinternational.appspot.com",
    messagingSenderId: "486636940166",
    appId: "1:486636940166:web:ce71e65f1410de61a11a07",
    measurementId: "G-S5LGGJMR2R"
  };
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   firebase.auth.Auth.Persistence.LOCAL;

  alert("init")

  $("#btn-login").click(function(){

    var email = $("#email").val();
    var password = $("#password").val();

    alert("clicking")

    console.log("clicking");


if(email != "" && password != ""){


    var result = firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

    window.alert("Form is incomplete, please fill out all fields"); 


    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode); 
      console.log(errorMessage); 


    });


}else{
    window.alert("Form is incomplete, please fill out all fields"); 


}


  })

