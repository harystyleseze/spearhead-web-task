document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let valid = true;

    // Validate email
    if (!email) {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      valid = false;
    }

    // Only proceed to validate the password if email is valid
    if (valid) {
      // Validate password step by step
      if (password.length < 8) {
        document.getElementById("passwordError").textContent =
          "Password must be at least 8 characters long.";
        valid = false;
      } else if (!/[A-Z]/.test(password)) {
        document.getElementById("passwordError").textContent =
          "Password must contain at least one uppercase letter.";
        valid = false;
      } else if (!/[a-z]/.test(password)) {
        document.getElementById("passwordError").textContent =
          "Password must contain at least one lowercase letter.";
        valid = false;
      } else if (!/[0-9]/.test(password)) {
        document.getElementById("passwordError").textContent =
          "Password must contain at least one number.";
        valid = false;
      } else if (!/[@$!%*?&]/.test(password)) {
        document.getElementById("passwordError").textContent =
          "Password must contain at least one special character.";
        valid = false;
      }
    }

    if (valid) {
      // Submit the form if validation is successful
      // For demonstration, we'll log the values to the console
      console.log("Email:", email);
      console.log("Password:", password);
      window.location.href = "../account type/index.html";
    }
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
