let index = 0;

const bilder = document.querySelectorAll(".bilde");
const tekster = document.querySelectorAll(".bildetekst");

function visBildeOgTekst() {
bilder.forEach(b => b.style.display = "none");
tekster.forEach(t => t.style.display = "none");

bilder[index].style.display = "block";
tekster[index].style.display = "block";
}

document.getElementById("nesteKnapp").addEventListener("click", () =>
{
  index = (index + 1) % bilder.length;
  visBildeOgTekst();
});

document.getElementById("forrigeKnapp").addEventListener("click", () =>
{
  index = (index - 1 + bilder.length) % bilder.length;
  visBildeOgTekst();
});

window.onload = visBildeOgTekst;
