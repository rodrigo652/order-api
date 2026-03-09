const express = require("express");
const swaggerUi = require("swagger-ui-express");

const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(express.json());

app.use(authRoutes);
app.use(orderRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorMiddleware);

module.exports = app;