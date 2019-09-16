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
  const db= firebase.firestore();
let container, sendingLayout,successLayout,failedLayout, name;
container = document.getElementById("container");
sendingLayout = document.getElementById("sendingLayout");
successLayout = document.getElementById("successLayout");
failedLayout = document.getElementById("failedLayout");

sendingLayout.style.display = "none";
successLayout.style.display ="none";
failedLayout.style.display ="none";

const submitData = document.getElementById("submitData");
 submitData.addEventListener('click',()=>{
     name = document.getElementById("name").value;
     if(name!=null){
         sendData()
     }else{

     }
 })
 const sendData = ()=>{
     container.style.display="none";
     sendingLayout.style.display="block";
     sendToDatabase();
 }
 const sendToDatabase = ()=>{
     let docRef = db.collection("test").doc(name);
     docRef.set({
         Name: name
     })
     .then (function(){
        sendingLayout.style.display= "none";
         successLayout.style.display ="block";

     })
     .catch(function(error){
         container.style.display="block";
         console.log("error:"+error);
         failedLayout.style.display = "block";
     }) 
 }









































































