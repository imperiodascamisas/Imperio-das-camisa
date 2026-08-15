function calcularFrete() {

    const cep = document.getElementById("cep").value
        .replace(/\D/g, "");

    if (cep.length !== 8) {
        alert("Digite um CEP válido.");
        return;
    }

    // Frete demonstrativo
    const valorFrete = 15.00;
    const prazo = 5;

    document.getElementById("resultadoFrete").style.display = "block";

    document.getElementById("resultadoFrete").innerHTML = `
        🚚 <strong>Frete: R$ ${valorFrete.toFixed(2).replace(".", ",")}</strong>
        <br><br>
        📦 Prazo estimado: ${prazo} dias úteis
    `;

    atualizarTotalComFrete(valorFrete);
}


function atualizarTotalComFrete(frete) {

    let subtotal = 0;

    carrinho.forEach(function(produto) {

        subtotal += produto.preco * produto.quantidade;

    });

    const total = subtotal + frete;

    document.getElementById("totalCheckout").innerText =
        "R$ " + total.toFixed(2).replace(".", ",");
}
