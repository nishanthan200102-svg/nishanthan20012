 html>
<html lang="ta">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nishanthan - Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <!-- Header / Hero Section -->
    <header class="header">
        <nav class="navbar">
            <div class="logo">Nishanthan</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <div class="hero-container" id="home">
            <div class="hero-text">
                <h3>Hello, I'm</h3>
                <h1>Nishanthan</h1>
                <p class="subtitle">Aspiring Pilot | Lifelong Learner | Dreamer</p>
                <p class="quote">"Driven by dreams, guided by discipline, working towards a career in aviation."</p>
                <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://wa.me/94XXXXXXXXX" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="mailto:nishanthan@email.com"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <div class="hero-image">
                <img src="IMG-20261013-WA0024(1).jpg" alt="Nishanthan">
            </div>
        </div>
    </header>

    <!-- About Me Section -->
    <section class="about-section" id="about">
        <div class="section-title">
            <i class="fa-solid fa-user"></i>
            <h2>About Me</h2>
        </div>
        <div class="about-content">
            <div class="about-text">
                <p>I am Nishanthan, a 25-year-old from Sri Lanka, currently living in Al Rayyan, Qatar. I have always dreamed of becoming a pilot since my childhood. Although I didn't have the opportunity or resources to pursue my dream earlier, I am now determined to achieve it.</p>
                <p>I am a hardworking, focused and positive person who believes in continuous learning and self-improvement. My goal is to complete a professional pilot course and build a successful career in aviation.</p>
            </div>
            <div class="about-details">
                <ul>
                    <li><i class="fa-solid fa-user"></i> <strong>Name:</strong> Nishanthan</li>
                    <li><i class="fa-solid fa-calendar"></i> <strong>Age:</strong> 25 Years</li>
                    <li><i class="fa-solid fa-flag"></i> <strong>Nationality:</strong> Sri Lankan</li>
                    <li><i class="fa-solid fa-location-dot"></i> <strong>Current Location:</strong> Al Rayyan, Qatar</li>
                    <li><i class="fa-solid fa-plane"></i> <strong>Dream:</strong> Commercial Pilot</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <footer class="footer-contact" id="contact">
        <div class="contact-header">
            <i class="fa-solid fa-paper-plane"></i>
            <h2>Get In Touch</h2>
        </div>
        <p class="contact-sub">Feel free to reach out to me anytime.</p>
        
        <div class="contact-grid">
            <div class="contact-item">
                <i class="fa-solid fa-envelope"></i>
                <span>nishanthan@email.com</span>
            </div>
            <div class="contact-item">
                <i class="fa-brands fa-whatsapp"></i>
                <span>+94 XX XXX XXXX (WhatsApp)</span>
            </div>
            <div class="contact-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>Al Rayyan, Qatar</span>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 Nishanthan. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f8fafc;
    color: #1e293b;
}

/* Header & Hero Section */
.header {
    background-color: #0b132b;
    color: #ffffff;
    padding: 20px 8%;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
    font-size: 20px;
    font-weight: bold;
    color: #38bdf8;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
}

.nav-links a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 15px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #38bdf8;
}

.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 0;
    gap: 40px;
    flex-wrap: wrap;
}

.hero-text {
    flex: 1;
    min-width: 300px;
}

.hero-text h3 {
    font-size: 24px;
    color: #38bdf8;
    margin-bottom: 5px;
}

.hero-text h1 {
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 18px;
    color: #94a3b8;
    margin-bottom: 15px;
}

.quote {
    font-size: 15px;
    color: #cbd5e1;
    font-style: italic;
    margin-bottom: 25px;
    line-height: 1.6;
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border-radius: 50%;
    text-decoration: none;
    transition: background-color 0.3s;
}

.social-icons a:hover {
    background-color: #38bdf8;
    color: #0b132b;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 280px;
}

.hero-image img {
    width: 320px;
    height: 380px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    border: 3px solid #38bdf8;
}

/* About Section */
.about-section {
    padding: 80px 8%;
    background-color: #ffffff;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
}

.section-title i {
    font-size: 24px;
    color: #0b132b;
}

.section-title h2 {
    font-size: 28px;
    color: #0b132b;
}

.about-content {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}

.about-text {
    flex: 1.2;
    min-width: 300px;
}

.about-text p {
    font-size: 16px;
    color: #475569;
    line-height: 1.8;
    margin-bottom: 20px;
}

.about-details {
    flex: 0.8;
    min-width: 280px;
    background-color: #f8fafc;
    padding: 25px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.about-details ul {
    list-style: none;
}

.about-details li {
    padding: 12px 0;
    border-bottom: 1px solid #e2e8f0;
    font-size: 15px;
    color: #334155;
    display: flex;
    align-items: center;
    gap: 12px;
}

.about-details li:last-child {
    border-bottom: none;
}

.about-details i {
    color: #0b132b;
    width: 20px;
}

/* Contact / Footer Section */
.footer-contact {
    background-color: #0b132b;
    color: #ffffff;
    padding: 60px 8% 30px 8%;
}

.contact-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
}

.contact-header i, .contact-header h2 {
    color: #ffffff;
}

.contact-sub {
    color: #94a3b8;
    margin-bottom: 30px;
    font-size: 15px;
}

.contact-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    color: #cbd5e1;
}

.contact-item i {
    color: #38bdf8;
    font-size: 18px;
}

.footer-bottom {
    text-align: center;
    padding-top: 25px;
    color: #64748b;
    font-size: 14px;
}
