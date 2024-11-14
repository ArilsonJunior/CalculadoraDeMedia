const prompt = require("prompt-sync")();

const bancoDeNotas = [];

let sair = false;

function calcularMedia() {
    const notaTotal = Object.values(bancoDeNotas).reduce((acumuladorDaSoma, ValorASerSomado) => acumuladorDaSoma + ValorASerSomado, 0)

    const quantidadeDeNotas = Object.values(bancoDeNotas).length;

    const media = notaTotal / quantidadeDeNotas;

    if (media >= 7) {
        console.log(`Nota final ${media.toFixed(1)}, APROVADO\n`)
    }
    else {
        console.log(`nota final ${media.toFixed(1)}, REPROVADO\n`)
    }
}

function adicionarNota(notaUsuario) {


    if (notaUsuario >= 0 && notaUsuario <= 10) {

        bancoDeNotas.push(notaUsuario);

        console.log(`\nnota ${notaUsuario}, adicionada`)
    }
    else {
        console.log("Nota invalida!")
    }
}



do {
    let escolha;

    console.log("\n---CALCULADORA DE NOTAS---");
    console.log("\n[1] - Inserir nota \n[2] - Calcular média e Sair \n");

    escolha = parseFloat(prompt())

    switch (escolha) {
        case 1:
            console.clear();
            let notaUsuario = parseFloat(prompt("Digite a nota desejada:"))

            adicionarNota(notaUsuario);
            
            break;

        case 2:

            for (let item in bancoDeNotas) {
                console.log(`n° ${item}: nota ${bancoDeNotas[item]}`)
            }

            console.log("\nCalculando média...\n");

            calcularMedia();

            sair = true;

            break;

        default:
            console.log("Opção invalida!")
            break;
    }

} while (!sair)