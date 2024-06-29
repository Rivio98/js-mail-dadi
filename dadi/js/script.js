// creiamo un button
const button = document.getElementById('tira');

//creo un generatore di numeri random da 1 a 6 compreso per giocatore ed computer
button.addEventListener('click', function () {
    //generatore random user
    let user = Math.round(Math.random() * 5) + 1;
    console.log(user)
})