<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Nishanthana Suseekaran | Personal Website</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, sans-serif;
      color: #17324d;
      background: #ffffff;
    }

    /* ===== NAVBAR ===== */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #071c2d;
      padding: 18px 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
    }

    .logo {
      color: white;
      font-size: 22px;
      font-weight: bold;
    }

    .logo span {
      color: #1da1f2;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin-left: 25px;
      font-size: 14px;
      transition: 0.3s;
    }

    nav a:hover {
      color: #1da1f2;
    }

    /* ===== HERO ===== */
    .hero {
      min-height: 100vh;
      padding: 120px 7% 60px;
      display: flex;
      align-items: center;
      background:
        linear-gradient(90deg, #061827 35%, rgba(6,24,39,0.65)),
        url("your-background-image.jpg") center/cover no-repeat;
      color: white;
    }

    .hero-content {
      max-width: 650px;
    }

    .hero h4 {
      color: #20a4f3;
      font-size: 24px;
      margin-bottom: 10px;
    }

    .hero h1 {
      font-size: 50px;
      line-height: 1.15;
      margin-bottom: 12px;
    }

    .hero h1 span {
      color: #168fe0;
    }

    .hero h3 {
      font-size: 21px;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 17px;
      line-height: 1.7;
      max-width: 600px;
      margin-bottom: 25px;
    }

    .socials a {
      display: inline-flex;
      width: 42px;
      height: 42px;
      margin-right: 10px;
      border: 1px solid #fff;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
    }

    .socials a:hover {
      background: #168fe0;
      border-color: #168fe0;
    }

    .cv-btn {
      display: inline-block;
      margin-top: 25px;
      padding: 13px 25px;
      background: #1699ed;
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
    }

    /* ===== COMMON SECTION ===== */
    section {
      padding: 80px 7%;
    }

    .section-title {
      font-size: 32px;
      margin-bottom: 35px;
      position: relative;
    }

    .section-title::after {
      content: "";
      display: block;
      width: 55px;
      height: 4px;
      background: #159be9;
      margin-top: 8px;
    }

    /* ===== ABOUT ===== */
    .about {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: start;
    }

    .about-text p {
      line-height: 1.8;
      margin-bottom: 18px;
      color: #46596b;
    }

    .info-box {
      border-left: 1px solid #ddd;
      padding-left: 35px;
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 17px 0;
      border-bottom: 1px solid #eee;
    }

    .info-row strong {
      color: #17324d;
    }

    /* ===== EDUCATION & WORK ===== */
    .gray-section {
      background: #f3f7fb;
    }

    .two-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 45px;
    }

    .card {
      background: white;
      padding: 25px;
      margin-bottom: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
    }

    .card h3 {
      margin-bottom: 8px;
    }

    .card p {
      color: #718090;
    }

    /* ===== SKILLS ===== */
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }

    .skill {
      background: #f1f7fc;
      padding: 13px 22px;
      border-radius: 25px;
      color: #17324d;
    }

    /* ===== CONTACT ===== */
    .contact {
      background: #071c2d;
      color: white;
    }

    .contact .section-title {
      color: white;
    }

    .contact-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    .contact-box {
      padding: 20px;
    }

    .contact-box h3 {
      margin-bottom: 10px;
    }

    .contact-box p {
      color: #c8d5df;
    }

    /* ===== FOOTER ===== */
    footer {
      background: #041421;
      color: white;
      padding: 20px 7%;
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }

    /* ===== MOBILE ===== */
    @media (max-width: 768px) {

      header {
        flex-direction: column;
        gap: 15px;
      }

      nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      nav a {
        margin: 5px 8px;
      }

      .hero h1 {
        font-size: 38px;
      }

      .about,
      .two-columns,
      .contact-info {
        grid-template-columns: 1fr;
      }

      .info-box {
        border-left: none;
        padding-left: 0;
      }

      footer {
        flex-direction: column;
        gap: 10px;
        text-align: center;
      }
    }
  </style>
</head>

<body>

  <!-- ===== NAVIGATION ===== -->
  <header>
    <div class="logo">
      Nishanthana <span>Suseekaran</span>
    </div>

    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#work">Work Experience</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>


  <!-- ===== HOME ===== -->
  <section class="hero" id="home">

    <div class="hero-content">

      <h4>Hello, I'm</h4>

      <h1>
        Nishanthana <span>Suseekaran</span>
      </h1>

      <h3>
        Aspiring Pilot | Lifelong Learner | Dreamer
      </h3>

      <p>
        "Driven by dreams, guided by discipline,
        working towards a career in aviation."
      </p>

      <div class="socials">
        <a href="#">in</a>
        <a href="#">f</a>
        <a href="#">ig</a>
        <a href="#">✉</a>
      </div>

      <a href="#" class="cv-btn">
        ↓ Download CV
      </a>

    </div>

  </section>


  <!-- ===== ABOUT ===== -->
  <section id="about">

    <div class="about">

      <div class="about-text">

        <h2 class="section-title">
          About Me
        </h2>

        <p>
          I am Nishanthana Suseekaran, a passionate
          individual with a strong ambition to build
          a successful career in aviation.
        </p>

        <p>
          I believe in continuous learning,
          self-improvement and working hard
          towards my dreams.
        </p>

      </div>

      <div class="info-box">

        <div class="info-row">
          <strong>Name</strong>
          <span>Nishanthana Suseekaran</span>
        </div>

        <div class="info-row">
          <strong>Age</strong>
          <span>--</span>
        </div>

        <div class="info-row">
          <strong>Nationality</strong>
          <span>--</span>
        </div>

        <div class="info-row">
          <strong>Location</strong>
          <span>--</span>
        </div>

        <div class="info-row">
          <strong>Dream</strong>
          <span>Commercial Pilot</span>
        </div>

      </div>

    </div>

  </section>


  <!-- ===== EDUCATION & WORK ===== -->
  <section class="gray-section" id="education">

    <div class="two-columns">

      <div>

        <h2 class="section-title">
          Education
        </h2>

        <div class="card">
          <h3>Higher Education</h3>
          <p>Details will be added soon.</p>
        </div>

        <div class="card">
          <h3>School Education</h3>
          <p>Details will be added soon.</p>
        </div>

        <div class="card">
          <h3>Aviation Training</h3>
          <p>Details will be added soon.</p>
        </div>

      </div>


      <div id="work">

        <h2 class="section-title">
          Work Experience
        </h2>

        <div class="card">
          <h3>Work Experience</h3>
          <p>
            Your work experience details
            will be added here.
          </p>
        </div>

      </div>

    </div>

  </section>


  <!-- ===== SKILLS ===== -->
  <section id="skills">

    <h2 class="section-title">
      Skills
    </h2>

    <div class="skills">

      <div class="skill">Communication</div>
      <div class="skill">Problem Solving</div>
      <div class="skill">Teamwork</div>
      <div class="skill">Time Management</div>
      <div class="skill">Adaptability</div>
      <div class="skill">Computer Skills</div>

    </div>

  </section>


  <!-- ===== CONTACT ===== -->
  <section class="contact" id="contact">

    <h2 class="section-title">
      Get In Touch
    </h2>

    <div class="contact-info">

      <div class="contact-box">
        <h3>Email</h3>
        <p>Your email will be added here.</p>
      </div>

      <div class="contact-box">
        <h3>Location</h3>
        <p>Your location will be added here.</p>
      </div>

      <div class="contact-box">
        <h3>LinkedIn</h3>
        <p>Your LinkedIn profile will be added here.</p>
      </div>

    </div>

  </section>


  <!-- ===== FOOTER ===== -->
  <footer>

    <p>
      © 2026 Nishanthana Suseekaran. All rights reserved.
    </p>

    <p>
      Big dreams | Hard work | Better tomorrow
    </p>

  </footer>

</body>
</html>
