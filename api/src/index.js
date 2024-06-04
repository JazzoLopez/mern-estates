import app from "./app.js";
import db from "./db.js";

const port = process.env.SERVER_PORT;
console.log("funciona bien")
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});