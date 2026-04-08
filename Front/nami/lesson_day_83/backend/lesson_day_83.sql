--- SQL Joins

--Problem buh city-nii datag haruulah queryg bichneuu
select * from city;



-- Buh hotiin datag haruulah query bichne uu
select * from country;

--buh hotiin hoid tald ni ulsiinh ni nertei ni haruulna uu 
select * from city c , country co where c.country_id = co.country_id;

-- deed taliin query-ees zuvhun hotiin ner bolon ulsiin neriig ni songoj haruulna uu 
select c.city , co.country from city c, country co where c.country_id = co.country_id ;

--Solution
--Join 

create table basket_a (
    a int primary key ,
    fruit_a varchar (100) not null
);
create table basket_b (
    b int primary key,
    fruit_b varchar(100) not null
);
insert  into  basket_a (a, fruit_a)
values 
    (1, 'Apple'),
    (2, 'Orange'),
    (3, 'Banana'),
    (4, 'Cucumber');
insert  into  basket_b (b, fruit_b)
values 
    (1, 'Orange'),
    (2, 'Apple'),
    (3, 'Banana'),
    (4, 'Cucumber');
   
   select  * from  basket_a;
   select * from basket_b;
  
  -- INNER JOIN 
  select a, fruit_a, b, fruit_b
  from basket_a 
  inner join basket_b 
    on fruit_a = fruit_b;
   
  -- Left join 
  select a, fruit_a, b, fruit_b
  from basket_a 
  left join basket_b on fruit_a = fruit_b where b is null;
 
 -- Right join 
  select a, fruit_a, b, fruit_b
  from basket_a 
  right join basket_b on fruit_a = fruit_b where a is null;
 
--outer join 
   select a, fruit_a, b, fruit_b
  from basket_a 
  right join basket_b on fruit_a = fruit_b where a is null;
-- full join 
   select a, fruit_a, b, fruit_b
  from basket_a 
  right join basket_b on fruit_a = fruit_b where a is null;
 
   
 