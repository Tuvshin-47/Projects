-- Lesson Day 85

-- sql 
-- subqueries
-- grouping data

-- Ex01 
-- Хэрэглэгч бүрийн нийт төлсөн төлбөрийг нь олдог query бичнэ үү
select 
payment.customer_id ,
sum(payment.amount) as amount
from 
payment 
group by 
payment_id
order by 
amount desc;


-- Ex02
-- Хэрэглэгч бүрийн нийт төлсөн төлбөрийг нь олдог query бичнэ үү гэхдээ тухайн хэрэглэгч зөвхөн
-- 200$-оос дээш төлсөн датаг харуулна уу

select 
payment.customer_id ,
sum(payment.amount) as amount
from 
payment 
group by 
payment_id
having 
sum(amount) > 11
order by 
amount desc;

-- Ex03
-- store болгоны хэрэглэгчийн тоог олно уу
select store_id, count(customer_id) from customer group by customer.store_id ;

-- Ex04
--  300-гаас дээш хэрэглэгчтэй store-ийн тоог олно уу

select store_id, count(customer_id) from customer 
group by customer.store_id having count(customer_id) > 300;

-- Ex05
-- Жүжигчин бүрийн тоглосон киноны тоог тоолж, хамгийн их тоглосон киноноос эхлэн эрэмбэлэх. 
-- Зөвхөн 10-аас дээш кинонд тоглосон жүжигчдийг харуулах.
SELECT 
    a.actor_id AS "Жүжигчдийн ID",
    a.first_name AS "Нэр",
    a.last_name AS "Овог",
    COUNT(fa.film_id) AS "Тоглосон киноны тоо"
FROM 
    actor a
JOIN 
    film_actor fa ON a.actor_id = fa.actor_id
GROUP BY 
    a.actor_id, a.first_name, a.last_name
HAVING 
    COUNT(fa.film_id) > 10
ORDER BY 
    COUNT(fa.film_id) DESC;
-- Жүжигчдийн ID |     Нэр     |     Овог     | Тоглосон киноны тоо 
--------------+-------------+--------------+---------------------
--           107 | Gina        | Degeneres    |                  42
--           102 | Walter      | Torn         |                  41
--           198 | Mary        | Keitel       |                  40
--           181 | Matthew     | Carrey       |                  39
--            23 | Sandra      | Kilmer       |                  37
-- ...

-- Ex06
-- Нийт 100 доллараас илүү орлого авчирсан киноны ангилалуудыг олж, 
-- тэдгээрийн нэр, түрээсийн тоо болон нийт орлогыг харуулах хүсэлт бичих.
SELECT 
    c.name AS "Ангилал",
    COUNT(r.rental_id) AS "Түрээсийн тоо",
    SUM(p.amount) AS "Нийт орлого"
FROM 
    category c
JOIN 
    film_category fc ON c.category_id = fc.category_id
JOIN 
    film f ON fc.film_id = f.film_id
JOIN 
    inventory i ON f.film_id = i.film_id
JOIN 
    rental r ON i.inventory_id = r.inventory_id
JOIN 
    payment p ON r.rental_id = p.rental_id
GROUP BY 
    c.name
HAVING 
    SUM(p.amount) > 100
ORDER BY 
    SUM(p.amount) DESC;

-- Ангилал     | Түрээсийн тоо | Нийт орлого 
-------------+---------------+-------------
-- Sports      |          1081 |     4892.19
-- Sci-Fi      |           998 |     4336.01
-- Animation   |          1065 |     4245.31
-- Drama       |           953 |     4118.46
-- Comedy      |           851 |     4002.48
-- New         |           864 |     3966.38
-- Action      |          1013 |     3951.84
-- Foreign     |           953 |     3934.47
-- Games       |           884 |     3922.18
-- Family      |           988 |     3830.15
-- Documentary |           937 |     3749.65
-- Horror      |           773 |     3401.27
-- Classics    |           860 |     3353.38
-- Children    |           861 |     3309.39
-- Travel      |           765 |     3227.36
-- Music       |           750 |     3071.52
-- (16 rows)


