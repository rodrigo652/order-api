const jwt = require("jsonwebtoken");

const SECRET = "segredo_super_api";

exports.login = (req, res) => {

  const { user, password } = req.body;

  if (user === "admin" && password === "123") {

    const token = jwt.sign(
      { user },
      SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  return res.status(401).json({
    message: "Usuário ou senha inválidos"
  });

};