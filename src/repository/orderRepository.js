const db = require("../config/db");

exports.createOrder = async (order) => {
    await db.query(
        "INSERT INTO `order` (orderId, value, creationDate) VALUES (?, ?, ?)",
        [order.orderId, order.value, order.creationDate]
    );
};

exports.createItem = async (orderId, item) => {
  await db.query(
    "INSERT INTO items (orderId, productId, quantity, price) VALUES (?, ?, ?, ?)",
    [orderId, item.idItem, item.quantidadeItem, item.valorItem]
  );
};

exports.findOrderById = async (orderId) => {
  const [rows] = await db.query(
    "SELECT * FROM `order` WHERE orderId = ?",
    [orderId]
  );
  return rows;
};

exports.findItemsByOrder = async (orderId) => {
  const [rows] = await db.query(
    "SELECT * FROM items WHERE orderId = ?",
    [orderId]
  );
  return rows;
};

exports.listOrders = async () => {
  const [rows] = await db.query("SELECT * FROM `order`");
  return rows;
};

exports.updateOrder = async (orderId, value) => {
  await db.query(
    "UPDATE `order` SET value = ? WHERE orderId = ?",
    [value, orderId]
  );
};

exports.deleteItems = async (orderId) => {
  await db.query("DELETE FROM items WHERE orderId = ?", [orderId]);
};

exports.deleteOrder = async (orderId) => {
  await db.query("DELETE FROM `order` WHERE orderId = ?", [orderId]);
};