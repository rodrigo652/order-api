const orderMapper = (dto) => {
  return {
    orderId: dto.numeroPedido,
    value: dto.valorTotal,
    creationDate: new Date(dto.dataCriacao),
    items: dto.items.map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
};

module.exports = orderMapper;