const form = document.querySelector(".email-form")
const emailInput = document.querySelector(".email-input")
const errorIcon = document.querySelector(".error-icon")
const invalidError = document.querySelector(".invalid-email")
console.log(form)

const checkInput = (e) => {
  e.preventDefault();
  const input = form.email.value;
  const matches = input.match(/(.+)\@(.+)\.(.+)/)
  if(matches == null)
  {
    errorIcon.classList.add("error")
    // invalidError.classList.add("error")
    invalidError.innerText = "Invalid email"
    console.log("invalid email")
  }
  else
  {
    const [username, host, domain] = matches.slice(1);
    console.log("username:", username);
    console.log("host:", host);
    console.log("domain:", domain);
    errorIcon.classList.remove("error")
    // invalidError.classList.remove("error")
    invalidError.innerText = ""
  }
}

//arrow functions
// let arrow = (parameter) => 
// {
//   //do whatever
// }

// let test = param => param + 1
// console.log(test(1))

// function print(function_to_be_called) {  
//   console.log(function_to_be_called(4));
// }

// print(test)

// form.addEventListener("submit", checkInput)

// const numbers = [1, 2, 2, 3]
// console.log(numbers.filter(number => { return number + 1 == 2}))