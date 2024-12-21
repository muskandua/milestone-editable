var form = document.getElementById('editable-resume');
var resume = document.getElementById('resume-display');
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    // Collect user input fields
    var Fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('add').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var language = document.getElementById('language').value;
    var career = document.getElementById('career').value;
    var picFile = (_a = document.getElementById('profilepic').files) === null || _a === void 0 ? void 0 : _a[0];
    // Check if the resume display element exists
    if (!resume) {
        console.error('The resume display element is missing.');
        return;
    }
    // Function to generate the resume HTML
    var genResumeHTML = function (imgDataURL) {
        var resumeHTML = "\n            ".concat(imgDataURL ? "<img src=\"".concat(imgDataURL, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; border-radius:50%;\">") : "", "\n            <br>\n             <h2><b>").concat(Fname, "</b></h2>\n            <br>\n            <h3>Career Objective</h3>\n            <br>\n            <p>").concat(career, "</p>\n            <br>\n            <h3>Personal Information</h3>\n            <br>\n            <ul>\n                <li><b>Name:</b><span> ").concat(Fname, "</span></li>\n                <li><b>Email:</b> ").concat(email, "</li>\n                <li><b>Phone Number:</b> ").concat(number, "</li>\n                <li><b>Date of Birth:</b> ").concat(dob, "</li>\n                <li><b>Address:</b> ").concat(address, "</li>\n            </ul>\n            <br>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <br>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <br>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <br>\n            <h3>Languages</h3>\n            <p>").concat(language, "</p>\n        ");
        resume.innerHTML = resumeHTML;
    };
    // Handle the profile picture
    if (picFile) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            genResumeHTML(reader_1.result);
        };
        reader_1.readAsDataURL(picFile);
    }
    else {
        genResumeHTML(null);
    }
});
