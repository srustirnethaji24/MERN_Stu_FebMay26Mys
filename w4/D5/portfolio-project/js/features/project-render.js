document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("projects-container");
  const searchInput = document.getElementById("project-search");

  console.log("✅ Project JS Loaded");

  if (!container) {
    console.error("❌ Container not found");
    return;
  }

  if (typeof projectsData === "undefined") {
    console.error("❌ projectsData not found");
    return;
  }

  function renderProjects(data) {
    container.innerHTML = "";

    if (!data.length) {
      container.innerHTML = "<p>No projects found</p>";
      return;
    }

    data.forEach(p => {
      const card = document.createElement("div");
      card.className = "bg-white p-6 rounded shadow";

      card.innerHTML = `
        <h3 class="text-xl font-bold">${p.name}</h3>
        <p class="text-sm text-gray-500">${p.category}</p>
        <p>${p.description}</p>
        <p class="text-blue-500 text-sm">${p.technologies.join(", ")}</p>
      `;

      container.appendChild(card);
    });
  }

  renderProjects(projectsData);

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      const value = e.target.value.toLowerCase();

      const filtered = projectsData.filter(p =>
        p.name.toLowerCase().includes(value) ||
        p.description.toLowerCase().includes(value) ||
        p.category.toLowerCase().includes(value) ||
        p.technologies.join(" ").toLowerCase().includes(value)
      );

      renderProjects(filtered);
    });
  }

});