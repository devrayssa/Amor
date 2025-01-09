document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  });
});

function mostrarSurpresa(resposta) {
  const respostaElemento = document.getElementById("resposta");
  if (resposta === "sim") {
    respostaElemento.style.display = "block";
  } else {
    respostaElemento.style.display = "none";
  }
}
