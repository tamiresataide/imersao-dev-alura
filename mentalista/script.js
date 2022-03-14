var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var numeroDoChute = parseInt(document.getElementById("valor").value);
  var chute = parseInt(numeroDoChute);
  var elementoResultado = document.getElementById("resultado");


  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "OBA! Você acertou! O número escolhido era o " + numeroSecreto;
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Opa, parece que esse chute não é válido... digite um número de 1 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Que pena.... que tal tentar um número maior";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Hmmm.... talvez a resposta seja um número menor?";
  }
}