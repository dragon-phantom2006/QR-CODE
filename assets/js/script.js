fetch("assets/data/profile.json")
  .then(res => res.json())
  .then(data => {

    // Skills
    let skillsList = document.getElementById("skills");
    if (skillsList) {
      data.skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
      });
    }

    // Projects
    let projectsDiv = document.getElementById("projects");
    if (projectsDiv) {
      data.projects.forEach(project => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsDiv.appendChild(div);
      });
    }

  });