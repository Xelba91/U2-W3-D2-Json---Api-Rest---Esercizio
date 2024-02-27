const check = function () {
  if (localStorage.getItem("utente")) {
    txt = "Ciao, " + localStorage.getItem("utente");
  } else {
    txt = "No data";
  }
  document.querySelector(".title").innerHTML = txt;
};

const save = function () {
  let utente = document.getElementById("utente").value;
  localStorage.setItem("utente", utente);

  check();
  document.getElementById("utente").value = "";
};

const deleteData = function () {
  localStorage.removeItem("utente");

  check();
};

//contatore

let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

const conta = function () {
  i = i + 1;
  document.getElementById("timer").innerText = i + " secondi di sessione aperta";
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
