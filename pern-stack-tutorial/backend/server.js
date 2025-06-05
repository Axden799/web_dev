import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(express.json()); // extract data from database as JSON to parse in our app
app.use(cors()); //  Middleware to enable Cross-Origin Resource Sharing. This is essential for your frontend (running on a different port/origin) to communicate with your backend.
app.use(helmet()) // helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")) // log the requests to the console GET /test 200 1.955 ms - 27 and GET /favicon.ico 404 0.711 ms - 150
// if we hard refresh CTRL + SHIFT + R, we will get response 200 (OK). If we simply refresh, we will get response 304, (OK from cache)


app.get("/test", (req, res) => {
    console.log(res.getHeaders());
    res.send("Hello, from the test route!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});