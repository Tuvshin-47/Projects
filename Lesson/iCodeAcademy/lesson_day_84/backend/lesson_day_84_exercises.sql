-- Exercises

-- Ex01
-- Улс бүрийн хэдэн үйлчлүүлэгч байгааг тоолох.
SELECT 
    co.country AS "Улс",
    COUNT(cu.customer_id) AS "Үйлчлүүлэгчдийн тоо"
FROM 
    country co
JOIN 
    city ci ON co.country_id = ci.country_id
JOIN 
    address a ON ci.city_id = a.city_id
JOIN 
    customer cu ON a.address_id = cu.address_id
GROUP BY 
    co.country
ORDER BY 
    COUNT(cu.customer_id) DESC;
-- Expected output
-- Улс  Үйлчлүүлэгчдийн тоо
-- India	60
-- China	53
-- United States	36
-- etc...


-- Ex02
-- Улс бүрийн хэдэн хот өгөгдлийн санд бүртгэлтэй байгааг тоолох.
SELECT 
    co.country AS "Улс",
    COUNT(ci.city_id) AS "Хотын тоо"
FROM 
    country co
LEFT JOIN 
    city ci ON co.country_id = ci.country_id
GROUP BY 
    co.country
ORDER BY 
    COUNT(ci.city_id) DESC;
-- Expected output
-- Улс Хотын тоо
-- India	60
-- China	53
-- United States	35
-- ...

-- Ex03
-- Өдөр бүр хэдэн түрээсийн бүртгэл хийгдсэнийг тоолох.
SELECT 
    DATE(rental_date) AS "Өдөр",
    COUNT(*) AS "Түрээсийн тоо"
FROM 
    rental
GROUP BY 
    DATE(rental_date)
ORDER BY 
    DATE(rental_date);
-- Expected output
-- Өдөр         Түрээсийн тоо
-- 2005-05-24	8
-- 2005-05-25	137
-- 2005-05-26	174
-- 2005-05-27	166
-- 2005-05-28	196
-- ...

-- Ex04
-- Хэрэглэгч бүрийн түрээслэсэн киноны тоо, түрээслэсэн өдрийн тоо, 
-- өдөр бүр дунджаар хэдэн кино түрээслэснийг тооцоолох.
SELECT 
    c.customer_id AS "Үйлчлүүлэгчийн ID",
    c.first_name AS "Нэр",
    c.last_name AS "Овог",
    COUNT(r.rental_id) AS "Түрээсийн тоо",
    COUNT(DISTINCT DATE(r.rental_date)) AS "Түрээслэсэн өдрийн тоо",
    ROUND(COUNT(r.rental_id)::numeric / COUNT(DISTINCT DATE(r.rental_date))::numeric, 2) AS "Өдөр бүрийн дундаж түрээс"
FROM 
    customer c
JOIN 
    rental r ON c.customer_id = r.customer_id
GROUP BY 
    c.customer_id, c.first_name, c.last_name
ORDER BY 
    COUNT(r.rental_id) DESC
LIMIT 10;
-- Expected Output
-- | Үйлчлүүлэгчийн ID | Нэр      | Овог  |  Түрээсийн тоо  |   Түрээслэсэн өдрийн тоо |   Өдөр бүрийн дундаж түрээс |
-- | 469	             |Wesley	| Bull  | 	40	         |        25	            |  1.60                       | 
-- ...

-- Ex05
-- Дэлгүүр бүрт түрээслэгдсэн боловч буцаагдаагүй (return_date IS NULL) киноны тоог тоолох.

-- Expected Output
-- Дэлгүүрийн ID | Буцаагдаагүй киноны тоо
--     1					92
--     2					91
SELECT 
    i.store_id AS "Дэлгүүрийн ID",
    COUNT(r.rental_id) AS "Буцаагдаагүй киноны тоо"
FROM 
    rental r
JOIN 
    inventory i ON r.inventory_id = i.inventory_id
WHERE 
    r.return_date IS NULL
GROUP BY 
    i.store_id
ORDER BY 
    COUNT(r.rental_id) DESC;

-- Ex06
-- Үйлчлүүлэгч бүрийн түрээсийн тоо болон нийт төлбөр

-- Expected Output
-- Үйлчлүүлэгчийн ID  | Нэр     | Овог    | Түрээсийн тоо | Нийт төлбөр
-- 148				  | Eleanor | 	Hunt  |	 45	          | 211.55
-- ...

-- Ex07
-- Дэлгүүр бүрийн борлуулалтын дундаж өдрийн орлого

-- Expected Output
-- 

