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
