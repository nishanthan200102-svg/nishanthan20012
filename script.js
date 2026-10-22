body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 350px;
}

h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    color: #666;
    font-size: 14px;
}

select, input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.options {
    text-align: center;
    margin-top: 15px;
}

.options a {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
}

.options a:hover {
    text-decoration: underline;
}
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // பேஜ் ரெப்ரெஷ் ஆவதை தடுக்கும்

    var role = document.getElementById('role').value;
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // டெஸ்டுக்காக ஒரு காமன் பாஸ்வேர்ட் (உதாரணத்திற்கு: 1234 அல்லது admin)
    if (password === "1234" || password === "admin") {
        
        if (role === 'school') {
            alert("ஸ்கூல் அட்மின் உள்ளே நுழைகிறது!");
            // window.location.href = "school_dashboard.html";
        } else if (role === 'teacher') {
            alert("ஆசிரியர் டேஷ்போர்டுக்குச் செல்கிறது!");
            // window.location.href = "teacher_dashboard.html";
        } else if (role === 'parent') {
            alert("பெற்றோர் பகுதிக்குச் செல்கிறது!");
            // window.location.href = "parent_dashboard.html";
        }

    } else {
        alert("தவறான கடவுச்சொல்! (டெஸ்டிங்கிற்கு 1234 அல்லது admin என முயற்சிக்கவும்)");
    }
});
