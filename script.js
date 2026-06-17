const API_URL = "https://script.google.com/macros/s/AKfycbyvbLz9oi3BFn3jMx-25wGHntHmJEqzMHaOrGqr2LNWlUX3kFzlQWeijRwF3EAgs2fD/exec";

/* =========================
   CONTADOR EN TIEMPO REAL
========================= */

async function actualizarContador(){
  try{
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("contador").textContent = data.inscritos;
  } catch(e){
    console.log("Error contador:", e);
  }
}

actualizarContador();
setInterval(actualizarContador, 5000);

/* =========================
   EFECTO DE ENVÍO
========================= */

function enviarExito(){

  // sonido
  const sound = document.getElementById("successSound");
  if(sound){
    sound.play();
  }

  // mensaje
  const msg = document.getElementById("successMessage");
  msg.style.display = "block";

  setTimeout(()=>{
    msg.style.display = "none";
  }, 3000);
}
