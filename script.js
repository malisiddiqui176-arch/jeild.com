<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="google-site-verification"
content="UzgPgNfRsKNepRWnvcsJhyxE1Yu4m-i61A__m-4sKpY">

<title>Nano Digital Academy Pro</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,sans-serif;
}

body{
    background:#050816;
    color:white;
}

/* HEADER */

header{
    background:#0b1020;
    border-bottom:2px solid #00cfff;
    padding:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    color:#00cfff;
    font-size:24px;
    font-weight:bold;
}

header button{
    background:#00cfff;
    border:none;
    padding:10px 15px;
    border-radius:8px;
    cursor:pointer;
}

/* NAVIGATION */

nav{
    background:#111827;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding:10px;
}

nav button{
    margin:5px;
    padding:10px 15px;
    border:none;
    border-radius:8px;
    background:#00cfff;
    cursor:pointer;
}

/* PAGE SYSTEM */

.page{
    display:none;
    padding:30px;
}

.active{
    display:block;
}

/* HERO */

.hero{
    text-align:center;
    padding:100px 20px;
}

.hero h1{
    color:#00cfff;
    font-size:60px;
    margin-bottom:15px;
}

.hero p{
    font-size:22px;
    margin-bottom:20px;
}

.hero-buttons{
    display:flex;
    justify-content:center;
    gap:15px;
    flex-wrap:wrap;
}

.hero button{
    padding:12px 20px;
    border:none;
    border-radius:10px;
    background:#00cfff;
    cursor:pointer;
}

/* CARDS */

.card{
    background:#111827;
    border:1px solid #00cfff;
    border-radius:12px;
    padding:20px;
    margin:10px;
}

/* GRID */

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:15px;
}

/* PROGRESS */

.progress{
    width:100%;
    height:10px;
    background:#333;
    border-radius:10px;
    margin:10px 0;
}

.progress-fill{
    width:35%;
    height:100%;
    background:#00cfff;
    border-radius:10px;
}

/* INPUTS */

input,
textarea{
    width:100%;
    padding:10px;
    margin:10px 0;
    border-radius:8px;
    border:none;
}

textarea{
    height:120px;
}

/* BUTTONS */

button{
    padding:10px 20px;
    border:none;
    border-radius:8px;
    background:#00cfff;
    cursor:pointer;
}

/* STUDY PLANNER */

ul{
    list-style:none;
    padding:0;
}

li{
    background:#111827;
    border:1px solid #00cfff;
    margin:8px 0;
    padding:10px;
    border-radius:8px;
}

/* FOOTER */

footer{
    text-align:center;
    padding:20px;
    margin-top:30px;
    border-top:1px solid #00cfff;
}

/* LIGHT MODE */

.light{
    background:#f5f5f5;
    color:black;
}

.light .card{
    background:white;
    color:black;
}

.light header{
    background:white;
}

.light nav{
    background:#ddd;
}

</style>

</head>

<body>

<!-- HEADER -->

<header>

<div class="logo">
Nano Digital Academy
</div>

<button onclick="toggleTheme()">
🌙 Theme
</button>

</header>


<!-- NAVIGATION -->

<nav>

<button onclick="showPage('home')">
🏠 Home
</button>

<button onclick="showPage('courses')">
📚 Courses
</button>

<button onclick="showPage('dashboard')">
📊 Dashboard
</button>

<button onclick="showPage('quiz')">
🎯 Quiz
</button>

<button onclick="showPage('notes')">
📝 Notes
</button>

<button onclick="showPage('planner')">
📅 Planner
</button>

<button onclick="showPage('login')">
🔐 Login
</button>

<button onclick="showPage('settings')">
⚙️ Settings
</button>

</nav>


<!-- HOME PAGE -->

<div id="home" class="page active">

<div class="hero">

<h1>
🚀 Nano Digital Academy
</h1>

<p>
Learn Digital Skills. Build Your Future.
</p>

<div class="hero-buttons">

<button onclick="showPage('courses')">
📚 Explore Courses
</button>

<button onclick="showPage('login')">
🚀 Join Now
</button>

</div>

</div>


<div class="grid">

<div class="card">
👨‍🎓 500+ Students
</div>

<div class="card">
📚 9 Courses
</div>

<div class="card">
🏆 100+ Certificates
</div>

<div class="card">
⭐ 4.8 Rating
</div>

</div>

</div>


<!-- COURSES PAGE -->

<div id="courses" class="page">

<h2>
📚 Courses
</h2>

<br>

<!-- COURSE SEARCH -->

<input
type="text"
id="searchCourse"
placeholder="🔍 Search Courses..."
onkeyup="searchCourses()"
>


<div class="grid" id="courseGrid">


<div class="card course-card">

<h3>
HTML Fundamentals
</h3>

<p>
Beginner Level
</p>

<p>
Duration: 4 Weeks
</p>

<button>
Enroll Now
</button>

</div>


<div class="card course-card">

<h3>
CSS Mastery
</h3>

<p>
Beginner Level
</p>

<p>
Duration: 4 Weeks
</p>

<button>
Enroll Now
</button>

</div>


<div class="card course-card">

<h3>
JavaScript Essentials
</h3>

<p>
Intermediate Level
</p>

<p>
Duration: 6 Weeks
</p>

<button>
Enroll Now
</button>

</div>


<div class="card course-card">

<h3>
Python Programming
</h3>

<p>
Intermediate Level
</p>

<p>
Duration: 8 Weeks
</p>

<button>
Enroll Now
</button>

</div>


</div>


<br>


<!-- COURSE PROGRESS -->

<div class="card">

<h3>
📈 Course Progress
</h3>

<div class="progress">

<div
class="progress-fill"
id="courseProgress">
</div>

</div>

<p id="progressText">
35% Complete
</p>

<br>

<button onclick="increaseProgress()">
✅ Complete Lesson
</button>

</div>

</div>


<!-- DASHBOARD -->

<div id="dashboard" class="page">

<h2>
📊 Student Dashboard
</h2>


<div class="grid">


<div class="card">

<h3>
👤 Student Profile
</h3>

<p>
Name: Student
</p>

<p>
Level: Beginner
</p>

</div>


<div class="card">

<h3>
📚 Courses Enrolled
</h3>

<p>
3
</p>

</div>


<div class="card">

<h3>
🏆 Completed Courses
</h3>

<p>
1
</p>

</div>


<div class="card">

<h3>
📈 Progress
</h3>

<div class="progress">

<div
class="progress-fill"
id="dashboardProgress">
</div>

</div>

<p>
35% Complete
</p>

</div>


<div class="card">

<h3>
🎯 Quiz Score
</h3>

<p>
8 / 10
</p>

</div>


</div>

</div>


<!-- QUIZ -->

<div id="quiz" class="page">

<h2>
🎯 Quick Quiz
</h2>


<div class="card">

<p>
<strong>
What does HTML stand for?
</strong>
</p>

<br>


<button onclick="quizAnswer(true)">
Hyper Text Markup Language
</button>


<button onclick="quizAnswer(false)">
Home Tool Markup Language
</button>


<br>
<br>


<p id="quizResult">
</p>

</div>

</div>


<!-- NOTES -->

<div id="notes" class="page">

<h2>
📝 Notes Saver
</h2>


<textarea
id="notesBox"
placeholder="Write your notes here...">
</textarea>


<button onclick="saveNotes()">
💾 Save Notes
</button>


<p id="notesMsg">
</p>

</div>


<!-- STUDY PLANNER -->

<div id="planner" class="page">

<h2>
📅 Study Planner
</h2>


<input
id="taskInput"
placeholder="Enter study task"
>


<button onclick="addTask()">
➕ Add Task
</button>


<ul id="taskList">
</ul>

</div>


<!-- LOGIN -->

<div id="login" class="page">

<h2>
🔐 Login
</h2>


<input
type="email"
placeholder="Email"
>


<input
type="password"
placeholder="Password"
>


<button onclick="loginUser()">
Login
</button>


<p id="loginMsg">
</p>

</div>


<!-- SETTINGS -->

<div id="settings" class="page">

<h2>
⚙️ Settings
</h2>


<div class="card">

<button onclick="toggleTheme()">
🌙 Toggle Theme
</button>

</div>


<div class="card">

<h3>
ℹ️ About
</h3>

<p>
Welcome to Nano Digital Academy,
a platform dedicated to making learning
simple, accessible, and affordable
for everyone.
</p>

</div>


<div class="card">

<h3>
💰 Course Fees
</h3>

<p>

HTML — $10
<br>

CSS — $10
<br>

JavaScript — $20
<br>

Python — $25

</p>

</div>


<div class="card">

<h3>
❓ Help
</h3>

<p>

Contact support:
<br>

support@nanodigitalacademy.com

</p>

</div>

</div>


<!-- FOOTER -->

<footer>

© 2026 Nano Digital Academy

</footer>


<!-- JAVASCRIPT FILE -->

<script src="script.js"></script>

</body>

</html>
