// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
function getInitials(nomeCompleto){
    const [nome, cognome]= nomeCompleto.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}. ` ;
}
// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."
// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
function createSlug(string){
     if (!string) {
        throw new Error("stringa non valida")
     }
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
// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.
function isPalindrome(string){
    const parolaInversa= string.split("").reverse().join('')
    return string===parolaInversa;
    }

    // 🏆 Snack 6
    // Creare un test che verifichi la seguente descrizione:
    // 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

module.exports = {getInitials,createSlug,average,isPalindrome}