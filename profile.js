document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');

    // Function to validate input
    function validateInput(input, errorMessage) {
        if (!input.value.trim()) {
            alert(errorMessage);
            input.focus();
            return false;
        }
        return true;
    }

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get all input elements
        const nameInput = document.getElementById('name');
        const ageInput = document.getElementById('age');
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');

        // Validate inputs
        const isNameValid = validateInput(nameInput, 'Please enter your full name');
        const isAgeValid = validateInput(ageInput, 'Please enter your age');
        const isHeightValid = validateInput(heightInput, 'Please enter your height');
        const isWeightValid = validateInput(weightInput, 'Please enter your weight');

        // Additional specific validations
        const age = parseInt(ageInput.value);
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (age < 12 || age > 100) {
            alert('Please enter a valid age between 12 and 100');
            return;
        }

        if (height < 100 || height > 250) {
            alert('Please enter a valid height between 100 and 250 cm');
            return;
        }

        if (weight < 30 || weight > 300) {
            alert('Please enter a valid weight between 30 and 300 kg');
            return;
        }

        // If all validations pass, create user profile object
        const userProfile = {
            name: nameInput.value.trim(),
            age: age,
            height: height,
            weight: weight,
            bmi: calculateBMI(height, weight)
        };

        // Store user profile in localStorage
        localStorage.setItem('userProfile', JSON.stringify(userProfile));

        // Calculate BMI function
        function calculateBMI(height, weight) {
            // Convert height to meters
            const heightInMeters = height / 100;
            // Calculate BMI
            return (weight / (heightInMeters * heightInMeters)).toFixed(2);
        }

        // Redirect to goal selection page
        window.location.href = 'goal-selection.html';
    });

    // Optional: Prefill form if data exists
    const existingProfile = localStorage.getItem('userProfile');
    if (existingProfile) {
        const profile = JSON.parse(existingProfile);
        document.getElementById('name').value = profile.name;
        document.getElementById('age').value = profile.age;
        document.getElementById('height').value = profile.height;
        document.getElementById('weight').value = profile.weight;
    }
});
