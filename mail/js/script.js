//creo l' array con dentro varie email
const autorizzati = ["rivaldogjoni@email.com", "pippobaudo@email.com", "fattigliaffarituoi@gmail.com", "michiamiilpresidente@gmail.com", "maeleiilpresidente@gamail.com", "scalainforza@gmail.com", "nimortaccitua@gmail.com"];

//creo un button, lo recupero dal dom ed aggiungo un evento al click
const button = document.getElementById("access")

button.addEventListener('click', function () {
    let email = document.getElementById('email').value.toLowerCase()
})
