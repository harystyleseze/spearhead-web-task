document.addEventListener("DOMContentLoaded", function () {
  const createAccountForm = document.getElementById("createAccountForm");

  createAccountForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    const accountType = document.getElementById("accountType").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    let isValid = true;

    if (!validateAccountType(accountType)) {
      showError("accountTypeError", "Please select an account type.");
      isValid = false;
    }

    if (!validateName(firstName)) {
      showError("firstNameError", "Please enter a valid first name.");
      isValid = false;
    }

    if (!validateName(lastName)) {
      showError("lastNameError", "Please enter a valid last name.");
      isValid = false;
    }

    if (!validateUsername(username)) {
      showError("usernameError", "Please enter a valid username.");
      isValid = false;
    }

    if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email address.");
      isValid = false;
    }

    if (!validatePhone(phone)) {
      showError("phoneError", "Please enter a valid phone number.");
      isValid = false;
    }

    if (isValid) {
      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        showError("passwordError", passwordValidation.message);
        isValid = false;
      }
    }

    if (isValid) {
      // Submit form if all validations pass
      // Implement form submission logic here
      // alert("Account created successfully!");
      window.location.href = "../verification page/index.html";
    }
  });

  function validateAccountType(accountType) {
    return accountType !== "";
  }

  function validateName(name) {
    const re = /^[a-zA-Z]+$/;
    return re.test(name.trim());
  }

  function validateUsername(username) {
    return username.trim().length > 0;
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^[0-9]{10,15}$/;
    return re.test(String(phone));
  }

  function validatePassword(password) {
    if (password.length < 8) {
      return {
        isValid: false,
        message: "Password must be at least 8 characters long.",
      };
    }
    if (!/[A-Z]/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one uppercase letter.",
      };
    }
    if (!/[a-z]/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one lowercase letter.",
      };
    }
    if (!/[0-9]/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one number.",
      };
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one special character.",
      };
    }
    return { isValid: true, message: "" };
  }

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });
  }
});
