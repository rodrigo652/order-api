const orderRepository = require("../repository/orderRepository");

exports.createOrder = async (data) => {
    const { numeroPedido, valorTotal, dataCriacao, items } = data;

    await orderRepository.createOrder({
      numeroPedido,
      valorTotal,
      dataCriacao
    });

    for (const item of items) {
      await orderRepository.createItem(numeroPedido, item);
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