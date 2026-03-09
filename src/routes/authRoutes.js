const express = require("express");
const router = express.Router();

const authController = require("../auth/authController");

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realizar login e gerar token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: 123
 *     responses:
 *       200:
 *         description: Token gerado com sucesso
 *       401:
 *         description: Usuário ou senha inválidos
 */
router.post("/login", authController.login);

module.exports = router;