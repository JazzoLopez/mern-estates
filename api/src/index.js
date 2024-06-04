import app from "./app.js";
import db from "./db.js";
/* import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc"; */
const port = process.env.SERVER_PORT;
console.log("funciona bien")
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

app.get("/healthcheck", (req, res) => {
    res.send({ message: "its alive" }).status(200);
});