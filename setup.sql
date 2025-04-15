DROP TABLE IF EXISTS inventory;

-- Create the inventory table
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    quantity INTEGER NOT NULL CHECK (quantity >= 0)
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
