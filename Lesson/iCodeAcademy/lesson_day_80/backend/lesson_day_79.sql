-- sql declarative language - sequel
-- this is comment
-- Сургуульд шинээр элсэж буй сурагч бүрийг системд 
-- бүртгэх ёстой. Сурагч бүр дараах
-- мэдээллийг агуулах хэрэгтэй: сурагчийн 
-- ID дугаар, овог нэр, хүйс, төрсөн огноо, гэрийн хаяг,
-- холбоо барих утас, и-мэйл хаяг, элссэн огноо.

create table students (
	student_id INTEGER,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	date_of_birth DATE,
	gender BOOL,
	class_id INTEGER
);

--  бүх оюутнуудын датаг авмаар байна

select * from students; -- select сонгох

-- DROP table command
drop table students;

-- за тэгвэл эхний датагаа оруулъя
INSERT INTO students 
(student_id, first_name , last_name, date_of_birth , gender, class_id) 
VALUES
(1, 'Emily', 'Smith', '2007-05-10', true, 1),
(2, 'Jacob', 'Johnson', '2016-07-15', true, 1);
-- 3, 'Madison', 'Williams', '2015-03-20', 'Female', 2
-- 4, 'Olivia', 'Jones', '2013-09-30', 'Female', 2
-- 5, 'William', 'Jones', '2017-06-15', 'Male', 1

create table teachers (
	teacher_id INTEGER,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	specialization VARCHAR(100),
	employment_date DATE,
	contact_info VARCHAR(100),
	department_id INTEGER
);

-- 'John', 'Davis', 'Mathematics', '2020-08-15', 1
-- 'Susan', 'Miller', 'Biology', '2018-07-20', 2
-- 'David', 'Wilson', 'English Literature', '2019-06-10', 3
-- 'Jennifer', 'Moore', 'History', '2021-08-01', 4
-- 'Richard', 'Taylor', 'Music', '2017-09-05', 5

-- classes table
-- 1, '1A', 1, 2024, 1
-- 2, '2B', 2, 2024, 2
-- 3, '3C', 3, 2024, 3
-- 4, '4D', 4, 2024, 4
-- 5, '5E', 5, 2024, 5

-- INSERT INTO classrooms (room_number, class_location, capacity, classroom_type, building, floor)
-- values();
-- classrooms
-- 1, '101', 'Main Building', 30, 'Regular', 'Building A', '1'
-- 2, '102', 'Main Building', 30, 'Regular', 'Building A', '1'
-- 3, '201', 'Main Building', 25, 'Science Lab', 'Building A', '2'
-- 4, '202', 'Main Building', 40, 'Computer Lab', 'Building A', '2'
-- 5, '301', 'Arts Building', 35, 'Music Room', 'Building B', '3'

-- schedules
-- INSERT INTO class_schedules 
(schedule_id, student_id, classroom_id, class_id, teacher_id, day_of_week, start_time, end_time)
values
-- 1, 1, 1, 1, 1, 'Monday', '09:00:00', '10:00:00', 
-- 1, 2, 1, 3, 3, 'Monday', '10:30:00', '11:30:00',
-- 1, 5, 1, 5, 5, 'Monday', '13:00:00', '14:00:00',
-- 2, 1, 2, 1, 6, 'Tuesday', '09:00:00', '10:00:00',
-- 2, 1, 2, 1, 6, 'Tuesday', '09:00:00', '10:00:00',
-- 3, 2, 3, 3, 8, 'Wednesday', '09:00:00', '10:00:00'
-- 3, 4, 3, 4, 9, 'Wednesday', '10:30:00', '11:30:00',
-- 4, 3, 4, 2, 2, 'Thursday', '09:00:00', '10:00:00',
-- 4, 1, 4, 4, 4, 'Thursday', '10:30:00', '11:30:00',
-- 5, 5, 5, 5, 10, 'Friday', '09:00:00', '10:00:00'
-- 5, 2, 5, 3, 3, 'Friday', '10:30:00', '11:30:00',



	