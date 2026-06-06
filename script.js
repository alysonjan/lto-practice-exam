// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

const buttons = {
    start: document.getElementById('start-btn'),
    next: document.getElementById('next-btn'),
    prev: document.getElementById('prev-btn'),
    submit: document.getElementById('submit-btn'),
    restart: document.getElementById('restart-btn')
};

const ui = {
    currentQNum: document.getElementById('current-q-num'),
    totalQNum: document.getElementById('total-q-num'),
    timeLeft: document.getElementById('time-left'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    // timerContainer: document.querySelector('.timer'),
    scoreText: document.getElementById('score-text'),
    scoreMessage: document.getElementById('score-message'),
    scoreCircle: document.querySelector('.score-circle'),
    reviewContainer: document.getElementById('review-container')
};

// State
let currentQuestionIndex = 0;
let shuffledQuestions = [];
let userAnswers = [];
let timerInterval;
const TOTAL_TIME = 20 * 60; // 20 minutes in seconds
// let timeRemaining = TOTAL_TIME;

// Fisher-Yates shuffle
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Shuffle questions and their options, keeping correct answer tracked
function shuffleExam() {
    shuffledQuestions = shuffleArray(questions).map(q => {
        // Build an array of { text, isCorrect } so we can shuffle options safely
        const taggedOptions = q.options.map((opt, i) => ({
            text: opt,
            isCorrect: i === q.answer
        }));
        const shuffledOptions = shuffleArray(taggedOptions);
        return {
            question: q.question,
            options: shuffledOptions.map(o => o.text),
            answer: shuffledOptions.findIndex(o => o.isCorrect)
        };
    });
    userAnswers = new Array(shuffledQuestions.length).fill(null);
}

// Initialize
function init() {
    ui.totalQNum.textContent = questions.length;
    shuffleExam();
    
    buttons.start.addEventListener('click', startExam);
    buttons.next.addEventListener('click', () => navigate(1));
    buttons.prev.addEventListener('click', () => navigate(-1));
    buttons.submit.addEventListener('click', submitExam);
    buttons.restart.addEventListener('click', resetExam);
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimer() {
    timeRemaining--;
    ui.timeLeft.textContent = formatTime(timeRemaining);
    
    if (timeRemaining <= 60) {
        ui.timerContainer.classList.add('warning');
    }
    
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        submitExam();
    }
}

function startExam() {
    shuffleExam();
    showScreen('quiz');
    // timeRemaining = TOTAL_TIME;
    // ui.timeLeft.textContent = formatTime(timeRemaining);
    // ui.timerContainer.classList.remove('warning');
    // timerInterval = setInterval(updateTimer, 1000);
    loadQuestion(0);
}

function loadQuestion(index) {
    const question = shuffledQuestions[index];
    currentQuestionIndex = index;
    
    ui.currentQNum.textContent = index + 1;
    ui.questionText.textContent = `${question.question}`;
    
    ui.optionsContainer.innerHTML = '';
    
    question.options.forEach((optText, i) => {
        const optionEl = document.createElement('div');
        
        let classes = ['option'];
        if (userAnswers[index] !== null) {
            if (i === question.answer) {
                classes.push('correct');
            } else if (i === userAnswers[index]) {
                classes.push('incorrect');
            }
        }
        
        optionEl.className = classes.join(' ');
        optionEl.textContent = String.fromCharCode(97 + i) + '. ' + optText; // a, b, c
        optionEl.addEventListener('click', () => selectOption(i));
        ui.optionsContainer.appendChild(optionEl);
    });
    
    // Update buttons
    buttons.prev.disabled = index === 0;
    
    if (index === shuffledQuestions.length - 1) {
        buttons.next.classList.add('hidden');
        buttons.submit.classList.remove('hidden');
    } else {
        buttons.next.classList.remove('hidden');
        buttons.submit.classList.add('hidden');
    }
}

function selectOption(optionIndex) {
    // Prevent changing answer once selected
    if (userAnswers[currentQuestionIndex] !== null) return;
    
    userAnswers[currentQuestionIndex] = optionIndex;
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Update UI immediately to show correct/incorrect
    const options = ui.optionsContainer.children;
    for (let i = 0; i < options.length; i++) {
        if (i === question.answer) {
            options[i].classList.add('correct');
        } else if (i === optionIndex && i !== question.answer) {
            options[i].classList.add('incorrect');
        }
    }
}

function navigate(direction) {
    const newIndex = currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < shuffledQuestions.length) {
        loadQuestion(newIndex);
    }
}

function submitExam() {
    // clearInterval(timerInterval);
    showScreen('results');
    generateResults();
}

function generateResults() {
    let score = 0;
    ui.reviewContainer.innerHTML = '';
    
    shuffledQuestions.forEach((q, qIndex) => {
        const userAnswer = userAnswers[qIndex];
        const isCorrect = userAnswer === q.answer;
        
        if (isCorrect) score++;
        
        // Build review item
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const qTitle = document.createElement('div');
        qTitle.className = 'review-question';
        qTitle.textContent = `${qIndex + 1}. ${q.question}`;
        reviewItem.appendChild(qTitle);
        
        q.options.forEach((optText, optIndex) => {
            const optDiv = document.createElement('div');
            let classes = ['review-option'];
            
            if (optIndex === q.answer) {
                classes.push('correct');
            }
            
            if (optIndex === userAnswer && !isCorrect) {
                classes.push('incorrect');
            }
            
            optDiv.className = classes.join(' ');
            optDiv.textContent = String.fromCharCode(97 + optIndex) + '. ' + optText;
            
            if (optIndex === userAnswer) {
                optDiv.innerHTML += ' <strong>(Your Answer)</strong>';
            }
            if (optIndex === q.answer) {
                optDiv.innerHTML += ' <strong>(Correct Answer)</strong>';
            }
            
            reviewItem.appendChild(optDiv);
        });
        
        const statusDiv = document.createElement('div');
        statusDiv.className = 'status';
        if (userAnswer === null) {
            statusDiv.textContent = 'Status: Unanswered';
            statusDiv.classList.add('unanswered-text');
        } else if (isCorrect) {
            statusDiv.textContent = 'Status: Correct';
            statusDiv.classList.add('correct-text');
        } else {
            statusDiv.textContent = 'Status: Incorrect';
            statusDiv.classList.add('incorrect-text');
        }
        reviewItem.appendChild(statusDiv);
        
        ui.reviewContainer.appendChild(reviewItem);
    });
    
    // Update Score UI
    ui.scoreText.textContent = `${score}/${shuffledQuestions.length}`;
    
    // Calculate percentage for circular progress
    const percentage = (score / shuffledQuestions.length) * 100;
    ui.scoreCircle.style.background = `conic-gradient(var(--primary) ${percentage}%, var(--bg-color) 0%)`;
    
    if (percentage >= 80) {
        ui.scoreMessage.textContent = "Excellent job! You're ready for the LTO Exam.";
    } else if (percentage >= 60) {
        ui.scoreMessage.textContent = "Good effort! A little more review will help.";
    } else {
        ui.scoreMessage.textContent = "Keep studying! Review your mistakes below.";
    }
}

function resetExam() {
    shuffleExam();
    currentQuestionIndex = 0;
    showScreen('start');
}

// Run
init();
