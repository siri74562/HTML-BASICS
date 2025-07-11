document.addEventListener('DOMContentLoaded', () => {
            const targetText = document.getElementById('targetText');
            const typedText = document.getElementById('typedText');
            const userInput = document.getElementById('userInput');
            const progressBar = document.getElementById('progressBar');
            const wpmElement = document.getElementById('wpm');
            const cpmElement = document.getElementById('cpm');
            const accuracyElement = document.getElementById('accuracy');
            const errorsElement = document.getElementById('errors');
            const timerElement = document.getElementById('timer');
            const results = document.getElementById('results');
            const finalScore = document.getElementById('finalScore');
            const feedback = document.getElementById('feedback');
            const submitBtn = document.getElementById('submitBtn');
            const restartBtn = document.getElementById('restartBtn');

            const originalText = targetText.textContent;
            let timer;
            let timeLeft = 60;
            let testActive = false;
            let correctChars = 0;
            let totalTyped = 0;
            let totalErrors = 0;
            let startTime;

            // Initialize the test
            function initTest() {
                targetText.textContent = originalText;
                typedText.innerHTML = '';
                userInput.value = '';
                progressBar.style.width = '0%';
                wpmElement.textContent = '0';
                cpmElement.textContent = '0';
                accuracyElement.textContent = '0';
                errorsElement.textContent = '0';
                timerElement.textContent = '60 seconds';
                results.style.display = 'none';
                timeLeft = 60;
                correctChars = 0;
                totalTyped = 0;
                totalErrors = 0;
                testActive = false;
                userInput.focus();
            }

            // Start the test
            function startTest() {
                if (testActive) return;
                testActive = true;
                startTime = new Date().getTime();
                timer = setInterval(updateTimer, 1000);
            }

            // Update timer
            function updateTimer() {
                timeLeft--;
                timerElement.textContent = `${timeLeft} second${timeLeft !== 1 ? 's' : ''}`;
                
                if (timeLeft <= 0) {
                    endTest();
                }
            }

            // Calculate WPM
            function calculateWPM() {
                const timeElapsed = (60 - timeLeft) || 1; // Avoid division by zero
                const words = correctChars / 5;
                const wpm = Math.round((words / timeElapsed) * 60);
                return wpm;
            }

            // Calculate CPM
            function calculateCPM() {
                const timeElapsed = (60 - timeLeft) || 1;
                const cpm = Math.round((correctChars / timeElapsed) * 60);
                return cpm;
            }

            // Calculate accuracy
            function calculateAccuracy() {
                return totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 0;
            }

            // Update progress
            function updateProgress() {
                const progress = (totalTyped / originalText.length) * 100;
                progressBar.style.width = `${Math.min(progress, 100)}%`;
            }

            // End the test
            function endTest() {
                clearInterval(timer);
                testActive = false;
                userInput.blur();
                
                const wpm = calculateWPM();
                const cpm = calculateCPM();
                const accuracy = calculateAccuracy();
                
                finalScore.textContent = `${wpm} WPM (${accuracy}% accuracy)`;
                
                if (wpm >= 80) {
                    feedback.textContent = "Excellent typing speed! You're faster than 95% of users.";
                } else if (wpm >= 60) {
                    feedback.textContent = "Great job! Your typing speed is above average.";
                } else if (wpm >= 40) {
                    feedback.textContent = "Good speed! With practice you can get even faster.";
                } else {
                    feedback.textContent = "Keep practicing! Focus on accuracy first, then speed will come.";
                }
                
                results.style.display = 'block';
            }

            // Handle user input
            userInput.addEventListener('input', (e) => {
                if (!testActive) startTest();
                
                const inputText = userInput.value;
                totalTyped = inputText.length;
                
                // Update typed text with styling
                let html = '';
                let currentCorrectChars = 0;
                let currentErrors = 0;
                
                for (let i = 0; i < inputText.length; i++) {
                    const originalChar = originalText[i] || '';
                    const inputChar = inputText[i];
                    
                    if (originalChar === inputChar) {
                        html += `<span class="correct">${inputChar}</span>`;
                        currentCorrectChars++;
                    } else {
                        html += `<span class="incorrect">${inputChar}</span>`;
                        currentErrors++;
                    }
                }
                
                // Add cursor for current position
                if (inputText.length < originalText.length) {
                    const nextChar = originalText[inputText.length] || '';
                    html += `<span class="current">${nextChar}</span>`;
                    targetText.textContent = originalText.slice(inputText.length + 1);
                } else {
                    targetText.textContent = '';
                }
                
                correctChars = currentCorrectChars;
                totalErrors = currentErrors;
                typedText.innerHTML = html;
                
                // Update stats
                wpmElement.textContent = calculateWPM();
                cpmElement.textContent = calculateCPM();
                accuracyElement.textContent = calculateAccuracy();
                errorsElement.textContent = totalErrors;
                updateProgress();
                
                // End test if all text is typed
                if (inputText.length >= originalText.length) {
                    endTest();
                }
            });

            // Submit button
            submitBtn.addEventListener('click', endTest);

            // Restart button
            restartBtn.addEventListener('click', initTest);

            // Initialize the test on page load
            initTest();
        });
        // Add at the top of your script:
const sentences = {
    easy: [
        "The quick brown fox jumps over the lazy dog.",
        "Programming is fun and challenging.",
        "Practice makes perfect when learning to type."
    ],
    medium: [
        "The universe is under no obligation to make sense to you.",
        "Complexity is the enemy of execution in software development.",
        "Algorithms are the poetry of logical thinking."
    ],
    hard: [
        "The most disastrous thing that you can ever learn is your first programming language.",
        "Abstraction is the elimination of the irrelevant and the amplification of the essential.",
        "Computer science is no more about computers than astronomy is about telescopes."
    ]
};

const difficultySelect = document.getElementById('difficulty');
const newSentenceBtn = document.getElementById('newSentenceBtn');

// Replace the originalText declaration with:
let originalText = "";

// Add new function to get random sentence:
function getRandomSentence() {
    const level = difficultySelect.value;
    const levelSentences = sentences[level];
    return levelSentences[Math.floor(Math.random() * levelSentences.length)];
}

// Update initTest() to use random sentences:
function initTest() {
    originalText = getRandomSentence();
    targetText.textContent = originalText;
    // ... rest of the function remains the same ...
}

// Add event listener for new sentence button:
newSentenceBtn.addEventListener('click', initTest);

// Update endTest() to show current sentence:
function endTest() {
    // ... existing code ...
    feedback.innerHTML += `<p class="sentence">"${originalText}"</p>`;
}