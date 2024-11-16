function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração aleatória
    document.querySelector('.falling-snow').appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000); // Remove após 5 segundos
}

function createSnowball() {
    const snowball = document.createElement('div');
    snowball.classList.add('snowball');
    snowball.style.left = Math.random() * 100 + 'vw';
    snowball.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração aleatória
    document.querySelector('.falling-snow').appendChild(snowball);
    setTimeout(() => snowball.remove(), 5000); // Remove após 5 segundos
}

setInterval(createSnowflake, 300);
setInterval(createSnowball, 300); // Gera bolinhas de neve



// Função para enviar comentário
function submitComment(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const stars = document.querySelectorAll('.star.selected').length;
    const comment = document.getElementById('comment').value;
    
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong><br>${'★'.repeat(stars)}<br>${comment}`;
    
    document.getElementById('commentsList').appendChild(commentDiv);
    document.getElementById('commentForm').reset();
}

// Função para selecionar estrelas
function selectStar(star) {
    selectedStars = star;
    document.querySelectorAll('.star-rating .star').forEach((s, i) => {
        s.style.color = i < selectedStars ? '#b22222' : '#ccc'; // Vermelho para as estrelas selecionadas
    });
}
function submitComment(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong>`;

    const starsDiv = document.createElement('div');
    for (let i = 1; i <= selectedStars; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.style.color = '#b22222'; // Cor vermelha para estrelas exibidas
        star.innerHTML = '★';
        starsDiv.appendChild(star);
    }
    commentDiv.appendChild(starsDiv);

    const textComment = document.createElement('p');
    textComment.textContent = comment;
    commentDiv.appendChild(textComment);

    document.getElementById('commentsList').appendChild(commentDiv);
    document.getElementById('commentForm').reset();
    selectedStars = 0; // Reseta a seleção de estrelas após o envio
}

//comparação

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".comparison-item");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200); // Anima cada item com um atraso
    });
});

function toggleExample(exampleId) {
    const example = document.getElementById(exampleId);
    
    // Se o exemplo estiver oculto, mostramos com animação
    if (!example.classList.contains('show')) {
        example.style.maxHeight = example.scrollHeight + "px"; // Define a altura máxima para a animação
        example.style.opacity = 1; // Torna visível
        example.classList.add('show'); // Adiciona a classe 'show'
    } else {
        example.style.maxHeight = 0; // Define altura máxima como 0 para ocultar
        example.style.opacity = 0; // Torna invisível
        example.classList.remove('show'); // Remove a classe 'show'
    }
}

//atual
const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function showQuote(index) {
    quotes.forEach((quote, i) => {
        quote.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentQuote = (currentQuote > 0) ? currentQuote - 1 : quotes.length - 1;
    showQuote(currentQuote);
});

document.getElementById('next').addEventListener('click', () => {
    currentQuote = (currentQuote < quotes.length - 1) ? currentQuote + 1 : 0;
    showQuote(currentQuote);
});

// Exibe a primeira citação
showQuote(currentQuote);

 