var firebaseConfig = {
    apiKey: "AIzaSyD7v_2m9yYV3D32a1EMD1kQShJFghj2XtY",
    authDomain: "assignment-13a59.firebaseapp.com",
    databaseURL: "https://assignment-13a59.firebaseio.com",
    projectId: "assignment-13a59",
    storageBucket: "",
    messagingSenderId: "968363655728",
    appId: "1:968363655728:web:7a6e18141dfe699b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");
  let email, password;
 
  const signinPage = document.getElementById("loginbtn");
signinPage.addEventListener('click',()=>{
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        window.location ="profilepage.html";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error:" + error.code);
        // ...
      })
    })