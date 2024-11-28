/* For...of: Usa un bucle forof para recorrer todos los destinos del array.
Imprime en un console.log cada uno de sus valores. */

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

//creo una funcion para poder aplicarla a cualquier array:
function printArray (array) {
    for (const element of array) {
        console.log(element);
    }
}

printArray(placesToTravel);