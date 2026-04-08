-- 1. QUERYING DATA (Дата сонгох)

-- 1.1 show all data of customer table
select * from customer;

-- 1.2 customer table-ийн first_name, last_name, email харуулна уу
select first_name, last_name, email from customer;

-- 1.3 customer table-ийн fullname-ийг нь, email-тэй нь харуулна уу
-- For Example: Jared Ely, jarere@gmail.com
select first_name || ' ' || last_name, email from customer;


-- 1.4 table column alias - AS - alias
select first_name || ' ' || last_name as full_name, email from customer;


-- 1.5 SELECT without FROM clause
select NOW();

-- 1.6 customer table-ийг firstname, last_name-ийг surename, email гэж өөрчилж харуулна уу
select first_name firstname, last_name surename, email from customer;

-- 1.7 customer table-ийг first name, last name, email багануудыг нэрийг нь сольж харуулна уу

select first_name "First Name", last_name "Last Name", email "Email" from customer;

-- ORDER BY

-- 1.8 first_name баганы хүмүүсийн нэрийг Үсгийн дарааллаар нь А-аас Z-рүү харуулна уу
select first_name, last_name from customer order by first_name asc ;

-- 1.9 first_name баганы хүмүүсийн нэрийг Үсгийн дарааллаар нь Z-ээс A-руу харуулна уу
select first_name, last_name from customer order by first_name desc;

-- 1.10 first_name баганы хүмүүсийн нэрийг Үсгийн дарааллаар нь Z-ээс A-руу харуулна уу
-- last_name баганы хүмүүсийн нэрийг A-Z рүү хөрвүүлье

select first_name, last_name from customer order by first_name asc, last_name desc;

-- 1.11 LENGTH() - function ашиглаад customer-ийн first_name-ийнх нь уртаар нь багасгаж харуулах
select first_name, LENGTH(first_name) len from customer order by len desc;

-- 1.12 хамгийн урт last_name-тэй хүнийг нь харуул
select last_name, LENGTH(last_name) len from customer order by len desc;

-- 1.13 хамгийн урт имэйл-тэй хүмүүсийг нь дээр нь гаргаж дарааллаар нь харуулна уу
select email, LENGTH(email) len from customer order by len desc;

-- 1.14 хамгийн урт нэртэй хүнийг нь ол - LIMIT
select first_name, LENGTH(first_name) len from customer order by len asc limit 1;

-- 1.15 DISTINCT KEYWORD - өгөгдлийн давхацлыг арилгадаг
-- preparation
CREATE TABLE colors(
  id SERIAL PRIMARY KEY, -- serial автомараар миний дата өгөгдлийн primary key-г нь дараагийн тоогоор нэмэгдүүлдэг
  bcolor VARCHAR, 
  fcolor VARCHAR
);

INSERT INTO
  colors (bcolor, fcolor)
VALUES
  ('red', 'red'),
  ('red', 'red'),
  ('red', NULL),
  (NULL, 'red'),
  (NULL, NULL),
  ('green', 'green'),
  ('blue', 'blue'),
  ('blue', 'blue');

select * from colors;

-- 1.16 colors table-ийн давхцлыг арилгаж утгыг харуулна уу
select distinct bcolor from colors order by bcolor;

-- 1.17 colors table-ийн давхцлыг арилгаж утгыг харуулна уу
select distinct bcolor, fcolor from colors order by bcolor, fcolor;

-- 1.18 film table-ийн rental_rate-ийн утгуудыг давхцалгүй харуулдаг query бичнэ үү
select distinct rental_rate from film order by rental_rate;

-- 1.19 customer table-аас 'Jamie' нэртэй хүмүүийг сонгож нэр овгийг нь харуулна уу
select first_name, last_name from customer where first_name = 'Jamie';

-- 1.20 customer table-аас first_name 'Jamie' last_name нь 'rice' гэсэн утгуудыг харуулна уу
-- AND operator
select first_name, last_name from customer where first_name = 'Jamie' and last_name = 'Rice';

-- OR operator
-- 1.21 customer table-аас last_name 'Rodriguez', first_name нь 'Adam' 
-- гэсэн утгуудын аль нэг нь орсон датаг харуулна уу

select first_name, last_name from customer where last_name = 'Rodriguez' OR first_name = 'Adam';

-- IN Operator
-- 1.22 customer table-аас first_name нь 'Ann', 'Anne', 'Annie' гэсэн үгнүүд орсон утгуудыг 
-- харуулна уу

select first_name, last_name from customer where first_name in ('Ann', 'Anne', 'Annie');

-- Like Operator
-- 1.23 customer table-аас first_name нь 'Ann' гэдэг үгээр эхэлсэн бүх хэрэглэгчдийг харуулна уу
select first_name, last_name, email from customer where first_name like 'Ann%';

-- BETWEEN Operator
-- 1.24 payment table-аас payment_id нь 17503-ийн 17508 хооронд байгаа payment-үүдийг харуулна уу
select payment_id, amount from payment where payment_id between 17503 and 17508 order by payment_id;

-- NOT Operator
-- 1.25 payment table-аас payment_id нь 17503-ийн 17508 хооронд биш бүх payment-үүдийг харуулна уу
select payment_id, amount from payment where payment_id not between 17503 and 17508 order by payment_id;

-- 1.26 '2007-02-15' AND '2007-02-20' -ийн хооронд болсон бүх payment датаг харуулна уу
-- amount нь 10-аас эрс их байгаа утгуудыг бас нэмж харуулна. Харуулах багана нь customer_id, 
-- payment_id, amount, payment_date

select customer_id, payment_id, amount, payment_date from payment 
where payment_date between '2007-02-15' AND '2007-02-20' and amount > 10 order by payment_date;


-- IS NULL
-- 1.27 
select null = null as result;

-- 1.28 Address table-ийн address 2 нь хоосон биш бүх утгуудыг нь харуулна уу. address, address2 
-- баганыг нь харуулна уу
select address, address2 from address where address2 is null;




