// Modularization
const express = require("express");
const dbConfig = require("./Config/dbconfig");
const env = require("dotenv").config();
const productRoute = require("./Routes/productRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", productRoute);

const port = process.env.PORT || 5800;
dbConfig();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
