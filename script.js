/* Poori website ka basic setup */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    color: #333;
}

.container {
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    width: 100%;
    max-width: 600px;
}

h1 {
    text-align: center;
    color: #4a90e2;
    margin-bottom: 5px;
}

.subtitle {
    text-align: center;
    color: #777;
    margin-bottom: 25px;
    font-size: 14px;
}

/* Form inputs ka design */
.form-container {
    display: flex;
    flex-direction: column;
}

label {
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 5px;
}

input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    background-color: #fafafa;
}

input:focus, textarea:focus {
    border-color: #4a90e2;
    outline: none;
    background-color: #fff;
}

button {
    margin-top: 25px;
    padding: 12px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background-color: #357abd;
}

/* Resume Preview Box ka design */
.resume-box {
    margin-top: 30px;
    padding: 20px;
    border: 2px dashed #4a90e2;
    border-radius: 8px;
    background: #fdfdfd;
}

#resume-content {
    padding: 15px;
    background: #fff;
}

#resume-content h2 {
    margin: 0 0 5px 0;
    color: #333;
}

#resume-content p {
    margin: 5px 0;
    color: #666;
}

hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 15px 0;
}

.download-btn {
    background-color: #2ecc71;
    width: 100%;
}

.download-btn:hover {
    background-color: #27ae60;
}
