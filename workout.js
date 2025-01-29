document.addEventListener('DOMContentLoaded', () => {
    // Retrieve user's goal and fitness level
    const goal = localStorage.getItem('fitnessGoal');
    const level = localStorage.getItem('fitnessLevel');
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    // Comprehensive workout plans
    const workoutPlans = {
        'muscle-gain': {
            'beginner': {
                days: 3,
                exercises: [
                    { name: 'Bodyweight Squats', sets: 3, reps: 12, focus: 'Legs' },
                    { name: 'Push-ups', sets: 3, reps: 10, focus: 'Chest' },
                    { name: 'Dumbbell Rows', sets: 3, reps: 10, focus: 'Back' },
                    { name: 'Plank', sets: 3, duration: '30 seconds', focus: 'Core' }
                ],
                nutrition: {
                    protein: 1.6,  // grams per kg of body weight
                    carbs: 4,      // grams per kg of body weight
                    calories: 'Surplus'
                }
            },
            'intermediate': {
                days: 4,
                exercises: [
                    { name: 'Barbell Squats', sets: 4, reps: 8, focus: 'Legs' },
                    { name: 'Bench Press', sets: 4, reps: 8, focus: 'Chest' },
                    { name: 'Deadlifts', sets: 4, reps: 6, focus: 'Back' },
                    { name: 'Pull-ups', sets: 3, reps: 10, focus: 'Upper Body' }
                ],
                nutrition: {
                    protein: 1.8,
                    carbs: 5,
                    calories: 'Moderate Surplus'
                }
            }
        },
        'weight-loss': {
            'beginner': {
                days: 4,
                exercises: [
                    { name: 'Jumping Jacks', sets: 3, reps: 20, focus: 'Cardio' },
                    { name: 'Bodyweight Lunges', sets: 3, reps: 12, focus: 'Legs' },
                    { name: 'Mountain Climbers', sets: 3, reps: 15, focus: 'Core' },
                    { name: 'High Knees', sets: 3, duration: '45 seconds', focus: 'Cardio' }
                ],
                nutrition: {
                    protein: 1.2,
                    carbs: 3,
                    calories: 'Deficit'
                }
            },
            'intermediate': {
                days: 5,
                exercises: [
                    { name: 'HIIT Intervals', sets: 4, duration: '30 seconds', focus: 'Cardio' },
                    { name: 'Burpees', sets: 3, reps: 15, focus: 'Full Body' },
                    { name: 'Running', duration: '30 minutes', focus: 'Cardio' },
                    { name: 'Cycling', duration: '45 minutes', focus: 'Cardio' }
                ],
                nutrition: {
                    protein: 1.4,
                    carbs: 3.5,
                    calories: 'Moderate Deficit'
                }
            }
        }
    };

    function generateWorkoutPlan() {
        const plan = workoutPlans[goal][level];
        
        // Create workout plan HTML
        const workoutHTML = `
            <div class="workout-summary">
                <h2>${goal.replace('-', ' ').toUpperCase()} Plan - ${level.toUpperCase()}</h2>
                <p>Workout Days per Week: ${plan.days}</p>
            </div>

            <div class="exercises-section">
                <h3>Exercises</h3>
                ${plan.exercises.map(exercise => `
                    <div class="exercise-card">
                        <h4>${exercise.name}</h4>
                        <p>Focus: ${exercise.focus}</p>
                        <p>Sets: ${exercise.sets || 'Continuous'}</p>
                        <p>Reps/Duration: ${exercise.reps || exercise.duration}</p>
                    </div>
                `).join('')}
            </div>

            <div class="nutrition-section">
                <h3>Nutrition Guidelines</h3>
                <p>Protein: ${plan.nutrition.protein} g per kg body weight</p>
                <p>Carbohydrates: ${plan.nutrition.carbs} g per kg body weight</p>
                <p>Calorie Approach: ${plan.nutrition.calories}</p>
            </div>
        `;

        // Insert workout plan into the page
        document.getElementById('workoutPlan').innerHTML = workoutHTML;
    }

    // Generate plan if goal and level are set
    if (goal && level) {
        generateWorkoutPlan();
    } else {
        // Redirect if no goal/level selected
        window.location.href = 'goal-selection.html';
    }
});
