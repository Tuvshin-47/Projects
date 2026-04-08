---lesson day 84

-- sql aggregate functions


-- count - tooloh

-- mur tooloh

select  count(*) from payment ;



--ex01
create table orders(
   order_id SERIAL primary key,
   customer_id integer not null,
   product_id integer,
   order_amount decimal(10,2) not null,
   order_date timestamp not null
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
    
   --count product_id
   select count(*) from orders;
   select count(product_id) as order_with_product from orders;
   
  select count(distinct customer_id) as unique_customers from orders;
 --without group by
 select count(*) as orders_per_month from orders;
 -- group by

 select date_trunc('month', order_date) as month , count(*) as orders_per_month from orders group by date_trunc('month', order_date) order  by month;


-- filter clause

select count(*) as total_orders,
      count(*) filter (where order_date <= '2023-04-01') as recent_orders from orders;
 
     
  --EX01
     SELECT count(DISTINCT customer_id)  FROM orders;
    
  -- ex02
   select  count(distinct film_id) from film ;
  
  --ex03
     select rating, count(rating) from film group by rating ;
     
  --ex04
    --rental_rate
      select rental_rate , count(rental_rate) from film group by rental_rate order by rental_rate asc ;
      
  --ex05
     select c.name as "angilal", count(f.film_id)as "kinonii too" from category c 
     join film_category fc on c.category_id =fc.category_id 
     join film f  on fc.film_id =f.film_id group by c.name order by count(f.film_id) desc;

     
     