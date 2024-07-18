// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Typewriter effect for hero section
  const typewriter = document.querySelector(".hero-content h1");
  const text = typewriter.textContent;
  typewriter.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();

  // Skills animation
  const skills = document.querySelectorAll(".skills-grid > div");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  skills.forEach((skill) => {
    observer.observe(skill);
  });

  // Portfolio filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      portfolioItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Form submission
  const form = document.querySelector("#contact form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
    // You might want to use AJAX or fetch to send the form data to a server
  });

  // Dark mode toggle
  const darkModeToggle = document.querySelector("#dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
