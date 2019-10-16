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


//the news api
const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ea3854e4a1442d0a682b18448030327';
//the fetch function
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  //getting all the data results in an object
  let authors = data.articles;
//creating an html title element from javascript
  let result = `<h2> Latest News</h2>`;
  //using for loop to go through the items and print them out
  authors.forEach((news) => {
    //accessing the object element for the required item
    const { urlToImage, title, description, content, publishedAt, author, url } = news
    //creating a div element on javascript and assigning it to a variable
    result +=
    `<div>
        <ul class="w3-ul">
            <img height="20%" width="20%" src="${urlToImage}"/>
            <h3>${title}</h3>
            <p>${description}</p>
            <p>${content}</p>
            <i>${publishedAt}</i>
            <i>${author}<i>
            <a id="button" target="blank" href="${url}">Read more....</a>
        </ul>
    </div>`;
  //passing the variable to an html id to display our news results
    document.getElementById('results').innerHTML = result;


  });

})
.catch(function(error) {
  console.log(error);
}); 









































































