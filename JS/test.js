 // tabs
 document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-links a');
    const tabs = document.querySelectorAll('.tab');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            tabLinks.forEach(link => link.parentElement.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            this.parentElement.classList.add('active');
            const targetTab = document.querySelector(this.getAttribute('href'));
            targetTab.classList.add('active');
        });
    });
});

// dark mode
document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Désactiver le dark mode';
    } else {
        this.textContent = 'Activer le dark mode';
    }
});

// formulaire
let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du form détécté !')
})

form.addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector('#email')

    if(email.value == ''){
        console.log("invalide")
    }
    else{
        email.classList.add('success')
    }
})

let pseudo = document.querySelector('#pseudo')
if(pseudo.value.length < 6){
    console.log("pseudo trop petit")
}

let password = document.querySelector('#password')
let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)"
)

if(password.value.length < 8 || passCheck.test(password.value) == false){
    console.log("mot de passe invalide")
}

let confirmPassword = document.querySelector('#confirmPassword')
if(confirmPassword.value != password.value){
    console.log("Les mots de passe ne correspondent pas")
} else{
    console.log("valide")
}