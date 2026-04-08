-- sub query
-- ex01 dundaj tureesin unees undur unetei kinonuud haruulah
select title, rental_rate from film
where rental_rate > (select avg(rental_rate) from film )
order by rental_rate desc;
--dundaj tureesiin uniig oloh
select  avg(rental_rate) from film ;

-- ex02 hamgiin urt kinond togloson jujigchid 
select 
       first_name as "Ner" ,
       last_name as "ovog" 
from actor   
where  
     actor_id in(
         select actor_id 
         from film_actor 
         where film_id = (select film_id from film order by length desc limit 1));
        
--ex03
-- dundaj urgeljleh hugatsaatai kinonuudig haruulah 
select   f.title  as "kinonii ner", f.length as "urgeljleh hugatsaa" from film f
where f.length between 
(select avg(length-10) from film ) and (select avg(length+10) from film ) 
order by f.length asc;

-- ex04 action angilald bagtah kinonuudig haruulah

select f.title as "kinonii ner"  from film_category fc 
join film f ON f.film_id = fc.film_id 
join category c on fc.category_id  = c.category_id where c.category_id = 1 ;

--ex05 hamgiin olon kino tureeselsen uilchlegchig haruul

    select 
    first_name as "Ner",
    last_name  as "Ovog"
    from customer 
    where customer_id =(select customer_id from rental  group by customer_id order by count(*) desc limit 1);
 -- ex06 
--butsaagdaagu kinonii jagsaaltig haruulah 
   select
	film.title as "kinonii ner"
from
	film
where
	film_id in(
	select
		film_id
	from
		inventory
	where
		inventory_id in (
		select
			inventory_id
		from
			rental
		where
			return_date is null))
order by
	title;