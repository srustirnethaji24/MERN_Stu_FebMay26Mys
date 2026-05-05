// const searchInput = document.getElementById("project-search");

// // ✅ Main render function
// function renderProjects(data) {
//     const projectsContainer = document.getElementById("projects-container");

//     if (!projectsContainer) {
//         console.log("Project container not found");
//         return;
//     }

//     projectsContainer.innerHTML = "";

//     data.forEach(function (project) {
//         const card = document.createElement("div");
//         card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

//         // Icon
//         const iconBox = document.createElement("div");
//         iconBox.className = "w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-500 rounded-full";

//         const iconText = document.createElement("span");
//         iconText.className = "text-2xl text-white font-bold";
//         iconText.textContent = project.shortLabel;

//         iconBox.appendChild(iconText);

//         // Project Name
//         const projectName = document.createElement("h2");
//         projectName.className = "text-xl font-bold mb-2";
//         projectName.textContent = project.name;

//         // Category
//         const projectCategory = document.createElement("p");
//         projectCategory.className = "text-sm text-gray-500";
//         projectCategory.textContent = project.category;

//         // Description
//         const projectDescription = document.createElement("p");
//         projectDescription.className = "text-sm";
//         projectDescription.textContent = project.description;

//         // Append
//         card.appendChild(iconBox);
//         card.appendChild(projectName);
//         card.appendChild(projectCategory);
//         card.appendChild(projectDescription);

//         projectsContainer.appendChild(card);
//     });
// }

// // ✅ Initial render
// renderProjects(projectsData);

// // ✅ Live Search Filtering
// searchInput.addEventListener("input", function () {
//     const searchText = searchInput.value.toLowerCase();

//     const filteredProjects = projectsData.filter(function (project) {
//         return (
//             project.name.toLowerCase().includes(searchText) ||
//             project.category.toLowerCase().includes(searchText) ||
//             project.description.toLowerCase().includes(searchText)
//         );
//     });

//     renderProjects(filteredProjects);
// });

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