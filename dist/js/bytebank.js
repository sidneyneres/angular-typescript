var saldo = 5000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoForumulario = document.querySelector(".block-nova-transacao form");
elementoForumulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoForumulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação");
        return;
    }
    var inputTipoTransacao = elementoForumulario.querySelector("#tipoTransacao");
    var inputValor = elementoForumulario.querySelector("#valor");
    var inputData = elementoForumulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação é inválido!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoForumulario.reset();
});
