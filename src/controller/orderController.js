const orderService = require("../service/orderService");

exports.createOrder = async (req, res, next) => {
  try {
    await orderService.createOrder(req.body);
    res.status(201).json({ message: "Pedido criado com sucesso" });
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await orderService.getOrder(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.listOrders = async (req, res, next) => {
  try {
    const orders = await orderService.listOrders();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    await orderService.updateOrder(req.params.id, req.body.valorTotal);
    res.status(200).json({ message: "Pedido atualizado" });
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    await orderService.deleteOrder(req.params.id);
    res.status(200).json({ message: "Pedido removido" });
  } catch (error) {
    next(error);
  }
};