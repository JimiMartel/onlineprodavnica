const ukupnaCena = document.querySelector('#kolicina');
const sviArtikli = document.querySelector('.svi-artikli');

let arr = JSON.parse(localStorage.getItem("sviArtikli"));

if(arr !== null){
    for(let i = 0; i < arr.length; i++) {
        sviArtikli.innerHTML += `<p>${arr[i]}</p>`;
    }
    ukupnaCena.innerText = localStorage.getItem('ukupnaCena') + ' eura';
}



