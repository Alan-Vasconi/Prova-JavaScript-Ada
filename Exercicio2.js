document.addEventListener("DOMContentLoaded", function() {
    function teste_maiusculo(caractere) {
        return caractere === caractere.toLowerCase();
    }

    function frase_final(string_inicial) {
        let contador = 1;

        for (let i = 0; i < string_inicial.length; i++) {
            const caractere = string_inicial[i];
            let resposta = teste_maiusculo(caractere);
            if (!resposta && (i === string_inicial.length - 1 || string_inicial[i+1] !== string_inicial[i+1].toUpperCase())) {
                contador++; 
            }
        }
        return contador;
    }

    const frase_inicial = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
    console.log(frase_final(frase_inicial));
    let resposta_final = frase_final(frase_inicial);

    // Resposta: 14, pois O não deve ser considerado como uma palavra, por apenas ser uma letra.

    const divResultado2 = document.getElementById("Resultado2");
    divResultado2.textContent = `Resposta final Exercício 2: ${resposta_final}`;
});
