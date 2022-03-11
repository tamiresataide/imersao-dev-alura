var numeroSecreto = (Math.random() * 11).toFixed(0);
console.log(numeroSecreto);

function Chutar() {
  var numeroDoChute = document.getElementById("valor").value;
  var chute = parseInt(numeroDoChute);
  var elementoResultado = document.getElementById("resultado");
  var resultado;

  if (chute == numeroSecreto) {
    resultado = "OBA! Você acertou! O número escolhido era o " + numeroSecreto;
    elementoResultado.innerHTML = resultado;
  } else if (chute > 10 || chute < 0) {
    resultado =
      "Opa, parece que esse chute não é válido... digite um número de 1 a 10";
    elementoResultado.innerHTML = resultado;
  } else if (chute < numeroSecreto) {
    resultado = "Que pena.... que tal tentar um número maior?";
    elementoResultado.innerHTML = resultado;
  } else if (chute > numeroSecreto) {
    resultado = "Hmmm.... talvez a resposta seja um número menor?";
    elementoResultado.innerHTML = resultado;
  }
}
