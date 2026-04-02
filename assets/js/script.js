// LOAD DATA
fetch("data/data.json")
.then(res => res.json())
.then(data => {

  let skills = document.getElementById("skills-list");
  data.skills.forEach(s => {
    let li = document.createElement("li");
    li.textContent = s;
    skills.appendChild(li);
  });

  let edu = document.getElementById("education-list");
  data.education.forEach(e => {
    let div = document.createElement("div");
    div.innerHTML = `<h3>${e.title}</h3><p>${e.desc}</p>`;
    edu.appendChild(div);
  });

  let proj = document.getElementById("projects-list");
  data.projects.forEach(p => {
    let div = document.createElement("div");
    div.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p>`;
    proj.appendChild(div);
  });

});

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});