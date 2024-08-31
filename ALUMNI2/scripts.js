// Search functionality for the Directory page
function searchDirectory() {
    const searchTerm = document.getElementById('directory-search').value.toLowerCase();
    const directoryItems = document.querySelectorAll('.directory-item');
   
    directoryItems.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
       
        if (name.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Basic signup form validation
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault(); // Prevent form submission
    }
});

// Basic contact form validation
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    }
});