let turno = 0;
const tablero = [];


const btnPulsado = (e, posi) => {
    // Cada vez que se pulse el botón se cambirá el turno y se deberá de pintar de otro color
    turno++;
    const btn = e.target;
    const color = turno % 2 == 0 ? 'red' : 'green';
    btn.style.backgroundColor = color;
    // alert(posi);
    tablero[posi] = color
    //  alert(haGanado());
    if (haGanado()) {
        alert("Enhorabuena jugador de color " + color);

        if (confirm("¿Quieres reiniciar el juego?")) {
            reiniciarJuego();
        }
    }

}

// Determinamos quien a ganado

const haGanado = () => {
    // Aqui se evalua las 3 primeras casillas y que el tablero esté definido
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;                                                       // Y si el 3 existe
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;                                                      // Y si el 6 existe
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[7]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) { // Ahora las verticales
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {  // Ahora con las diagonales
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    }
    // Si no se cumple 
    return false;
}

let btn1 = document.querySelectorAll("button").forEach((obj, indice) => {
    obj.addEventListener('click', (e) => btnPulsado(e, indice));
});
/*querySelector, devolveria un array normal y corriente
querySelectorAll, devuelve un array de elementos*/


const reiniciarJuego = () => {
    turno = 0;

    for (let i = 0; i < tablero.length; i++) {
        tablero[i] = null;
    }
    document.querySelectorAll("button").forEach(btn => {
        btn.style.backgroundColor = '';
    });
}