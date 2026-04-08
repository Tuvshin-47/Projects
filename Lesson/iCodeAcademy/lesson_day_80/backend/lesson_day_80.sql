-- lesson day 80

-- student - DONE
-- teacher - DONE
-- class - DONE
-- classroom - DONE
-- classroom_schedule - DONE


-- TODO

-- Parents (parent_id, first_name, last_name, contact_info) -> students холбогдоно
-- Departments (department_id, )
-- Courses

-- Primary Key
-- users table - user_id, user_name, email, phone

create table users (
	user_id INTEGER,
	user_name VARCHAR(255),
	email VARCHAR(255),
	phone INTEGER
);

-- 3 Дата нэмнэ үү
insert into users
(user_id, user_name, email, phone)
values
(1, 'khangai', 'khangaikhuu@hey.com', 94012789),
(2, 'tuvshin', 'tuvshin@hey.com', 97122789),
(3, 'tuguldur', 'tuguldur@hey.com', 95012789),
(1, 'khangai', 'khangaikhuu@hey.com', 94012789),
(2, 'tuvshin', 'tuvshin@hey.com', 97122789),
(3, 'tuguldur', 'tuguldur@hey.com', 95012789)
;

select * from users; -- бүх хэрэглэгч table дотроос утгуудыг хэвлэх

insert into users
(user_id, user_name, email, phone)
values
(1, 'khangai', 'khangaikhuu@hey.com', 94012789),
(2, 'tuvshin', 'tuvshin@hey.com', 97122789),
(3, 'tuguldur', 'tuguldur@hey.com', 95012789);

select * from users; -- бүх хэрэглэгч table дотроос утгуудыг хэвлэх

-- filter буюу where clause
select * from users where user_id = 1;

-- Data redundancy

-- PRIMARY KEY буюу мөрийг бусад мөрний датанаас ялгаж авах unique
-- цорын ганц гэдгийг илэрхийлдэг зүйлийг оруулж ирэх шаардлагатай.

alter table users add constraint pk_users primary KEY(user_id);


delete from users where user_id = 1;
delete from users where user_id = 4;
delete from users where user_id = 6;


