document.addEventListener("DOMContentLoaded", function() {
function encontrarNumerosSolitarios(sequencia) {
    const novos_numeros = [];

    for (let contador = 0; contador < sequencia.length; contador++) {
        const numeroAtual = sequencia[contador];
        let repetido = false;
        for (let contador2 = 0; contador2 < sequencia.length; contador2++) {
            if (contador !== contador2 && numeroAtual === sequencia[contador2]) {
                repetido = true;
                break;
            }
        }
        if (!repetido) {
            novos_numeros.push(numeroAtual);
        }
    }
    return novos_numeros;
    }
    const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
    const atualizado = encontrarNumerosSolitarios(numeros);
    console.log(atualizado);
    let resposta_final = atualizado;

    // Resposta: 15,22.

    const divResultado3 = document.getElementById("Resultado3");
    divResultado3.textContent = `Resposta final Exercício 3: ${resposta_final}`;
});