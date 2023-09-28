document.addEventListener("DOMContentLoaded", function() {

    let array = [];
    let n = 4;
    for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
        array.push(j);
    }
    }
    let resposta_final = array;
    // Resposta: 1121231234 Alternativa E
    const divResultado4 = document.getElementById("Resultado4");
    divResultado4.textContent = `Resposta final Exercício 4: ${resposta_final}`;
});