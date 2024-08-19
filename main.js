document.addEventListener('DOMContentLoaded', () => {
    const biscoitoBtn = document.getElementById('biscoitoBtn');
    const mensagem = document.getElementById('mensagem');

    const mensagens = [
        "Hoje é seu dia de sorte!",
        "Você terá uma surpresa agradável.",
        "Algo maravilhoso está para acontecer.",
        "Acredite em si mesmo e tudo será possível.",
        "Grandes coisas estão por vir.",
        "Acredite que você pode, e você já estará no meio do caminho.",
        "Cada dia é uma nova chance para ser melhor.",
        "A positividade é a chave que abre portas impossíveis.",
        "Pensar positivo é transformar obstáculos em oportunidades.",
        "A gratidão transforma o que temos em suficiente.",
        "A felicidade é uma escolha que faço todos os dias.",
        "Minha energia positiva atrai oportunidades incríveis.",
        "Eu sou capaz de superar qualquer desafio.",
        "Acredite em dias felizes, acredite que hoje pode ser um dia feliz.",
        "A esperança é a chama que nos mantém acesos durante as noites mais escuras e nos guia para um futuro melhor."
    ];

    biscoitoBtn.addEventListener('click', abrirBiscoito);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            abrirBiscoito();
        }
    });

    function abrirBiscoito() {
        const indice = Math.floor(Math.random() * mensagens.length);
        mensagem.textContent = mensagens[indice];
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const mensagem = localStorage.getItem('mensagem');
    document.getElementById('mensagem').textContent = mensagem;
});