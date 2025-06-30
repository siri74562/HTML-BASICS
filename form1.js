const form = document.getElementById('studentForm');
function createForm() {
    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Student Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'studentName';
    nameInput.placeholder = "Enter your Name..";

    const rollLabel = document.createElement('label');
    rollLabel.innerText = 'Roll No:';
    const rollInput = document.createElement('input');
    rollInput.type = 'text';
    rollInput.name = 'rollNo';
    rollInput.placeholder = "Enter your Roll No..";

    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = "Enter your Email..";

    const ageLabel = document.createElement('label');
    ageLabel.innerText = 'Age:';
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.name = 'age';
    ageInput.placeholder = "Enter your Age.."

    const courseLabel = document.createElement('label');
    courseLabel.innerText = 'Course:';
    const courseSelect = document.createElement('select');
    courseSelect.name = 'course';
    ['CSE','DS','IT','AI/ML','EEE','CS','ECE','IOT','MECH','CIVIL','MINING','ART'].forEach(course => {
        const option = document.createElement('option');
        option.value = course;
        option.innerText = course;
        courseSelect.appendChild(option);
    });


    const fathernameLabel = document.createElement('label');
    fathernameLabel.innerText = 'Student Father Name:';
    const fathernameInput = document.createElement('input');
    fathernameInput.type = 'text';
    fathernameInput.name = 'studentFatherName';
    fathernameInput.placeholder = "Enter your Father Name..";
    
    const resumeLabel = document.createElement('label');
    resumeLabel.innerText = 'Upload Resume:';
    const resumeInput = document.createElement('input');
    resumeInput.type = 'file';
    resumeInput.name = 'resume';
    resumeInput.accept = '.pdf, .doc, .docx';
    resumeInput.required = true; 


    const photoLabel = document.createElement('label');
    photoLabel.innerText = 'Upload Photo:';
    const photoInput = document.createElement('input');
    photoInput.type = 'file';
    photoInput.name = 'photo';
    photoInput.accept = 'image/*';
    photoInput.required = true;      

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Register';
    
    
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(rollLabel);
    form.appendChild(rollInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(ageLabel);
    form.appendChild(ageInput);
    form.appendChild(courseLabel);
    form.appendChild(courseSelect);
    form.appendChild(fathernameLabel);
    form.appendChild(fathernameInput);
    form.appendChild(resumeLabel);
    form.appendChild(resumeInput);
    form.appendChild(photoLabel);
    form.appendChild(photoInput);
    form.appendChild(submitBtn);
}

// Call the function to create form elements
createForm();