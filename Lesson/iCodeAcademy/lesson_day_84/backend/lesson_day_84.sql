-- lesson day 84

-- sql aggregate functions

-- COUNT - тоолох
select count(*) from payment;

-- ex01 
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    product_id INTEGER,
    order_amount DECIMAL(10, 2) NOT NULL,
    order_date TIMESTAMP NOT NULL
);

INSERT INTO orders (customer_id, product_id, order_amount, order_date)
VALUES
    (1, 101, 150.00, '2023-01-15 10:30:00'),
    (2, 102, 75.50, '2023-01-16 11:45:00'),
    (1, 103, 200.00, '2023-02-01 09:15:00'),
    (3, 104, 50.25, '2023-02-10 14:20:00'),
    (2, 105, 125.75, '2023-03-05 16:30:00'),
    (4, NULL, 90.00, '2023-03-10 13:00:00'),
    (1, 106, 180.50, '2023-04-02 11:10:00'),
    (3, 107, 60.25, '2023-04-15 10:45:00'),
    (5, 108, 110.00, '2023-05-01 15:20:00'),
    (2, 109, 95.75, '2023-05-20 12:30:00');

-- ex01 - count product_id
select count(*) from orders;
select count(product_id) as order_with_product from orders;
SELECT COUNT(DISTINCT customer_id) AS unique_customers FROM orders;

select customer_id, count(customer_id) from orders group by customer_id;

-- without group by
select COUNT(*) AS orders_per_month FROM orders;

-- group by
SELECT
  DATE_TRUNC('month', order_date) AS month,
  COUNT(*) AS orders_per_month
FROM orders
  GROUP BY DATE_TRUNC('month', order_date)
  ORDER BY month;

-- FILTER clause

SELECT
  COUNT(*) AS total_orders,
  COUNT(*) FILTER (WHERE order_date >= '2023-04-01') AS recent_orders
FROM orders;

-- Exercise 01

-- Order table-аас unique customer-уудын тоог нь харуулна уу
SELECT COUNT(DISTINCT customer_id) AS unique_customers FROM orders;

-- Exercise 02
-- DVD Rental өгөгдлийн санд хэдэн ширхэг кино байгааг тоолох  
-- Expected OUTPUT 
-- 1000
SELECT 
    COUNT(*) AS "Нийт киноны тоо"
FROM 
    film;

-- Exercise 03
-- Кинонуудыг үнэлгээгээр нь бүлэглэж, үнэлгээ бүрт хэдэн ширхэг кино байгааг тоолох.
SELECT 
    rating AS "Үнэлгээ",
    COUNT(*) AS "Киноны тоо"
FROM 
    film
GROUP BY 
    rating
ORDER BY 
    COUNT(*) DESC;
-- Expected OUTPUT

-- PG-13	223
-- NC-17	210
-- R	195
-- PG	194
-- G	178


-- Exercise 04
-- Кинонуудыг түрээсийн үнээр нь бүлэглэж, түрээсийн үнэ бүрт 
-- хэдэн ширхэг кино байгааг тоолох тэгээд дарааллуулан харуулна уу
SELECT 
    rental_rate AS "Түрээсийн үнэ",
    COUNT(*) AS "Киноны тоо"
FROM 
    film
GROUP BY 
    rental_rate
ORDER BY 
    rental_rate;
-- Expected OUTPUT
-- 0.99	341
-- 2.99	323
-- 4.99	336


-- Exercise 05
-- Ангилал бүрийн киноны тоог тоолж, хамгийн олон киноноос эхлэн эрэмбэлэх.
SELECT 
    c.name AS "Ангилал",
    COUNT(f.film_id) AS "Киноны тоо"
FROM 
    category c
JOIN 
    film_category fc ON c.category_id = fc.category_id
JOIN 
    film f ON fc.film_id = f.film_id
GROUP BY 
    c.name
ORDER BY 
    COUNT(f.film_id) DESC;
-- Expected OUTPUT
-- Sports	74
-- Foreign	73
-- Family	69
-- Documentary	68
-- Animation	66
-- Action	64
-- New	63
--Drama	62
--Sci-Fi	61
--Games	61
--Children	60
--Comedy	58
--Travel	57
--Classics	57
--Horror	56
--Music	51



