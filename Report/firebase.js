// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCbfIND8mb0ggsHpV4bYtVCn5Qzt58U64o",
  authDomain: "stack-image.firebaseapp.com",
  databaseURL: "https://stack-image-default-rtdb.firebaseio.com",
  projectId: "stack-image",
  storageBucket: "stack-image.appspot.com",
  messagingSenderId: "958868122247",
  appId: "1:958868122247:web:38956a32407616e2faa622",
  measurementId: "G-QG1DE7N0JD"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Report');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var desain = getInputVal('desain');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, desain, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, desain, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      desain: desain,
      message:message
    });
  }