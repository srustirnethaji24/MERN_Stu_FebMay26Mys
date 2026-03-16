function renderProjects(){

    const projectContainer = document.getElementById("projects-container");

    if(!projectContainer){
        console.log("Projects Container Not Found");
        return;
    }

    projectContainer.innerHTML = "";

    projectsData.forEach(function(project){

        // Create outer card
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-yellow-800 rounded-4xl shadow-lg";

        // Project Name
        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        // Project Category
        const projectCategory = document.createElement("p");
        projectCategory.className = "text-sm font-semibold";
        projectCategory.textContent = project.category;

        // Project technologies
        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm";
        projectTechnologies.textContent = project.technologies;

        // Project Status
        const projectStatus = document.createElement("p");
        projectStatus.className = "text-sm";
        projectStatus.textContent = project.status;

        // Project LiveDemo
        const projectLiveDemo = document.createElement("p");
        projectLiveDemo.className = "text-sm";
        projectLiveDemo.textContent = project.liveDemo;

        // Project Github
        const projectGithub = document.createElement("p");
        projectGithub.className = "text-sm";
        projectGithub.textContent = project.github;

        // Project Description
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm";
        projectDescription.textContent = project.description;


        // Add elements to card
        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectLiveDemo);
        card.appendChild(projectGithub);

        // Add card to container
        projectContainer.appendChild(card);

    });

    console.log("Projects render successfully")
}