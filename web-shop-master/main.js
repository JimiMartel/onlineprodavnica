const ukupno = document.getElementById("ukupno");
const cene = document.querySelectorAll(".cena");
const kolicine = document.querySelectorAll("td:nth-child(4) input");
const nazivi = document.querySelectorAll("td:nth-child(2)");
const korpaKolicina = document.querySelector('.kolica-kolicina');

localStorage.removeItem('sviArtikli');

function azuriraj() {
  let korpa = 0;
  let total = 0;
  for (let i = 0; i < cene.length; i++) {
    const cena = Number(cene[i].innerText);
    const kolicina = Number(kolicine[i].value);
    if (kolicina) {
      total += cena * kolicina;
      korpa += kolicina;
    } 
  }

  ukupno.innerText = total;
  korpaKolicina.innerText = korpa;
  localStorage.setItem('ukupnaCena', total);

}

for (let i = 0; i < cene.length; i++) {
  kolicine[i].addEventListener("input", azuriraj);
}

function listaSvihArtikala() {
  let listaArtikala = [];
  for(let i = 0; i < nazivi.length; i++) {
    const kolicina2 = Number(kolicine[i].value);
    if(kolicina2) {
      listaArtikala.push(`${nazivi[i].innerText} x ${kolicine[i].value}`);
      localStorage.setItem('sviArtikli', JSON.stringify(listaArtikala));
    }
  }
}

