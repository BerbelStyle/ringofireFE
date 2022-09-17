CREATE DATABASE ringoffire;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50),
    product_description VARCHAR(255),
    product_image text
);

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL,
    userRole VARCHAR(20) NOT NULL
);