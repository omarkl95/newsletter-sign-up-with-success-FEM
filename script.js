const newsLetterForm = document.getElementById('form');
const erroMessage = newsLetterForm.querySelector('span');
const inputField = newsLetterForm.querySelector('input');
function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}
const rules = {
    email: 'required|email',
};

const screenOne = document.getElementById('screen-one');
const screenTwo = document.getElementById('screen-two');

const emailPlaceholder = document.getElementById('email-placeholder');

newsLetterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let data = Object.fromEntries(new FormData(e.target));
    let email = newsLetterForm.elements["email"].value
    console.log(validEmail(email))
    // let validation = new Validator(data, rules);

    if (validEmail(email)) {
        erroMessage.classList.add('hide');
        inputField.classList.remove('exist-error');
        // change the email value in the DOM
        emailPlaceholder.innerText = data.email;
        // Hide first screen and show second screen
        screenOne.classList.add('hide-screen-one');
        screenTwo.classList.add('show-screen-two');

    } else {

        erroMessage.classList.remove('hide');
        inputField.classList.add('exist-error');
        emailPlaceholder.innerText = 'ash@loremcompany.com';
        form.elements["email"].value = "";
    }
});

const dismissButton = document.getElementById('dismiss-button');

dismissButton.addEventListener('click', function () {
    screenTwo.classList.remove('show-screen-two');
    screenOne.classList.remove('hide-screen-one');
});
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function validEmail(e) {
//     var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
//     return String(e).search (filter) != -1;
// }

// const form = document.getElementById('form');
// form.addEventListener('submit', (event) => {
    
//     let email = form.elements["email-address"].value

//     if (validEmail(email)) {
//         console.log("YES");
//         document.getElementById('main-signup').classList.add("hidden");
//         document.getElementById('thank-you').classList.remove("hidden");
//         document.getElementById('email-property').textContent = email;
//         event.preventDefault();
//         form.elements["email-address"].value = "";

//     } else {
//         document.getElementById('email-address').classList.add("error");
//         document.getElementById('valid-required').classList.remove("hidden");
//         event.preventDefault();
//     }

//     // Custom validation and submission logic here
// });


// document.getElementById("dismiss-button").onclick = function() {
//     document.getElementById('main-signup').classList.remove("hidden");
//     document.getElementById('thank-you').classList.add("hidden");
//     document.getElementById('email-address').classList.remove("error");
//     document.getElementById('valid-required').classList.add("hidden");
// };