/* Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(words) {
  // Completar código:
  for (const word of words) {
    words.sort((a,b)=>b.length-a.length);
  }
  return words[0];
}

console.log(findLongestWord(avengers));