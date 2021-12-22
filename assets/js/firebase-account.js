var myDate = new Date();
            var hrs = myDate.getHours();
        
            var greet;
        
            if (hrs < 12)
                greet = 'Selamat Pagi';
            else if (hrs >= 12 && hrs <= 14)
                greet = 'Selamat Siang';
            else if (hrs >= 13 && hrs <= 18)
                greet = 'Selamat Sore';
            else if (hrs >= 19 && hrs <= 24)
                greet = 'Selamat Malam';
        
            document.getElementById('welcome').innerHTML =
                '<b>' + greet + '</b> ';

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCbfIND8mb0ggsHpV4bYtVCn5Qzt58U64o",
        authDomain: "stack-image.firebaseapp.com",
        databaseURL: "https://stack-image-default-rtdb.firebaseio.com",
        projectId: "stack-image",
        storageBucket: "stack-image.appspot.com",
        messagingSenderId: "958868122247",
        appId: "1:958868122247:web:38956a32407616e2faa622",
        measurementId: "G-QG1DE7N0JD",
      };
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          document.getElementById("img").innerHTML = `
                <p><img src="${user.photoURL}">
            `;
          document.getElementById("username").innerHTML = `
                ${user.displayName}
            `;
            document.getElementById("email").innerHTML = `
               ${user.email}
            `;
            document.getElementById("phone").innerHTML = `
               ${user.emailVerified}
            `;
          document.getElementById("username-link").innerHTML = `${user.uid}
            `;
            const linkUsername = document.getElementById("username-link");
            const link = document.getElementById("link");
            link.href = link.textContent ;

        }   else {
          window.location = "Login/index.html";
        }
      });

      function logout() {
        firebase
          .auth()
          .signOut()
          .then(function () {
            window.location = "Login/index.html";
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      showData();