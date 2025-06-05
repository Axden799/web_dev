import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";

dotenv.config(); // apply the config from the .env file using dotenv that contains server and database information

const app = express();
const PORT = process.env.PORT || 3000; // in case the env file cannot be loaded, default to using port 5001

app.use(express.json()); // extract data from database as JSON to parse in our app
app.use(cors()); //  Middleware to enable Cross-Origin Resource Sharing. This is essential for your frontend (running on a different port/origin) to communicate with your backend.
app.use(helmet()) // helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")) // log the requests to the console GET /test 200 1.955 ms - 27 and GET /favicon.ico 404 0.711 ms - 150
// if we hard refresh CTRL + SHIFT + R, we will get response 200 (OK). If we simply refresh, we will get response 304, (OK from cache)

app.use("/api/products", productRoutes); // the route /api/products will use the routes from the productRoutes.js file

async function initDB() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS products(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
    
    console.log("Database initialized succesfully!");
    } catch (error) {
        console.log("Error initDB", error);
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
})