const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const inspectBtn = document.getElementById("inspectBtn");
const terms = document.getElementById("terms");
const country = document.getElementById("countrty");

inspectBtn.addEventListener("click",function(){
    console.log("Form: ",studentForm);
    console.log("Name: ",nameInput.value);
    console.log("Name: ",emailInput.value);

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    console.log("Gender: ",selectedGender? selectedGender.value:"Not Selected");

    console.log("Accepted terms: ",terms.checked);
    console.log("Country: ",country.value);
});