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
  let sname, fname, email, Caddress, phone, DOB, Uname, Crpass, Cmpass, signinPage, sendingLayout, successLayout, failedLayout, container, login;
  container = document.getElementById("container");
 
  sendingLayout = document.getElementById("sendingLayout");
successLayout = document.getElementById("successLayout");
failedLayout = document.getElementById("failedLayout");

sendingLayout.style.display = "none";
successLayout.style.display ="none";
failedLayout.style.display ="none";

const submitData = document.getElementById("submitData");
submitData.addEventListener('click',()=>{
    fname = document.getElementById("fname").value;
    sname = document.getElementById("sname").value;
    Caddress = document.getElementById("Caddress").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    DOB = document.getElementById("DOB").value;
    Uname = document.getElementById("Uname").value;
    Crpass = document.getElementById("Crpass").value;
    Cmpass = document.getElementById("Cmpass").value;
    //validate the user input
    if(!fname.match(/^['a-z A-Z]+$/) || fname==""){
        alert("enter your surname")
    }
    else if(!sname.match(/^['a-z A-Z]+$/) || sname==""){
        alert("enter your first name")
    
    }
    else if(Caddress ==""){
        alert("Enter your address")
    }
    else if(!email.includes("@")){
        alert("invalid email")
    }
        else if(!phone.match(/^[+0-9]+$/) || phone.length<11 || phone.length>11){
        alert("YOUR NUMBER IS INCORRECT")
    }
        else if(!DOB.match(/^[/0-9]+$/) || DOB ==""){
            alert("Enter your DOB")
        }
        else if(Uname=="" || Uname.length<4){
            alert("Your UserName should be greater than 4 digits")

        }
        else if(Crpass=="" || Crpass.length<6){
            alert("Your password length should not be less than 6")
        }
        else if(!Cmpass.match(Crpass) || Cmpass==""){
            alert("Your password doesnt match created password")
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email, Crpass).then(function(){
                sendData();
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error:" + error);
                // ...
              });
           
}})
        const sendData = ()=>{
            // hide the container
            container.style.display="none";
            
            sendingLayout.style.display="block";
            sendToDatabase();
        }
        const sendToDatabase = ()=>{
            let docRef = db.collection("collect").doc(phone);
            docRef.set({
            SurName: sname,
            FirstName: fname,
            Email: email,
            PhoneNumber: phone,
            ContactAddress: Caddress,
            DateOfBirth: DOB,
            UserName: Uname,
            Password: Cmpass

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
// initialize loginpage and send the user there
const loginPage = document.getElementById("login");
loginPage.addEventListener('click',()=>{
    window.location ="sign_in.html";
}) 

        }
