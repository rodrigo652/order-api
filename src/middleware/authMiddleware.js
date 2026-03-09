const jwt = require("jsonwebtoken");

const SECRET = "segredo_super_api";

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não fornecido"
    });
  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Token inválido"
    });

  }

};