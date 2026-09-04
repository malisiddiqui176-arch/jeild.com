/* =========================================================
   NANO DIGITAL ACADEMY PRO
   COMPLETE ANIMATED SCRIPT.JS
   Background image: boy-background.png
========================================================= */


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(id) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(id);

    if (selectedPage) {
        selectedPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================================
   DARK / LIGHT THEME
========================================================= */

function toggleTheme() {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "nanoTheme",
        isLight ? "light" : "dark"
    );
}


function loadTheme() {

    const savedTheme =
        localStorage.getItem("nanoTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }
}


/* =========================================================
   LOGIN
========================================================= */

function loginUser() {

    const message =
        document.getElementById("loginMsg");

    if (!message) return;

    message.innerText =
        "🙏 Thank you for logging in!";

    message.style.color = "#00cfff";
    message.style.fontWeight = "bold";

    message.style.opacity = "0";
    message.style.transform = "translateY(10px)";

    setTimeout(function() {

        message.style.transition =
            "all 0.5s ease";

        message.style.opacity = "1";
        message.style.transform =
            "translateY(0)";

    }, 50);
}


/* =========================================================
   QUIZ
========================================================= */

function quizAnswer(correct) {

    const result =
        document.getElementById("quizResult");

    if (!result) return;

    if (correct) {

        result.innerText =
            "✅ Correct! Excellent work!";

        result.style.color = "#00ff9d";

    } else {

        result.innerText =
            "❌ Wrong! Try Again.";

        result.style.color = "#ff5c5c";
    }

    result.style.fontWeight = "bold";
    result.style.transition =
        "all 0.3s ease";

    result.style.transform =
        "scale(1.15)";

    setTimeout(function() {

        result.style.transform =
            "scale(1)";

    }, 300);
}


/* =========================================================
   NOTES
========================================================= */

function saveNotes() {

    const notesBox =
        document.getElementById("notesBox");

    const message =
        document.getElementById("notesMsg");

    if (!notesBox) return;

    localStorage.setItem(
        "nanoNotes",
        notesBox.value
    );

    if (message) {

        message.innerText =
            "✅ Notes Saved Successfully!";

        message.style.color =
            "#00ff9d";

        setTimeout(function() {

            message.innerText = "";

        }, 3000);
    }
}


function loadNotes() {

    const savedNotes =
        localStorage.getItem("nanoNotes");

    const notesBox =
        document.getElementById("notesBox");

    if (savedNotes && notesBox) {
        notesBox.value = savedNotes;
    }
}


/* =========================================================
   STUDY PLANNER
========================================================= */

function addTask() {

    const input =
        document.getElementById("taskInput");

    const taskList =
        document.getElementById("taskList");

    if (!input || !taskList) return;

    const task =
        input.value.trim();

    if (task === "") {

        alert("Please enter a study task.");

        return;
    }

    const li =
        document.createElement("li");

    li.innerText = task;

    li.style.cursor = "pointer";

    li.addEventListener(
        "click",
        function() {

            li.style.textDecoration =
                "line-through";

            li.style.opacity = "0.5";

            setTimeout(function() {

                li.remove();

                saveTasks();

            }, 500);
        }
    );

    taskList.appendChild(li);

    input.value = "";

    saveTasks();
}


function saveTasks() {

    const tasks = [];

    const listItems =
        document.querySelectorAll(
            "#taskList li"
        );

    listItems.forEach(function(item) {

        tasks.push(
            item.innerText
        );

    });

    localStorage.setItem(
        "nanoTasks",
        JSON.stringify(tasks)
    );
}


function loadTasks() {

    const savedTasks =
        localStorage.getItem("nanoTasks");

    const taskList =
        document.getElementById("taskList");

    if (!savedTasks || !taskList) {
        return;
    }

    const tasks =
        JSON.parse(savedTasks);

    tasks.forEach(function(task) {

        const li =
            document.createElement("li");

        li.innerText = task;

        li.style.cursor = "pointer";

        li.addEventListener(
            "click",
            function() {

                li.style.textDecoration =
                    "line-through";

                li.style.opacity =
                    "0.5";

                setTimeout(function() {

                    li.remove();

                    saveTasks();

                }, 500);
            }
        );

        taskList.appendChild(li);
    });
}


/* =========================================================
   COURSE SEARCH
========================================================= */

function searchCourses() {

    const searchInput =
        document.getElementById(
            "searchCourse"
        );

    if (!searchInput) return;

    const searchText =
        searchInput.value.toLowerCase();

    const courses =
        document.querySelectorAll(
            ".course-card"
        );

    courses.forEach(function(course) {

        const courseText =
            course.innerText.toLowerCase();

        if (
            courseText.includes(searchText)
        ) {

            course.style.display =
                "block";

            course.style.opacity =
                "1";

        } else {

            course.style.display =
                "none";
        }
    });
}


/* =========================================================
   COURSE PROGRESS
========================================================= */

let courseProgress = 35;


function increaseProgress() {

    if (courseProgress >= 100) {

        courseProgress = 100;

        updateProgress();

        alert(
            "🏆 Congratulations! Course completed!"
        );

        return;
    }

    courseProgress += 10;

    if (courseProgress > 100) {
        courseProgress = 100;
    }

    updateProgress();
}


function updateProgress() {

    const progressBar =
        document.getElementById(
            "courseProgress"
        );

    const progressText =
        document.getElementById(
            "progressText"
        );

    if (progressBar) {

        progressBar.style.width =
            courseProgress + "%";

        progressBar.style.transition =
            "width 0.8s cubic-bezier(.17,.67,.3,1.2)";
    }

    if (progressText) {

        progressText.innerText =
            courseProgress +
            "% Complete";
    }

    const dashboardProgress =
        document.getElementById(
            "dashboardProgress"
        );

    if (dashboardProgress) {

        dashboardProgress.style.width =
            courseProgress + "%";

        dashboardProgress.style.transition =
            "width 0.8s ease";
    }

    localStorage.setItem(
        "courseProgress",
        courseProgress
    );
}


function loadProgress() {

    const savedProgress =
        localStorage.getItem(
            "courseProgress"
        );

    if (savedProgress !== null) {

        courseProgress =
            parseInt(savedProgress);
    }

    updateProgress();
}


/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

function addButtonEffects() {

    const buttons =
        document.querySelectorAll("button");

    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement("span");

                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    "15px";

                ripple.style.height =
                    "15px";

                ripple.style.background =
                    "rgba(255,255,255,0.7)";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.transform =
                    "scale(1)";

                ripple.style.opacity =
                    "1";

                ripple.style.left =
                    event.offsetX + "px";

                ripple.style.top =
                    event.offsetY + "px";

                ripple.style.transition =
                    "all 0.7s ease";

                button.style.position =
                    "relative";

                button.style.overflow =
                    "hidden";

                button.appendChild(ripple);

                setTimeout(function() {

                    ripple.style.transform =
                        "scale(18)";

                    ripple.style.opacity =
                        "0";

                }, 10);

                setTimeout(function() {

                    ripple.remove();

                }, 750);
            }
        );
    });
}


/* =========================================================
   CARD ANIMATION
========================================================= */

function addCardAnimations() {

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function(card) {

        card.style.transition =
            "transform 0.3s ease, box-shadow 0.3s ease";

        card.addEventListener(
            "mouseenter",
            function() {

                card.style.transform =
                    "translateY(-8px) scale(1.02)";

                card.style.boxShadow =
                    "0 10px 35px rgba(0,207,255,0.3)";
            }
        );

        card.addEventListener(
            "mouseleave",
            function() {

                card.style.transform =
                    "translateY(0) scale(1)";

                card.style.boxShadow =
                    "none";
            }
        );
    });
}


/* =========================================================
   HERO ANIMATION
========================================================= */

function heroAnimation() {

    const heroTitle =
        document.querySelector(".hero h1");

    const heroText =
        document.querySelector(".hero p");

    const heroButtons =
        document.querySelector(".hero-buttons");

    if (heroTitle) {

        heroTitle.style.opacity = "0";
        heroTitle.style.transform =
            "translateY(-40px)";

        setTimeout(function() {

            heroTitle.style.transition =
                "all 1s ease";

            heroTitle.style.opacity =
                "1";

            heroTitle.style.transform =
                "translateY(0)";

        }, 200);
    }

    if (heroText) {

        heroText.style.opacity = "0";

        setTimeout(function() {

            heroText.style.transition =
                "opacity 1s ease";

            heroText.style.opacity =
                "1";

        }, 600);
    }

    if (heroButtons) {

        heroButtons.style.opacity =
            "0";

        heroButtons.style.transform =
            "translateY(25px)";

        setTimeout(function() {

            heroButtons.style.transition =
                "all 0.8s ease";

            heroButtons.style.opacity =
                "1";

            heroButtons.style.transform =
                "translateY(0)";

        }, 900);
    }
}


/* =========================================================
   NAVIGATION GLOW
========================================================= */

function navigationEffect() {

    const navButtons =
        document.querySelectorAll(
            "nav button"
        );

    navButtons.forEach(function(button) {

        button.addEventListener(
            "mouseenter",
            function() {

                button.style.boxShadow =
                    "0 0 10px #00cfff, 0 0 25px rgba(0,207,255,0.6)";

                button.style.transform =
                    "translateY(-2px)";
            }
        );

        button.addEventListener(
            "mouseleave",
            function() {

                button.style.boxShadow =
                    "none";

                button.style.transform =
                    "translateY(0)";
            }
        );
    });
}


/* =========================================================
   AUTO SAVE NOTES
========================================================= */

function autoSaveNotes() {

    const notesBox =
        document.getElementById(
            "notesBox"
        );

    if (!notesBox) return;

    notesBox.addEventListener(
        "input",
        function() {

            localStorage.setItem(
                "nanoNotes",
                notesBox.value
            );
        }
    );
}


/* =========================================================
   ENTER KEY FOR PLANNER
========================================================= */

function plannerEnterKey() {

    const input =
        document.getElementById(
            "taskInput"
        );

    if (!input) return;

    input.addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {
                addTask();
            }
        }
    );
}


/* =========================================================
   HIGH GRAPHICS BACKGROUND
========================================================= */

function createAnimatedBackground() {

    /* Create background container */

    const background =
        document.createElement("div");

    background.id =
        "nanoAnimatedBackground";

    document.body.prepend(background);


    /* Create canvas */

    const canvas =
        document.createElement("canvas");

    canvas.id =
        "nanoParticleCanvas";

    background.appendChild(canvas);


    /* Create glowing energy layers */

    const energy1 =
        document.createElement("div");

    energy1.className =
        "nanoEnergy nanoEnergyOne";

    background.appendChild(energy1);


    const energy2 =
        document.createElement("div");

    energy2.className =
        "nanoEnergy nanoEnergyTwo";

    background.appendChild(energy2);


    const energy3 =
        document.createElement("div");

    energy3.className =
        "nanoEnergy nanoEnergyThree";

    background.appendChild(energy3);


    /* =====================================================
       INJECT GRAPHICS CSS
    ===================================================== */

    const style =
        document.createElement("style");

    style.innerHTML = `

    #nanoAnimatedBackground {

        position: fixed;

        inset: 0;

        width: 100%;
        height: 100%;

        z-index: -10;

        overflow: hidden;

        pointer-events: none;

        background:
            linear-gradient(
                rgba(0,0,20,0.20),
                rgba(0,0,30,0.35)
            ),
            url("boy-background.png")
            center center / cover
            no-repeat;

        transform:
            scale(1.03);

        transition:
            transform 0.15s ease-out;

    }


    #nanoAnimatedBackground::before {

        content: "";

        position: absolute;

        inset: -20%;

        background:

            radial-gradient(
                circle at 70% 40%,
                rgba(0,207,255,0.18),
                transparent 25%
            ),

            radial-gradient(
                circle at 30% 70%,
                rgba(100,0,255,0.15),
                transparent 30%
            );

        animation:
            nanoGlow 7s ease-in-out infinite alternate;

    }


    #nanoAnimatedBackground::after {

        content: "";

        position: absolute;

        inset: 0;

        background:
            linear-gradient(
                120deg,
                transparent 35%,
                rgba(0,207,255,0.08),
                transparent 65%
            );

        background-size:
            250% 100%;

        animation:
            nanoLightSweep 8s linear infinite;

    }


    #nanoParticleCanvas {

        position: absolute;

        inset: 0;

        width: 100%;
        height: 100%;

    }


    .nanoEnergy {

        position: absolute;

        width: 700px;

        height: 150px;

        border-radius: 50%;

        filter:
            blur(18px);

        opacity: 0.35;

        mix-blend-mode:
            screen;

    }


    .nanoEnergyOne {

        background:
            linear-gradient(
                90deg,
                transparent,
                #00cfff,
                transparent
            );

        top: 35%;

        left: -250px;

        transform:
            rotate(-18deg);

        animation:
            nanoEnergyMoveOne
            9s linear infinite;

    }


    .nanoEnergyTwo {

        background:
            linear-gradient(
                90deg,
                transparent,
                #7b2cff,
                transparent
            );

        top: 55%;

        right: -300px;

        transform:
            rotate(20deg);

        animation:
            nanoEnergyMoveTwo
            11s linear infinite;

    }


    .nanoEnergyThree {

        background:
            linear-gradient(
                90deg,
                transparent,
                #00eaff,
                transparent
            );

        top: 70%;

        left: -300px;

        transform:
            rotate(12deg);

        animation:
            nanoEnergyMoveThree
            13s linear infinite;

    }


    @keyframes nanoGlow {

        0% {
            transform:
                scale(1)
                rotate(0deg);
            opacity: 0.65;
        }

        100% {
            transform:
                scale(1.15)
                rotate(5deg);
            opacity: 1;
        }

    }


    @keyframes nanoLightSweep {

        0% {
            background-position:
                200% 0;
        }

        100% {
            background-position:
                -200% 0;
        }

    }


    @keyframes nanoEnergyMoveOne {

        0% {
            left: -700px;
        }

        100% {
            left: 120%;
        }

    }


    @keyframes nanoEnergyMoveTwo {

        0% {
            right: -700px;
        }

        100% {
            right: 120%;
        }

    }


    @keyframes nanoEnergyMoveThree {

        0% {
            left: -700px;
        }

        100% {
            left: 120%;
        }

    }


    .card {

        backdrop-filter:
            blur(8px);

        -webkit-backdrop-filter:
            blur(8px);

        background:
            rgba(17,24,39,0.72) !important;

    }


    header {

        backdrop-filter:
            blur(12px);

        -webkit-backdrop-filter:
            blur(12px);

    }


    nav {

        backdrop-filter:
            blur(12px);

        -webkit-backdrop-filter:
            blur(12px);

    }


    .hero h1 {

        text-shadow:
            0 0 10px rgba(0,207,255,0.8),
            0 0 30px rgba(0,207,255,0.5),
            0 0 60px rgba(0,207,255,0.25);

        animation:
            nanoTitleGlow
            3s ease-in-out infinite alternate;

    }


    @keyframes nanoTitleGlow {

        from {

            text-shadow:
                0 0 10px rgba(0,207,255,0.7),
                0 0 25px rgba(0,207,255,0.4);

        }

        to {

            text-shadow:
                0 0 15px rgba(0,207,255,1),
                0 0 40px rgba(0,207,255,0.7),
                0 0 70px rgba(0,207,255,0.3);

        }

    }

    `;

    document.head.appendChild(style);


    /* =====================================================
       PARTICLE SYSTEM
    ===================================================== */

    const ctx =
        canvas.getContext("2d");

    let width =
        canvas.width =
        window.innerWidth;

    let height =
        canvas.height =
        window.innerHeight;


    window.addEventListener(
        "resize",
        function() {

            width =
                canvas.width =
                window.innerWidth;

            height =
                canvas.height =
                window.innerHeight;

        }
    );


    const particles = [];

    const particleCount =
        Math.min(
            180,
            Math.floor(
                window.innerWidth / 7
            )
        );


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        particles.push({

            x:
                Math.random() * width,

            y:
                Math.random() * height,

            size:
                Math.random() * 2.5 + 0.5,

            speedX:
                (Math.random() - 0.5) * 0.35,

            speedY:
                (Math.random() - 0.5) * 0.35,

            alpha:
                Math.random() * 0.7 + 0.2,

            pulse:
                Math.random() * Math.PI * 2

        });

    }


    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        particles.forEach(
            function(particle) {

                particle.x +=
                    particle.speedX;

                particle.y +=
                    particle.speedY;

                particle.pulse +=
                    0.025;


                if (
                    particle.x < 0
                ) {
                    particle.x = width;
                }

                if (
                    particle.x > width
                ) {
                    particle.x = 0;
                }

                if (
                    particle.y < 0
                ) {
                    particle.y = height;
                }

                if (
                    particle.y > height
                ) {
                    particle.y = 0;
                }


                const glow =
                    particle.alpha +
                    Math.sin(
                        particle.pulse
                    ) * 0.25;


                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    "rgba(0,220,255," +
                    Math.max(
                        0.05,
                        glow
                    ) +
                    ")";


                ctx.shadowBlur =
                    12;

                ctx.shadowColor =
                    "#00cfff";

                ctx.fill();

            }
        );


        requestAnimationFrame(
            animateParticles
        );
    }


    animateParticles();
}


/* =========================================================
   MOUSE PARALLAX EFFECT
========================================================= */

function mouseParallax() {

    const background =
        document.getElementById(
            "nanoAnimatedBackground"
        );

    if (!background) return;


    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;


    window.addEventListener(
        "mousemove",
        function(event) {

            mouseX =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 2;

            mouseY =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 2;

        }
    );


    function moveBackground() {

        currentX +=
            (mouseX * 8 -
                currentX) * 0.04;

        currentY +=
            (mouseY * 8 -
                currentY) * 0.04;


        background.style.transform =
            "scale(1.05) translate(" +
            currentX +
            "px, " +
            currentY +
            "px)";


        requestAnimationFrame(
            moveBackground
        );
    }


    moveBackground();
}


/* =========================================================
   FLOATING COURSE CARDS
========================================================= */

function floatingCards() {

    const cards =
        document.querySelectorAll(
            ".course-card"
        );

    cards.forEach(
        function(card, index) {

            card.style.animation =
                "nanoFloatCard " +
                (3 + index * 0.4) +
                "s ease-in-out infinite alternate";

        }
    );


    const style =
        document.createElement("style");

    style.innerHTML = `

        @keyframes nanoFloatCard {

            0% {
                transform:
                    translateY(0);
            }

            100% {
                transform:
                    translateY(-5px);
            }

        }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   SCROLL REVEAL EFFECT
========================================================= */

function scrollReveal() {

    const cards =
        document.querySelectorAll(
            ".card"
        );


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

                        }

                    }
                );

            },
            {
                threshold: 0.1
            }
        );


    cards.forEach(
        function(card) {

            card.style.opacity =
                "0";

            card.style.transform =
                "translateY(20px)";

            card.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(card);

        }
    );
}


/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

window.addEventListener(
    "load",
    function() {

        loadTheme();

        loadNotes();

        loadTasks();

        loadProgress();

        addButtonEffects();

        addCardAnimations();

        heroAnimation();

        navigationEffect();

        autoSaveNotes();

        plannerEnterKey();

        createAnimatedBackground();

        mouseParallax();

        floatingCards();

        scrollReveal();

    }
);
