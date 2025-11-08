// Cabeçalho:
// Nome: Carol Montenegro - Matrícula: 2526652
// Nome:                  - Matrícula:
// Nome:                  - Matrícula:
// Nome:                  - Matrícula:
// Nome:                  - Matrícula:

var numAlunos = 10;

var notas1 = [7.0, 5.5, 9.6, 8.7, 6.0, 4.3, 3.0, 7.0, 9.0, 8.3]; // Avaliação 1
var notas2 = [6.5, 4.5, 9.0, 7.0, 5.0, 3.1, 6.2, 7.5, 8.4, 7.5]; // Avaliação 2

var medias = [];

for(var i = 0; i < numAlunos; i++) {
    medias[i] = (notas1[i] + notas2[i]) /2;
}


for(var i = 0; i < numAlunos; i++) {
    for(var j = 0; j < numAlunos - i - 1; j++) {
        if(medias[j] > medias[j+1]) {
            var temp = medias[j];
            medias[j] = medias[j+1];
            medias[j+1] = temp;
        }
    }
}

var aprovados = 0;
var reprovados = 0;
for(var i = 0; i < numAlunos; i++) {
    if(medias[i] > 5.0) {
        aprovados++;
    } else {
        reprovados++;
    }
}

document.writeln('<u> Médias ordenadas (crescente):</u>' + medias.join(',') + '<br>');
document.writeln('<u> Quantidade de aprovados:</u>' + aprovados+ '<br>');
document.writeln('<u> Quantidade de reprovados:</u>' + reprovados+ '<br>')
