document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.icons.major i');
    icons.forEach(icon => icon.classList.remove('animated'));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                icons.forEach(icon => icon.classList.add('animated'));
                obs.disconnect(); // Solo animar una vez
            }
        });
    }, { threshold: 0.3 });

    const section = document.querySelector('#one');
    if (section) observer.observe(section);
});