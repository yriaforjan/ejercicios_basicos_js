/* Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).
Recuerda usar la función .includes() para comprobar la palabra.
Puedes usar este array: */

const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

for (let i=0; i<toys.length; i++) {
    let toy = toys[i];
    let toyName = toy.name;
    if (toyName.includes("gato")) {
        toys.splice(i, 1);
    }
}

console.log(toys);
//MAL
//no me borra {id: 40, name: 'FurReal Friends gato interactivo'} por estar a continuación de otro elemento que contiene "gato" pero si lo cambio de posición sí me lo borra WTFFFFFF