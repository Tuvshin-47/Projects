-- 1. 120 минутаас урт киноны жагсаалтыг (title and description) үүсгэ.
select   f.title  as "kinonii ner", f.length as "urgeljleh hugatsaa" from film f
where f.length >120
order by f.length asc;
-- 2. Дэлгүүр бүрийн хаягууд юу вэ?
select a.address as "delguuriin hayg"  from address a 