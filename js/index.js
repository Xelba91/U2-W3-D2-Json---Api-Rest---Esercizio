// Questa funzione è stata immessa anche in window.onload quindi si eseguira appena si apre la pagina
// ha il compito di verificare se in memoria cè l'oggetto "utente", se è true  il div nell html con classe .title verra riempito con un innerHTML con il valore in memoria di "utente", in caso cotrario restituira "No data"
const check = function () {
  if (localStorage.getItem("utente")) {
    txt = "Bentornato, " + localStorage.getItem("utente");
  } else {
    txt = "No data";
  }
  document.querySelector(".title").innerHTML = txt;
};

//questa funzione si attivera cliccando ill pulsante id="log_btn", grazie a  onclick="save()  immesso direttamente sull'html"
const save = function () {
  // seleziono il valore del campo input
  let utente = document.getElementById("utente").value;
  //cambio il valore di utente situato in localStorage con il valore dell'input immesso
  localStorage.setItem("utente", utente);

  check();
  //resetto il campo
  document.getElementById("utente").value = "";
};

const deleteData = function () {
  const hasConfirmed = confirm("Sei sicuro di voler resettare la memoria?");
  localStorage.removeItem("utente");
  if (hasConfirmed) {
    // 1) resettare il campo dal suo contenuto✅
    utente.value = "";
    // 2) resettare il dato nello storage✅
    localStorage.removeItem(utente);
    // 3) chiedere conferma prima di farlo✅
  }

  check();
};

// const reset = () => {
//   const hasConfirmed = confirm("Sei sicuro di voler resettare la memoria?");
//   if (hasConfirmed) {
//     // 1) resettare il campo dal suo contenuto✅
//     utente.value = "";
//     // 2) resettare il dato nello storage✅
//     localStorage.removeItem(utente);
//     // 3) chiedere conferma prima di farlo✅
//   }
// };

//contatore

// inizializzo una variabile "i" utilizzando sessionStorage per ottenere il valore corrente del contatore (se presente) e inizializzarlo a 0 se non è stato ancora impostato.
let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

// La funzione conta() incrementa la variabile i di 1 ogni secondo e aggiorna il contenuto dell'elemento HTML con l'id "timer" per mostrare il tempo trascorso. Inoltre, aggiorna anche il valore di i nel sessionStorage in modo che il contatore possa essere mantenuto anche dopo il ricaricamento della pagina.

const conta = function () {
  i = i + 1;
  document.getElementById("timer").innerText = "Sessione aperta da: " + i + " secondi";
  sessionStorage.setItem("count", i);
};

setInterval(conta, 1000);

const formNode = document.querySelector("form");
formNode.onsubmit = function (e) {
  e.preventDefault();
  // previene il comportamento di base dei form, che implica anche un ri-caricamento della pagina
  console.log("form inviato");
};
// dopo un preventDefault possimo lavorare con i dati e la manipolazione del DOM

window.onload = check;
