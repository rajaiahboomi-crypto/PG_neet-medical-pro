// MASTER PYQ COLLECTION MAPPED BY SUBJECT FIELDS
const questionDatabase = [
    {
        subject: "Anatomy",
        questionText: "Upward movement of the thyroid gland during swallowing is primarily prevented due to the structural attachment of which of the following?",
        options: ["Berry ligament", "Pretracheal fascia", "Sternothyroid muscle", "Thyrohyoid membrane"],
        correctAnswer: 1,
        explanation: "The outer layer of the thyroid capsule is continuous with the pretracheal fascia, anchoring the gland to the cricoid and thyroid cartilages, ensuring it moves exclusively with deglutition."
    },
    {
        subject: "Anatomy",
        questionText: "The reason for the long left recurrent laryngeal nerve is due to the persistence of which embryological arch artery?",
        options: ["3rd arch", "4th arch", "5th arch", "2nd arch"],
        correctAnswer: 1,
        explanation: "The left recurrent laryngeal nerve winds around the arch of the aorta, which is derived from the embryological 4th aortic arch."
    },
    {
        subject: "Biochemistry",
        questionText: "A patient diagnosed with deep vein thrombosis (DVT) and pulmonary embolism is initiated on Warfarin therapy. Which of the following clotting factors will exhibit a decreased concentration of γ-carboxyglutamate residues?",
        options: ["Factor 11", "Factor 2", "Tissue factor", "Factor 5"],
        correctAnswer: 1,
        explanation: "Warfarin acts as a Vitamin K antagonist, directly inhibiting the enzyme-mediated modification of factors II, VII, IX, and X."
    },
    {
        subject: "Pathology",
        questionText: "A chronic smoker presents with a persistent cough. A bronchoscopic biopsy reveals that the normal pseudostratified ciliated columnar epithelium of the respiratory tract has been entirely replaced by stratified squamous epithelium. What is the correct term for this cellular adaptation?",
        options: ["Hyperplasia", "Dysplasia", "Metaplasia", "Anaplasia"],
        correctAnswer: 2,
        explanation: "Metaplasia is a reversible adaptive change where one differentiated adult cell type is replaced by another cell type better suited to withstand chronic irritation."
    },
    {
        subject: "Biochemistry",
        questionText: "A 4-year-old child from a consanguineous marriage is observed to have urine that turns almost pitch-black upon standing. Growth and development parameters are normal. Which of the following biochemical intermediates is characteristically elevated in this condition?",
        options: ["Methylmalonate", "Phenylpyruvate", "Homogentisate", "α-Ketoisovalerate"],
        correctAnswer: 2,
        explanation: "A deficiency in homogentisic acid oxidase leads to alkaptonuria, where accumulated homogentisate oxidizes into dark alkapton bodies when exposed to air."
    }
    // Paste all remaining raw dataset entries sequentially following this pattern framework
];

// STATE CONTROLLERS
let currentFocus = "All";
let currentSize = 10;
let activeExamSheet = [];
let currentIndex = 0;
let score = 0;
let isAnswered = false;

// INTERFACE FILTER SELECTION HANDLERS
function setFocus(focusType) {
    currentFocus = focusType;
    document.querySelectorAll('.focus-btn').forEach(btn => {
        btn.classList.remove('border-blue-600', 'bg-blue-50', 'text-blue-700');
        btn.classList.add('border-gray-200', 'text-gray-700');
    });
    document.getElementById(`focus-${focusType}`).classList.add('border-blue-600', 'bg-blue-50', 'text-blue-700');
}

function setSize(sizeVal) {
    currentSize = sizeVal;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('border-blue-600', 'bg-blue-50', 'text-blue-700');
        btn.classList.add('border-gray-200', 'text-gray-700');
    });
    document.getElementById(`size-${sizeVal}`).classList.add('border-blue-600', 'bg-blue-50', 'text-blue-700');
}

// THE SHUFFLING ENGINE
function startExam() {
    // 1. Filter out non-matching subject fields if targeted
    let filteredList = questionDatabase;
    if (currentFocus !== "All") {
        filteredList = questionDatabase.filter(q => q.subject === currentFocus);
    }

    if (filteredList.length === 0) {
        alert("No questions matching this subject filter were found in the database module yet!");
        return;
    }

    // 2. Perform authentic random Fisher-Yates shuffle array routine
    let pool = [...filteredList];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // 3. Size partitioning
    let targetSize = currentSize === "Max" ? pool.length : parseInt(currentSize);
    activeExamSheet = pool.slice(0, Math.min(targetSize, pool.length));

    // Reset runtime counters
    currentIndex = 0;
    score = 0;
    
    // View Toggle Layout
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('quiz-view').classList.remove('hidden');
    
    loadQuestion();
}

// INJECT ACTIVE SHEET COMPONENT INTO DOM VIEW
function loadQuestion() {
    isAnswered = false;
    const currentQ = activeExamSheet[currentIndex];
    
    // UI Updates
    document.getElementById('current-q-num').innerText = currentIndex + 1;
    document.getElementById('total-q-num').innerText = activeExamSheet.length;
    document.getElementById('live-score').innerText = score;
    document.getElementById('subject-tag').innerText = currentQ.subject;
    document.getElementById('question-text').innerText = currentQ.questionText;
    
    // Reset Action Navigation Button state
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.className = "bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-xl transition flex items-center gap-2 cursor-not-allowed";
    
    // Clear rationales box drawer
    document.getElementById('explanation-box').classList.add('hidden');
    
    // Render Multiple Choice Grid Items
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    currentQ.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = "option-card w-full text-left p-4 rounded-xl border-2 border-gray-100 bg-white hover:bg-gray-50 font-medium flex justify-between items-center";
        btn.id = `option-${idx}`;
        btn.onclick = () => handleSelection(idx);
        btn.innerHTML = `<span>${option}</span><div class="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs"></div>`;
        container.appendChild(btn);
    });
}

// SELECTION FEEDBACK HANDLER
function handleSelection(selectedIdx) {
    if (isAnswered) return;
    isAnswered = true;
    
    const currentQ = activeExamSheet[currentIndex];
    const nextBtn = document.getElementById('next-btn');
    
    // Unlock next layout step controller button
    nextBtn.disabled = false;
    nextBtn.className = "bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition flex items-center gap-2 shadow";

    // Track score correctness
    if (selectedIdx === currentQ.correctAnswer) {
        score++;
        document.getElementById('live-score').innerText = score;
    }

    // Color code and inject validation checkmark/cross graphics
    currentQ.options.forEach((_, idx) => {
        const card = document.getElementById(`option-${idx}`);
        card.onclick = null; // Unbind clicks
        const indicator = card.querySelector('div');
        
        if (idx === currentQ.correctAnswer) {
            // Highlighting the correct item
            card.className = "w-full text-left p-4 rounded-xl border-2 border-green-500 bg-green-50 font-bold text-green-900 flex justify-between items-center";
            indicator.className = "w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs";
            indicator.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (idx === selectedIdx) {
            // Highlighting the incorrect choice
            card.className = "w-full text-left p-4 rounded-xl border-2 border-red-500 bg-red-50 font-bold text-red-900 flex justify-between items-center";
            indicator.className = "w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs";
            indicator.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            card.className = "w-full text-left p-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 text-gray-400 flex justify-between items-center";
        }
    });

    // Populate and slide out rationale summary text box
    document.getElementById('explanation-text').innerText = currentQ.explanation;
    document.getElementById('explanation-box').classList.remove('hidden');
}

// NEXT STEP ENGINE PROGRESSOR
function nextQuestion() {
    if (currentIndex < activeExamSheet.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// FINAL RESULTS SCREEN CALCULATION VIEWS
function showResults() {
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('results-view').classList.remove('hidden');
    
    document.getElementById('final-score-raw').innerText = `${score} / ${activeExamSheet.length}`;
    
    const percentage = Math.round((score / activeExamSheet.length) * 100);
    document.getElementById('percentage-text').innerText = `${percentage}%`;
    
    // Progress Ring Animation Calculation
    const circle = document.getElementById('score-ring');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    // Performance context dynamic messaging
    let feedback = "";
    if (percentage >= 80) feedback = "Outstanding clinical precision! You are well on track to securing your target specialty residency branch.";
    else if (percentage >= 50) feedback = "Solid pass performance metrics. Focus on clarifying clinical rationales to boost baseline scores.";
    else feedback = "Good effort review sample session. Re-verify core fundamentals across highlighted past year question sheets.";
    
    document.getElementById('feedback-message').innerText = feedback;
}

function returnToDashboard() {
    document.getElementById('results-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.remove('hidden');
}