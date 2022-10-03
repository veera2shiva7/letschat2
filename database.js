
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtPjEv-HQ2aHLrXxPuRntUcUua6iTWU-Q",
    authDomain: "lets-chat-e3ae9.firebaseapp.com",
    projectId: "lets-chat-e3ae9",
    storageBucket: "lets-chat-e3ae9.appspot.com",
    messagingSenderId: "299177673362",
    appId: "1:299177673362:web:469ab9764d72943b03dc4b",
    measurementId: "G-6JHBDD9WHG"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
