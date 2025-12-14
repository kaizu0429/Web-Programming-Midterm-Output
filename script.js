
document.addEventListener('DOMContentLoaded', function() {
    initializeAllFeatures();
});


function initializeAllFeatures() {
    setupThemeToggle();          // Task A
    setupJobTitleEditor();       // Task B
    setupSkillsToggle();         // Task C
    setupCharacterCounter();     // Task D
    setupFormValidation();       // Task E
    displayCurrentDate();        // Task F
    setupTimeBasedGreeting();    // Task G (Extra Feature 1)
    setupPhotoChanger();         // Extra Feature 2
    setupFontSizeAdjuster();     // Extra Feature 3
    setupSkillsSearch();         // Extra Feature 4
}

function setupThemeToggle() {
    const themeBtn = document.getElementById('themeBtn');
    const body = document.body;
    
    themeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeBtn.textContent = 'Toggle Light Mode';
        } else {
            themeBtn.textContent = 'Toggle Dark Mode';
        }
    });
}

function setupJobTitleEditor() {
    const editJobBtn = document.getElementById('editJobBtn');
    const jobTitle = document.getElementById('jobTitle');
    
    editJobBtn.addEventListener('click', function() {
        const currentTitle = jobTitle.textContent;
        const newTitle = prompt('Enter your new job title:', currentTitle);
        
        if (newTitle !== null && newTitle.trim() !== '') {
            jobTitle.textContent = newTitle;
        } else if (newTitle !== null && newTitle.trim() === '') {
            alert('Job title cannot be empty!');
        }
    });
}

function setupSkillsToggle() {
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.getElementById('skillsSection');
    let isVisible = true;
    
    toggleSkillsBtn.addEventListener('click', function() {
        if (isVisible) {
            skillsSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
            isVisible = false;
        } else {
            skillsSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
            isVisible = true;
        }
    });
}

function setupCharacterCounter() {
    const msgBox = document.getElementById('msgBox');
    const counter = document.getElementById('counter');
    const maxLength = msgBox.getAttribute('maxlength');
    
    msgBox.addEventListener('keyup', function() {
        const remaining = maxLength - msgBox.value.length;
        counter.textContent = remaining;
        
        if (remaining < 20) {
            counter.style.color = 'red';
            counter.style.fontWeight = 'bold';
        } else if (remaining < 50) {
            counter.style.color = 'orange';
            counter.style.fontWeight = 'bold';
        } else {
            counter.style.color = '';
            counter.style.fontWeight = '';
        }
    });
}

function setupFormValidation() {
    window.validateForm = function() {
        const nameField = document.getElementById('nameField');
        const emailField = document.getElementById('emailField');
        const msgBox = document.getElementById('msgBox');
        

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = msgBox.value.trim();
        
        if (name === '') {
            alert('Please enter your name!');
            nameField.focus();
            return false;
        }
        
        if (email === '') {
            alert('Please enter your email address!');
            emailField.focus();
            return false;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address!');
            emailField.focus();
            return false;
        }
        
        if (message === '') {
            alert('Please enter a message!');
            msgBox.focus();
            return false;
        }

        alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
        return false; 
    };
}

function displayCurrentDate() {
    const dateDisplay = document.getElementById('dateDisplay');
    const today = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const formattedDate = today.toLocaleDateString('en-US', options);
    dateDisplay.textContent = 'Today is ' + formattedDate;
}

function setupTimeBasedGreeting() {
    const greeting = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingMessage = '';
    
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = '☀️ Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = '🌤️ Good Afternoon!';
    } else if (currentHour >= 18 && currentHour < 22) {
        greetingMessage = '🌙 Good Evening!';
    } else {
        greetingMessage = '🌃 Good Night!';
    }
    
    greeting.textContent = greetingMessage;
}

function setupPhotoChanger() {
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const profileImg = document.getElementById('profileImg');
    
    // Array of placeholder images
    const photos = [
        'https://via.placeholder.com/150/667eea/ffffff?text=Photo+1',
        'https://via.placeholder.com/150/764ba2/ffffff?text=Photo+2',
        'https://via.placeholder.com/150/f093fb/ffffff?text=Photo+3',
        'https://via.placeholder.com/150/4facfe/ffffff?text=Photo+4',
        'https://via.placeholder.com/150/43e97b/ffffff?text=Photo+5'
    ];
    
    let currentPhotoIndex = 0;
    
    changePhotoBtn.addEventListener('click', function() {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        profileImg.src = photos[currentPhotoIndex];
        
        // Add animation effect
        profileImg.style.transform = 'scale(0.8)';
        setTimeout(function() {
            profileImg.style.transform = 'scale(1)';
        }, 200);
    });
}

function setupFontSizeAdjuster() {
    const fontSizeUpBtn = document.getElementById('fontSizeUp');
    const fontSizeDownBtn = document.getElementById('fontSizeDown');
    const body = document.body;
    
    fontSizeUpBtn.addEventListener('click', function() {
        body.classList.remove('font-small');
        body.classList.add('font-large');
    });
    
    fontSizeDownBtn.addEventListener('click', function() {
        body.classList.remove('font-large');
        body.classList.add('font-small');
    });
}

function setupSkillsSearch() {
    const searchInput = document.getElementById('skillSearch');
    const skillsList = document.getElementById('skillsList');
    const skills = skillsList.getElementsByTagName('li');
    
    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Loop through all skills and hide/show based on search
        for (let i = 0; i < skills.length; i++) {
            const skillText = skills[i].textContent.toLowerCase();
            
            if (skillText.includes(searchTerm)) {
                skills[i].classList.remove('hidden');
            } else {
                skills[i].classList.add('hidden');
            }
        }
    });
}

console.log('Lab 3: All JavaScript features loaded successfully! ✅');
console.log('Features included:');
console.log('✓ Task A: Dark/Light Mode Toggle');
console.log('✓ Task B: Edit Job Title');
console.log('✓ Task C: Show/Hide Skills');
console.log('✓ Task D: Live Character Counter');
console.log('✓ Task E: Form Validation');
console.log('✓ Task F: Display Current Date');
console.log('✓ Task G: Time-Based Greeting');
console.log('✓ Extra: Profile Photo Changer');
console.log('✓ Extra: Font Size Adjuster');
console.log('✓ Extra: Skills Search Filter');