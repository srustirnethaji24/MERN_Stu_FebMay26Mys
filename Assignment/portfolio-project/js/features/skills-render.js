function renderSkills(data = skills) {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(skill => {
        const card = document.createElement("div");

        card.className =
            "p-6 bg-white rounded shadow text-center font-bold";

        card.textContent = skill.name;

        container.appendChild(card);
    });
}