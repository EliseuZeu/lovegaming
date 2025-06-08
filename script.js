// Dados do jogo
const perguntas = [
    // Nível 1 – Fácil (perguntas 1 a 5)
    {
        enunciado: "Quem foi o primeiro casal criado por Deus?",
        alternativas: [
            "Abraão e Sara",
            "Adão e Eva",
            "Isaque e Rebeca",
            "Jacó e Raquel"
        ],
        resposta: "Adão e Eva",
        dificuldade: "Fácil",
        valor: 1000
    },
    {
        enunciado: "Onde Adão e Eva viveram antes de pecar?",
        alternativas: [
            "Torre de Babel",
            "Jardim do Éden",
            "Mar Vermelho",
            "Egito"
        ],
        resposta: "Jardim do Éden",
        dificuldade: "Fácil",
        valor: 2000
    },
    {
        enunciado: "O amor é citado como um dos frutos de...?",
        alternativas: [
            "Espírito",
            "Corpo",
            "Pecado",
            "Lei"
        ],
        resposta: "Espírito",
        dificuldade: "Fácil",
        valor: 3000
    },
    {
        enunciado: "Qual destes é um famoso versículo sobre o amor?",
        alternativas: [
            "Gênesis 1:1",
            "João 3:16",
            "1 Coríntios 13",
            "Salmo 23"
        ],
        resposta: "1 Coríntios 13",
        dificuldade: "Fácil",
        valor: 4000
    },
    {
        enunciado: "Qual é o maior mandamento segundo Jesus?",
        alternativas: [
            "Não matarás",
            "Amarás tua família",
            "Amarás o Senhor teu Deus",
            "Honrar pai e mãe"
        ],
        resposta: "Amarás o Senhor teu Deus",
        dificuldade: "Fácil",
        valor: 5000
    },

    // Nível 2 – Médio (perguntas 6 a 10)
    {
        enunciado: "Quem trabalhou 14 anos para casar com Raquel?",
        alternativas: [
            "Abraão",
            "Jacó",
            "Moisés",
            "Davi"
        ],
        resposta: "Jacó",
        dificuldade: "Médio",
        valor: 10000
    },
    {
        enunciado: "Qual casal orou por um filho e Deus respondeu com Samuel?",
        alternativas: [
            "Adão e Eva",
            "Ana e Elcana",
            "Isaque e Rebeca",
            "Maria e José"
        ],
        resposta: "Ana e Elcana",
        dificuldade: "Médio",
        valor: 20000
    },
    {
        enunciado: "Em qual evangelho está escrito: 'Deus é amor'?",
        alternativas: [
            "Mateus",
            "1 João",
            "Marcos",
            "Lucas"
        ],
        resposta: "1 João",
        dificuldade: "Médio",
        valor: 30000
    },
    {
        enunciado: "O que o amor não faz, segundo 1 Coríntios 13?",
        alternativas: [
            "Protege",
            "Se vangloria",
            "Crê",
            "Espera"
        ],
        resposta: "Se vangloria",
        dificuldade: "Médio",
        valor: 40000
    },
    {
        enunciado: "Quem disse “Por onde fores, irei”?",
        alternativas: [
            "Ester",
            "Rute",
            "Débora",
            "Maria"
        ],
        resposta: "Rute",
        dificuldade: "Médio",
        valor: 50000
    },

    // Nível 3 – Difícil (perguntas 11 a 15)
    {
        enunciado: "Quantas vezes o amor é mencionado em 1 Coríntios 13 (NVI)?",
        alternativas: [
            "7",
            "9",
            "10",
            "5"
        ],
        resposta: "9",
        dificuldade: "Difícil",
        valor: 100000
    },
    {
        enunciado: "Quem foi o esposo da profetisa Débora?",
        alternativas: [
            "Baraque",
            "Lapidote",
            "Nadabe",
            "Corá"
        ],
        resposta: "Lapidote",
        dificuldade: "Difícil",
        valor: 200000
    },
    {
        enunciado: "Qual o nome da esposa de Abraão?",
        alternativas: [
            "Raquel",
            "Rebeca",
            "Sara",
            "Ana"
        ],
        resposta: "Sara",
        dificuldade: "Difícil",
        valor: 300000
    },
    {
        enunciado: "Qual foi o sinal que Deus deu a Isaque para encontrar Rebeca?",
        alternativas: [
            "A mulher que oferecesse água a ele e aos camelos",
            "A que tivesse roupas brancas",
            "A que viesse com perfume",
            "A que estivesse sozinha no poço"
        ],
        resposta: "A mulher que oferecesse água a ele e aos camelos",
        dificuldade: "Difícil",
        valor: 400000
    },
    {
        enunciado: "Complete: “O amor tudo sofre, tudo crê, tudo espera...”",
        alternativas: [
            "Tudo vê",
            "Tudo suporta",
            "Tudo recebe",
            "Tudo prova"
        ],
        resposta: "Tudo suporta",
        dificuldade: "Difícil",
        valor: 500000
    }
];

// Valores dos prêmios
const premios = [
    { valor: "1 bombom", seguro: false },
    { valor: "2 bombons", seguro: false },
    { valor: "3 bombons", seguro: false },
    { valor: "1 mini barra de chocolate", seguro: false },
    { valor: "1 bombom + 1 mini barra", seguro: true },
    { valor: "2 mini barras de chocolate", seguro: false },
    { valor: "1 trufa", seguro: false },
    { valor: "1 trufa + 1 mini barra", seguro: false },
    { valor: "2 trufas", seguro: false },
    { valor: "1 pacote pequeno de M&Ms", seguro: true },
    { valor: "1 caixinha com 4 bombons sortidos", seguro: false },
    { valor: "1 barra média de chocolate", seguro: false },
    { valor: "1 coração de chocolate recheado", seguro: false },
    { valor: "1 pelúcia pequena + chocolate", seguro: false },
    { valor: "🎁 1 caixa de bombons especial!", seguro: true }
];

// Estado do jogo
let rodadaAtual = 0;
let perguntaAtual = null;
let respostaSelecionada = null;
let jogoAtivo = true;
let ajudasUsadas = {
    cartas: false,
    pular: false,
    plateia: false,
    eliminar: false
};

// Elementos do DOM
const elementos = {
    enunciado: document.getElementById('enunciado'),
    alternativas: document.querySelectorAll('.alternativa'),
    btnPerguntar: document.getElementById('btnPerguntar'),
    btnParar: document.getElementById('btnParar'),
    numeroRodada: document.getElementById('numeroRodada'),
    premioAtual: document.getElementById('premioAtual'),
    listaPremios: document.getElementById('listaPremios'),
    modal: document.getElementById('modal'),
    modalTitulo: document.getElementById('modalTitulo'),
    modalMensagem: document.getElementById('modalMensagem'),
    btnModalOk: document.getElementById('btnModalOk'),
    mensagem: document.getElementById('mensagem'),
    ajudas: {
        cartas: document.getElementById('ajuda-cartas'),
        pular: document.getElementById('ajuda-pular'),
        plateia: document.getElementById('ajuda-plateia'),
        eliminar: document.getElementById('ajuda-eliminar')
    }
};

// Funções do jogo
function iniciarJogo() {
    rodadaAtual = 0;
    jogoAtivo = true;
    respostaSelecionada = null;
    ajudasUsadas = {
        cartas: false,
        pular: false,
        plateia: false,
        eliminar: false
    };

    // Verificar localStorage
    const rodadaSalva = localStorage.getItem('rodada');
    if (rodadaSalva !== null) {
        rodadaAtual = parseInt(rodadaSalva);
        mostrarModal(
            'Bem-vindo de volta!',
            `Você estava na pergunta ${rodadaAtual + 1}. Vamos continuar?`,
            () => carregarPergunta()
        );
    } else {
        mostrarModal(
            'Bem-vindo ao Show do Javascriptão!',
            'Responda corretamente às 15 perguntas e ganhe 🎁 1 caixa de bombons especial !',
            () => carregarPergunta()
        );
    }

    criarListaPremios();
    atualizarInterface();
}

function criarListaPremios() {
    elementos.listaPremios.innerHTML = '';
    premios.forEach((premio, index) => {
        const div = document.createElement('div');
        div.className = 'premio-item';
        if (premio.seguro) div.classList.add('seguro');
        div.textContent = premio.valor;
        div.id = `premio-${index}`;
        elementos.listaPremios.appendChild(div);
    });
}

function carregarPergunta() {
    if (rodadaAtual >= perguntas.length) {
        vencerJogo();
        return;
    }

    perguntaAtual = perguntas[rodadaAtual];
    elementos.enunciado.textContent = perguntaAtual.enunciado;

    // Embaralhar alternativas
    const alternativasEmbaralhadas = [...perguntaAtual.alternativas].sort(() => Math.random() - 0.5);

    elementos.alternativas.forEach((btn, index) => {
        const texto = btn.querySelector('.texto-alternativa');
        texto.textContent = alternativasEmbaralhadas[index];
        btn.classList.remove('selecionada', 'correta', 'incorreta', 'eliminada');
        btn.disabled = false;
    });

    respostaSelecionada = null;
    elementos.btnPerguntar.disabled = true;
    atualizarInterface();

    // Salvar progresso
    localStorage.setItem('rodada', rodadaAtual);
}

function selecionarAlternativa(evento) {
    if (!jogoAtivo) return;

    // Remover seleção anterior
    elementos.alternativas.forEach(alt => alt.classList.remove('selecionada'));

    // Adicionar seleção atual
    const alternativa = evento.currentTarget;
    alternativa.classList.add('selecionada');
    respostaSelecionada = alternativa.querySelector('.texto-alternativa').textContent;

    elementos.btnPerguntar.disabled = false;
    elementos.mensagem.textContent = '';
}

function verificarResposta() {
    if (!respostaSelecionada || !jogoAtivo) return;

    jogoAtivo = false;
    elementos.btnPerguntar.disabled = true;

    const acertou = respostaSelecionada === perguntaAtual.resposta;

    // Mostrar resposta correta
    elementos.alternativas.forEach(alt => {
        const texto = alt.querySelector('.texto-alternativa').textContent;
        if (texto === perguntaAtual.resposta) {
            alt.classList.add('correta');
        } else if (alt.classList.contains('selecionada') && !acertou) {
            alt.classList.add('incorreta');
        }
    });

    setTimeout(() => {
        if (acertou) {
            acertarPergunta();
        } else {
            errarPergunta();
        }
    }, 2000);
}

function acertarPergunta() {
    const premio = premios[rodadaAtual].valor;
    rodadaAtual++;

    if (rodadaAtual >= perguntas.length) {
        vencerJogo();
    } else {
        mostrarModal(
            'Resposta Correta!',
            `Você acertou e garantiu ${premio}!`,
            () => {
                jogoAtivo = true;
                carregarPergunta();
            }
        );
    }
}

function errarPergunta() {
    const premioFinal = calcularPremioFinal();
    localStorage.removeItem('rodada');

    mostrarModal(
        'Resposta Incorreta!',
        `Que pena! A resposta correta era: ${perguntaAtual.resposta}\n\nVocê ganhou ${premioFinal}`,
        () => reiniciarJogo()
    );
}

function pararJogo() {
    if (!jogoAtivo || rodadaAtual === 0) return;

    const premio = premios[rodadaAtual - 1].valor;
    localStorage.removeItem('rodada');

    mostrarModal(
        'Parou!',
        `Você decidiu parar e levou ${premio}!`,
        () => reiniciarJogo()
    );
}

function vencerJogo() {
    localStorage.removeItem('rodada');
    jogoAtivo = false;

    mostrarModal(
        '🎉 PARABÉNS! 🎉',
        'Você acertou todas as perguntas e ganhou 🎁 1 caixa de bombons especial!!',
        () => reiniciarJogo()
    );
}

function calcularPremioFinal() {
    // Retorna o valor do último prêmio seguro alcançado
    let ultimoPremioSeguro = "nada";
    for (let i = 0; i < rodadaAtual; i++) {
        if (premios[i].seguro) {
            ultimoPremioSeguro = premios[i].valor;
        }
    }
    return ultimoPremioSeguro;
}

function reiniciarJogo() {
    rodadaAtual = 0;
    jogoAtivo = true;
    respostaSelecionada = null;
    carregarPergunta();
}

function atualizarInterface() {
    // Atualizar número da rodada
    elementos.numeroRodada.textContent = rodadaAtual + 1;

    // Atualizar prêmio atual
    if (rodadaAtual < premios.length) {
        elementos.premioAtual.textContent = premios[rodadaAtual].valor;
    }

    // Atualizar lista de prêmios
    document.querySelectorAll('.premio-item').forEach((item, index) => {
        item.classList.remove('ativo');
        if (index === rodadaAtual) {
            item.classList.add('ativo');
        }
    });
}

function mostrarModal(titulo, mensagem, callback) {
    elementos.modalTitulo.textContent = titulo;
    elementos.modalMensagem.textContent = mensagem;
    elementos.modal.classList.remove('hidden');

    elementos.btnModalOk.onclick = () => {
        elementos.modal.classList.add('hidden');
        if (callback) callback();
    };
}

// Event Listeners
elementos.alternativas.forEach(alt => {
    alt.addEventListener('click', selecionarAlternativa);
});

elementos.btnPerguntar.addEventListener('click', verificarResposta);
elementos.btnParar.addEventListener('click', pararJogo);

// Iniciar o jogo
iniciarJogo();