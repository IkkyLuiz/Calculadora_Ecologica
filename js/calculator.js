// Fatores de emissão de CO2 (kg CO2 por km)
const FACTORS = { 
    bicicleta: 0, 
    onibus: 0.089, 
    carro: 0.12, 
    caminhao: 0.96 
};

// Nomes dos transportes com emojis
const NAMES = { 
    bicicleta: '🚲 Bicicleta', 
    onibus: '🚌 Ônibus', 
    carro: '🚗 Carro', 
    caminhao: '🚚 Caminhão' 
};

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    const routeSelect = document.getElementById('route-select');
    const distInput = document.getElementById('distance-input');
    const btn = document.getElementById('btn-calculate');

    // Quando selecionar uma rota, preenche a distância
    routeSelect.addEventListener('change', function() {
        if(routeSelect.value) {
            distInput.value = routeSelect.value;
        }
    });

    // Evento de clique no botão calcular
    btn.addEventListener('click', function() {
        calcularEmissoes();
    });

    // Também permite calcular ao pressionar Enter no input
    distInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            calcularEmissoes();
        }
    });
});

function calcularEmissoes() {
    const distInput = document.getElementById('distance-input');
    const dist = parseFloat(distInput.value);
    
    // Validação da distância
    if(!dist || dist <= 0 || isNaN(dist)) {
        alert('Por favor, insira uma distância válida.');
        return;
    }

    // Mostra a seção de resultados
    document.getElementById('results').style.display = 'block';
    document.getElementById('dist-label').innerText = `Trajeto de ${dist} km`;
    
    const list = document.getElementById('comparison-list');
    list.innerHTML = '';

    // Calcula emissão do carro como referência
    const carEm = dist * FACTORS.carro;

    // Calcula para cada tipo de transporte
    Object.keys(FACTORS).forEach(function(k) {
        const em = dist * FACTORS[k];
        const pct = carEm > 0 ? (em / carEm) * 100 : 0;
        
        // Define cor baseada na porcentagem
        let color = 'var(--low)';
        if(pct > 100) {
            color = 'var(--v-high)';
        } else if(pct >= 75) {
            color = 'var(--high)';
        } else if(pct >= 25) {
            color = 'var(--medium)';
        }

        // Cria HTML da barra de transporte
        const barHTML = `
            <div class="transport-bar">
                <div class="bar-info">
                    <span>${NAMES[k]}</span>
                    <span>${em.toFixed(2)} kg CO₂</span>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width:${Math.min(pct, 100)}%; background:${color}"></div>
                </div>
            </div>`;
        
        list.innerHTML += barHTML;
    });

    // Calcula créditos de carbono
    const credits = carEm / 1000;
    document.getElementById('credit-count').innerText = credits.toFixed(3);
    document.getElementById('credit-cost').innerText = `R$ ${(credits * 100).toFixed(2)}`;
    
    // Rola suavemente até os resultados
    setTimeout(function() {
        const resultsElement = document.getElementById('results');
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}