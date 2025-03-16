// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Flip Animation for Projects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.project-inner').style.transform = "rotateY(180deg)";
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.project-inner').style.transform = "rotateY(0deg)";
    });
});
