// JavaScript to create infinite horizontal scrolling effect
document.addEventListener("DOMContentLoaded", function () {
    const experienceContainer = document.getElementById("experience-container");
    
    // Clone the job experiences to acheive so 
    const jobExperiences = experienceContainer.querySelectorAll(".job-experience");
    jobExperiences.forEach((experience) => {
        const clone = experience.cloneNode(true);
        experienceContainer.appendChild(clone);
    });
});