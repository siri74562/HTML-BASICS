document.addEventListener('DOMContentLoaded', function() {
    // Close popup functionality
    const closeBtn = document.querySelector('.close-btn');
    const popupContainer = document.querySelector('.popup-container');
    
    closeBtn.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });

    // Optional: Add input validation
    const inputField = document.querySelector('.input-field');
    const continueBtn = document.querySelector('.continue-btn');
    
    continueBtn.addEventListener('click', function() {
        if (!inputField.value) {
            inputField.style.borderColor = 'red';
        } else {
            // Proceed with sign-in
        }
    });
    
    inputField.addEventListener('input', function() {
        inputField.style.borderColor = '#e0e0e0';
    });
});