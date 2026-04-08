select
	*
from
	payment;

select
	customer.customer_id,
	customer.first_name,
	customer.last_name,
	payment.amount,
	payment.payment_date
from
	customer
inner join payment on
	payment.customer_id = customer.customer_id;
--ex02
select
	film.title,
	language."name"
from
	film
inner join language on
	film.language_id = language.language_id
order by
	film.title;
--ex03
select
	customer.first_name,
	customer.last_name,
	address.address ,
	address.district
from
	customer
inner join address on
	address.address_id = customer.address_id
order by
	customer.first_name;
--ex04
select
	film.title as "Movie name",
	category.name as "Title"
from
	film
inner join film_category on
	film_category.film_id = film.film_id
inner join category on
	film_category.category_id = category.category_id;
--ex05
select
	actor.first_name,
	actor.last_name,
	film.title as "Movie name"
from
	actor
inner join film_actor on
	film_actor.actor_id = actor.actor_id
inner join film on
	film_actor.film_id = film.film_id
where
	film.title like 'Love%'
order by
	actor.first_name;
--ex06
select
	customer.first_name,
	customer.last_name,
	country.country,
	city.city,
	customer.active
from
	city
inner join country on
	city.country_id = country.country_id
left join address on
	city.city_id = address.city_id
left join customer on
	address.address_id = customer.address_id
order by
	country.country,
	city.city,
	customer.last_name;
--ex07
select
	customer.first_name,
	customer.last_name,
	f.title,
	r.rental_date,
	r.return_date
from
	customer
inner join rental r on
	customer.customer_id = r.customer_id
inner join inventory i on
	r.inventory_id = i.inventory_id
inner join film f on
	i.film_id = f.film_id
where
	r.rental_date between '2005-06-15' and '2005-06-20 23:59:59'
order by
	r.rental_date,
	customer.last_name;
--ex08
select
	c1.first_name || ' ' || c1.last_name as "Customer 1",
	c2.first_name || ' ' || c2.last_name as "Customer 2",
	ci.city as "City",
	co.country as "Country"
from
	customer c1
inner join address a1 on
	c1.address_id = a1.address_id
inner join city ci on
	a1.city_id = ci.city_id
inner join country co on
	ci.country_id = co.country_id
inner join address a2 on
	a2.city_id = ci.city_id
inner join customer c2 on
	c2.address_id = a2.address_id
where
	c1.customer_id < c2.customer_id
order by
	co.country,
	ci.city,
	"Customer 1";