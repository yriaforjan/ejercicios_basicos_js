// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    // Completar código:
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else if (numberOne < numberTwo) {
        console.log(numberTwo);
    } else {
        console.log("Ambos números son iguales");
    }
}