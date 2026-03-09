const orderRepository = require("../repository/orderRepository");

exports.createOrder = async (dto) => {
    const order = {
      orderId: dto.numeroPedido,
      value: dto.valorTotal,
      creationDate: new Date(dto.dataCriacao)
    }

    await orderRepository.createOrder(order);

    for (const item of dto.items) {
        await orderRepository.createItem(order.orderId, {
            productId: item.idItem,
            quantity: item.quantidadeItem,
            price: item.valorItem
        });
    }
};

exports.getOrder = async (orderId) => {
  const order = await orderRepository.findOrderById(orderId);

  if (order.length === 0) {
    throw new Error("Pedido não encontrado");
  }

  const items = await orderRepository.findItemsByOrder(orderId);

  return {
    order: order[0],
    items
  };
};

exports.listOrders = async () => {
  return await orderRepository.listOrders();
};

exports.updateOrder = async (orderId, value) => {
  await orderRepository.updateOrder(orderId, value);
};

exports.deleteOrder = async (orderId) => {
  await orderRepository.deleteItems(orderId);
  await orderRepository.deleteOrder(orderId);
};