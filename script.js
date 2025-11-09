// Cabeçalho:
// Nome: Carol Montenegro - Matrícula: 2526652
// Nome:                  - Matrícula:
// Nome:                  - Matrícula:
// Nome:                  - Matrícula:
// Nome:                  - Matrícula:

const numAlunos = 10;

const nomes = [ "Ana", "Bruno", "Carol", "Daniel", "Eduardo", "Fernanda", "Gabriel", "Helena", "Luan", "Matheus"];

const notas1 = [7.0, 5.5, 9.6, 8.7, 6.0, 4.3, 3.0, 7.0, 9.0, 8.3]; // Avaliação 1
const notas2 = [6.5, 4.5, 9.0, 7.0, 5.0, 3.1, 6.2, 7.5, 8.4, 7.5]; // Avaliação 2


let medias = [];

for(let i = 0; i < numAlunos; i++) {
    medias[i] = (notas1[i] + notas2[i]) /2;
}

let alunos = [];

for (let i = 0; i < numAlunos; i++) {
    alunos.push({nome:nomes[i], media:medias[i]})
}

// Ordenação crescente
for(let i = 0; i < numAlunos - 1; i++) {
    for(let j = 0; j < numAlunos - i - 1; j++) {
        if(alunos[j].media > alunos[j+1].media) {
            const temp = alunos[j];
            alunos[j] = alunos[j+1];
            alunos[j+1] = temp;
        }
    }
}

let aprovados = 0;
let reprovados = 0;

for(let i = 0; i < numAlunos; i++) {
    if(alunos[i].media >= 5.0) {
        aprovados++;
    } else {
        reprovados++;
    }
}

document.writeln('<u> Médias ordenadas (crescente):</u> <br>'); for (let i = 0; i< numAlunos; i++) {
    document.writeln(`${alunos[i].nome}: ${alunos[i].media.toFixed(1)}<br>`)
};
document.writeln("<br> <u>Quantidade de aprovados</u>" + aprovados + "<br>");
document.writeln("<br> <u>Quantidade de reprovados</u>" + reprovados + "<br>");