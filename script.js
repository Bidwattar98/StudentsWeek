// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Initialize the default section
window.onload = function () {
    showSection('home');
};

// Form submission handling for Contact Us form
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Prepare the data for submission
    const data = {
        name: name,
        email: email,
        feedback: feedback
    };

    // Replace with your Google Apps Script URL
    const googleAppsScriptURL = '';

    // Send data to Google Sheets via POST request
    fetch(googleAppsScriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(responseText => {
        alert('Feedback submitted successfully!');
        document.getElementById('feedback-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your feedback. Please try again.');
    });
});
