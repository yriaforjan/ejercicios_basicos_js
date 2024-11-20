// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
function greaterNumber(numberOne , numberTwo) {
    // Completar código:
    if (numberOne > numberTwo) {
        return numberOne;
    } else if (numberOne < numberTwo) {
        return numberTwo;
    } else {
        return "Ambos números son iguales";
    }
}