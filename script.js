//your JS code here. If required.

        // Check if credentials are saved in localStorage
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
            // Show the "Login as existing user" button
            document.getElementById("existing").style.display = "block";
        }

        // Handle form submission
        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const rememberMe = document.getElementById("checkbox").checked;

            if (rememberMe) {
                // Save credentials to localStorage
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                // Remove credentials from localStorage
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            alert(`Logged in as ${username}`);
        });

        // Handle "Login as existing user" button click
        document.getElementById("existing").addEventListener("click", function () {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                // Auto-fill the form
                document.getElementById("username").value = savedUsername;
                document.getElementById("password").value = savedPassword;
                alert(`Logged in as ${savedUsername}`);
            } else {
                alert("No saved credentials found.");
            }
        });
