document.addEventListener("DOMContentLoaded", () => {
  // tambahkan link CV disini(putri belum buat)
  const CV_LINK = "#";
  const EMAIL = "putriraismayanti@gmail.com";
  const WA_NUMBER = "6285776002774";

  //  Tombol Download CV 
  const cvBtn = document.querySelector(".download-cv");
  if (cvBtn) {
    if (CV_LINK && CV_LINK !== "#") {
      cvBtn.href = CV_LINK;
      cvBtn.setAttribute("download", "");
    } else {
      cvBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.warn("Link CV belum diisi.");
      });
    }
  }

  //  Tech stack marquee (dibuat dari data, lalu digandakan agar loop mulus) 
  const TECH_ROWS = [
    [["image-260.png", "HTML"], ["image-270.png", "CSS"], ["image-290.png", "Bootstrap"], ["image-310.png", "JavaScript"],
     ["image-320.png", "Flutter"], ["image-330.png", "MySQL"], ["image-350.png", "Figma"], ["image-370.png", "Android Studio"],
     ["image-390.png", "Python"], ["image-400.png", "C++"], ["image-430.png", "GitHub"], ["image-440.png", "VS Code"]],
    [["image-460.png", "Java"], ["image-470.png", "Kodular"], ["image-630.png", "Scratch"], ["image-650.png", "C"],
     ["image-660.png", "HTML"], ["image-670.png", "VS Code"], ["image-680.png", "Python"], ["image-690.png", "Bootstrap"],
     ["image-700.png", "GitHub"], ["image-710.png", "Figma"], ["image-720.png", "MySQL"], ["image-730.png", "CSS"]],
  ];
  const marquee = document.getElementById("tech-marquee");
  if (marquee) {
    TECH_ROWS.forEach((items, index) => {
      const cards = items
        .map(([src, name]) => `<div class="tech-card"><img src="${src}" alt="${name}"><span>${name}</span></div>`)
        .join("");
      marquee.insertAdjacentHTML(
        "beforeend",
        `<div class="tech-marquee-row"><div class="tech-marquee-track${index === 1 ? " reverse" : ""}">${cards}${cards}</div></div>`
      );
    });
  }

  // Menu mobile
  const toggle = document.getElementById("mobile-menu-toggle");
  const nav = document.getElementById("main-nav");

  function closeMenu() {
    nav?.classList.remove("mobile-open");
    toggle?.setAttribute("aria-expanded", "false");
  }

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("mobile-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Tutup menu saat layar kembali lebar
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });

  // Link aktif di navbar (mengikuti scroll)
  const navLinks = document.querySelectorAll(".navlink");
  const sections = ["home", "about", "skills", "journey", "project", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  // Form kontak
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");

  document.getElementById("btn-send-email")?.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("Mohon isi Name, Email, dan Message terlebih dahulu.");
      return;
    }

    const subject = encodeURIComponent(`Pesan dari ${name} lewat Portofolio`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  });

  document.getElementById("btn-send-whatsapp")?.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
      alert("Mohon isi Name dan Message terlebih dahulu.");
      return;
    }

    const text = encodeURIComponent(`Halo, saya ${name}.\n${message}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  });
});
