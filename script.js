const objective = document.getElementById('objective').value;
const education = document.getElementById('education').value;
const projects = document.getElementById('projects').value;
const languages = document.getElementById('languages').value;
const hobbies = document.getElementById('hobbies').value;

document.getElementById('res-objective').innerText = objective || "Not added";
document.getElementById('res-education').innerText = education || "Not added";
document.getElementById('res-projects').innerText = projects || "Not added";
document.getElementById('res-languages').innerText = languages || "Not added";
document.getElementById('res-hobbies').innerText = hobbies || "Not added";bn
