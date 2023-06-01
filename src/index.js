import express from "express"
import paymentRoutes from "./routes/payment.routes.js"
import { PORT } from "./routes/confij.js"
import path from "path"
import {fileURLToPath} from "url"
import {dirname} from "path"

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

app.use(express.json())     // Este es el formato que uso para que me devuelva los datos en formato Json

app.use (paymentRoutes)

app.use(express.static(path.join(__dirname, "/")))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.use(express.static(path.resolve("/src/public")))

app.listen (PORT)

console.log("server on port:", PORT)