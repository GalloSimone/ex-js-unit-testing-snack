// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
function getInitials(nomeCompleto){
    const [nome, cognome]= nomeCompleto.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}. ` ;
}
// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."
function createSlug(string){
     return string.toLowerCase().replaceAll(" ","-")
     
}
// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."
function average(numeri){
    let somma= 0;
    numeri.forEach(numero => {
    somma += numero;    
    });
 return somma / numeri.length;

}
// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."


module.exports = {getInitials,createSlug,average}