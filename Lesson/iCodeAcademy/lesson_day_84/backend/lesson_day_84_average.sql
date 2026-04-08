-- average, sum, min, max aggregate functions

CREATE TABLE weather_data (
  date DATE,
  city TEXT,
  temperature NUMERIC
);

INSERT INTO weather_data (date, city, temperature) VALUES
  ('2024-03-01', 'New York', 5.5),
  ('2024-03-01', 'Los Angeles', 22.0),
  ('2024-03-01', 'Chicago', 2.0),
  ('2024-03-02', 'New York', 7.0),
  ('2024-03-02', 'Los Angeles', 23.5),
  ('2024-03-02', 'Chicago', 3.5),
  ('2024-03-03', 'New York', 6.5),
  ('2024-03-03', 'Los Angeles', 21.5),
  ('2024-03-03', 'Chicago', 1.0);

select * from weather_data;

-- нийт хотуудын average temperature олох
SELECT avg(temperature) AS avg_temperature
FROM weather_data;

-- хотуудын дундаж температур хэд байсан бэ
SELECT city, avg(temperature) AS avg_temperature
FROM weather_data
GROUP BY city
ORDER BY avg_temperature DESC;

-- 
SELECT
  city,
  avg(temperature) as avg_temperature,
  avg(temperature) FILTER (WHERE date >= '2024-03-03') AS avg_temperature_since_3rd
FROM weather_data
GROUP BY city;

-- temperature rounding
SELECT round(avg(temperature), 2) AS avg_temperature
FROM weather_data;

-- MAX aggregate function
-- хамгийн их захиалга
SELECT max(order_amount) AS largest_order
FROM orders;
-- MIN aggregate function
SELECT min(order_amount) AS lowest_order
FROM orders;
-- хамгийн сүүлчийн захиалсан өдөр
SELECT max(order_date) AS latest_order_date
FROM orders;
-- хэн гэдэг хэрэглэгч хамгийн их захиалга хийсэн бэ
SELECT customer_id, max(order_amount) AS largest_order
FROM orders
GROUP BY customer_id
ORDER BY largest_order DESC
LIMIT 5;
-- 4 сарынхыг хамгийн их захиалгатай харьцуулж харуулах
SELECT
    max(order_amount) AS max_overall,
    max(order_amount) FILTER (WHERE EXTRACT(MONTH FROM order_date) = 4) AS max_in_april
FROM orders;

-- SUM aggregate function

-- WITH 
WITH sales(product_id, quantity, price) AS (
  VALUES
    (1, 10, 100.0),
    (2, 5, 50.0),
    (1, 5, 100.0),
    (3, 3, 75.0),
    (2, 2, 50.0)
)
SELECT sum(quantity * price) AS total_revenue
FROM sales;

-- payment of dvd_rental table-аас бүх payment-ийг орлогы харуулах
select sum(amount) from payment;



