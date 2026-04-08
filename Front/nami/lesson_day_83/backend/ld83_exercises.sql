
-- ex 01
select 
customer.customer_id ,
customer.first_name ,
customer.last_name ,
payment.amount ,
payment.payment_date 
from customer 
inner join payment on payment.customer_id = customer.customer_id 
order by payment.payment_date ;

--ex02
select 
f.title as "kinonii ner",
l.name as "hel"
from film f
inner join language l on f.language_id =l.language_id 
order by f.title ; 

--ex03
select 
c.first_name as "Ovog",
c.last_name as "Ner",
a.address as "hayg",
a.district as "duureg"
from customer c
inner join address a  on c.address_id = a.address_id 
order by c.last_name, c.first_name ;

--ex04
select
c.name as "Angilal", 
f.title as "kinonii ner" 
from film f
right join film_category fc on f.film_id = fc.film_id 
right join category c  on fc.category_id = c.category_id 
order by 
c.name,
f.title ;

-- ex05
select distinct
a.first_name as "jujigchnii ner",
a.last_name as "jujigchnii ovog",
f.title as "kinonii ner"
from actor a 
inner join film_actor fa on a.actor_id =fa.actor_id 
inner join film f on fa.film_id = f.film_id 
where f.title like '%Love%' or f.title  like '%Love%'
order by 
a.last_name ,
a.first_name,
f.title ;

--ex06 
select
ci.city as "Hot",
co.country as "uls",
c.first_name as "uilchluulegchiin ner",
c.last_name as "uilchluulegchiin ovog"
from city ci
inner join country co  on ci.country_id = co.country_id 
left join address a on ci.city_id = a.city_id 
left join customer c on a.address_id = c.address_id 
order by co.country , ci.city, c.last_name ;

--ex07
select
c.first_name as "uilchluulegchiin ner",
c.last_name as "Uilchluulegchiin ovog",
f.title as "kinonii ner",
r.rental_date as "tureesluulsen udur",
r.return_date as "butsaasan udur"
from  customer c 
inner join rental r on c.customer_id = r.customer_id
inner join inventory i on r.inventory_id = i.inventory_id 
inner  join film f on i.film_id =f.film_id 
where 
r.rental_date between '2005-06-15' and '2005-06-20 23:59:59'
order by 
r.rental_date,
c.last_name ;

--ex 08
select 
c1.first_name || '' || c1.last_name as "Uilchluulegch 1",
c2.first_name || '' || c2.last_name as "Uilchluulegch 2",
ci.city as "Hot",
co.country as "Uls"
from customer c1
inner join address a1  on c1.address_id = a1.address_id 
inner join  city ci on a1.city_id = ci.city_id 
inner join country co on ci.country_id = co.country_id 
inner join address a2  on a2.city_id  = ci.city_id 
inner join customer c2 on c2.address_id = a2.address_id  
where 
c1.customer_id< c2.customer_id  --hosuudiig zuvhhun neg udaa haruulah
order by 
co.country ,
ci.city ,
"Uilchluulegch 1";