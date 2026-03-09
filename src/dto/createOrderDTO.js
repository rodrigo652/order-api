class CreateOrderDTO {
    constructor(data) {
        this.numeroPedido = data.numeroPedido;
        this.valorTotal = data.valorTotal;
        this.dataCriacao = data.dataCriacao;
        this.items = data.items;

        if (!data.numeroPedido) {
            throw new Error("numeroPedido é obrigatório");
        }
    }
}

module.exports = CreateOrderDTO;