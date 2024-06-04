import app from "./app.js";
import db from "./db.js";

const port = process.env.SERVER_PORT;
console.log("funciona bien")
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

app.get("/healthcheck", (req, res) => {
    res.send({ message: "its alive" }).status(200);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });