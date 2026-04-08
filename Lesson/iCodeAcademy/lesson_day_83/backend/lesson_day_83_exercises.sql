-- Exercise 01
-- INNER JOIN ашиглаад customer-аас payment лүү join хийгээд customer_id, customer first_name,
-- customer last_name, payment amount payment date-ийг нь харуулна уу. Payment date-ээр нь 
-- эрэмбэлж харуулаарай.
SELECT
  customer.customer_id,
  customer.first_name,
  customer.last_name,
  payment.amount,
  payment.payment_date
FROM
  customer
  INNER JOIN payment ON payment.customer_id = customer.customer_id
ORDER BY
  payment.payment_date;

-- Exercise 02
-- Киноны нэр болон тухайн киноны хэлийг харуулах (INNER JOIN)
SELECT 
    f.title AS "Киноны нэр",
    l.name AS "Хэл"
FROM 
    film f
INNER JOIN 
    language l ON f.language_id = l.language_id
ORDER BY 
    f.title;

-- Exericise 03
-- Үйлчлүүлэгчийн нэр, овог, хаяг болон дүүргийг харуулах (INNER JOIN)
SELECT 
    c.first_name AS "Нэр",
    c.last_name AS "Овог",
    a.address AS "Хаяг",
    a.district AS "Дүүрэг"
FROM 
    customer c
INNER JOIN 
    address a ON c.address_id = a.address_id
ORDER BY 
    c.last_name,
    c.first_name;

-- Exercise 04
-- Бүх ангилал болон тэдгээрт хамаарах кинонуудыг харуулах. 
-- Кино байхгүй ангилал байсан ч гэсэн харуулах.
SELECT 
    c.name AS "Ангилал",
    f.title AS "Киноны нэр"
FROM 
    film f
RIGHT JOIN 
    film_category fc ON f.film_id = fc.film_id
RIGHT JOIN 
    category c ON fc.category_id = c.category_id
ORDER BY 
    c.name,
    f.title;

-- Exercise 05
-- "LOVE" гэсэн үгийг агуулсан киноны гарчигтай кинонд тоглосон 
-- жүжигчдийн нэр, овгийг харуулах

SELECT DISTINCT
    a.first_name AS "Жүжигчийн нэр",
    a.last_name AS "Жүжигчийн овог",
    f.title AS "Киноны нэр"
FROM 
    actor a
INNER JOIN 
    film_actor fa ON a.actor_id = fa.actor_id
INNER JOIN 
    film f ON fa.film_id = f.film_id
WHERE 
    f.title LIKE '%Love%' or f.title LIKE '%love%'
ORDER BY 
    a.last_name,
    a.first_name,
    f.title;

-- Exericise 06
-- Бүх хот болон тэдгээрт амьдардаг үйлчлүүлэгчдийн тоог харуулах. 
-- Үйлчлүүлэгч байхгүй хот байсан ч гэсэн харуулах
SELECT 
    ci.city AS "Хот",
    co.country AS "Улс",
    c.first_name AS "Үйлчлүүлэгчийн нэр",
    c.last_name AS "Үйлчлүүлэгчийн овог"
FROM 
    city ci
INNER JOIN 
    country co ON ci.country_id = co.country_id
LEFT JOIN 
    address a ON ci.city_id = a.city_id
LEFT JOIN 
    customer c ON a.address_id = c.address_id
ORDER BY 
    co.country,
    ci.city,
    c.last_name;


-- Exercise 07
-- 2005 оны 6-р сарын 15-20-ны хооронд түрээсэлсэн үйлчлүүлэгч 
-- болон киноны мэдээллийг харуулах
SELECT 
    c.first_name AS "Үйлчлүүлэгчийн нэр",
    c.last_name AS "Үйлчлүүлэгчийн овог",
    f.title AS "Киноны нэр",
    r.rental_date AS "Түрээслэсэн огноо",
    r.return_date AS "Буцаасан огноо"
FROM 
    customer c
INNER JOIN 
    rental r ON c.customer_id = r.customer_id
INNER JOIN 
    inventory i ON r.inventory_id = i.inventory_id
INNER JOIN 
    film f ON i.film_id = f.film_id
WHERE 
    r.rental_date BETWEEN '2005-06-15' AND '2005-06-20 23:59:59'
ORDER BY 
    r.rental_date,
    c.last_name;

-- Exercise 08
-- Ижил хотод амьдардаг өөр хоорондоо үйлчлүүлэгчдийн хосуудыг харуулах
SELECT 
    c1.first_name || ' ' || c1.last_name AS "Үйлчлүүлэгч 1",
    c2.first_name || ' ' || c2.last_name AS "Үйлчлүүлэгч 2",
    ci.city AS "Хот",
    co.country AS "Улс"
FROM 
    customer c1
INNER JOIN 
    address a1 ON c1.address_id = a1.address_id
INNER JOIN 
    city ci ON a1.city_id = ci.city_id
INNER JOIN 
    country co ON ci.country_id = co.country_id
INNER JOIN 
    address a2 ON a2.city_id = ci.city_id
INNER JOIN 
    customer c2 ON c2.address_id = a2.address_id
WHERE 
    c1.customer_id < c2.customer_id  -- Хосуудыг зөвхөн нэг удаа харуулах
ORDER BY 
    co.country,
    ci.city,
    "Үйлчлүүлэгч 1";

