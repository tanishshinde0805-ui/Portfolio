// Portfolio JS
// (kept minimal; Skills bars animate on viewport entry)

(function () {
  function animateSkills() {
    const skillsSection = document.querySelector('#skills');
    if (!skillsSection) return;

    const bars = skillsSection.querySelectorAll('.progress-in[data-progress]');
    if (!bars.length) return;

    // Ensure bars start collapsed
    bars.forEach((bar) => {
      bar.style.width = '0%';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          bars.forEach((bar) => {
            const val = bar.getAttribute('data-progress');
            bar.style.width = val + '%';
          });

          // Animate once
          observer.disconnect();
          break;
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(skillsSection);
  }

  function setupContactForm() {
    const form = document.querySelector('#contact-form');
    const successEl = document.querySelector('#contact-success');
    if (!form || !successEl) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic frontend-only success UX
      successEl.classList.remove('hidden');
      form.reset();

      // Auto-hide after a bit (optional UX)
      setTimeout(() => {
        successEl.classList.add('hidden');
      }, 6000);
    });
  }

  function init() {
    animateSkills();
    setupContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
var typed = new Typed(".typing", {
    strings: [
        "a Student",
        "an Aspiring MERN Stack Developer",
        "an AI / ML Enthusiast"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});
var typedAbout = new Typed(".typing-about", {
    strings: [
        "an Aspiring AI Engineer",
        "President, Rotaract Club DYPIU",
        "a MERN Stack Learner",
        "passionate about technology"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});








