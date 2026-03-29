const filtersContainer = document.getElementById("skills-filters");

// Get unique categories
function getCategories(data) {
    const categories = ["All"];
    data.forEach(skill => {
        if (!categories.includes(skill.category)) {
            categories.push(skill.category);
        }
    });
    return categories;
}

// Render filter buttons
function renderFilters(data) {
    const categories = getCategories(data);

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.className = "px-4 py-2 bg-gray-200 rounded hover:bg-green-400";

        btn.addEventListener("click", () => {
            const filtered =
                category === "All"
                    ? data
                    : data.filter(skill => skill.category === category);

            renderSkills(filtered);
        });

        filtersContainer.appendChild(btn);
    });
}