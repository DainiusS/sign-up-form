const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const button = document.querySelector("#submit");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector("#my-form");


form.addEventListener("submit", (e) => {
    if (password.value !== confirmPassword.value){
        password.classList.add("error");
        confirmPassword.classList.add("error");
        errorMessage.style.display = "block";
        e.preventDefault();
    }
});