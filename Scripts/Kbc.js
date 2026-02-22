function startKBC(data, title) {
    // Create a unique ID for this KBC instance to avoid conflicts
    const kbcInstanceId = 'kbc-' + Math.random().toString(36).substr(2, 9);
    
    const container = document.getElementById("q");
    if (!container) {
        console.error('Container with ID "q" not found.');
        return;
    }
    
    // Set container styles
    container.style.position = "relative";
    container.style.width = "100%";
    // Allow container to grow based on content, but cap at viewport height for desktop
    container.style.minHeight = "100vh"; 
    container.style.overflowX = "hidden"; // Prevent horizontal scroll on main container
    container.innerHTML = "<i>📥 KBC ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ ...</i>";
    container.style.userSelect = "none";
    container.querySelectorAll("*").forEach(el => {
        el.style.userSelect = "none";
    });

    // Create unique styles with a specific prefix to avoid conflicts
    const style = document.createElement("style");
    style.textContent = `
        #${kbcInstanceId} * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        
        #${kbcInstanceId} {
            --kbc-dark: #0a0e27;
            --kbc-gold: #ffcc00;
            --kbc-blue: #1a237e;
            --kbc-neon: #00bcd4;
            --kbc-correct: #4caf50;
            --kbc-wrong: #f44336;
            font-family: 'Noto Sans Gurmukhi', sans-serif;
            background: linear-gradient(135deg, #0a0e27 0%, #1a237e 100%);
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2px;
        }

        /* --- MAIN LAYOUT --- */
        #${kbcInstanceId} .kbc-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            gap: 20px;
            align-items: flex-start;
        }
        
        /* Tablet & Mobile: Stack vertically */
        @media (max-width: 992px) {
            #${kbcInstanceId} .kbc-container {
                flex-direction: column;
            }
        }

        /* --- GAME AREA --- */
        #${kbcInstanceId} .game-area {
            flex: 3;
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
        }

        /* --- LIFELINES --- */
        #${kbcInstanceId} .lifelines {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 12px;
            background: rgba(26, 35, 126, 0.8);
            border-radius: 50px; /* Pill shape */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            border: 2px solid var(--kbc-gold);
            margin-bottom: 10px;
            flex-wrap: wrap;
        }

        #${kbcInstanceId} .lifeline-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(145deg, var(--kbc-blue), #0d47a1);
            border: 2px ridge var(--kbc-gold);
            color: var(--kbc-gold);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            touch-action: manipulation; /* Faster taps on mobile */
        }
        
        @media (min-width: 768px) {
            #${kbcInstanceId} .lifeline-btn {
                width: 60px;
                height: 60px;
            }
        }
        
        #${kbcInstanceId} .lifeline-btn:hover:not(:disabled) {
            background: linear-gradient(145deg, var(--kbc-neon), #0097a7);
            color: var(--kbc-dark);
            transform: scale(1.1);
            box-shadow: 0 0 15px var(--kbc-neon);
        }

        #${kbcInstanceId} .lifeline-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            filter: grayscale(100%);
        }

        /* --- HOT SEAT --- */
        #${kbcInstanceId} .hot-seat {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px;
            background: radial-gradient(circle at center, rgba(26, 35, 126, 0.8) 0%, rgba(10, 14, 39, 0.9) 100%);
            border-radius: 16px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 4px solid var(--kbc-gold);
            position: relative;
            overflow: hidden;
            width: 100%;
        }
        
        /* --- TIMER --- */
        #${kbcInstanceId} .timer-container {
            margin-bottom: 10px;
        }

        #${kbcInstanceId} .timer-label {
            color: var(--kbc-gold);
            font-weight: bold;
            text-align: center;
            font-size: 1rem;
            margin-bottom: 1px;
        }

        #${kbcInstanceId} .timer-circle {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: conic-gradient(
                var(--kbc-neon) 0deg,
                var(--kbc-neon) var(--timer-progress, 360deg),
                rgba(255, 255, 255, 0.1) var(--timer-progress, 360deg)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 10px rgba(0, 188, 212, 0.5);
            margin: 0 auto;
        }
        
        @media (min-width: 768px) {
            #${kbcInstanceId} .timer-circle {
                width: 80px;
                height: 80px;
            }
        }

        #${kbcInstanceId} .timer-inner {
            position: absolute;
            width: 85%;
            height: 85%;
            border-radius: 50%;
            background-color: var(--kbc-dark);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #${kbcInstanceId} .timer-text {
            color: white;
            /* Fluid font size for timer */
            font-size: clamp(1.2rem, 2vw, 1.8rem); 
            font-weight: bold;
        }

        /* --- QUESTION BOX --- */
        #${kbcInstanceId} .question-box {
            width: 100%;
            padding: 20px;
            color: white;
            text-align: center;
            border-radius: 12px;
            margin-bottom: 20px;
            background: linear-gradient(180deg, var(--kbc-blue) 0%, var(--kbc-dark) 100%);
            border: 3px solid var(--kbc-gold);
            box-shadow: 0 0 20px var(--kbc-neon), 0 0 10px var(--kbc-gold);
            animation: pulse-border 5s infinite alternate;
            position: relative;
            z-index: 1;
            min-height: 80px; /* Prevent layout shift */
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #${kbcInstanceId} #current-question-text {
            /* Fluid Typography for question text */
            font-size: clamp(1.1rem, 2.5vw, 1.5rem);
            font-weight: bold;
            line-height: 1.5;
        }

        /* --- OPTIONS --- */
        #${kbcInstanceId} .options-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            width: 100%;
        }
        
        /* Mobile portrait: Stack options if screen is very narrow or question is long */
        @media (max-width: 400px) {
            #${kbcInstanceId} .options-container {
                grid-template-columns: 1fr;
            }
        }

        #${kbcInstanceId} .option-btn {
            width: 100%;
            padding: 12px 16px;
            text-align: left;
            border-radius: 12px;
            color: white;
            font-weight: 700;
            background: linear-gradient(145deg, var(--kbc-blue), #0d47a1);
            border: 2px solid var(--kbc-gold);
            transition: all 0.2s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
            cursor: pointer;
            font-size: clamp(0.9rem, 1.5vw, 1.125rem); /* Fluid text */
            touch-action: manipulation;
            min-height: 60px; /* Touch target height */
            display: flex;
            align-items: center;
        }
        
        @media (min-width: 768px) {
            #${kbcInstanceId} .option-btn {
                padding: 18px 24px;
                min-height: 70px;
            }
        }
        
        #${kbcInstanceId} .option-btn:hover:not([data-disabled='true']) {
            background: linear-gradient(145deg, var(--kbc-neon), #0097a7);
            color: var(--kbc-dark);
            transform: translateY(-2px);
            box-shadow: 0 0 15px var(--kbc-neon);
        }

        #${kbcInstanceId} .option-btn.active {
            background: linear-gradient(145deg, var(--kbc-neon), #0097a7);
            color: var(--kbc-dark);
            animation: flashing 0.3s 4;
            border-color: white;
        }

        #${kbcInstanceId} .option-btn.correct {
            background: linear-gradient(145deg, var(--kbc-correct), #2e7d32);
            animation: flashing 0.3s 8;
            border-color: #fff;
        }

        #${kbcInstanceId} .option-btn.wrong {
            background: linear-gradient(145deg, var(--kbc-wrong), #c62828);
            animation: shake 0.5s;
            opacity: 0.8;
        }

        /* --- EXPLANATION --- */
        #${kbcInstanceId} .explanation-box {
            color: cyan;
            width: 100%;
            background-color: rgba(26, 35, 126, 0.6);
            border-left: 4px solid var(--kbc-gold);
            padding: 15px;
            margin-top: 15px;
            border-radius: 8px;
            text-align: left;
            font-size: 0.95rem;
            line-height: 1.4;
        }
        
        #${kbcInstanceId} .explanation-title {
            color: gold;
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
        }

        /* --- MONEY TREE (Responsive Layout) --- */
        #${kbcInstanceId} .money-tree-container {
            flex: 1;
            background: linear-gradient(145deg, rgba(26, 35, 126, 0.8), rgba(10, 14, 39, 0.9));
            border-radius: 16px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
            border: 2px solid var(--kbc-gold);
            padding: 15px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* Desktop: Vertical List */
        #${kbcInstanceId} .money-tree {
            display: flex;
            flex-direction: column-reverse;
            gap: 4px;
        }
        
        /* Mobile & Tablet: Horizontal Scroll Bar */
        @media (max-width: 992px) {
            #${kbcInstanceId} .money-tree-container {
                width: 100%;
                order: -1; /* Move to top on mobile */
                padding: 10px;
             //  height: auto;
                max-height: 60px; /* Limit height */
                flex-direction: row; /* Horizontal layout */
                overflow-x: auto; /* Enable scroll */
                overflow-y: hidden;
                white-space: nowrap;
                /* Hide scrollbar for clean look */
                -ms-overflow-style: none; 
                scrollbar-width: none; 
            }
            
            #${kbcInstanceId} .money-tree-container::-webkit-scrollbar { 
                display: none; 
            }

            #${kbcInstanceId} .money-tree {
                flex-direction: row; /* Items side by side */
                width: max-content; /* Ensure content determines width */
                height: 100%;
                align-items: center;
            }
            
            #${kbcInstanceId} .money-item {
                display: inline-flex;
                margin-right: 8px;
                padding: 8px 12px;
                min-width: 100px;
                justify-content: center;
                text-align: center;
            }
        }

        #${kbcInstanceId} .money-item {
            padding: 8px 12px;
            transition: all 0.3s ease;
            text-align: right;
            border-radius: 8px;
            font-size: 0.9rem;
            color: white;
            position: relative;
            overflow: hidden;
            cursor: default;
        }
        
        @media (min-width: 992px) {
            #${kbcInstanceId} .money-item {
                font-size: 1rem;
                padding: 10px 15px;
            }
        }
        
        #${kbcInstanceId} .money-item.current {
            background: linear-gradient(145deg, var(--kbc-neon), #0097a7);
            color: var(--kbc-dark);
            font-weight: bold;
            box-shadow: 0 0 15px var(--kbc-neon);
            transform: scale(1.05);
        }
        
        #${kbcInstanceId} .money-item.safe {
            background: linear-gradient(145deg, rgba(255, 204, 0, 0.3), rgba(255, 204, 0, 0.1));
            color: var(--kbc-gold);
            font-weight: bold;
            border: 1px solid var(--kbc-gold);
        }

        /* --- MODAL --- */
        #${kbcInstanceId}-modal {
            color:white;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.85);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(5px);
            padding: 20px;
        }
        
        #${kbcInstanceId}-modal.active {
            display: flex !important;
        }

        #${kbcInstanceId}-modal .modal-content {
            background: linear-gradient(145deg, var(--kbc-dark), var(--kbc-blue));
            padding: 24px;
            border-radius: 16px;
            width: 100%;
            max-width: 500px;
            text-align: center;
            border: 4px solid var(--kbc-gold);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px var(--kbc-neon);
            position: relative;
            overflow: hidden;
            color:gold;
            max-height: 90vh;
            overflow-y: auto;
        }
        
        @media (min-width: 1200px) {
             #${kbcInstanceId}-modal .modal-content {
                max-width: 600px;
             }
        }

        #${kbcInstanceId}-modal .modal-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 16px;
            color: gold;
            text-shadow: 0 0 10px var(--kbc-gold);
            line-height: 1.3;
        }
        
        #${kbcInstanceId}-modal .modal-body {
            margin-bottom: 24px;
            font-size: 1.1rem;
            color: white;
            line-height: 1.6;
        }

        #${kbcInstanceId}-modal .audience-poll-graph {
            color: white;
            margin: 20px 0;
            height: 140px;
            display: none;
            justify-content: space-around;
            align-items: flex-end;
            border-bottom: 2px solid white;
            padding-bottom: 8px;
        }
        
        #${kbcInstanceId}-modal .audience-poll-graph.active {
            display: flex !important;
        }

        #${kbcInstanceId}-modal .modal-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        @media (min-width: 480px) {
            #${kbcInstanceId}-modal .modal-buttons {
                flex-direction: row;
                justify-content: center;
            }
        }

        #${kbcInstanceId}-modal .modal-btn {
            padding: 14px 20px;
            border-radius: 8px;
            font-weight: bold;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            font-size: 1rem;
            flex: 1;
            touch-action: manipulation;
        }
        
        #${kbcInstanceId}-modal .modal-primary-btn {
            background: linear-gradient(145deg, brown, blue);
            color: gold;
        }
        
        #${kbcInstanceId}-modal .modal-primary-btn:hover {
            background: linear-gradient(145deg, white, #e0f7fa);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        #${kbcInstanceId}-modal .modal-secondary-btn {
            background: linear-gradient(145deg, blue, brown);
            color: gold;
        }
        
        #${kbcInstanceId}-modal .modal-secondary-btn:hover {
            background: linear-gradient(145deg, #757575, #616161);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        /* --- ANIMATIONS --- */
        @keyframes pulse-border {
            0% { border-color: var(--kbc-gold); box-shadow: 0 0 10px var(--kbc-neon), 0 0 5px var(--kbc-gold); }
            100% { border-color: var(--kbc-neon); box-shadow: 0 0 20px var(--kbc-neon), 0 0 10px var(--kbc-gold); }
        }

        @keyframes flashing {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes pulse-warning {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(244, 67, 54, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 67, 54, 0); }
        }
        
        #${kbcInstanceId} .timer-warning {
            animation: pulse-warning 1s infinite;
        }
    `;
    document.head.appendChild(style);

    // Load the Gurmukhi font
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Gurmukhi:wght@400;700&display=swap";
    document.head.appendChild(fontLink);

    // Create the HTML structure with the unique ID
    container.innerHTML = `
    <audio id="correctSound" src="Sound/correct.mp3" preload="auto"></audio>
    <audio id="incorrectSound" src="Sound/incorrect.mp3" preload="auto"></audio>
    <audio id="clap" src="Sound/clap.mp3" preload="auto"></audio>
    <audio id="showstart" src="Sound/showstart.mp3" preload="auto"></audio>
    <audio id="questionstart" src="Sound/questionstart.mp3" preload="auto"></audio>
    <audio id="timer" src="Sound/timer.mp3" preload="auto"></audio>
<audio id="7crore" src="Sound/7crore.mp3" preload="auto"></audio>

    <div id="${kbcInstanceId}" class="kbc-container">
        <!-- GAME AREA (Center Hot Seat) -->
        <div class="game-area">

            <!-- HOT SEAT / QUESTION DISPLAY -->
            <div class="hot-seat">
            
                <!-- TIMER -->
                <div class="timer-container">
                    
                    <div class="timer-circle" id="${kbcInstanceId}-timer-circle">
                        <div class="timer-inner">
                            <div class="timer-text" id="${kbcInstanceId}-timer-text">30</div>
                        </div>
                    </div>
                </div>

                <!-- QUESTION BOX -->
                <div class="question-box">
                    <p id="current-question-text" style="font-weight: bold; line-height: 1.5;">ਖੇਡ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ ਜਾਓ!</p>
                </div>

                <!-- OPTIONS -->
                <div id="options-container" class="options-container">
                    <!-- Option buttons will be populated here -->
                </div>
                
                <!-- EXPLANATION BOX (Hidden by default) -->
                <div id="explanation-container" class="explanation-box" style="display: none;">
                    <span class="explanation-title">ਵਿਆਖਿਆ:</span>
                    <p id="explanation-text"></p>
                </div>
            </div>
    
                <!-- LIFELINES (Top Bar) -->
            <div class="lifelines">
                <button id="lifeline-5050" class="lifeline-btn" title="ਪੰਜਾਹ-ਪੰਜਾਹ">
                    <i class="fas fa-divide" style="font-size: 1.2rem;"></i>
                </button>
                <button id="lifeline-audience" class="lifeline-btn" title="ਦਰਸ਼ਕਾਂ ਦੀ ਰਾਏ">
                    <i class="fas fa-users" style="font-size: 1.2rem;"></i>
                </button>
                <button id="lifeline-expert" class="lifeline-btn" title="ਮਾਹਰ ਦੀ ਸਲਾਹ">
                    <i class="fas fa-user-tie" style="font-size: 1.2rem;"></i>
                </button>
            </div>

        </div>

        <!-- MONEY TREE (Horizontal on mobile, Right Panel on Desktop) -->
        <div class="money-tree-container">
            <div id="money-tree" class="money-tree">
                <!-- Money items will be populated here -->
            </div>
        </div>
    </div>

    <!-- MODAL FOR CONFIRMATION / RESULTS / LIFELINES -->
    <div id="${kbcInstanceId}-modal" class="modal">
        <div class="modal-content">
            <h3 id="${kbcInstanceId}-modal-title" class="modal-title"></h3>
            <p id="${kbcInstanceId}-modal-body" class="modal-body"></p>
            <div id="${kbcInstanceId}-audience-poll-graph" class="audience-poll-graph"></div>
            
            <div class="modal-buttons">
                <button id="${kbcInstanceId}-modal-primary-btn" class="modal-btn modal-primary-btn"></button>
                <button id="${kbcInstanceId}-modal-secondary-btn" class="modal-btn modal-secondary-btn" style="display: none;"></button>
            </div>
        </div>
    </div>
    `;
const heading = document.getElementById('instruction');
if (heading) {
    heading.innerHTML = `<div class="animated-text">${title}</div>`;
  }
    // Load Font Awesome for icons
    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(faLink);

    let currentQuestionIndex = -1;
    let selectedOptionIndex = null;
    let isLocked = false;
    let isGameOver = false;
    let usedQuestions = new Set(); // Track used questions

    // Timer variables
    let timerInterval = null;
    let timeLeft = 30;
    const TIMER_DURATION = 30; // seconds
    let timerPaused = false;

    // Punjabi Option Labels for Display
    const optionLabels = ['ੳ', 'ਅ', 'ੲ', 'ਸ'];

    // Money amounts for each level
    const levelAmounts = [
        "5,000 ਰੁਪਏ",    // Level 1
        "10,000 ਰੁਪਏ",   // Level 2
        "20,000 ਰੁਪਏ",   // Level 3
        "40,000 ਰੁਪਏ",   // Level 4
        "80,000 ਰੁਪਏ",   // Level 5 (Safe Haven 1)
        "1,60,000 ਰੁਪਏ", // Level 6
        "3,20,000 ਰੁਪਏ", // Level 7
        "6,40,000 ਰੁਪਏ", // Level 8
        "12,50,000 ਰੁਪਏ",// Level 9
        "25,00,000 ਰੁਪਏ",// Level 10 (Safe Haven 2)
        "50,00,000 ਰੁਪਏ",// Level 11
        "1,00,00,000 ਰੁਪਏ",// Level 12
        "2,00,00,000 ਰੁਪਏ",// Level 13
        "3,50,00,000 ਰੁਪਏ",// Level 14
        "7,00,00,000 ਰੁਪਏ" // Level 15 (Safe Haven 3)
    ];
    
    const kbcQuestionsPool = data;
    const lifelinesUsed = {
        '5050': false,
        'audience': false,
        'expert': false,
    };

    // UI Element References
    const questionTextEl = document.getElementById('current-question-text');
    const optionsContainer = document.getElementById('options-container');
    const moneyTreeEl = document.getElementById('money-tree');
    const modalEl = document.getElementById(`${kbcInstanceId}-modal`);
    const modalTitleEl = document.getElementById(`${kbcInstanceId}-modal-title`);
    const modalBodyEl = document.getElementById(`${kbcInstanceId}-modal-body`);
    const modalPrimaryBtn = document.getElementById(`${kbcInstanceId}-modal-primary-btn`);
    const modalSecondaryBtn = document.getElementById(`${kbcInstanceId}-modal-secondary-btn`);
    const audiencePollGraphEl = document.getElementById(`${kbcInstanceId}-audience-poll-graph`);
    const explanationContainer = document.getElementById('explanation-container');
    const explanationText = document.getElementById('explanation-text');
    const lifelineButtons = {
        '5050': document.getElementById('lifeline-5050'),
        'audience': document.getElementById('lifeline-audience'),
        'expert': document.getElementById('lifeline-expert'),
    };
    
    // Timer UI Elements
    const timerCircle = document.getElementById(`${kbcInstanceId}-timer-circle`);
    const timerText = document.getElementById(`${kbcInstanceId}-timer-text`);
    const timerSound = document.getElementById('timer');

    // Utility function to close the modal
    function closeModal() {
        if (modalEl) {
            modalEl.classList.remove('active');
            audiencePollGraphEl.classList.remove('active');
            audiencePollGraphEl.innerHTML = '';
        }
    }

    // Utility function to show the modal
    function showModal(title, body, primaryText, primaryAction, secondaryText = null, secondaryAction = null) {
        if (!modalEl || !modalTitleEl || !modalBodyEl || !modalPrimaryBtn) {
            console.error('Modal elements not found');
            return;
        }
        
        modalTitleEl.textContent = title;
        modalBodyEl.innerHTML = body; // Changed to innerHTML to support HTML content
        modalPrimaryBtn.textContent = primaryText;
        modalPrimaryBtn.onclick = primaryAction;
        modalSecondaryBtn.style.display = 'none';

        if (secondaryText && secondaryAction) {
            modalSecondaryBtn.textContent = secondaryText;
            modalSecondaryBtn.onclick = secondaryAction;
            modalSecondaryBtn.style.display = 'block';
        }

        modalEl.classList.add('active');
    }

    // Function to get a random question for a specific level
    function getRandomQuestionForLevel(level) {
        // Filter questions for the specified level that haven't been used yet
        const availableQuestions = kbcQuestionsPool.filter(q => 
            q.level === level && !usedQuestions.has(kbcQuestionsPool.indexOf(q))
        );
        
        // If no questions available for this level, reset used questions for this level
        if (availableQuestions.length === 0) {
            // Reset used questions for this level
            kbcQuestionsPool.forEach((q, index) => {
                if (q.level === level) {
                    usedQuestions.delete(index);
                }
            });
            
            // Try again
            return getRandomQuestionForLevel(level);
        }
        
        // Select a random question from available questions
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const selectedQuestion = availableQuestions[randomIndex];
        const questionIndex = kbcQuestionsPool.indexOf(selectedQuestion);
        
        // Mark this question as used
        usedQuestions.add(questionIndex);
        
        // Return a copy of the question with the amount set
        return {
            ...selectedQuestion,
            amount_pa: levelAmounts[level - 1]
        };
    }

    // ---------------------------------------------------
    // TIMER FUNCTIONS
    // ---------------------------------------------------
    
    function startTimer() {
        // Reset timer
        timeLeft = TIMER_DURATION;
        timerPaused = false;
        updateTimerDisplay();
        
        // Clear any existing timer
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // Start timer sound
        timerSound.play();
        
        // Update timer every second
        timerInterval = setInterval(() => {
            if (!timerPaused) {
                timeLeft--;
                updateTimerDisplay();
                
                // Add warning animation when time is running out
                if (timeLeft <= 10) {
                    timerCircle.classList.add('timer-warning');
                }
                
                // If time is up
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerSound.pause();
                    timerSound.currentTime = 0;
                    
                    // If no option is selected, treat as wrong answer
                    if (selectedOptionIndex === null) {
                        lockAnswer();
                    }
                }
            }
        }, 1000);
    }
    
    function pauseTimer() {
        timerPaused = true;
        // Pause timer sound
        timerSound.pause();
    }
    
    function resumeTimer() {
        timerPaused = false;
        // Resume timer sound
        timerSound.play();
    }
    
    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        // Stop timer sound
        timerSound.pause();
        timerSound.currentTime = 0;
        
        // Remove warning animation
        timerCircle.classList.remove('timer-warning');
    }
    
    function updateTimerDisplay() {
        timerText.textContent = timeLeft;
        
        // Update timer progress circle
        const progress = (timeLeft / TIMER_DURATION) * 360;
        timerCircle.style.setProperty('--timer-progress', `${progress}deg`);
        
        // Change color based on time left
        if (timeLeft <= 10) {
            timerCircle.style.background = `conic-gradient(
                #f44336 0deg,
                #f44336 ${progress}deg,
                rgba(255, 255, 255, 0.1) ${progress}deg
            )`;
        } else if (timeLeft <= 20) {
            timerCircle.style.background = `conic-gradient(
                #ffcc00 0deg,
                #ffcc00 ${progress}deg,
                rgba(255, 255, 255, 0.1) ${progress}deg
            )`;
        } else {
            timerCircle.style.background = `conic-gradient(
                var(--kbc-neon) 0deg,
                var(--kbc-neon) ${progress}deg,
                rgba(255, 255, 255, 0.1) ${progress}deg
            )`;
        }
    }

    // ---------------------------------------------------
    // 1. GAME SETUP
    // ---------------------------------------------------

    function initializeMoneyTree() {
        moneyTreeEl.innerHTML = '';
        for (let level = 1; level <= 15; level++) {
            const isSafe = (level === 5 || level === 10 || level === 15);
            const item = document.createElement('div');
            item.id = `${kbcInstanceId}-money-level-${level}`;
            item.className = `money-item ${isSafe ? 'safe' : ''}`;
            item.textContent = `${level}. ${levelAmounts[level-1]}`;
            moneyTreeEl.appendChild(item);
        }
    }

    function updateMoneyTreeHighlight(level) {
        // Clear previous highlight
        document.querySelectorAll(`#${kbcInstanceId} .money-item`).forEach(item => item.classList.remove('current'));

        // Highlight current level
        const currentItem = document.getElementById(`${kbcInstanceId}-money-level-${level}`);
        if (currentItem) {
            currentItem.classList.add('current');
            
            // RESPONSIVE FIX: Auto-scroll to current level on mobile (horizontal layout)
            if (window.innerWidth <= 992) {
                currentItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }

    function loadQuestion(index) {
        currentQuestionIndex = index;
        selectedOptionIndex = null;
        isLocked = false;

        // Get a random question for the current level
        const currentLevel = index + 1;
        const currentQ = getRandomQuestionForLevel(currentLevel);

        // Hide explanation container
        explanationContainer.style.display = 'none';

        // Update Question Text
        questionTextEl.textContent = `${currentQ.level}. ${currentQ.question_pa}`;

        // Update Money Tree Highlight
        updateMoneyTreeHighlight(currentQ.level);

        // Render Options
        optionsContainer.innerHTML = '';
        currentQ.options_pa.forEach((option, i) => {
            const btn = document.createElement('button');
            btn.id = `${kbcInstanceId}-option-${i}`;
            btn.className = 'option-btn';
            btn.textContent = `${optionLabels[i]}. ${option}`;
            btn.dataset.index = i;
            btn.dataset.disabled = 'false'; // Custom attribute for lifeline disable
            btn.onclick = () => selectOption(i);
            optionsContainer.appendChild(btn);
        });

        // Reset option styling
        document.querySelectorAll(`#${kbcInstanceId} .option-btn`).forEach(btn => {
            btn.classList.remove('active', 'correct', 'wrong');
        });

        // Reset Lifelines state visuals
        for (const key in lifelineButtons) {
            if (lifelinesUsed[key]) {
                lifelineButtons[key].style.opacity = '0.5';
                lifelineButtons[key].style.cursor = 'not-allowed';
                lifelineButtons[key].disabled = true;
            } else {
                lifelineButtons[key].style.opacity = '1';
                lifelineButtons[key].style.cursor = 'pointer';
                lifelineButtons[key].disabled = false;
            }
        }
        
        // Store the current question globally for lifelines
        window.currentQuestion = currentQ;
        
        // Start the timer for this question
        startTimer();
    }

    // ---------------------------------------------------
    // 2. USER INTERACTION
    // ---------------------------------------------------

    function selectOption(index) {
        if (isLocked || isGameOver) return;
        const selectedBtn = document.getElementById(`${kbcInstanceId}-option-${index}`);
        if (selectedBtn.dataset.disabled === 'true') return; // Cannot select disabled option

        // Visual selection
        document.querySelectorAll(`#${kbcInstanceId} .option-btn`).forEach(btn => btn.classList.remove('active'));
        selectedBtn.classList.add('active');

        selectedOptionIndex = index;

        // Pause the timer when an option is selected
        pauseTimer();

        // Show confirmation modal
        showModal(
            'ਜਵਾਬ ਦੀ ਪੁਸ਼ਟੀ',
            `ਕੀ ਤੁਸੀਂ ${selectedBtn.textContent.split('. ')[0]} ਨੂੰ ਆਪਣਾ ਅੰਤਿਮ ਜਵਾਬ ਲੌਕ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?`,
            'ਹਾਂ, ਲੌਕ ਕਰੋ',
            () => {
                closeModal();
                lockAnswer();
            },
            'ਨਹੀਂ, ਬਦਲਣਾ ਹੈ',
            () => {
                closeModal();
                // Resume timer from where it left off
                resumeTimer();
            }
        );
    }

    function lockAnswer() {
        if (isLocked || isGameOver) return;

        // Stop the timer
        stopTimer();

        isLocked = true;
        const currentQ = window.currentQuestion;
        
        // If no option was selected, mark as wrong
        if (selectedOptionIndex === null) {
            // Mark all options as wrong except the correct one
            const correctBtn = document.getElementById(`${kbcInstanceId}-option-${currentQ.correct_answer_index}`);
            correctBtn.classList.add('correct');
            
            document.querySelectorAll(`#${kbcInstanceId} .option-btn`).forEach(btn => {
                if (btn !== correctBtn) {
                    btn.classList.add('wrong');
                }
                btn.dataset.disabled = 'true';
                btn.onclick = null;
            });
            
            document.getElementById("incorrectSound").play();
            
            // Show explanation
            explanationText.textContent = currentQ.explanation_pa;
            explanationContainer.style.display = 'block';

            // Find last safe haven amount
            const safeLevels = [5, 10, 15];
            let wonAmount = '0 ਰੁਪਏ';
            
            // Check for previous safe level cleared
            for(let i = safeLevels.length - 1; i >= 0; i--) {
                const safeIndex = safeLevels[i] - 1; // Convert level to 0-based index
                if (safeIndex < currentQuestionIndex) {
                    wonAmount = levelAmounts[safeIndex];
                    break;
                }
            }

            setTimeout(() => {
                handleGameOver(wonAmount, currentQ.explanation_pa);
            }, 3500);
            return;
        }
        
        const isCorrect = (selectedOptionIndex === currentQ.correct_answer_index);
        const selectedBtn = document.getElementById(`${kbcInstanceId}-option-${selectedOptionIndex}`);

        // Disable all options visually and functionally
        document.querySelectorAll(`#${kbcInstanceId} .option-btn`).forEach(btn => {
            btn.dataset.disabled = 'true';
            btn.onclick = null;
        });

        if (isCorrect) {
            selectedBtn.classList.remove('active');
            selectedBtn.classList.add('correct');
            document.getElementById("clap").play();
      
            // Show explanation
            explanationText.textContent = currentQ.explanation_pa;
            explanationContainer.style.display = 'block';
            
            // Logic for correct answer
            setTimeout(() => {
                // Check if this is the last question (15th question, index 14)
                if (currentQuestionIndex === 14) {
                    // This is the final question. Play the special sound and show the win screen.
                    document.getElementById("7crore").play();
                    handleGameWin();
                } else {
                    // This is not the last question. Show the "Next Question" modal.
                    showModal(
                        'ਸਹੀ ਜਵਾਬ!',
                        `ਵਧਾਈਆਂ! ਤੁਸੀਂ ਹੁਣ ${currentQ.amount_pa} ਜਿੱਤ ਚੁੱਕੇ ਹੋ।<br><br>${currentQ.explanation_pa}`,
                        'ਅਗਲਾ ਸਵਾਲ',
                        () => {
                            closeModal();
                            loadQuestion(currentQuestionIndex + 1);
                        }
                    );
                }
            }, 2500);
        } else {
            selectedBtn.classList.add('wrong');
            const correctBtn = document.getElementById(`${kbcInstanceId}-option-${currentQ.correct_answer_index}`);
            correctBtn.classList.add('correct');
            document.getElementById("incorrectSound").play();
            
            // Show explanation
            explanationText.textContent = currentQ.explanation_pa;
            explanationContainer.style.display = 'block';

            // Find last safe haven amount
            const safeLevels = [5, 10, 15];
            let wonAmount = '0 ਰੁਪਏ';
            
            // Check for previous safe level cleared
            for(let i = safeLevels.length - 1; i >= 0; i--) {
                const safeIndex = safeLevels[i] - 1; // Convert level to 0-based index
                if (safeIndex < currentQuestionIndex) {
                    wonAmount = levelAmounts[safeIndex];
                    break;
                }
            }

            setTimeout(() => {
                handleGameOver(wonAmount, currentQ.explanation_pa);
            }, 3500);
        }
    }

    // ---------------------------------------------------
    // 3. GAME ENDING
    // ---------------------------------------------------

    function handleGameOver(wonAmount, explanation) {
        isGameOver = true;
        
        // Stop the timer
        stopTimer();
        
        showModal(
            'ਖੇਡ ਖਤਮ!',
            `ਅਫ਼ਸੋਸ, ਇਹ ਜਵਾਬ ਗਲਤ ਹੈ। ਤੁਸੀਂ ${wonAmount} ਜਿੱਤ ਕੇ ਖੇਡ ਤੋਂ ਬਾਹਰ ਹੋ ਗਏ ਹੋ।<br><br>ਵਿਆਖਿਆ: ${explanation}`,
            'ਨਵੀਂ ਖੇਡ ਸ਼ੁਰੂ ਕਰੋ',
            () => {
                closeModal();
                startGameFlow(); // Use the new function to restart
            }
        );
    }

    function handleGameWin() {
        isGameOver = true;
        
        // Stop the timer
        stopTimer();
        
        const maxAmount = levelAmounts[levelAmounts.length - 1];
        showModal(
            'ਸ਼ਾਨਦਾਰ! ਤੁਸੀਂ ਜਿੱਤ ਗਏ ਹੋ!',
            `ਵਧਾਈਆਂ! ਤੁਸੀਂ ਸਾਰੇ ਸਵਾਲਾਂ ਦੇ ਸਹੀ ਜਵਾਬ ਦਿੱਤੇ ਅਤੇ ${maxAmount} ਜਿੱਤ ਲਏ ਹਨ!`,
            'ਨਵੀਂ ਖੇਡ ਸ਼ੁਰੂ ਕਰੋ',
            () => {
                closeModal();
                startGameFlow(); // Use the new function to restart
            }
        );
    }

    // ---------------------------------------------------
    // GAME FLOW AND RESET
    // ---------------------------------------------------

    function resetGame() {
        // This function ONLY resets the state and UI to a clean slate.
        // It does NOT show the welcome modal.
        
        // Stop any running timer
        stopTimer();
        
        // Reset state variables
        currentQuestionIndex = -1;
        selectedOptionIndex = null;
        isLocked = false;
        isGameOver = false;
        usedQuestions.clear();

        // Reset lifelines state
        for (const key in lifelinesUsed) {
            lifelinesUsed[key] = false;
        }

        // Reset UI elements to a clean state
        initializeMoneyTree();
        for (const key in lifelineButtons) {
            lifelineButtons[key].style.opacity = '1';
            lifelineButtons[key].style.cursor = 'pointer';
            lifelineButtons[key].disabled = false;
        }
        
        questionTextEl.textContent = 'ਖੇਡ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ ਜਾਓ!';
        optionsContainer.innerHTML = '';
        explanationContainer.style.display = 'none';
    }

    function startGameFlow() {
        // This function handles the full start of a new game.
        resetGame(); // First, get everything clean.
        document.getElementById("showstart").play();
        setTimeout(() => {
            showModal(
                'ਜੀ ਆਇਆਂ ਨੂੰ!',
                'ਕੌਣ ਬਣੇਗਾ ਕਰੋੜਪਤੀ ਖੇਡਣ ਲਈ ਤਿਆਰ ਹੋ ਜਾਓ। ਪਹਿਲਾ ਸਵਾਲ 5,000 ਰੁਪਏ ਲਈ ਹੈ।',
                'ਖੇਡ ਸ਼ੁਰੂ ਕਰੋ',
                () => {
                    closeModal();
                    loadQuestion(0); // This is where the first question and timer start
                }
            );
        }, 3500); // Keep the original 3.5s delay for the start sound.
    }


    // ---------------------------------------------------
    // 4. LIFELINES
    // ---------------------------------------------------

    function disableLifeline(key) {
        lifelinesUsed[key] = true;
        lifelineButtons[key].style.opacity = '0.5';
        lifelineButtons[key].style.cursor = 'not-allowed';
        lifelineButtons[key].disabled = true;
    }

    // 50:50 Lifeline
    document.getElementById('lifeline-5050').addEventListener('click', () => {
        if (lifelinesUsed['5050'] || isLocked || isGameOver) return;

        // Pause the timer when lifeline is used
        pauseTimer();

        showModal(
            'ਲਾਈਫਲਾਈਨ: ਪੰਜਾਹ-ਪੰਜਾਹ',
            'ਕੀ ਤੁਸੀਂ ਦੋ ਗਲਤ ਜਵਾਬ ਹਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?',
            'ਹਾਂ, ਵਰਤੋ',
            () => {
                disableLifeline('5050');
                const currentQ = window.currentQuestion;
                const correctIndex = currentQ.correct_answer_index;
                const options = Array.from(optionsContainer.children);
                
                // Get indices of incorrect options
                let incorrectIndices = options.map((_, i) => i).filter(i => i !== correctIndex);

                // Randomly select 2 incorrect answers to remove
                const removedIndices = [];
                for(let i = 0; i < 2; i++) {
                    const randomIndex = Math.floor(Math.random() * incorrectIndices.length);
                    removedIndices.push(incorrectIndices.splice(randomIndex, 1)[0]);
                }

                // Hide the two removed options
                removedIndices.forEach(index => {
                    const btn = document.getElementById(`${kbcInstanceId}-option-${index}`);
                    btn.style.opacity = '0.3';
                    btn.style.pointerEvents = 'none';
                    btn.style.textDecoration = 'line-through';
                    btn.dataset.disabled = 'true';
                });
                
                closeModal();
                // Resume timer after lifeline is used
                resumeTimer();
            },
            'ਨਹੀਂ',
            () => {
                closeModal();
                // Resume timer if lifeline is cancelled
                resumeTimer();
            }
        );
    });

    // Audience Poll Lifeline
    document.getElementById('lifeline-audience').addEventListener('click', () => {
        if (lifelinesUsed['audience'] || isLocked || isGameOver) return;

        // Pause the timer when lifeline is used
        pauseTimer();
        
        disableLifeline('audience');
        audiencePollGraphEl.classList.add('active');

        const currentQ = window.currentQuestion;
        const correctIndex = currentQ.correct_answer_index;
        const optionsLabels = ['ੳ', 'ਅ', 'ੲ', 'ਸ'];
        let percentages = [0, 0, 0, 0];

        // Get indices of available (non-disabled) options
        const optionsElements = Array.from(optionsContainer.children);
        const availableIndices = [];
        optionsElements.forEach((btn, i) => {
            if (btn.dataset.disabled === 'false') {
                availableIndices.push(i);
            }
        });

        // Generate poll data
        let correctPercent = Math.floor(Math.random() * 15) + 40; // 40% to 54%
        percentages[correctIndex] = correctPercent;
        let remaining = 100 - correctPercent;

        // Distribute remaining percentage among other available options
        const otherAvailableIndices = availableIndices.filter(i => i !== correctIndex);
        if (otherAvailableIndices.length > 0) {
            for (let i = 0; i < otherAvailableIndices.length - 1; i++) {
                const p = Math.floor(Math.random() * remaining) + 1;
                percentages[otherAvailableIndices[i]] = p;
                remaining -= p;
            }
            // Give the last remaining percentage to the last available option
            percentages[otherAvailableIndices[otherAvailableIndices.length - 1]] = remaining;
        }

        // Render the bar chart
        audiencePollGraphEl.innerHTML = '';
        percentages.forEach((p, i) => {
            // Only show bars for available options
            if (!availableIndices.includes(i)) return;

            const barContainer = document.createElement('div');
            barContainer.style.display = 'flex';
            barContainer.style.flexDirection = 'column';
            barContainer.style.alignItems = 'center';
            barContainer.style.justifyContent = 'flex-end';
            barContainer.style.width = '25%';
            barContainer.style.height = '100%';
            
            const bar = document.createElement('div');
            bar.style.width = '40px';
            bar.style.minWidth = '40px';
            bar.style.borderTopLeftRadius = '4px';
            bar.style.borderTopRightRadius = '4px';
            bar.style.transition = 'all 0.5s ease-out';
            bar.style.height = `${p}%`;
            bar.style.backgroundColor = (i === correctIndex) ? 'green' : 'blue';
            bar.style.boxShadow = (i === correctIndex) ? '0 0 10px white' : '0 0 5px white';
            
            const percentText = document.createElement('span');
            percentText.style.fontSize = '0.875rem';
            percentText.style.fontWeight = 'bold';
            percentText.style.color = 'white';
            percentText.style.marginBottom = '4px';
            percentText.textContent = `${p}%`;

            const text = document.createElement('span');
            text.style.fontSize = '0.75rem';
            text.style.color = 'var(--kbc-gold)';
            text.style.marginTop = '4px';
            text.style.fontWeight = 'bold';
            text.textContent = optionsLabels[i];

            barContainer.appendChild(percentText);
            barContainer.appendChild(bar);
            barContainer.appendChild(text);
            audiencePollGraphEl.appendChild(barContainer);
        });

        showModal(
            'ਲਾਈਫਲਾਈਨ: ਦਰਸ਼ਕਾਂ ਦੀ ਰਾਏ',
            'ਦਰਸ਼ਕਾਂ ਦੀ ਰਾਏ ਲਈ ਗ੍ਰਾਫ਼ ਹੇਠਾਂ ਦਿੱਤਾ ਗਿਆ ਹੈ:',
            'ਠੀਕ ਹੈ',
            () => {
                closeModal();
                // Resume timer after lifeline is used
                resumeTimer();
            }
        );
    });

    // Expert Advice Lifeline
    document.getElementById('lifeline-expert').addEventListener('click', () => {
        if (lifelinesUsed['expert'] || isLocked || isGameOver) return;

        // Pause the timer when lifeline is used
        pauseTimer();
        
        disableLifeline('expert');
        const currentQ = window.currentQuestion;
        const correctIndex = currentQ.correct_answer_index;
        
        // Expert gives advice, with a high probability (90%) of being correct
        let advisedIndex = correctIndex;
        if (Math.random() < 0.1) {
            // 10% chance the expert is wrong (and chooses a non-disabled incorrect option)
            const optionsElements = Array.from(optionsContainer.children);
            const incorrectOptions = currentQ.options_pa.map((_, i) => i).filter(i => i !== correctIndex && optionsElements[i].dataset.disabled === 'false');

            if (incorrectOptions.length > 0) {
                advisedIndex = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
            } else {
                advisedIndex = correctIndex; // Cannot choose a wrong non-disabled option
            }
        }

        showModal(
            'ਲਾਈਫਲਾਈਨ: ਮਾਹਰ ਦੀ ਸਲਾਹ',
            `ਮਾਹਰ ਕਹਿੰਦਾ ਹੈ: "ਮੇਰੇ ਮੁਤਾਬਕ, ਸਹੀ ਜਵਾਬ ${optionLabels[advisedIndex]} ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਜਵਾਬ ਧਿਆਨ ਨਾਲ ਲੌਕ ਕਰੋ।"`,
            'ਧੰਨਵਾਦ',
            () => {
                closeModal();
                // Resume timer after lifeline is used
                resumeTimer();
            }
        );
    });

    // Initial Game Start
    startGameFlow();
        }
