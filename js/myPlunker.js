// Add your code here
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAwj9_NiBgsDz7VfnkLK3kYsXTtkMiet0",
    authDomain: "zainab-6191a.firebaseapp.com",
    databaseURL: "https://zainab-6191a.firebaseio.com",
    projectId: "zainab-6191a",
    storageBucket: "zainab-6191a.appspot.com",
    messagingSenderId: "806473580037",
    appId: "1:806473580037:web:d374269bfd563f68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");
  const db= firebase.firestore();
  const docRef = db.collection("messages").doc();
  let save = document.getElementById("saved");

  let name, email, phone;
const date= Date.now();
  save.addEventListener("click", () => {
    name = document.getElementById("name").value;
     email = document.getElementById("email").value;
    phone = document.getElementById("phoneNumber").value;
    saveToDateBase();

  })
  const saveToDateBase= () =>{
    
    docRef.set({
      Name: name,
      Email: email,
      phoneNumber: phone
    })
    .then(function(){
      console.log("SUCCESSFULLY SAVED");
    })
    .catch(function(error){
      console.log("Got an Error:"+ error);
    });
  };
