const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere estudar em uma faculdade pública ou privada?",
        alternativas: [
            {
                texto: "Publica",
                afirmacao: "Acesso mais democrático à educação e geralmente mais programas de incentivo. "
            },
            {
                texto: "Privada",
                afirmacao: "Maior infraestrutura e, muitas vezes, contato mais próximo com professores"
            }
        ]
    },
    {
        enunciado: "Você acha que a faculdade prepara bem os alunos para o mercado de trabalho?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A faculdade oferece uma base sólida de conhecimentos teóricos e práticos."
            },
            {
                texto: "Não",
                afirmacao: "Muitas vezes, o conteúdo acadêmico não corresponde diretamente às demandas do mercado."
            }
        ]
    },
    {
        enunciado: "Você prefere estudar em um campus grande ou em um campus pequeno?",
        alternativas: [
            {
                texto: "Grande",
                afirmacao: "Mais opções de cursos, atividades extracurriculares e um ambiente dinâmico."
            },
            {
                texto: "Pequeno",
                afirmacao: "Ambiente mais acolhedor e maior proximidade com professores e colegas."
            }
        ]
    },
    {
        enunciado: "Você considera a faculdade mais importante do que as experiências de estágio ou trabalho?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A graduação oferece uma formação acadêmica necessária para diversas profissões."
            },
            {
                texto: "Não.",
                afirmacao: "As experiências práticas, como estágio, são essenciais para o desenvolvimento profissional."
        ]
    },
    {
        enunciado: Você acha que as aulas presenciais são mais produtivas do que as online? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "O ambiente presencial facilita a interação direta e o aprendizado colaborativo."
            },
            {
                texto: "Não.",
                afirmacao: "As aulas online oferecem mais flexibilidade e são igualmente eficazes quando bem estruturadas. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();