function ConverterParaDolar() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorNumerico = parseFloat(valor);

	var valorEmDolar = valorNumerico / 5;

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em dólar é $" + valorEmDolar.toFixed(2);
	elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterParaEuro() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorNumerico = parseFloat(valor);

	var valorEmEuro = valorNumerico / 5.5;

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em euro é £" + valorEmEuro.toFixed(2);
	elementoValorConvertido.innerHTML = valorConvertido;
}
