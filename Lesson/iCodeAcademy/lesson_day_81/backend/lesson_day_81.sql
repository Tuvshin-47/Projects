-- lesson day 81

-- alter table - add column, update column, delete column
-- foreign key constraint

-- Create tables with proper relationships in logical order

-- 1. PARENTS table
CREATE TABLE parents (
    parent_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    relationship VARCHAR(30),
    phone_number VARCHAR(20),
    email VARCHAR(100)
);
-- insert into parents 3 rows

-- 2. DEPARTMENTS table (without dept_head FK initially)
CREATE TABLE departments (
    department_id INTEGER PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    description TEXT,
    dept_head_id INTEGER -- Will be set after teachers table creation
);

-- 3. TEACHERS table
CREATE TABLE teachers (
    teacher_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    specialization VARCHAR(100),
    employment_date DATE,
    contact_info VARCHAR(100),
    department_id INTEGER REFERENCES departments(department_id)
);

-- Insert sample parents
INSERT INTO parents (parent_id, first_name, last_name, relationship, phone_number, email)
VALUES 
(1, 'Robert', 'Johnson', 'Father', '555-987-6543', 'robert.johnson@email.com'),
(2, 'Emily', 'Martinez', 'Mother', '555-876-5432', 'emily.martinez@email.com'),
(3, 'David', 'Thompson', 'Guardian', '555-765-4321', 'david.thompson@email.com');
-- Insert sample departments
INSERT INTO departments (department_id, department_name, description, dept_head_id)
VALUES 
(1, 'Mathematics', 'Department of Mathematics and Statistics', NULL),
(2, 'Science', 'Department of Natural Sciences including Physics, Chemistry and Biology', NULL),
(3, 'Languages', 'Department of English, Spanish and other language studies', NULL);

-- Insert sample teachers
INSERT INTO teachers (teacher_id, first_name, last_name, specialization, employment_date, contact_info, department_id)
VALUES 
(1, 'John', 'Smith', 'Calculus',  '2020-08-15', '123 Faculty Drive, Anytown', 1),
(2, 'Sarah', 'Johnson', 'Physics', '2019-06-20', '456 University Lane, Anytown',  2),
(3, 'Michael', 'Williams', 'English Literature',  '2021-01-10', '789 College Road, Anytown', 3);


select * from departments;
select * from teachers;

select d.department_id, d.department_name, t.first_name, t.specialization  
from departments as d , teachers as t where d.department_id  = t.department_id; -- 
-- alias гэдэг нь departments -> d гэж тодорхойлохыг хэлнэ

-- teachers table-аас зөвхөн  нэр овгийг нь харуулна уу
select first_name, last_name from teachers;

-- teachers table-аас 1 гэдэг id-тэй багшийг нэр болон овог бас id-тай нь сонгоё
select teacher_id, first_name, last_name from teachers where teacher_id = 1;

-- department table-аас зөвхөн department_id, department_name-ийг нь харуулна уу
select department_id, department_name from departments;

-- 4. Now set the foreign key for department head
ALTER TABLE departments
ADD CONSTRAINT fk_dept_head
FOREIGN KEY (dept_head_id) REFERENCES teachers(teacher_id);


-- try to add new teachers
INSERT INTO teachers (teacher_id, first_name, last_name, specialization, employment_date, contact_info, department_id)
VALUES 
(4, 'Johnny', 'Depp', 'Art',  '2023-09-15', '123 Faculty Drive, Anytown', 3);





-- 5. CLASSES table
CREATE TABLE classes (
    class_id INTEGER PRIMARY KEY,
    class_name VARCHAR(50) NOT NULL,
    grade_level INTEGER,
    academic_year INTEGER,
    homeroom_teacher_id INTEGER REFERENCES teachers(teacher_id)
);

-- 6. CLASSROOMS table
CREATE TABLE classrooms (
    classroom_id INTEGER PRIMARY KEY,
    room_number VARCHAR(20) NOT NULL,
    building VARCHAR(50),
    floor VARCHAR(10),
    capacity INTEGER
);

-- 7. STUDENTS table
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(10),
    parent_id INTEGER REFERENCES parents(parent_id),
    class_id INTEGER REFERENCES classes(class_id)
);

-- 8. COURSES table
CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_code VARCHAR(20) NOT NULL,
    credit_hours INTEGER,
    description TEXT,
    department_id INTEGER REFERENCES departments(department_id)
);

-- 9. CLASS_SCHEDULES junction table
CREATE TABLE class_schedules (
    schedule_id INTEGER PRIMARY KEY,
    student_id INTEGER REFERENCES students(student_id),
    classroom_id INTEGER REFERENCES classrooms(classroom_id),
    class_id INTEGER REFERENCES classes(class_id),
    teacher_id INTEGER REFERENCES teachers(teacher_id),
    course_id INTEGER REFERENCES courses(course_id),
    day_of_week VARCHAR(10) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    
    -- Prevent scheduling conflicts for classrooms
    CONSTRAINT unique_classroom_schedule 
    UNIQUE (classroom_id, day_of_week, start_time)
);

-- Create useful indexes
CREATE INDEX idx_student_name ON students(last_name, first_name);
CREATE INDEX idx_teacher_name ON teachers(last_name, first_name);
CREATE INDEX idx_course_code ON courses(course_code);
CREATE INDEX idx_class_schedules_day ON class_schedules(day_of_week);