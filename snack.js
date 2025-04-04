// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
function getInitials(nomeCompleto){
    const [nome, cognome]= nomeCompleto.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}. ` ;
}
module.exports = {getInitials,}