const dataUrl = "assets/data/data.json";

async function loadPortfolio() {
  try {
    const res = await fetch(dataUrl);
    if (!res.ok) throw new Error("Portfolio data unavailable");
    const data = await res.json();

    document.title = `${data.name} — AI Developer`;
    document.getElementById("tagline").textContent = data.tagline;
    document.getElementById("aboutText").textContent = data.about;
    document.getElementById("githubLink").href = data.github;
    document.getElementById("linkedinLink").href = data.linkedin;
    document.getElementById("emailLink").href = `mailto:${data.email}`;
    document.getElementById("emailLink").textContent = `${data.email} ↗`;
    document.getElementById("location").textContent = data.location;

    const skills = document.getElementById("skillsGrid");
    skills.innerHTML = data.skills.map((skill, i) =>
      `<div class="skill"><span>${String(i + 1).padStart(2, "0")}</span>${skill}</div>`
    ).join("");

    const projects = document.getElementById("projectsList");
    projects.innerHTML = data.projects.map(p =>
      `<article class="project">
        <div class="project-no">${p.accent}</div>
        <div><div class="label">${p.label}</div><h3>${p.name}</h3><p>${p.desc}</p></div>
        <div class="project-arrow">↗</div>
      </article>`
    ).join("");

    document.getElementById("year").textContent = new Date().getFullYear();
  } catch (err) {
    console.error(err);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
loadPortfolio();
