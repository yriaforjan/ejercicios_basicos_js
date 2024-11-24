//Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
//Usa la función .includes de javascript.

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

//bucle específico para este array
/* for (let i=0; i<products.length; i++){
    if (products[i].includes("Camiseta")) {
        console.log(products[i]);
    }
} */

//función para poder buscar una palabra en cualquier array
function includes (list, word) {
    for (const element of list){
        if (element.includes(word)) {
            console.log(element);
        }
    }
}
includes(products, "Camiseta");