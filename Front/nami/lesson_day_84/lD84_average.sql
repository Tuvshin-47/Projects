--- average , sum, min , max aggregate functions

create table weather_data(
    date date,
    city text,
    temperature numeric
);
INSERT INTO weather_data (date, city, temperature) VALUES
  ('2024-03-01', 'New York', 5.5),
  ('2024-03-01', 'Los Angeles', 22.0),
  ('2024-03-01', 'Chicago', 2.0),
  ('2024-03-02', 'New York', 7.0),
  ('2024-03-02', 'Los Angeles', 23.5),
  ('2024-03-02', 'Chicago', 3.5),
  ('2024-03-03', 'New York', 6.5),
  ('2024-03-03', 'Los Angeles', 21.5),
  ('2024-03-03', 'Chicago', 1.0);
  
select * from weather_data;

-- niit hotuudin average temp oloh
select avg(temperature) as avg_temperature from weather_data;





-- hotuudin dundaj temp hed baisan be 
select city , avg(temperature) as avg_temperature from weather_data group by city order by avg_temperature desc;

select city , avg(temperature) as avg_temperature, 
             avg(temperature) filter (where date >= '2024-03-03') as avg_temperature_since_3rd 
             from weather_data 
             group by city;
             
--temp rounding
            select round (avg(temperature),2)as avg_temperature from weather_data ;
-- max aggregate function / hamgiin ih zahialga
           select  max(order_amount) as largest_order from orders ;
           --hamgiin suulchiin zahialsan udur
          select max(order_date) as latest_order_date from orders;
          --hen gedeg hereglegch hamgiin ih zahialga hiisen be 
         select customer_id , max(order_amount) as largest_order from orders group by customer_id  order by largest_order desc;
        
        -- 4 sariinhiig hamgiin ih zahialgatai haritsuulj haruulah
        select max(order_amount) as max_overall,
               max(order_amount) filter (where extract(month from order_date)=4) as max_in_april from orders ;     
               
         --sum aggregate function
              --with
              with sales (product_id, quantity, price) as(values
              (1,10,100.0),
              (2, 5, 50.0),
              (1,5,100.0),
              (3,3, 75.0),
              (2,2,50.0)
              )
              select sum(quantity* price ) as total_revenue from sales;
              select sum(amount) from payment ;