// Uma factory retorna um novo objeto

module.exports = () => {
    return {
        valor: 1,
        ins(){
            this.valor++
        }
    }
}