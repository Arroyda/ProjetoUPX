function calcular() {
    // Obter valores dos inputs
    const D12 = parseFloat(document.getElementById('custo-disponibilidade-input').value) || 0;
    const D13 = parseFloat(document.getElementById('tarifa-tributacao-input').value) || 0;
    const D14 = parseFloat(document.getElementById('tarifa-distribuidora-input').value) || 0;
    const D8 = parseFloat(document.getElementById('potencia-sistema-proposto').value) || 0;
    const D15 = (parseFloat(document.getElementById('D15').value) || 0) / 100;

    console.log('Valores obtidos:', {D12, D13, D14, D8, D15});

    let totalSemSistema = 0;
    let somaConsumo = 0;
    let somaSimulacao = 0;
    let somaResultadosK = 0;
    let somaResultadosL = 0;
    let somaResultadosM = 0;
    let somaResultadosN = 0;

    for (let i = 18; i <= 29; i++) {
        // Obter valores
        const I = parseFloat(document.getElementById('I' + i)?.value) || 0;
        const J = parseFloat(document.getElementById('J' + i)?.value) || 0;
        
        console.log(`Linha ${i}:`, {I, J});

        // Acumular totais
        somaConsumo += I;
        somaSimulacao += J;

        // Cálculo do custo SEM SISTEMA (original)
        if (I <= D12) {
            totalSemSistema += D12 * D13;
        } else if (I <= 150) {
            totalSemSistema += I * D13;
        } else {
            totalSemSistema += (150 * D13) + ((I - 150) * D14);
        }

        // Cálculo de K (K = J * D8)
        const K = J * D8;
        somaResultadosK += K;
        
        const elementoK = document.getElementById('K' + i);
        if (elementoK) elementoK.textContent = K.toFixed(2);

        // Cálculo de L (L = I - (K * D15))
        const L = I - (K * D15);
        somaResultadosL += L;
        
        const elementoL = document.getElementById('L' + i);
        if (elementoL) elementoL.textContent = L.toFixed(2);

        // Cálculo de M (M = (1 - D15) * K)
        const M = (1 - D15) * K;
        somaResultadosM += M;
        
        const elementoM = document.getElementById('M' + i);
        if (elementoM) elementoM.textContent = M.toFixed(2);

        // Cálculo de N (VALOR FATURA)
        let N = 0;
        if (L < D12) {
            N = D12 * D13;
        } else if (L < 150) {
            N = L * D13;
        } else {
            N = (150 * D13) + ((L - 150) * D14);
        }
        somaResultadosN += N;
        
        const elementoN = document.getElementById('N' + i);
        if (elementoN) elementoN.textContent = N.toFixed(2);
    }

    // Função auxiliar para exibir resultados
    const exibirResultado = (id, valor) => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.textContent = valor.toFixed(2);
    };
    
    // NOVO CÁLCULO: =MÁXIMO(12*D12*D13;N30-(M30*((D13+D14)/2)))
    const parte1 = 12 * D12 * D13; // 12*D12*D13
    const mediaTarifas = (D13 + D14) / 2; // (D13+D14)/2
    const parte2 = somaResultadosN - (somaResultadosM * mediaTarifas); // N30-(M30*((D13+D14)/2))
    const resultadoFinal = Math.max(parte1, parte2); // MÁXIMO entre as duas partes
    const resultado3 = totalSemSistema - resultadoFinal;
    const resultado4 = (somaConsumo / 12) - D12;
    const resultado5 = (somaResultadosK / 12);

    // Exibir totais
    exibirResultado('resultado', totalSemSistema);
    exibirResultado('totalI', somaConsumo);
    exibirResultado('totalJ', somaSimulacao);
    exibirResultado('totalK', somaResultadosK);
    exibirResultado('totalL', somaResultadosL);
    exibirResultado('totalM', somaResultadosM);
    exibirResultado('totalN', somaResultadosN);

    
    // Exibir o resultado final (assumindo que existe um elemento com id 'resultado-final')
    exibirResultado('resultado2', resultadoFinal);
    exibirResultado('resultado3', resultado3);
    exibirResultado('resultado4', resultado4);
    exibirResultado('resultado5', resultado5);

    console.log('Valores cálculo final:', {parte1, parte2, resultadoFinal});
    console.log('Cálculo concluído');
}