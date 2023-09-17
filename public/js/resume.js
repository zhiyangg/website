const resumeButton = document.getElementById('downloadResume');

resumeButton.addEventListener('click', function () {
    const resumeUrl = 'public/assets/resume.pdf';
    window.open(resumeUrl, '_blank');
});