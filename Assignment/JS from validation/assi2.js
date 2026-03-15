const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addFAQ");
const faqContainer = document.getElementById("faqContainer");
const message = document.getElementById("message");

addBtn.addEventListener("click", function(){

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    if(question.length < 5){
        message.textContent = "Question must be at least 5 characters.";
        return;
    }

    if(answer.length < 15){
        message.textContent = "Answer must be at least 15 characters.";
        return;
    }

    message.textContent = "";

    const noFaq = document.getElementById("noFaq");
    if(noFaq){
        noFaq.remove();
    }
    const faqBox = document.createElement("div");
    faqBox.classList.add("faq-box");
    const qHeading = document.createElement("h3");
    qHeading.textContent = question;

    const ansPara = document.createElement("p");
    ansPara.textContent = answer;

    qHeading.insertAdjacentHTML("beforeend",
        '<span class="badge">FAQ</span>'
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){
        faqBox.remove();

        // Show message if no FAQs left
        if(faqContainer.children.length === 0){
            faqContainer.innerHTML = "<p id='noFaq'>No FAQs available</p>";
        }
    });

    faqBox.appendChild(qHeading);
    faqBox.appendChild(ansPara);
    faqBox.appendChild(deleteBtn);

    faqContainer.appendChild(faqBox);

    questionInput.value = "";
    answerInput.value = "";
});