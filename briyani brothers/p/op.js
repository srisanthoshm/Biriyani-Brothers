document.addEventListener('DOMContentLoaded', () => {
    const hiddenContent = document.querySelectorAll('.hidden');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealContent = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealContent, observerOptions);

    hiddenContent.forEach(content => {
        observer.observe(content);
    });
});