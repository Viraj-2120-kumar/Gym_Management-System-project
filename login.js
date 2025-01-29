document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Basic validation
        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Password strength check
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Store user email (in a real app, use secure authentication)
        localStorage.setItem('userEmail', email);

        // Simulate login (replace with actual authentication in production)
        try {
            // Redirect to profile page
            window.location.href = 'profile.html';
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    });

    // Optional: Remember me functionality
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('loginEmail').value = rememberedEmail;
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'profile.html'; // Redirect to profile.html
});
