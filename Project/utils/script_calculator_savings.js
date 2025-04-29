const regioes = {
    "norte": { insolacao: 5.0, tarifa: 1.00, custo_kwp: 5000 },
    "nordeste": { insolacao: 5.5, tarifa: 1.05, custo_kwp: 4800 },
    "centro-oeste": { insolacao: 5.5, tarifa: 1.00, custo_kwp: 4700 },
    "sudeste": { insolacao: 4.5, tarifa: 0.95, custo_kwp: 4500 },
    "sul": { insolacao: 4.0, tarifa: 1.10, custo_kwp: 4800 }
};

function calcular() {
    const regiao = document.getElementById("regiao").value;
    const valorConta = parseFloat(document.getElementById("valorConta").value);

    if (isNaN(valorConta) || valorConta <= 0) {
        alert("Informe um valor válido para a conta de luz.");
        return;
    }

    const { insolacao, tarifa, custo_kwp } = regioes[regiao];

    const consumo_kwh = valorConta / tarifa;
    const potencia_kwp = consumo_kwh / (insolacao * 30);
    const custo_sistema = potencia_kwp * custo_kwp;
    const economia_25_anos = valorConta * 12 * 25;
    const payback = custo_sistema / valorConta;

    document.getElementById("consumo_kwh").innerText = `${consumo_kwh.toFixed(1)} kWh/mês`;
    document.getElementById("potencia_kwp").innerText = `${potencia_kwp.toFixed(2)} kWp`;
    document.getElementById("custo_sistema").innerText = `R$ ${custo_sistema.toFixed(2)}`;
    document.getElementById("economia_25_anos").innerText = `R$ ${economia_25_anos.toFixed(2)}`;
    document.getElementById("payback").innerText = `${payback.toFixed(1)} anos`;

}

