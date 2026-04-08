-- SUBQuery 


-- Ex01
-- Дундаж түрээсийн үнээс өндөр үнэтэй кинонууд харуулах
SELECT 
    title AS "Киноны нэр", 
    rental_rate AS "Түрээсийн үнэ"
FROM 
    film
where 
	rental_rate > (select  avg(rental_rate) from film)
order by 
	rental_rate DESC

-- Дундаж түрээсийн үнийг олох

select 
	avg(rental_rate)
from film;

-- Ex02 
-- Хамгийн урт кинонд тоглосон жүжигчид харуулах
SELECT 
    first_name AS "Нэр", 
    last_name AS "Овог"
FROM 
    actor
WHERE 
    actor_id IN (
        SELECT 
            actor_id 
        FROM 
            film_actor 
        WHERE 
            film_id = (SELECT film_id FROM film ORDER BY length DESC LIMIT 1)
    );
--  Нэр  |    Овог     
-------+-------------
-- Mae   | Hoffman
-- River | Dean
-- Cuba  | Allen
-- Liza  | Bergman
-- Kevin | Garland
-- Meryl | Gibson
-- Burt  | Temple
-- Jayne | Silverstone
--(8 rows)

-- Ex03
-- Үргэлжлэх хугацаа нь дунджаас дээш 10 болон доош 10 кинонуудыг харуулах
SELECT 
    title AS "Киноны нэр", 
    length AS "Үргэлжлэх хугацаа"
FROM 
    film
WHERE 
    length BETWEEN 
        (SELECT AVG(length) - 10 FROM film) AND 
        (SELECT AVG(length) + 10 FROM film)
ORDER BY 
    length;
--  	 Киноны нэр        | Үргэлжлэх хугацаа 
-------------------------+-------------------
-- Dalmations Sweden       |               106
-- Private Drop            |               106
-- Bed Highball            |               106
-- Sagebrush Clueless      |               106
-- Deer Virginian          |               106
-- Gaslight Crusade        |               106

-- Ex04
-- Action' ангилалд багтах кинонуудыг харуулах
SELECT 
    title AS "Киноны нэр"
FROM 
    film
WHERE 
    film_id IN (
        SELECT 
            film_id 
        FROM 
            film_category 
        WHERE 
            category_id = (SELECT category_id FROM category WHERE name = 'Action')
    )
ORDER BY 
    title;
--  Киноны нэр        
-------------------------
-- Amadeus Holy
-- American Circus
-- Antitrust Tomatoes
-- Ark Ridgemont
-- ...
-- (64 rows)

-- Ex05
-- Хамгийн олон кино түрээслэсэн үйлчлүүлэгчийг харуул
SELECT 
    first_name AS "Нэр", 
    last_name AS "Овог"
FROM 
    customer
WHERE 
    customer_id = (
        SELECT 
            customer_id 
        FROM 
            rental 
        GROUP BY 
            customer_id 
        ORDER BY 
            COUNT(*) DESC 
        LIMIT 1
    );
--   Нэр   | Овог 
---------+------
-- Eleanor | Hunt
-- (1 row)

-- Ex06
-- Буцаагдаагүй киноны жагсаалтыг харуулах
SELECT 
    film.title AS "Киноны нэр"
FROM 
    film
WHERE 
    film_id IN (
        SELECT 
            film_id 
        FROM 
            inventory 
        WHERE 
            inventory_id IN (
                SELECT 
                    inventory_id 
                FROM 
                    rental 
                WHERE 
                    return_date IS NULL
            )
    )
ORDER BY 
    title;
-- Киноны нэр       
------------------------
-- Academy Dinosaur
-- Ace Goldfinger
-- Affair Prejudice
-- ...
-- (169 Rows)

