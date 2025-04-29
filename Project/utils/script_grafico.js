const irradianciaPorRegiao = {
    norte: 5.6,
    nordeste: 5.8,
    'centro-oeste': 5.4,
    sudeste: 5.2,
    sul: 4.9
};

const eficienciaPorTipo = {
    residencial: 0.75,
    comercial: 0.72,
    industrial: 0.68
};

const custoPorWatt = {
    residencial: 6.0,
    comercial: 5.5,
    industrial: 5.0
};

document.getElementById('solarForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter valores do formulário
    const consumoMensal = parseFloat(document.getElementById('consumo').value);
    const tarifa = parseFloat(document.getElementById('tarifa').value);
    const regiao = document.getElementById('regiao').value;
    const tipo = document.getElementById('tipo').value;

    // Validar entradas
    if (isNaN(consumoMensal) || consumoMensal <= 0) {
        alert('Por favor, insira um consumo mensal válido');
        return;
    }

    if (isNaN(tarifa) || tarifa <= 0) {
        alert('Por favor, insira uma tarifa válida');
        return;
    }

    // Calcular sistema solar
    const irradiancia = irradianciaPorRegiao[regiao];
    const eficiencia = eficienciaPorTipo[tipo];
    const custoWatt = custoPorWatt[tipo];

    const consumoAnual = consumoMensal * 12;
    const potenciaSistema = (consumoAnual / (irradiancia * 365 * eficiencia)).toFixed(2);
    const investimento = (potenciaSistema * custoWatt * 1000).toFixed(2);
    const economiaMensal = (consumoMensal * tarifa * 0.95).toFixed(2); // 5% de taxa mínima
    const payback = (investimento / (economiaMensal * 12)).toFixed(2);
    const co2Reduzido = (consumoMensal * 12 * 0.08).toFixed(0);

    // Atualizar interface
    document.getElementById('economia').textContent = `R$ ${economiaMensal}`;
    document.getElementById('payback').textContent = `${payback} anos`;
    document.getElementById('co2').textContent = `${co2Reduzido} kg/ano`;

    // Detalhes técnicos
    const equipmentResults = document.getElementById('equipment-results');
    equipmentResults.innerHTML = `
      <div class="equipment-result">
        <strong>Potência do Sistema:</strong> ${potenciaSistema} kWp
      </div>
      <div class="equipment-result">
        <strong>Investimento Estimado:</strong> R$ ${investimento}
      </div>
      <div class="equipment-result">
        <strong>Área Necessária:</strong> ${(potenciaSistema * 7).toFixed(2)} m²
      </div>
    `;

    // Atualizar gráfico
    updateChart(consumoMensal * tarifa, economiaMensal);
});

let myChart = null;
function updateChart(gastoAtual, economiaSolar) {
    const ctx = document.getElementById('chart').getContext('2d');

    if (myChart) myChart.destroy();

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Energia Convencional', 'Energia Solar'],
            datasets: [{
                label: 'Custo Mensal (R$)',
                data: [gastoAtual, gastoAtual - economiaSolar],
                backgroundColor: ['#e74c3c', '#18bc9c']
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return 'R$ ' + tooltipItem.yLabel.toLocaleString('pt-BR');
                    }
                }
            },
            legend: { display: false }
        }
    });
}