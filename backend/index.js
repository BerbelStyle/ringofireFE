/** @format */

const express = require("express");
const multer = require("multer");

const app = express();
const cors = require("cors");
const pool = require("./db");
const fs = require("fs");
const path = require("path");
const e = require("express");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/images/products");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create product
app.post("/products", upload.single("productImage"), async (req, res) => {
  console.log(req.file);
  try {
    const newProduct = await pool.query(
      "INSERT INTO products (product_image) VALUES ($1) RETURNING *",
      [req.file.filename]
    );
    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  return false;
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
app.delete("/products/:id&:image", async (req, res) => {
  try {
    const { id, image } = req.params;
    const deleteProduct = await pool.query(
      "DELETE FROM products WHERE product_id = $1",
      [id]
    );
    fs.unlinkSync("../frontend/public/images/products/" + image);
    res.json("Product deleted");
  } catch (err) {
    console.error(err.message);
  }
});

//create a userSELECT * FROM users WHERE username = $1
app.post("/register", async (req, res) => {
  try {
    const { username, password, userrole } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (username, userpassword, userrole) VALUES($1, $2, $3) RETURNING *",
      [username, password, userrole]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND userpassword = $2",
      [username, password]
    );
    console.log(
      res.json({
        username: res.username,
      })
    );
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});

app.get("/uploadImage");
