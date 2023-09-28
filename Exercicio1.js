document.addEventListener("DOMContentLoaded", function() {
function verHorarioReal(horario_inicial) {
    let hora = 0;
    let minutos = 0;
    let segundos = 0;
    let periodo_horario = "";
    
    for (let i = 0; i < horario_inicial.length; i++) {
        const caractere = horario_inicial[i];
    
        if (caractere >= '0' && caractere <= '9') {
            const valorNumerico = parseInt(caractere);

            if (i < 2) {
                hora = hora * 10 + valorNumerico;
            } else if (i >= 3 && i < 5) {
                minutos = minutos * 10 + valorNumerico;
            } else if (i >= 6 && i < 8) {
                segundos = segundos * 10 + valorNumerico;
            }
        } else if (caractere === 'P' || caractere === 'A') {
            periodo_horario = horario_inicial.substring(i, i + 2);
            break;
        }
    }
    
    if (periodo_horario === "PM" && hora !== 12) {
        hora += 12;
    } else if (periodo_horario === "AM" && hora === 12) {
        hora = 0;
    }
    
    return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
    }

    const horario_inicial = "06:15:25PM";
    console.log(verHorarioReal(horario_inicial));
    let resposta_final = verHorarioReal(horario_inicial);

    // Resposta: 18:15:25.

    const divResultado1 = document.getElementById("Resultado1");
    divResultado1.textContent = `Resposta final Exercício 1: ${resposta_final}`;

});