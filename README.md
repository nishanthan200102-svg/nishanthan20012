<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio of Nishanthan Suseekaran, Electrician, HVAC Technician and aspiring pilot.">
    <title>N Nishanthan Suseekaran | Portfolio</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f5f7fb;
            color: #222;
            line-height: 1.7;
        }

        header {
            background: #0a1f44;
            padding: 18px 5%;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 22px;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
        }

        nav a:hover {
            color: #61c5fa;
        }

        .hero {
            min-height: 430px;
            padding: 70px 8%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 45px;
            color: white;
            background:
                linear-gradient(rgba(5, 20, 48, 0.82),
                rgba(5, 20, 48, 0.82)),
                url("airplane-bg.jpg") center/cover no-repeat;
        }

        .profile-photo {
            width: 190px;
            height: 190px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid white;
        }

        .hero h1 {
            font-size: 38px;
            margin-bottom: 12px;
        }

        .hero p {
            font-size: 18px;
            color: #d7e9ff;
        }

        .hero .tagline {
            margin-top: 8px;
            font-size: 16px;
        }

        .container {
            width: 90%;
            max-width: 1050px;
            margin: auto;
        }

        .section {
            background: white;
            margin: 30px 0;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 3px 14px rgba(0, 0, 0, 0.07);
        }

        .section h2 {
            color: #0a1f44;
            font-size: 27px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #61c5fa;
        }

        .item {
            padding: 15px 0;
            border-bottom: 1px solid #e5e9f0;
        }

        .item:last-child {
            border-bottom: none;
        }

        .item h3 {
            color: #173d70;
            margin-bottom: 5px;
        }

        .date {
            color: #63748a;
            font-size: 14px;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .skill {
            background: #e5f3ff;
            color: #0a1f44;
            padding: 10px 17px;
            border-radius: 7px;
            font-weight: bold;
        }

        .contact-links a {
            color: #125c9e;
            text-decoration: none;
            overflow-wrap: anywhere;
        }

        .contact-links a:hover {
            text-decoration: underline;
        }

        .contact-row {
            margin: 12px 0;
            overflow-wrap: anywhere;
        }

        .button {
            display: inline-block;
            margin-top: 22px;
            padding: 12px 22px;
            background: #61c5fa;
            color: #0a1f44;
            text-decoration: none;
            font-weight: bold;
            border-radius: 6px;
        }

        .button:hover {
            background: white;
        }

        footer {
            background: #0a1f44;
            color: white;
            text-align: center;
            padding: 24px 15px;
            margin-top: 35px;
        }

        @media (max-width: 650px) {
            nav {
                gap: 12px;
            }

            nav a {
                font-size: 12px;
            }

            .hero {
                flex-direction: column;
                text-align: center;
                padding: 45px 5%;
            }

            .hero h1 {
                font-size: 29px;
            }

            .profile-photo {
                width: 155px;
                height: 155px;
            }

            .section {
                padding: 22px;
            }
        }
    </style>
</head>

<body>

    <!-- Navigation -->
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

    <!-- Hero Section -->
    <section class="hero" id="home">
        <img
            class="profile-photo"
            src="profile.jpg"
            alt="Nishanthan Suseekaran profile photo"
        >

        <div>
            <h1>N Nishanthan Suseekaran</h1>
            <p>Aspiring Pilot | Lifelong Learner | Dreamer</p>
            <p class="tagline">
                Electrician &amp; HVAC Technician with a passion for aviation.
            </p>
            <a class="button" href="#contact">Contact Me</a>
        </div>
    </section>

    <main class="container">

        <!-- About Me -->
        <section class="section" id="about">
            <h2>About Me</h2>
            <p>
                Hello, I'm Nishanthan Suseekaran from Sri Lanka.
                I have experience in electrical work and HVAC systems,
                along with a strong interest in aviation and professional
                development. I am passionate about learning new skills,
                improving my technical knowledge and pursuing my goals.
            </p>

            <div class="item">
                <strong>Age:</strong> 25
            </div>

            <div class="item">
                <strong>Nationality:</strong> Sri Lankan
            </div>

            <div class="item">
                <strong>Location:</strong>
                63/35, Village Kaluwanchikudi, Batticaloa, Sri Lanka
            </div>
        </section>

        <!-- Education -->
        <section class="section" id="education">
            <h2>Education</h2>

            <div class="item">
                <h3>Electrical Trade</h3>
                <p>Technical and practical electrical training.</p>
            </div>

            <div class="item">
                <h3>HVAC and Technical Experience</h3>
                <p>
                    Practical experience in HVAC systems and technical
                    maintenance.
                </p>
            </div>
        </section>

        <!-- Work Experience -->
        <section class="section" id="experience">
            <h2>Work Experience</h2>

            <div class="item">
                <h3>HVAC Technician — Acciona</h3>
                <p class="date">
                    February 2023 – May 2026
                </p>
                <p>
                    Experience in HVAC systems, maintenance and technical
                    work. Responsibilities may include inspection,
                    troubleshooting and equipment servicing.
                </p>
            </div>

            <div class="item">
                <h3>Electrician Field — Maximo</h3>
                <p class="date">
                    January 2022 – June 2022
                </p>
                <p>
                    Electrical field experience involving technical tasks,
                    electrical maintenance and related work.
                </p>
            </div>
        </section>

        <!-- Qualifications -->
        <section class="section" id="qualifications">
            <h2>Qualifications</h2>

            <div class="item">
                <h3>NVQ Level 3 — Electrician</h3>
                <p>Electrical trade qualification.</p>
            </div>

            <div class="item">
                <h3>NVQ Level 4 — Electrician</h3>
                <p>Electrical technical qualification.</p>
            </div>

            <div class="item">
                <h3>Certificate of Trade Test</h3>
                <p>Trade test certificate.</p>
            </div>

            <div class="item">
                <h3>Commercial Pilot Training</h3>
                <p>
                    Interested in aviation, aircraft operations, flight
                    safety and the knowledge required for a professional
                    aviation career.
                </p>
                <p class="date">
                    Training or licence status to be confirmed.
                </p>
            </div>
        </section>

        <!-- Skills -->
        <section class="section" id="skills">
            <h2>Skills</h2>

            <div class="skills">
                <span class="skill">Electrical Work</span>
                <span class="skill">HVAC Systems</span>
                <span class="skill">Technical Maintenance</span>
                <span class="skill">Troubleshooting</span>
                <span class="skill">Technical Engineering</span>
                <span class="skill">Aviation Interest</span>
            </div>
        </section>

        <!-- Contact -->
        <section class="section" id="contact">
            <h2>Get In Touch</h2>

            <div class="contact-links">
                <p class="contact-row">
                    <strong>Email:</strong>
                    <a href="mailto:nishanthan200102@gmail.com">
                        nishanthan200102@gmail.com
                    </a>
                </p>

                <p class="contact-row">
                    <strong>WhatsApp:</strong>
                    <a
                        href="https://wa.me/94756652873"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        +94 756 652 873
                    </a>
                </p>

                <p class="contact-row">
                    <strong>Location:</strong>
                    63/35, Village Kaluwanchikudi,
                    Batticaloa, Sri Lanka
                </p>
            </div>

            <a
                class="button"
