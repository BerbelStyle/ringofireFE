/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create product
app.post("/products", async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const newProduct = await pool.query(
      "INSERT INTO products (product_name, product_description, product_image) VALUES ($1, $2, $3) RETURNING *",
      [name, description, image]
    );
    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a product
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query(
      "SELECT * FROM products WHERE product_id = $1",
      [id]
    );
    res.json(product.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a product
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;
    const updateProduct = await pool.query(
      "UPDATE products SET product_name = $1, product_description = $2, product_image = $3 WHERE product_id = $4",
      [name, description, image, id]
    );
    res.json("Product updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query(
      "DELETE FROM products WHERE product_id = $1",
      [id]
    );
    res.json("Product deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
