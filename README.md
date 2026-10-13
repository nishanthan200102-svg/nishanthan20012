<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nishanthan Suseekaran | Portfolio</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #f3f6fb;
    color: #222;
    line-height: 1.7;
}

header {
    background: #0a1f44;
    padding: 18px 10px;
}

nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #61c5fa;
}

.hero {
    min-height: 430px;
    padding: 55px 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: white;
    background:
        linear-gradient(rgba(5,20,48,.82), rgba(5,20,48,.82)),
        url("airplane-bg.jpg") center/cover no-repeat,
        #12345b;
}

.profile-photo {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid white;
}

.hero h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.hero p {
    color: #d7e9ff;
}

.button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 22px;
    border-radius: 6px;
    background: #61c5fa;
    color: #0a1f44;
    font-weight: bold;
    text-decoration: none;
}

.container {
    max-width: 1000px;
    width: 90%;
    margin: auto;
}

.section {
    background: white;
    margin: 28px 0;
    padding: 28px;
    border-radius: 10px;
    box-shadow: 0 3px 12px rgba(0,0,0,.07);
}

.section h2 {
    color: #0a1f44;
    margin-bottom: 18px;
    padding-bottom: 8px;
    border-bottom: 3px solid #61c5fa;
}

.item {
    padding: 14px 0;
    border-bottom: 1px solid #e5e9f0;
}

.item:last-child {
    border-bottom: none;
}

.item h3 {
    color: #173d70;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.skill {
    background: #e5f3ff;
    color: #0a1f44;
    padding: 9px 15px;
    border-radius: 6px;
    font-weight: bold;
}

.contact a {
    color: #125c9e;
    overflow-wrap: anywhere;
}

footer {
    background: #0a1f44;
    color: white;
    text-align: center;
    padding: 22px;
}

@media (max-width: 650px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero h1 {
        font-size: 28px;
    }

    .profile-photo {
        width: 150px;
        height: 150px;
    }

    nav {
        gap: 12px;
    }

    nav a {
        font-size: 13px;
    }

    .section {
        padding: 20px;
    }
}
</style>
</head>

<body>

<header>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Work Experience</a>
        <a href="#qualifications">Qualifications</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
    </nav>
</header>

<section class="hero" id="home">
    <img src="profile.jpg"
         alt="Nishanthan Suseekaran"
         class="profile-photo">

    <div>
        <h1>N Nishanthan Suseekaran</h1>
        <p>Aspiring Pilot | Lifelong Learner | Dreamer</p>
        <p>Electrician and HVAC Technician with a passion for aviation.</p>
        <a href="#contact" class="button">Contact Me</a>
    </div>
</section>

<main class="container">

    <section class="section" id="about">
        <h2>About Me</h2>
        <p>
            Hello, I'm Nishanthan Suseekaran from Sri Lanka.
            I have experience in electrical work and HVAC systems,
            and a strong interest in aviation and professional development.
        </p>

        <div class="item"><strong>Age:</strong> 25</div>
        <div class="item"><strong>Nationality:</strong> Sri Lankan</div>
        <div class="item">
            <strong>Location:</strong>
            63/35, Village Kaluwanchikudi, Batticaloa, Sri Lanka
        </div>
    </section>

    <section class="section" id="education">
        <h2>Education</h2>
        <div class="item">
            <h3>Electrical Trade</h3>
            <p>Technical and practical electrical training.</p>
        </div>
        <div class="item">
            <h3>HVAC Technical Training</h3>
            <p>Technical knowledge of HVAC systems and maintenance.</p>
        </div>
    </section>

    <section class="section" id="experience">
        <h2>Work Experience</h2>

        <div class="item">
            <h3>HVAC Technician — Acciona</h3>
            <p>February 2023 – May 2026</p>
            <p>HVAC systems, maintenance and technical work.</p>
        </div>

        <div class="item">
            <h3>Electrician — Maximo</h3>
            <p>January 2022 – June 2022</p>
            <p>Electrical field work and technical maintenance.</p>
        </div>
    </section>

    <section class="section" id="qualifications">
        <h2>Qualifications</h2>
