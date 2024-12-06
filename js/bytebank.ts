let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}

const elementoForumulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoForumulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if(!elementoForumulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação");
        return;
    }


    const inputTipoTransacao = elementoForumulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoForumulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoForumulario.querySelector("#data") as HTMLInputElement;
    
    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == "Depósito"){
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= valor;
    } else {
        alert("Tipo de transação é inválido!");
        return;
    }

    elementoSaldo.textContent = saldo.toString();
    

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor : valor,
        data: data
    }

    console.log(novaTransacao);

    elementoForumulario.reset();

});