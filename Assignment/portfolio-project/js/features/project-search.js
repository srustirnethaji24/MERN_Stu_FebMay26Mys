const searchInput = document.getElementById("project-search");

// ✅ Main render function
function renderProjects(data) {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.log("Project container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    data.forEach(function (project) {
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        // Icon
        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-500 rounded-full";

        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = project.shortLabel;

        iconBox.appendChild(iconText);

        // Project Name
        const projectName = document.createElement("h2");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        // Category
        const projectCategory = document.createElement("p");
        projectCategory.className = "text-sm text-gray-500";
        projectCategory.textContent = project.category;

        // Description
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm";
        projectDescription.textContent = project.description;

        // Append
        card.appendChild(iconBox);
        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);

        projectsContainer.appendChild(card);
    });
}

// ✅ Initial render
renderProjects(projectsData);

// ✅ Live Search Filtering
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    const filteredProjects = projectsData.filter(function (project) {
        return (
            project.name.toLowerCase().includes(searchText) ||
            project.category.toLowerCase().includes(searchText) ||
            project.description.toLowerCase().includes(searchText)
        );
    });

    renderProjects(filteredProjects);
});