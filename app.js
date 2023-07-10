// Google Sign-In Button
var googleSignInButton = document.getElementById('googleSignIn');

// Google Sign-In event listener
googleSignInButton.addEventListener('click', function() {
  var googleProvider = new firebase.auth.GoogleAuthProvider();

  // Sign in with Google popup
  firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      // User signed in
      var user = result.user;
      console.log("User signed in:", user);

      displayUserInfo(user);
    })
    .catch(function(error) {
      // Handle errors
      console.log("Sign in error:", error);
    });
});

const githubSigninButton = document.getElementById('githubSignin');
  githubSigninButton.addEventListener('click', function() {
  console.log("github button clicked ok ");
  const githubProvider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithPopup(githubProvider)
    .then(function(result) {
      const user = result.user;
      console.log("User signed in:", user);

      displayUserInfo(user);
    })
    .catch(function(error) {
      console.log("Sign in error:", error);
    });
}); // Added closing parenthesis here

// Check if user is already signed in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
    displayUserInfo(user);
  } else {
    // User is signed out
    console.log("User is signed out");
    clearUserInfo();
  }
});

// Sign out
var signOutButton = document.getElementById('signOutButton');
signOutButton.addEventListener('click', function() {
  firebase.auth().signOut()
    .then(function() {
      console.log("User signed out");
      clearUserInfo();
    })
    .catch(function(error) {
      console.log("Sign out error:", error);
    });
});

// Function to display user information
function displayUserInfo(user) {
  var userNameElement = document.getElementById('userName');
  var userEmailElement = document.getElementById('userEmail');

  userNameElement.textContent = "Name: " + user.displayName;
  userEmailElement.textContent = "Email: " + user.email;

  // Show the user details container
  document.getElementById('userDetails').style.display = 'block';
}

// Function to clear user information
function clearUserInfo() {
  var userNameElement = document.getElementById('userName');
  var userEmailElement = document.getElementById('userEmail');

  userNameElement.textContent = "";
  userEmailElement.textContent = "";

  // Hide the user details container
  document.getElementById('userDetails').style.display = 'none';
}
