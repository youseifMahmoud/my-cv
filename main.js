document.addEventListener('DOMContentLoaded', () => {
    // Define the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply animation classes when the element is in view
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5  // Trigger when the element is 50% in view
    });

    // Observe the elements you want to animate on scroll
    const elementsToAnimate = document.querySelectorAll('.fade-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
