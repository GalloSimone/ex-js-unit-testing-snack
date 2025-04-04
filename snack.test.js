const {getInitials,createSlug,average,isPalindrome}=require("./snack.js")

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
//👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test('La funzione getInitials restituisce le iniziali di un nome completo ', () => { 
    expect(getInitials("Mario Rossi")).toBe("M.R. ");
 })

//  🏆 Snack 2
//  Creare un test che verifichi la seguente descrizione:
//  👉 "La funzione createSlug restituisce una stringa in lowercase."


test ("La funzione createSlug restituisce una stringa in lowercase",()=>{
    expect(createSlug("BOOLEAN")).toBe("boolean")
})
// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."


test("La funzione average calcola la media aritmetica di un array di numeri",()=>{
    expect(average([10,20])).toBe(15)
})
// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
test("La funzione createSlug sostituisce gli spazi con -.",()=>{
    expect(createSlug('questo è un test')).toBe("questo-è-un-test")
})
// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."


test("La funzione isPalindrome verifica se una stringa è un palindromo.",()=>{
    expect(isPalindrome("gatto")).toBeFalsy();
    expect(isPalindrome("osso")).toBeTruthy();

})
// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.",()=>{
    expect(()=> createSlug("")).toThrow("stringa non valida")
})