document.addEventListener("DOMContentLoaded", function() {
    const resultado = !(true && false) || (false && true);
    console.log(resultado);

    // Resposta: true, Alternativa: A.
    
    const divResultado5 = document.getElementById("Resultado5");
    divResultado5.textContent = `Resposta final Exercício 5: ${resultado}`;

});