const form = document.querySelector(".input-container")
const emailInput = document.querySelector(".email-input")
const errorIcon = document.querySelector(".error-icon")
const invalidError = document.querySelector(".invalid-email")
console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = emailInput.value;
  const matches = input.match(/(.+)\@(.+)\.(.+)/)
  if(matches == null)
  {
    //handle
    errorIcon.classList.add("error")
    invalidError.classList.add("error")
    console.log("invalid email")
  }
  else
  {
    const [username, host, domain] = matches.slice(1);
    console.log("username:", username);
    console.log("host:", host);
    console.log("domain:", domain);
    errorIcon.classList.remove("error")
    invalidError.classList.remove("error")
  }
})

// const input = "user@example.com"; // Replace this with your input string



// int num_conversions = scanf("%[^@]@%[^.].%[^\n]", username, host, domain);
// if(num_conversions == 3) {
//   return INVALID_EMAIL;
// }