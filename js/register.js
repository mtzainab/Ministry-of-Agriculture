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
   const docRef = db.collection("register").doc();
   let save = document.getElementById("saved");
   let sname, fname, email, Caddress, phone, DOB, Uname, Crpass, Cmpass;
   saved.addEventListener("click", () =>{
       fname = document.getElementById("fname").value;
       sname = document.getElementById("sname").value;
       Caddress = document.getElementById("Caddress").value;
       email = document.getElementById("email").value;
       phone = document.getElementById("phone").value;
       DOB = document.getElementById("DOB").value;
       Uname = document.getElementById("Uname").value;
       Crpass = document.getElementById("Crpass").value;
       Cmpass = document.getElementById("Cmpass").value;

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
        else if(!DOB.match(/^[+0-9]+$/) || DOB ==""){
            alert("Enter your DOB")
        }
        else if(Uname=="" || Uname.length<4){
            alert("Your UserName should be greater than 4 digits")

        }
        else if(Crpass=="" || Crpass.length<6){
            alert("Your password length should not be less than 6")
        }
        else if(!Cmpass.match(Crpass) || Cmpass==""){
            alert("Your password doesnt match")
        }
        else{
            alert("Submitted");
            
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
            .then(function(){
                console.log("SUCCESSFULLY SAVED");
              })
              .catch(function(error){
                console.log("Got an Error:"+ error);
        });

   }})
