const resumeButton = document.getElementById('downloadResume');

resumeButton.addEventListener('click', function () {
    const resumeUrl = './assets/resume.pdf';
    window.open(resumeUrl, '_blank');
});