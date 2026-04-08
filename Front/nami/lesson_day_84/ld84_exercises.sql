--ex01
      select co.country as "Uls", count(cu.customer_id)as "uilchluulegchdiin too" from country co
      join city ci on co.country_id = ci.country_id
      join address a on ci.city_id = a.city_id
      join customer cu  on a.address_id = cu.address_id group by co.country order by count(cu.customer_id)desc;   

--ex02
     -- uls bolgonii hot
      select co.country as "Uls", count(ci.city_id)as "Hotiin too" from city ci
      join country co  on ci.country_id  =co.country_id group by co.country order by count(ci.city_id)desc;   

-- ex03
     --udur bur heden tureesin burtgel hiigdseniig tooloh
     select date( r.rental_date) as "Udur", count (distinct rental_id) as "tureesiin too" from rental r 
     group by date(rental_date ) order by date(rental_date)  asc ;
    
--ex04
    --hereglegch buriin tureeslesen kinonii too, tureeslesen udrin too,
    --udur buriin tureeslesen dundaj too
    select c.customer_id as "uilchluulegchiin id ", 
    c.first_name as "Ner",
    c.last_name  as "Ovog",
    count(r.rental_id) as "tureesiin too",
    count(distinct date(r.rental_date)) as "tureeselsen udriin too",
    round(count(r.rental_id)::numeric /count(distinct date(r.rental_date))::numeric,2) as "udur buriin dundaj turees"
    from customer c 
    join rental r on c.customer_id = r.customer_id 
    group by c.customer_id ,c.first_name ,c.last_name 
    order by count (r.rental_id) desc limit 10;
--ex05
   select i.store_id as "delguuriin ID" , count(r.rental_id)  from rental r
   join inventory i on r.inventory_id = i.inventory_id  
   where r.return_date is null 
   group by i.store_id 
   order by count (r.rental_id) desc;