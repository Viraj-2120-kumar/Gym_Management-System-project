document.addEventListener('DOMContentLoaded', () => {
    const goalButtons = document.querySelectorAll('[data-goal]');
    const fitnessLevelSelect = document.getElementById('fitnessLevel');
    const generatePlanBtn = document.getElementById('generatePlan');

    let selectedGoal = null;
    let selectedLevel = null;

    goalButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedGoal = button.dataset.goal;
            goalButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    fitnessLevelSelect.addEventListener('change', (e) => {
        selectedLevel = e.target.value;
    });

    generatePlanBtn.addEventListener('click', () => {
        if (selectedGoal && selectedLevel) {
            // Store data in localStorage or send to backend
            localStorage.setItem('fitnessGoal', selectedGoal);
            localStorage.setItem('fitnessLevel', selectedLevel);
            
            // Redirect to workout plan
            window.location.href = 'workout-plan.html';
        } else {
            alert('Please select goal and fitness level');
        }
    });
});

// Add this to your goal.js file
document.addEventListener('DOMContentLoaded', function() {
    const goalButtons = document.querySelectorAll('.goal-options button');

    goalButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            goalButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });
});
