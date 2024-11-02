// mapeamento do meu paragrafo que vai receber o inner.HTML
const result = document.querySelector(".result")

// mapeamento dos resultados: "me" e "adversary"
const myScore = document.getElementById("me") //id do span
const adversaryScore = document.getElementById("adversary") //id do span

// variáveis do span = 0, para poder atualizar o placar a cada rodada
let humanScoreNumber = 0 
let machineScoreNumber = 0


// Primeiro passo: Me certificar de que o button está respondendo ao click:

const playHuman = (humanChoice) => {
    //criei a função "playStart" e linkei com os buttons do html, cada um com sua propriedade "pedra, papel e tesoura"
    /* 
    console.log(humanChoice) // "humanChoice" são as informações que vem da função linkada no html, conteúdo que está entre os "()"
    // é o "humanChoice" que mostra qual foi a minha escolha: pedra, papel ou tesoura

    console.log(playMachine()) // return do adversário 
    */

    // Reset do result - para a cada rodada tirar da tela o resultado anterior
    result.innerHTML = "Resultado da rodada: ";

    // Exibe o loading
    document.getElementById("loading").classList.remove("hidden");


    playResult(humanChoice, playMachine()) // a função "playResult" vai receber os resultados do Humano e do adversário
}


// Segundo passo: Encontrar o resultado da escolha do adversário e entregalo junto a função "playStart"

const playMachine = () => { // essa função não recebe nenhuma informação, apenas retorna o resultado do adversário
    const choices = ['pedra', 'papel', 'tesoura'] // pedra = 0 / papel = 1 / tesoura = 2
    const randomNumber = Math.floor(Math.random() * 3)
    // o math.random vai me da um número entre 0 e 1, mas eu quero entre 0 e 2, então vou multiplica-lo por 3
    // o Math.floor, após a multiplicação vai arrendondar qualquer número para baixo: 0 - 0.9 = 0 / 1 - 1.9 = 1 / 2 - 2.9 = 2

    return choices[randomNumber]
    // o return do "playMachine" vai retornar o resultado do adversário (0, 1 ou 2) mas em forma de pedra, papel ou tesoura
}


// Terceiro passo: Verificar quem ganhou, Eu ou o meu adversário
const playResult = (human, machine) => { // Esta função receberá os valor do Humano e do Adversário

    console.log("Humano: " + human + " / " + "Adversário: " + machine) // resultado


    setTimeout(() => {
        // Oculta o loading
        document.getElementById("loading").classList.add("hidden");

        if (human === machine) {
            result.innerHTML = "Resultado da rodada: <span style = 'margin-left: 10px;'><i>Deu empate!</i> &#x1F610</span>";
        } else if (
            (human === "papel" && machine === "pedra") || 
            (human === pedra && machine === "tesoura") || 
            (human === "tesoura" && machine === "papel") 
        ) {
            result.innerHTML = "Resultado da rodada: <span style = 'margin-left: 10px;'><i>Você ganhou!</i> &#x1F601</span>";

            humanScoreNumber++ // se eu ganhar eu somo o valor atual + 1, e adiciono de volto ao span
            myScore.innerHTML = humanScoreNumber // aqui estou adicionando de volta no meu span
        } else {
            result.innerHTML = "Resultado da rodada: <span style='margin-left: 10px;'><i>Você perdeu!</i> &#x1F614</span>";

            machineScoreNumber++ // se eu perder eu somo o valor atual do meu adversário + 1, e adiciono de volto ao span
            adversaryScore.innerHTML = machineScoreNumber // aqui estou adicionando de volta no span do meu adversário
        }
    }, 500); //500ms = 0.5 segundos de atraso 
}