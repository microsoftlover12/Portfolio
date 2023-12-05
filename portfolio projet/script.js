function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessages = document.getElementById('errorMessages');

    errorMessages.innerHTML = ''; // Clear previous error messages

    // Validate name, email, and message
    if (name === '' || email === '' || message === '') {
        displayErrorMessage('All fields are required.');
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayErrorMessage('Invalid email format.');
        return false;
    }

    // Validate message length
    if (message.length > 200) {
        displayErrorMessage('Message is too long. Maximum length is 200 characters.');
        return false;
    }

    // If all validations pass, the form can be submitted
    alert('Form submitted successfully!');
    return true;
}

function displayErrorMessage(message) {
    const errorMessages = document.getElementById('errorMessages');
    const errorMessageElement = document.createElement('p');
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = 'red';
    errorMessages.appendChild(errorMessageElement);
}
