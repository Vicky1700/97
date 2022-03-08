
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBH2Hogj6DRR5WKy-72Uz9sf34HjqRoDN4",
      authDomain: "c-94-8e8b1.firebaseapp.com",
      databaseURL: "https://c-94-8e8b1-default-rtdb.firebaseio.com",
      projectId: "c-94-8e8b1",
      storageBucket: "c-94-8e8b1.appspot.com",
      messagingSenderId: "531342549544",
      appId: "1:531342549544:web:6b08eb19474c49b79c4b1d",
      measurementId: "G-N6HWLWSLMZ"
    };
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

    }
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                meassage:msg,
                like:0
          });
    }
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="kwitter.html";
 }
 
