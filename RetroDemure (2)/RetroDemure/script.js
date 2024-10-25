const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the submit button and input fields
  const submitButton = document.getElementById('submit-btn');
  const nameInput = document.querySelector('input[placeholder="Your Name"]');
  const emailInput = document.querySelector('input[placeholder="E-mail"]');
  const subjectInput = document.querySelector('input[placeholder="Subject"]');
  const messageInput = document.querySelector('textarea[placeholder="Your Message"]');

  // Add a click event listener to the button
  submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the values from the inputs
      const name = nameInput.value;
      const email = emailInput.value;
      const subject = subjectInput.value;
      const message = messageInput.value;

      // Basic email validation function
      function validateEmail(email) {
          const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return re.test(String(email).toLowerCase());
      }

      // Check if the email is valid
      if (validateEmail(email) && name && subject && message) {
          // If valid, simulate sending the message and show a success message
          alert("Thank you for your message! We will get back to you shortly.");

          // Optional: Reset the form fields after submission
          nameInput.value = '';
          emailInput.value = '';
          subjectInput.value = '';
          messageInput.value = '';
      } else {
          // If the email is invalid or fields are empty, show an error message
          alert("Please fill in all fields correctly, including a valid email address.");
      }
  });
});


// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the sign-up button and input field
  const signupButton = document.getElementById('signup-btn');
  const emailInput = document.querySelector('input[type="text"]');

  // Add a click event listener to the button
  signupButton.addEventListener('click', function() {
      // Get the email value from the input
      const email = emailInput.value;

      // Basic email validation function
      function validateEmail(email) {
          const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return re.test(String(email).toLowerCase());
      }

      // Check if the email is valid
      if (validateEmail(email)) {
          // If valid, simulate sending the email and show a success message
          alert("Thank you for signing up for our newsletter!");

          // You can add actual email sending logic here (via backend or API)
      } else {
          // If the email is invalid, show an error message
          alert("Please enter a valid email address.");
      }
  });
});

// Select the forgot password form and the submit button
const forgotPwForm = document.querySelector('#forgot-pw form');

// Add event listener to the form
forgotPwForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Simulate sending an email
  alert('An email has been sent to reset your password.');

  // Optionally, you can reset the form or close the modal after submission
  forgotPwForm.reset(); // Reset the form fields
  window.location.hash = ''; // Close the modal by removing the hash
});

// Wait for the document to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Select the add to cart button
//   const addToCartBtn = document.getElementById('addtocart-btn');
//   const sizeSelect = document.getElementById('size-select'); // Assuming you have a size dropdown
//   const quantityInput = document.querySelector('input[type="number"]');

//   // Add a click event listener to the button
//   addToCartBtn.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent any default behavior

//       // Get the selected size and quantity
//       const selectedSize = sizeSelect.value;
//       const quantity = quantityInput.value;

//       // Basic validation for size selection and quantity
//       if (selectedSize === 'Select Size') {
//           alert("Please select a size before adding to the cart.");
//       } else if (quantity <= 0) {
//           alert("Please enter a valid quantity.");
//       } else {
//           // If valid, simulate adding to cart and show a success message
//           alert(`The item has been successfully added to the cart!\nSize: ${selectedSize}\nQuantity: ${quantity}`);

//           // Optionally reset the fields (you can remove this if not needed)
//           sizeSelect.value = 'Select Size';
//           quantityInput.value = 1;
//       }
//   });
// });
