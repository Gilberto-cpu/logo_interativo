const container = document.querySelector('.container');
const paw = document.getElementById('paw')
// Função para gerar pegadas ao longo do caminho
function createPegadas() {
    for (let i = 0; i < 5; i++) {
        const pegada = document.createElement('div');
        pegada.classList.add('pegada');
        // Posiciona as pegadas ao longo do caminho da pata
        pegada.style.left = `${40 - i * 12}%`; /* Ajuste para caminhar da direita para a esquerda */
        pegada.style.animationDelay = `${i * 0.50}s`; // Atraso progressivo
        container.appendChild(pegada);
        setTimeout(() => {
            pegada.style.opacity = '0'; // Faz a pegada desaparecer
        }, 1000 + i * 100); // Aumenta o tempo conforme a pegada vai aparecendo

        setTimeout(()=>{
              paw.style.display = 'inline'
        },3000)
      
    }
}


// Caso queira adicionar texto dinamicamente, use o seguinte script
//const textElement = document.querySelector('.text');
const textContent = "Respeito por seus animais";
let index = 0;
const textElement = document.getElementById('text-element'); // Supondo que você tenha um elemento com esse id

function typeText() {
    if (index < textContent.length) {
        textElement.textContent += textContent.charAt(index); // Adiciona o caractere atual ao conteúdo do elemento
        index++;
        setTimeout(typeText, 100); // Ajuste a velocidade de digitação aqui
    }
}





function iniciarAnimacao() {
    const beija = document.getElementById('beija');
  
    // Inicia a animação de voo
    beija.style.animation = "voar 4s ease-in-out forwards ";

    // Quando a animação de voo terminar, começa a bater asas e o som de piar é ativado
    beija.addEventListener('animationend', () => {
        // Inicia a animação de bater asas
        beija.style.animation = "bater-asas 0.2s infinite";
        
       
    
            // Inicia a animação de bater asas após a animação de voo
            beija.style.animation = "bater-asas 0.2s infinite";
       
    

    });
    
}





// Gera pegadas quando a página carregar
window.onload = function() {
    createPegadas();     // Cria pegadas ao carregar a página
    iniciarAnimacao();  
    typeText()
    // Inicia a animação do beija-flor
};

