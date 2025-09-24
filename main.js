// HTML Selectors
const mainForm = document.getElementById("main-form");
const outputDiv = document.getElementById("output");

// Get the variables of the inputs
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const birthdateInput = document.getElementById("birthdate");

// Event Listener
mainForm.addEventListener('submit', function (event) {
  // Prevent the action from the form to refresh the page
  event.preventDefault();

  // Get selected Interests
  const selectedInterests = [];
  document.querySelectorAll('input[name="interests"]:checked').forEach(checkbox => {selectedInterests.push(checkbox.value)});

  // Get the output
  outputDiv.innerHTML = `
    <p>My first name is: ${firstNameInput.value}</p>
    <p>My last name is: ${lastNameInput.value}</p>
    <p>My email is: ${emailInput.value}</p>
    <p>My password is: ${passwordInput.value}</p>
    <p>My birthday is: ${birthdateInput.value}</p>
    <p>My interests are: ${selectedInterests.join(', ')}</p>
  `

  outputDiv.style.display = 'block';

  // Clear the inputs
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  birthdateInput.value = '';
  document.querySelectorAll('input[name="interests"]').forEach(checkbox => {checkbox.checked = false;})
});