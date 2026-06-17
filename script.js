/* ==========================
   TYPING ANIMATION
========================== */

const roles = [
  "AI Data Analyst",
  "Data Analyst",
  "Power BI Developer",
  "SQL Enthusiast",
  "Machine Learning Explorer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const typingElement =
    document.getElementById("typing");

  const currentRole =
    roles[roleIndex];

  if (!deleting) {

    typingElement.textContent =
      currentRole.substring(0, charIndex);

    charIndex++;

    if (charIndex >
      currentRole.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    typingElement.textContent =
      currentRole.substring(0, charIndex);

    charIndex--;

    if (charIndex < 0) {

      deleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }

    }

  }

  setTimeout(
    typeEffect,
    deleting ? 50 : 100
  );
}

typeEffect();

/* ==========================
   SCROLL REVEAL
========================== */

const reveals =
document.querySelectorAll(
  "section, .skill-card, .project-card, .timeline-card"
);

function revealElements() {

  const trigger =
    window.innerHeight * 0.85;

  reveals.forEach((element) => {

    const top =
      element.getBoundingClientRect().top;

    if (top < trigger) {
      element.classList.add("active");
    }

  });
}

reveals.forEach((item) => {
  item.classList.add("reveal");
});

window.addEventListener(
  "scroll",
  revealElements
);

revealElements();

/* ==========================
   NAVBAR BACKGROUND
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 50) {

      navbar.style.background =
        "rgba(15,15,17,.95)";

      navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.25)";

    } else {

      navbar.style.background =
        "rgba(15,15,17,.75)";

      navbar.style.boxShadow =
        "none";

    }

  }
);

/* ==========================
   ACTIVE NAVIGATION LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
  ".nav-links a"
);

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.clientHeight;

      if (
        pageYOffset >= sectionTop
        &&
        pageYOffset <
        sectionTop + sectionHeight
      ) {

        current =
          section.getAttribute("id");

      }

    });

    navLinks.forEach((link) => {

      link.classList.remove(
        "active-link"
      );

      if (
        link.getAttribute("href")
        === "#" + current
      ) {

        link.classList.add(
          "active-link"
        );

      }

    });

  }
);

/* ==========================
   CURSOR GLOW EFFECT
========================== */

const glow =
document.createElement("div");

glow.classList.add(
  "cursor-glow"
);

document.body.appendChild(glow);

document.addEventListener(
  "mousemove",
  (e) => {

    glow.style.left =
      e.clientX + "px";

    glow.style.top =
      e.clientY + "px";

  }
);

/* ==========================
   PROJECT CARD TILT
========================== */

const cards =
document.querySelectorAll(
  ".project-card"
);

cards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateX =
        ((y / rect.height)
          - 0.5) * -8;

      const rotateY =
        ((x / rect.width)
          - 0.5) * 8;

      card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    }
  );

});

/* ==========================
   PAGE LOAD ANIMATION
========================== */

window.addEventListener(
  "load",
  () => {

    document.body.style.opacity = "1";

  }
);
