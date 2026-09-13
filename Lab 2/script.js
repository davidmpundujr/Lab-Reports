
document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let studentId = document.getElementById("studentId").value;
    let programme = document.getElementById("programme").value;
    let course = document.getElementById("course").value;

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("idError").textContent = "";
    document.getElementById("programmeError").textContent = "";
    document.getElementById("courseError").textContent = "";

    if (name == "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        valid = false;
    }

    if (studentId == "" || studentId < 1) {
        document.getElementById("idError").textContent = "Please enter a valid student ID.";
        valid = false;
    }

    if (programme == "") {
        document.getElementById("programmeError").textContent = "Please select a programme.";
        valid = false;
    }

    if (course == "") {
        document.getElementById("courseError").textContent = "Please enter a course.";
        valid = false;
    }

    if (valid) {

        document.getElementById("displayName").textContent = name;
        document.getElementById("displayId").textContent = studentId;
        document.getElementById("displayProgramme").textContent = programme;
        document.getElementById("displayCourse").textContent = course;

        document.getElementById("registrationPage").style.display = "none";
        document.getElementById("confirmationPage").style.display = "block";
    }
});


function goBack() {

    document.getElementById("confirmationPage").style.display = "none";
    document.getElementById("registrationPage").style.display = "block";

    document.getElementById("registrationForm").reset();
}

