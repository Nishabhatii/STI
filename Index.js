/* ================= MOBILE MENU ================= */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* CLOSE MENU ON CLICK */
document.querySelectorAll(".links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
function openDemo() {
  const demoModal = document.getElementById("demoModal");
  demoModal.style.display = "flex";
}

function closeDemo() {
  const demoModal = document.getElementById("demoModal");
  demoModal.style.display = "none";
}

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* ================= ACTIVE NAV ================= */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


/* ================= SCROLL PROGRESS ================= */
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;
  
  const bar = document.getElementById("progressBar");
  if (bar) bar.style.width = scrolled + "%";
});


/* ================= BACK TO TOP ================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll(".counter");

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(update, 20);
      } else {
        // ADD + OR %
        if (target === 95) {
          counter.innerText = target + "%";
        } else {
          counter.innerText = target + "+";
        }
      }
    };

    update();
  });
};

// RUN ON LOAD
window.addEventListener("load", startCounter);


/* ================= SCROLL REVEAL ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.6s ease";
  observer.observe(sec);
});