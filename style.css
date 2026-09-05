/* =========================================================
   NANO DIGITAL ACADEMY
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   2. THEME
   ========================================================= */

let lightMode = false;

function toggleTheme() {

    lightMode = !lightMode;

    if (lightMode) {

        document.body.style.background =
            "linear-gradient(135deg,#eef8ff,#dff6ff)";

        document.body.style.color = "#071024";

        document.querySelectorAll(".card").forEach(function(card) {
            card.style.background = "rgba(255,255,255,0.85)";
            card.style.color = "#071024";
        });

        document.querySelectorAll(".page p").forEach(function(p) {
            p.style.color = "#234";
        });

    } else {

        document.body.style.background = "#050816";
        document.body.style.color = "white";

        document.querySelectorAll(".card").forEach(function(card) {
            card.style.background =
                "rgba(10,20,45,0.72)";
            card.style.color = "white";
        });

        document.querySelectorAll(".page p").forEach(function(p) {
            p.style.color = "";
        });
    }
}


/* =========================================================
   3. LOGIN
   ========================================================= */

function loginUser() {

    const username =
        document.getElementById("username");

    const password =
        document.getElementById("password");

    const message =
        document.getElementById("loginMessage");

    if (!username || !password || !message) {
        return;
    }

    if (
        username.value.trim() === "" ||
        password.value.trim() === ""
    ) {

        message.textContent =
            "Please enter username and password.";

        message.style.color = "#ff7777";

        return;
    }

    message.textContent =
        "Login successful! Welcome to Nano Digital Academy.";

    message.style.color = "#00ffcc";

    localStorage.setItem(
        "nanoUsername",
        username.value.trim()
    );
}


/* =========================================================
   4. QUIZ
   ========================================================= */

let quizScore = 0;

function quizAnswer(button, correct) {

    if (!button) {
        return;
    }

    const parent =
        button.parentElement;

    const options =
        parent.querySelectorAll(".quiz-option");

    options.forEach(function(option) {
        option.disabled = true;
        option.style.cursor = "default";
    });

    if (correct) {

        button.style.background = "#00cfff";
        button.style.color = "#001018";

        quizScore++;

        showNotification(
            "Correct answer! 🎉"
        );

    } else {

        button.style.background = "#ff5555";
        button.style.color = "white";

        showNotification(
            "Wrong answer. Keep learning! 📚"
        );
    }
}


/* =========================================================
   5. NOTES
   ========================================================= */

function saveNotes() {

    const notes =
        document.getElementById("notesArea");

    if (!notes) {
        return;
    }

    localStorage.setItem(
        "nanoNotes",
        notes.value
    );

    showNotification(
        "Notes saved successfully! 📝"
    );
}


function loadNotes() {

    const notes =
        document.getElementById("notesArea");

    if (!notes) {
        return;
    }

    const savedNotes =
        localStorage.getItem("nanoNotes");

    if (savedNotes !== null) {
        notes.value = savedNotes;
    }
}


/* =========================================================
   6. STUDY PLANNER
   ========================================================= */

function addTask() {

    const input =
        document.getElementById("taskInput");

    const list =
        document.getElementById("taskList");

    if (!input || !list) {
        return;
    }

    const taskText =
        input.value.trim();

    if (taskText === "") {
        showNotification(
            "Please enter a task."
        );
        return;
    }

    const task =
        document.createElement("div");

    task.className = "task";

    task.innerHTML = `
        <span>📌 ${escapeHTML(taskText)}</span>
        <button
            onclick="this.parentElement.remove(); saveTasks();"
            style="
                float:right;
                border:none;
                border-radius:6px;
                padding:5px 10px;
                cursor:pointer;
            ">
            ✕
        </button>
    `;

    list.appendChild(task);

    input.value = "";

    saveTasks();

    showNotification(
        "Task added! 📅"
    );
}


function saveTasks() {

    const list =
        document.getElementById("taskList");

    if (!list) {
        return;
    }

    const tasks = [];

    list.querySelectorAll(".task span")
        .forEach(function(item) {

            tasks.push(
                item.textContent
                    .replace("📌 ", "")
            );

        });

    localStorage.setItem(
        "nanoTasks",
        JSON.stringify(tasks)
    );
}


function loadTasks() {

    const list =
        document.getElementById("taskList");

    if (!list) {
        return;
    }

    const saved =
        localStorage.getItem("nanoTasks");

    if (!saved) {
        return;
    }

    try {

        const tasks =
            JSON.parse(saved);

        tasks.forEach(function(taskText) {

            const task =
                document.createElement("div");

            task.className = "task";

            task.innerHTML = `
                <span>📌 ${escapeHTML(taskText)}</span>
                <button
                    onclick="this.parentElement.remove(); saveTasks();"
                    style="
                        float:right;
                        border:none;
                        border-radius:6px;
                        padding:5px 10px;
                        cursor:pointer;
                    ">
                    ✕
                </button>
            `;

            list.appendChild(task);

        });

    } catch(error) {

        console.log(
            "Could not load tasks.",
            error
        );

    }
}


/* =========================================================
   7. COURSE SEARCH
   ========================================================= */

function searchCourses() {

    const input =
        document.getElementById("searchCourse");

    if (!input) {
        return;
    }

    const search =
        input.value.toLowerCase().trim();

    const courses =
        document.querySelectorAll(".course-card");

    courses.forEach(function(course) {

        const text =
            course.textContent.toLowerCase();

        if (text.includes(search)) {

            course.style.display = "";

        } else {

            course.style.display = "none";

        }

    });
}


/* =========================================================
   8. COURSE PROGRESS
   ========================================================= */

let courseProgress = 0;


function increaseProgress() {

    courseProgress += 10;

    if (courseProgress > 100) {
        courseProgress = 100;
    }

    updateProgress();

    localStorage.setItem(
        "nanoProgress",
        courseProgress
    );

    showNotification(
        "Lesson completed! 🚀"
    );
}


function updateProgress() {

    const courseBar =
        document.getElementById("courseProgress");

    const dashboardBar =
        document.getElementById("dashboardProgress");

    const progressText =
        document.getElementById("progressText");

    const dashboardText =
        document.getElementById(
            "dashboardProgressText"
        );

    if (courseBar) {
        courseBar.style.width =
            courseProgress + "%";
    }

    if (dashboardBar) {
        dashboardBar.style.width =
            courseProgress + "%";
    }

    if (progressText) {
        progressText.textContent =
            courseProgress + "% Completed";
    }

    if (dashboardText) {
        dashboardText.textContent =
            courseProgress + "% completed";
    }
}


function loadProgress() {

    const saved =
        localStorage.getItem("nanoProgress");

    if (saved !== null) {

        courseProgress =
            parseInt(saved);

        if (isNaN(courseProgress)) {
            courseProgress = 0;
        }
    }

    updateProgress();
}


/* =========================================================
   9. NOTIFICATION SYSTEM
   ========================================================= */

function showNotification(message) {

    const old =
        document.querySelector(".nano-notification");

    if (old) {
        old.remove();
    }

    const notification =
        document.createElement("div");

    notification.className =
        "nano-notification";

    notification.textContent =
        message;

    document.body.appendChild(
        notification
    );

    setTimeout(function() {

        notification.style.opacity = "0";
        notification.style.transform =
            "translateX(100px)";

        setTimeout(function() {
            notification.remove();
        }, 400);

    }, 2200);
}


/* =========================================================
   10. ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================================================
   11. HIGH GRAPHICS BACKGROUND
========================================================= */

function createAnimatedBackground() {

    let background =
        document.getElementById(
            "nanoAnimatedBackground"
        );

    if (background) {
        return;
    }

    background =
        document.createElement("div");

    background.id =
        "nanoAnimatedBackground";

    document.body.prepend(
        background
    );


    /* ---------------------------------
       BACKGROUND STYLE
    --------------------------------- */

    const backgroundStyle =
        document.createElement("style");

    backgroundStyle.textContent = `

        #nanoAnimatedBackground {

            position: fixed;

            inset: 0;

            width: 100%;
            height: 100%;

            z-index: 0;

            pointer-events: none;

            overflow: hidden;

            background:
                radial-gradient(
                    circle at center,
                    rgba(0,100,255,0.18),
                    transparent 45%
                ),
                #050816;

            transition:
                background-position 0.2s ease;

        }


        #nanoAnimatedBackground::before {

            content: "";

            position: absolute;

            inset: -10%;

            background:
                linear-gradient(
                    120deg,
                    rgba(0,207,255,0.12),
                    transparent 35%,
                    rgba(120,0,255,0.14),
                    transparent 70%
                );

            animation:
                nanoEnergy 10s linear infinite;

        }


        #nanoAnimatedBackground::after {

            content: "";

            position: absolute;

            width: 500px;
            height: 500px;

            left: 50%;
            top: 50%;

            transform:
                translate(-50%,-50%);

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(0,207,255,0.13),
                    transparent 70%
                );

            filter: blur(20px);

            animation:
                nanoPulse 5s ease-in-out infinite;

        }


        @keyframes nanoEnergy {

            0% {
                transform:
                    translateX(-10%)
                    rotate(0deg)
                    scale(1);
            }

            50% {
                transform:
                    translateX(10%)
                    rotate(8deg)
                    scale(1.08);
            }

            100% {
                transform:
                    translateX(-10%)
                    rotate(0deg)
                    scale(1);
            }

        }


        @keyframes nanoPulse {

            0%,100% {
                opacity:0.45;
                transform:
                    translate(-50%,-50%)
                    scale(0.8);
            }

            50% {
                opacity:1;
                transform:
                    translate(-50%,-50%)
                    scale(1.15);
            }

        }


        body > header,
        body > nav,
        body > .page,
        body > footer {

            position: relative;

            z-index: 2;

        }


        .nano-particle {

            position:absolute;

            width:3px;
            height:3px;

            border-radius:50%;

            background:#00cfff;

            box-shadow:
                0 0 6px #00cfff,
                0 0 15px #008cff;

            animation:
                nanoFloat linear infinite;

        }


        @keyframes nanoFloat {

            0% {

                transform:
                    translateY(110vh)
                    translateX(0)
                    scale(0.4);

                opacity:0;

            }

            15% {
                opacity:1;
            }

            50% {

                transform:
                    translateY(50vh)
                    translateX(40px)
                    scale(1);

            }

            85% {
                opacity:0.8;
            }

            100% {

                transform:
                    translateY(-10vh)
                    translateX(-40px)
                    scale(0.3);

                opacity:0;

            }

        }


        .nano-energy-line {

            position:absolute;

            width:2px;

            height:55vh;

            background:
                linear-gradient(
                    transparent,
                    rgba(0,207,255,0.8),
                    transparent
                );

            filter:
                drop-shadow(
                    0 0 10px #00cfff
                );

            opacity:0.25;

            animation:
                nanoLineMove 7s linear infinite;

        }


        @keyframes nanoLineMove {

            0% {
                transform:
                    translateY(120vh)
                    rotate(15deg);
            }

            100% {
                transform:
                    translateY(-80vh)
                    rotate(15deg);
            }

        }

    `;

    document.head.appendChild(
        backgroundStyle
    );


    /* ---------------------------------
       IMAGE
    --------------------------------- */

    const image1 =
        new Image();

    image1.onload = function() {

        background.style.backgroundImage = `
            linear-gradient(
                rgba(5,8,22,0.38),
                rgba(5,8,22,0.65)
            ),
            url("boy-background.png")
        `;

        background.style.backgroundSize =
            "cover";

        background.style.backgroundPosition =
            "center";

        background.style.backgroundRepeat =
            "no-repeat";

    };

    image1.onerror = function() {

        const image2 =
            new Image();

        image2.onload = function() {

            background.style.backgroundImage = `
                linear-gradient(
                    rgba(5,8,22,0.38),
                    rgba(5,8,22,0.65)
                ),
                url("boy.png")
            `;

            background.style.backgroundSize =
                "cover";

            background.style.backgroundPosition =
                "center";

            background.style.backgroundRepeat =
                "no-repeat";

        };

        image2.src = "boy.png";

    };

    image1.src =
        "boy-background.png";


    /* ---------------------------------
       PARTICLES
    --------------------------------- */

    for (let i = 0; i < 120; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "nano-particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (5 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.opacity =
            Math.random();

        const size =
            1 + Math.random() * 4;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        background.appendChild(
            particle
        );
    }


    /* ---------------------------------
       ENERGY LINES
    --------------------------------- */

    for (let i = 0; i < 8; i++) {

        const line =
            document.createElement("div");

        line.className =
            "nano-energy-line";

        line.style.left =
            (i * 14 + Math.random() * 8) + "%";

        line.style.animationDelay =
            Math.random() * 6 + "s";

        line.style.animationDuration =
            (5 + Math.random() * 7) + "s";

        background.appendChild(
            line
        );
    }
}


/* =========================================================
   12. MOUSE PARALLAX
========================================================= */

function enableMouseParallax() {

    const background =
        document.getElementById(
            "nanoAnimatedBackground"
        );

    if (!background) {
        return;
    }

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;


    document.addEventListener(
        "mousemove",
        function(event) {

            targetX =
                (event.clientX /
                window.innerWidth -
                0.5) * 18;

            targetY =
                (event.clientY /
                window.innerHeight -
                0.5) * 18;

        }
    );


    function animateParallax() {

        currentX +=
            (targetX - currentX) * 0.04;

        currentY +=
            (targetY - currentY) * 0.04;


        background.style.backgroundPosition =
            `calc(50% + ${currentX}px)
             calc(50% + ${currentY}px)`;


        requestAnimationFrame(
            animateParallax
        );
    }


    animateParallax();
}


/* =========================================================
   13. CARD 3D HOVER
========================================================= */

function enableCardEffects() {

    const cards =
        document.querySelectorAll(
            ".card"
        );

    cards.forEach(function(card) {

        card.addEventListener(
            "mousemove",
            function(event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                    centerY) * -5;

                const rotateY =
                    ((x - centerX) /
                    centerX) * 5;

                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-7px)
                     scale(1.02)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function() {

                card.style.transform =
                    "";

            }
        );

    });
}


/* =========================================================
   14. BUTTON RIPPLE EFFECT
========================================================= */

function enableButtonEffects() {

    const buttons =
        document.querySelectorAll(
            "button"
        );

    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement(
                        "span"
                    );

                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    "8px";

                ripple.style.height =
                    "8px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,0.7)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.left =
                    event.offsetX + "px";

                ripple.style.top =
                    event.offsetY + "px";

                ripple.style.transform =
                    "translate(-50%,-50%)";

                ripple.style.animation =
                    "nanoRipple 0.6s ease-out";

                if (
                    getComputedStyle(
                        button
                    ).position === "static"
                ) {
                    button.style.position =
                        "relative";
                }

                button.style.overflow =
                    "hidden";

                button.appendChild(
                    ripple
                );

                setTimeout(
                    function() {
                        ripple.remove();
                    },
                    650
                );

            }
        );

    });


    const rippleStyle =
        document.createElement("style");

    rippleStyle.textContent = `

        @keyframes nanoRipple {

            0% {
                width:8px;
                height:8px;
                opacity:0.8;
            }

            100% {
                width:180px;
                height:180px;
                opacity:0;
            }

        }

    `;

    document.head.appendChild(
        rippleStyle
    );
}


/* =========================================================
   15. SCROLL REVEAL
========================================================= */

function enableScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".card, .quiz-question, .progress-box, .login-box, .setting"
        );

    elements.forEach(function(element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );
                        }

                    }
                );

            },
            {
                threshold:0.12
            }
        );


    elements.forEach(
        function(element) {
            observer.observe(element);
        }
    );
}


/* =========================================================
   16. CURSOR GLOW
========================================================= */

function enableCursorGlow() {

    const glow =
        document.createElement("div");

    glow.id =
        "nanoCursorGlow";

    glow.style.position =
        "fixed";

    glow.style.width =
        "250px";

    glow.style.height =
        "250px";

    glow.style.borderRadius =
        "50%";

    glow.style.pointerEvents =
        "none";

    glow.style.zIndex =
        "1";

    glow.style.transform =
        "translate(-50%,-50%)";

    glow.style.background =
        "radial-gradient(circle,rgba(0,207,255,0.09),transparent 70%)";

    glow.style.filter =
        "blur(10px)";

    document.body.appendChild(
        glow
    );


    document.addEventListener(
        "mousemove",
        function(event) {

            glow.style.left =
                event.clientX + "px";

            glow.style.top =
                event.clientY + "px";

        }
    );
}


/* =========================================================
   17. HERO FLOATING EFFECT
========================================================= */

function enableHeroAnimation() {

    const hero =
        document.querySelector(".hero");

    if (!hero) {
        return;
    }

    let angle = 0;

    function animateHero() {

        angle += 0.015;

        const y =
            Math.sin(angle) * 4;

        hero.style.transform =
            `translateY(${y}px)`;

        requestAnimationFrame(
            animateHero
        );
    }

    animateHero();
}


/* =========================================================
   18. LOGIN DATA
========================================================= */

function loadLoginData() {

    const username =
        localStorage.getItem(
            "nanoUsername"
        );

    const input =
        document.getElementById(
            "username"
        );

    if (
        username &&
        input
    ) {

        input.value =
            username;
    }
}


/* =========================================================
   19. AUTO-SAVE NOTES
========================================================= */

function enableAutoSaveNotes() {

    const notes =
        document.getElementById(
            "notesArea"
        );

    if (!notes) {
        return;
    }

    notes.addEventListener(
        "input",
        function() {

            localStorage.setItem(
                "nanoNotes",
                notes.value
            );

        }
    );
}


/* =========================================================
   20. ENTER KEY FOR PLANNER
========================================================= */

function enablePlannerEnter() {

    const input =
        document.getElementById(
            "taskInput"
        );

    if (!input) {
        return;
    }

    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                addTask();

            }

        }
    );
}


/* =========================================================
   21. KEYBOARD SHORTCUTS
========================================================= */

function enableKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.ctrlKey &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                showPage("courses");

                const search =
                    document.getElementById(
                        "searchCourse"
                    );

                if (search) {
                    search.focus();
                }
            }

        }
    );
}


/* =========================================================
   22. SMOOTH PAGE ENTRANCE
========================================================= */

function pageEntranceAnimation() {

    const pages =
        document.querySelectorAll(
            ".page"
        );

    pages.forEach(function(page) {

        page.addEventListener(
            "transitionend",
            function() {
                page.style.transform =
                    "";
            }
        );

    });
}


/* =========================================================
   23. SAVE DATA BEFORE LEAVING
========================================================= */

window.addEventListener(
    "beforeunload",
    function() {

        const notes =
            document.getElementById(
                "notesArea"
            );

        if (notes) {

            localStorage.setItem(
                "nanoNotes",
                notes.value
            );
        }

        saveTasks();

        localStorage.setItem(
            "nanoProgress",
            courseProgress
        );
    }
);


/* =========================================================
   24. START EVERYTHING
========================================================= */

window.addEventListener(
    "load",
    function() {

        console.log(
            "Nano Digital Academy loaded successfully."
        );


        /* Data */

        loadNotes();

        loadTasks();

        loadProgress();

        loadLoginData();


        /* Graphics */

        createAnimatedBackground();

        enableMouseParallax();

        enableCursorGlow();


        /* Effects */

        enableCardEffects();

        enableButtonEffects();

        enableScrollReveal();

        enableHeroAnimation();


        /* Controls */

        enableAutoSaveNotes();

        enablePlannerEnter();

        enableKeyboardShortcuts();

        pageEntranceAnimation();

    }
);


/* =========================================================
   END OF SCRIPT
   ========================================================= */
