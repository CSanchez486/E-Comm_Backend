-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- DATABASE TABLES
CREATE TABLE category (
    category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL,
)  

CREATE TABLE product (
    product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30),
    price DECIMAL (5,2),
    stock INT NOT NULL VALUES(DEFAULT(10)),
    category_id INT, 
    FOREIGN KEY (category)
    REFERENCES category (category_id) 
    ON DELETE CASCADE
)

CREATE TABLE tag (
    tag_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(30),
)

CREATE TABLE ProductTag (
    ptag_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    tag_id INT 
    FOREIGN KEY (product)
    REFERENCES product (product_id),
    FOREIGN KEY (tag)
    REFERENCES tag (tag_id)
    ON DELETE CASCADE
)

