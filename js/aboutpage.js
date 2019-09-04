/* Your web app's Firebase configuration*/
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
  
  //initialize firestore database and save the instance to db variable 
    const db= firebase.firestore();
    
    //create a collection and empty document and save the instance to docRef variable 
     const docRef = db.collection("messages").doc();
     let save = document.getElementById("saved");
     
   
   
   //declared this global variable so they can be accessed by all functions 
  let sname, fname, email, phone, sub;
  const date= Date.now();
  saved.addEventListener("click", () => {
     sname=document.getElementById("surname").value;
     fname=document.getElementById("first_name").value;
     email= document.getElementById("email").value;
     //E= Email.includes("@");
     phone= document.getElementById("phone_num").value;
     sub= document.getElementById("subject").value;
     
     
     if(!sname.match(/^['a-z A-Z]+$/) || sname==""){
        alert("enter your surname")
    }
    else if(!fname.match(/^['a-z A-Z]+$/) || fname==""){
        alert("enter your first name")
    
    }
    else if(!email.includes("@")){
        alert("invalid email")
    }
        else if(!phone.match(/^[+0-9]+$/) || phone.length<11 || phone.length>11){
        alert("Your number is incorrect")
    
    }
    else if(sub=="" || sub==null){
        alert("Please leave a message")

    }else{
        alert("Submitted");
      
    
     docRef.set({
      SurName: sname,
      FirstName: fname,
      Email: email,
      phoneNumber: phone,
      Comment: sub
      
      }
      ) 
      .then(function(){
        console.log("SUCCESSFULLY SAVED");
      })
      .catch(function(error){
        console.log("Got an Error:"+ error);
      });
    }
  }); 