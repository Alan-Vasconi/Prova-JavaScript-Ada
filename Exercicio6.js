document.addEventListener("DOMContentLoaded", function() {

    let x = 0;
    let a = 0;
    let b = -5;
    if (a > 0) {
        if (b < 0) {
            x = x + 5;
        } else if (a > 5) {
            x = x + 4;
        } else {
            x = x + 3;
        }
        } else {
            x = x + 2;
        }
    console.log(x);

    // Resposta = 2, Alternativa: b.
    const divResultado6 = document.getElementById("Resultado6");
    divResultado6.textContent = `Resposta final Exercício 6: ${x}`;
});