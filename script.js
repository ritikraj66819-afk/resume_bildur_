// Create Resume
function createResume() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const experience = document.getElementById("experience").value.trim();

    const objective = document.getElementById("objective").value.trim();
    const education = document.getElementById("education").value.trim();
    const projects = document.getElementById("projects").value.trim();
    const languages = document.getElementById("languages").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();

    if (name === "" || email === "") {
        alert("⚠️ Please enter your Name and Email.");
        return;
    }

    // Resume Preview
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-contact").innerText =
        "📧 " + email + " | 📞 " + phone;

    document.getElementById("res-skills").innerText =
        skills || "Not Added";

    document.getElementById("res-exp").innerText =
        experience || "Not Added";

    document.getElementById("res-objective").innerText =
        objective || "Not Added";

    document.getElementById("res-education").innerText =
        education || "Not Added";

    document.getElementById("res-projects").innerText =
        projects || "Not Added";

    document.getElementById("res-languages").innerText =
        languages || "Not Added";

    document.getElementById("res-hobbies").innerText =
        hobbies || "Not Added";

    document.getElementById("resume-preview").style.display = "block";

    // Smooth Scroll
    document.getElementById("resume-preview").scrollIntoView({
        behavior: "smooth"
    });
}

// Download PDF
function downloadPDF() {

    const element = document.getElementById("resume-content");
    const name = document.getElementById("name").value || "Resume";

    const options = {
        margin: 10,
        filename: name + "_Resume.pdf",
        image: {
            type: "jpeg",
            quality: 1
        },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf().set(options).from(element).save();
}
