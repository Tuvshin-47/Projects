--lesson day 85

--sql
--subqueries
--grouping data

-- ex01
--hereglegch buriin niit tulsun tulburiig ni oldog query bichne uu

select payment.customer_id , sum(payment.amount) as amount  from payment group by payment_id order by amount  desc;


--ex02
--200$oos deesh tulsun datag haruulnauu
--sum ni having nuhtsuliig hangah ystoi

select payment.customer_id , sum(payment.amount) as amount  from payment group by payment_id having sum(amount)>11 order by amount  desc;


--ex03
-- store bolgonii hereglegchiin toog olno uu 
select store_id  , count(customer_id)  from customer  group by customer.store_id ;

--ex04 store bolgonii hereglegchiig 300gaas deesh blgonuu
select store_id  , count(customer_id)  from customer  group by customer.store_id having count(customer_id)>300 ;

--ex05
select  a.actor_id as "jujigchdiin ID ", a.first_name as "Ner", a.last_name as "Ovog",count( fa.film_id )  as "togloson kinonii too" from actor a
join film_actor fa  on a.actor_id = fa.actor_id 
group  by a.actor_id , a.first_name , a.last_name 
having  count(fa.film_id)>10
order by count(fa.film_id) desc ; 

--ex06
select c."name" as "Angilal", count(r.rental_id) as "Tureesiin too", sum(p.amount) as "niit orlogo"  from category c 
join film_category fc on c.category_id = fc.category_id 
join film f on fc.film_id = f.film_id
join inventory i on f.film_id = i.film_id 
join rental r on i.inventory_id = r.inventory_id 
join payment p  on r.rental_id = p.rental_id 
group by c.name 
having sum(p.amount)>100
order by sum(p.amount) desc
;





