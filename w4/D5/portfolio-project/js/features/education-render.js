const container = document.getElementById("education-list");

educationsData.forEach(edu => {
  const card = document.createElement("div");
  card.className = "education-card";

  card.innerHTML = `
    <div class="education-header">
      <span>${edu.board}</span>
      <span>${edu.year}</span>
    </div>
    <div class="education-course">${edu.course}</div>
    <div class="education-college">${edu.college}</div>
    <div class="education-percentage">${edu.percentage}</div>
  `;

  container.appendChild(card);
});