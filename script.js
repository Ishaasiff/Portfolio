 let prevScrollPos = window.pageYOffset;
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-80px";
    }

    prevScrollPos = currentScrollPos;
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      nav.style.top = "-80px"; 
    }
  });
    const faders = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
      faders.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          section.classList.add('show');
        }
      });
    });
    document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 200); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        reveals.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
document.addEventListener("mousemove", function(e) {
  const tag = document.querySelector(".tag-cursor");
  tag.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
