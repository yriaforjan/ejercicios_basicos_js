/* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
  // Completar
  const noDuplicates = [];
  for (const element of list) {
    if (!noDuplicates.includes(element)) {
      noDuplicates.push(element);
    }
  }
  return noDuplicates;
}

// Con el método moderno Set(), más sencillo:
/* function removeDuplicates(list) {
  // Completar
  const noDuplicates = new Set(list);
  return noDuplicates;
} */
  
console.log(removeDuplicates(duplicates));