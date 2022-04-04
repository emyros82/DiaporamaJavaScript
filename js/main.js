//////////////////////////////////////
// CONSTANTES & VARIABLES GLOBALES //
////////////////////////////////////

let slideIndex = 0;
montreSlide(slideIndex);

// ************************************************
//**************** */ Suivant / precedent Fleches et points  *****************
// ************************************************

// la fonction suivPred prend en parametre n qui est une valeur
// definie dans l'html -1 pour la fleche precedente et + 1 pour
// la fleche suivante  dans la fonction associée
// HTML
/* <a class="prev" onclick="suivPred(-1)">&#10094;</a>
      <a class="next" onclick="suivPred(1)">&#10095;</a> */

// dans le bloc d'instruction de la fonction suivPred (n) on rappelle
// la fonction montreSlide en ayant dans le parametre la formule
// (slideIndex += n) donc la variable déclarée tout en haut let slideIndex = 0;
// que à chaque clique sur les fleches droit ou gauche prendra la valeur
// dernierement calculée et soir le +1 (suivante) soit -1 (precedente)

function suivPred(number) {
  montreSlide((slideIndex += number));
}

// la function slideActuelleDot(n)  est associée aux points dans l'html
// elle a un parametre n qui varie selon le onclick="slideActuelleDot(1)"
// si il est sur la premiere balise span, onclick="slideActuelleDot(2) sur la deuxième
// balise etc etc . Elle a dans le bloc d'instruction la fonction montreSlide qui prend
// en parametre le calcul (slideIndex = n) donc le n associé dans l'appel de la fonction
// present dans l'html sera egalé à celle de la variable slideIndex => (slideIndex = n)

function slideActuelleDot(number) {
  montreSlide((slideIndex = number));
}

function montreSlide(number) {
  //on récupere dans la variable slides toutes les classes .slides
  let slides = document.querySelectorAll(".slides");
  //on récupere dans la variable dots toutes les classes .dot
  let dots = document.querySelectorAll(".dot");

  //   si n est superieure de slides.lenght renvoi la slideIndexe = 1 => donc le carousel
  //   recommence de la premiere image
  if (number > slides.length) {
    slideIndex = 1;
  }

  //   si n est inferieur à 1 renvoie à la
  //   derniere image correspondante donc à slides.length
  if (number < 1) {
    slideIndex = slides.length;
  }

  //   on boucle sur le tableau correspondant à la variable slides où on a
  //   stocké toute les images de notre carousel.
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //   on boucle sur le tableau correspondant à la variable dots où on a
  //   stocké toute les dot en bas de notre carousel.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // La propriété display définit ou renvoie le type d'affichage de l'élément.
  // Les éléments en HTML sont principalement des éléments "inline" ou "block" :
  //  Un élément inline a un contenu flottant sur ses côtés gauche et droit.
  //  Un élément en bloc remplit toute la ligne, et rien ne peut être affiché
  //  sur son côté gauche ou droit.  La propriété display permet également à l'auteur
  // d'afficher ou de masquer un élément. Elle est similaire à la propriété visibility.
  // Toutefois, si vous définissez display:none, l'élément entier est masqué, tandis
  //  que visibility:hidden signifie que le contenu de l'élément est invisible, mais
  //  que l'élément conserve sa position et sa taille d'origine.
  // Conseil : si un élément est un élément de type bloc, son type d'affichage peut
  //  également être modifié à l'aide de la propriété float.

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

btn = document.querySelector("button");
btn.addEventListener("click", play);

const myTimeout = setTimeout(play, 2000);

function play() {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //   setTimeout(play, 2000);
  btn.innerHTML = "Pause";
}
btn.addEventListener("click", pause);
function pause() {
  clearTimeout(play);
}

/////////////////////
// CODE PRINCIPAL //
//////////////////
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM entièrement chargé et analysé");
});
