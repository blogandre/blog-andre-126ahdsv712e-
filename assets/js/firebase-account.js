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
        apiKey: "AIzaSyDI7QMe0VaA8fZkq12abBhyxkFCGSTCxaE",
        authDomain: "blogandre-id.firebaseapp.com",
        databaseURL: "https://blogandre-id-default-rtdb.firebaseio.com",
        projectId: "blogandre-id",
        storageBucket: "blogandre-id.appspot.com",
        messagingSenderId: "807458840141",
        appId: "1:807458840141:web:5d8f62ab1ac2ad781ac604",
        measurementId: "G-YSM5L1QHSN",
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