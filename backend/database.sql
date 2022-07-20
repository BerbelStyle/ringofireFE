CREATE DATABASE ringoffire;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50),
    product_description VARCHAR(255),
    product_image text
);