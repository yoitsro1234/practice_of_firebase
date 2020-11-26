var firebaseConfig = {
    apiKey: "AIzaSyBl2znQoKT-kuc_TwIZz419xhnO5mjpwc4",
    authDomain: "classtest-b3a61.firebaseapp.com",
    databaseURL: "https://classtest-b3a61.firebaseio.com",
    projectId: "classtest-b3a61",
    storageBucket: "classtest-b3a61.appspot.com",
    messagingSenderId: "1092210454654",
    appId: "1:1092210454654:web:c71697007c84b0da56e82f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// whj - ADD YOUR FIREBASE LINKS
// rss - done

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose = "adding user"
    });
}

// rss - done