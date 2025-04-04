const {getInitials,createSlug,average,isPalindrome,findPostById}=require("./snack.js")

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
// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
const posts=[
    {id:1,title:"introduzione a Javascript",slug:"introduzione-a-javascript"},
    {id:2,title:"introduzione a react",slug:"introduzione-a-react"},
]

test(`la funzione findPostById restituisce il post corretto dato l’array di post e l’id`,()=>{
    expect(findPostById(posts,2)).toEqual({id:2,title:"introduzione a react",slug:"introduzione-a-react"})

})