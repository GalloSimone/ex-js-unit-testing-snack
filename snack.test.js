const {getInitials,}=require("./snack.js")

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
//👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test('La funzione getInitials restituisce le iniziali di un nome completo ', () => { 
    expect(getInitials("Mario Rossi")).toBe("M.R. ");
 })

