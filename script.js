document.addEventListener("DOMContentLoaded", () => {
  const LINKS = {
    githubProfile: "https://github.com/piutyiiii",
    instagram: "https://instagram.com/putrirsmynti_",
    linkedin: "https://www.linkedin.com/in/ni-putu-putri-raismayanti/",
    whatsapp: "https://wa.me/6285776002774",
    email: "mailto:putriraismayanti@gmail.com",
    cv: "#",

    printing: {
      design: "https://www.figma.com/proto/2k05hBfGvFPVb6u2ivsUi3/printing?node-id=1-4&t=qsr6XnpGFhLMMIWW-1",
      github: "https://github.com/piutyiiii/printing-ui-design"
    },
    makeup: {
      design: "https://www.figma.com/proto/2k05hBfGvFPVb6u2ivsUi3/printing?node-id=732-936&t=qsr6XnpGFhLMMIWW-1",
      github: "https://github.com/piutyiiii/makeup-artist-ui-design"
    },
    meongMeong: {
      design: "https://scratch.mit.edu/projects/1250352638",
      github: "https://github.com/piutyiiii/Meong-Meong-game-scratch"
    },
    thriftco: {
      design: "https://www.figma.com/proto/yq1qISJsyOMm19OqUNKeP7/ITCC?node-id=1295-773&t=XoXeCgmKMGhm7Z8q-1",
      github: "https://github.com/piutyiiii/thrift.co-design"
    },
    fitsmatch: {
      design: "https://piutyiiii.github.io/Fitsmatch-AI/",
      github: "https://github.com/piutyiiii/Fitsmatch-AI"
    },
    banteniq: {
      design: "#",
      github: "https://github.com/piutyiiii/BantenIQ"
    }
  };

  function openLink(url) {
    if (!url || url === "#") {
      console.warn("Link belum diisi.");
      return;
    }
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  function bindClick(selector, url) {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.cursor = "pointer";
      el.addEventListener("click", (event) => {
        event.preventDefault();
        openLink(url);
      });
    });
  }

  const sectionIds = ["home", "about", "skills", "journey", "project", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll(".navlink");

  function setActive(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      setActive(target.id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const nav = link.closest("nav");
      if (nav) nav.classList.remove("mobile-open");
      const toggle = document.getElementById("mobile-menu-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".js-view-project").forEach((el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      document.getElementById("project")?.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive("project");
    });
  });

  bindClick(".rectangle-27, .download-cv, .download", LINKS.cv);
  bindClick(".git-hub16, .rectangle-196, .git-hub15", LINKS.githubProfile);
  bindClick(".instagram, .instagram2, .instagram3", LINKS.instagram);
  bindClick(".linked-in, .linked-in2, .ni-putu-putri-raismayanti", LINKS.linkedin);
  bindClick(".whats-app, .whats-app2, .whats-app-me, .rectangle-103, ._62-85776002774", LINKS.whatsapp);
  bindClick(".email, .email3, .send-via-email, .rectangle-102, .putriraismayanti-gmail-com", LINKS.email);

  bindClick(".rectangle-112, .view-ui-design, .external-link", LINKS.printing.design);
  bindClick(".rectangle-113, .git-hub3, .git-hub7", LINKS.printing.github);
  bindClick(".rectangle-120, .view-ui-design2, .external-link2", LINKS.makeup.design);
  bindClick(".rectangle-121, .git-hub4, .git-hub8", LINKS.makeup.github);
  bindClick(".rectangle-136, .view-game, .external-link3", LINKS.meongMeong.design);
  bindClick(".rectangle-137, .git-hub5, .git-hub9", LINKS.meongMeong.github);
  bindClick(".rectangle-152, .view-game2, .external-link4", LINKS.thriftco.design);
  bindClick(".rectangle-153, .git-hub6, .git-hub10", LINKS.thriftco.github);
  bindClick(".rectangle-144, .view-game3, .external-link5", LINKS.fitsmatch.design);
  bindClick(".rectangle-145, .git-hub11, .git-hub12", LINKS.fitsmatch.github);
  bindClick(".rectangle-128, .view-game4, .external-link6", LINKS.banteniq.design);
  bindClick(".rectangle-129, .git-hub13, .git-hub14", LINKS.banteniq.github);

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");

  document.getElementById("btn-send-email")?.addEventListener("click", (event) => {
    event.preventDefault();
    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    if (!name || !email || !message) {
      alert("Mohon isi Name, Email, dan Message terlebih dahulu.");
      return;
    }

    const subject = encodeURIComponent(`Pesan dari ${name} lewat Portofolio`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    window.location.href = `mailto:putriraismayanti@gmail.com?subject=${subject}&body=${body}`;
  });

  document.getElementById("btn-send-whatsapp")?.addEventListener("click", (event) => {
    event.preventDefault();
    const name = nameInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    if (!name || !message) {
      alert("Mohon isi Name dan Message terlebih dahulu.");
      return;
    }

    const text = encodeURIComponent(`Halo, saya ${name}.\n${message}`);
    window.open(`https://wa.me/6285776002774?text=${text}`, "_blank", "noopener,noreferrer");
  });

  // Mobile menu
  const toggle = document.getElementById("mobile-menu-toggle");
  const nav = toggle?.closest("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("mobile-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});
