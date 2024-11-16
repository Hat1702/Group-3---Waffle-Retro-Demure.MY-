document.addEventListener('DOMContentLoaded', function() {
  // Select the form fields and button for signup
  const submitButton = document.querySelector('.submit-btn');
  const signupEmail = document.getElementById('signupEmail');
  const signupBirthDate = document.getElementById('signupBirthDate');
  const signupZip = document.getElementById('signupZip');
  const signupPhone = document.getElementById('signupPhone');
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  // Birth date validation (16+)
  const today = new Date();
  const minDate = new Date(today.setFullYear(today.getFullYear() - 16));
  const minDateString = minDate.toISOString().split('T')[0];
  document.getElementById('signupBirthDate').setAttribute('max', minDateString);

  // Zip code validation (only digits)
  const zipCodePattern = /^\d{5}(-\d{4})?$/;

  // Phone number validation (valid format)
  const phonePattern = /^[+]?[0-9]{10,14}$/;

  // Submit button event listener
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const email = signupEmail.value.trim(); // Trim any leading/trailing spaces
    const birthDate = signupBirthDate.value;
    const zipCode = signupZip.value;
    const phoneNumber = signupPhone.value;

    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      signupEmail.focus();
      return;
    }

    // Validate birth date (16+)
    if (!birthDate || new Date(birthDate) > new Date(minDate)) {
      alert('You must be 16 years or older to sign up.');
      signupBirthDate.focus();
      return;
    }

    // Validate zip code
    if (!zipCodePattern.test(zipCode)) {
      alert('Please enter a valid zip code.');
      signupZip.focus();
      return;
    }

    // Validate phone number
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid phone number.');
      signupPhone.focus();
      return;
    }

    // If all validations pass, submit the form (you can do this using AJAX or backend integration)
    alert("Signup successful!");
    // Optionally, you can reset the form fields
    document.querySelector('.form').reset();
  });
});

// Login/Logout Logic
document.addEventListener('DOMContentLoaded', function() {
  // Select elements
  const loginButton = document.getElementById('login-btn');
  const logoutButton = document.getElementById('logout-btn');
  const userNameDisplay = document.getElementById('user-name');
  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');
  const profilePhone = document.getElementById('profile-phone');
  const navbarLoginLink = document.getElementById('navbar-login-link');
  const cart = document.getElementById('cart');

  // Check if the user is already logged in by checking localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('user'));

  if (loggedInUser) {
    // If user is logged in, hide the login link and show user info
    navbarLoginLink.style.display = 'none';
    userNameDisplay.textContent = `Welcome, ${loggedInUser.name}`;
    cart.style.display = 'block';  // Ensure the cart is visible

    // Display user info on the profile page
    if (profileName && profileEmail && profilePhone) {
      profileName.textContent = loggedInUser.name;
      profileEmail.textContent = loggedInUser.email;
      profilePhone.textContent = loggedInUser.phone;
    }
  }

  // Handle login button click
  if (loginButton) {
    loginButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission

      // Simulate login (In reality, you would authenticate the user)
      const name = document.getElementById('login-name').value;
      const email = document.getElementById('login-email').value;
      const phone = document.getElementById('login-phone').value;

      if (name && email && phone) {
        // Save user information to localStorage (you can use sessionStorage if preferred)
        const user = {
          name: name,
          email: email,
          phone: phone
        };

        localStorage.setItem('user', JSON.stringify(user));

        // Update the UI
        navbarLoginLink.style.display = 'none';
        userNameDisplay.textContent = `Welcome, ${name}`;
        cart.style.display = 'block';  // Show cart

        // Display user info on the profile page
        if (profileName && profileEmail && profilePhone) {
          profileName.textContent = name;
          profileEmail.textContent = email;
          profilePhone.textContent = phone;
        }
      } else {
        alert('Please fill in all login fields.');
      }
    });
  }

  // Handle logout button click
  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      // Remove user info from localStorage and update the UI
      localStorage.removeItem('user');
      navbarLoginLink.style.display = 'block';  // Show the login link again
      userNameDisplay.textContent = '';
      cart.style.display = 'none';  // Hide cart after logout

      // Optionally redirect to the login page or reload the page
      window.location.reload(); // This will reload the page and reset the state
    });
  }
});

// Hamburger Menu (Sidebar Navigation)
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// Contact Form Submission with Validation
document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submit-btn');
  const nameInput = document.querySelector('input[placeholder="Your Name"]');
  const emailInput = document.querySelector('input[placeholder="E-mail"]');
  const subjectInput = document.querySelector('input[placeholder="Subject"]');
  const messageInput = document.querySelector('textarea[placeholder="Your Message"]');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    }

    if (validateEmail(email) && name && subject && message) {
      alert("Thank you for your message! We will get back to you shortly.");
      nameInput.value = '';
      emailInput.value = '';
      subjectInput.value = '';
      messageInput.value = '';
    } else {
      alert("Please fill in all fields correctly, including a valid email address.");
    }
  });
});

// Newsletter Sign-up Logic
document.addEventListener('DOMContentLoaded', function() {
  const signupButton = document.getElementById('signup-btn');
  const emailInput = document.querySelector('input[type="text"]');

  signupButton.addEventListener('click', function() {
    const email = emailInput.value;

    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    }

    if (validateEmail(email)) {
      alert("Thank you for signing up for our newsletter!");
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
