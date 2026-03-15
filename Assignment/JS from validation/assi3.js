const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const feedbackInput = document.getElementById("feedback");

const submitBtn = document.getElementById("submitBtn");
const error = document.getElementById("error");

const container = document.getElementById("feedbackContainer");
const countDisplay = document.getElementById("count");

let count = 0;

submitBtn.addEventListener("click", function(){

let name = nameInput.value.trim();
let email = emailInput.value.trim();
let type = typeInput.value;
let feedback = feedbackInput.value.trim();

error.textContent = "";

// Validation

if(!name || !email || !type || !feedback){
error.textContent = "All fields are required";
return;
}

// Email validation
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){
error.textContent = "Enter valid email";
return;
}

if(feedback.length < 20){
error.textContent = "Feedback must be at least 20 characters";
return;
}

// Label logic
let label = "";

if(type === "Bug"){
label = "[Needs Review]";
}

else if(type === "Suggestion"){
label = "[Idea]";
}

else if(type === "Appreciation"){
label = "[Positive]";
}

// Create card
let card = document.createElement("div");

card.innerHTML = `
<h3></h3>
<p class="email"></p>
<p class="type"></p>
<p class="text"></p>
<button class="delete">Delete</button>
`;

// Safe insertion
card.querySelector("h3").textContent = name;
card.querySelector(".email").textContent = "Email: " + email;
card.querySelector(".type").textContent = "Type: " + type + " " + label;
card.querySelector(".text").textContent = feedback;

// Delete functionality
card.querySelector(".delete").addEventListener("click", function(){
card.remove();
count--;
countDisplay.textContent = count;
});

container.appendChild(card);

// Update counter
count++;
countDisplay.textContent = count;

// Clear inputs
nameInput.value = "";
emailInput.value = "";
typeInput.value = "";
feedbackInput.value = "";

});