INSERT INTO parents (parent_id, first_name, last_name, relationship, phone_number, email, address)
VALUES 
(1, 'Robert', 'Johnson', 'Father', '555-987-6543', 'robert.johnson@email.com', '123 Family Street, Anytown'),
(2, 'Emily', 'Martinez', 'Mother', '555-876-5432', 'emily.martinez@email.com', '456 Parent Avenue, Anytown'),
(3, 'David', 'Thompson', 'Guardian', '555-765-4321', 'david.thompson@email.com', '789 Home Boulevard, Anytown');


-- Insert sample data for DEPARTMENTS table (without department head initially)
INSERT INTO departments (department_id, department_name, description, department_head_id)
VALUES 
(1, 'Mathematics', 'Department of Mathematics and Statistics', NULL),
(2, 'Science', 'Department of Natural Sciences including Physics, Chemistry and Biology', NULL),
(3, 'Languages', 'Department of English, Spanish and other language studies', NULL);

-- Insert sample data for CLASSROOMS table
INSERT INTO classrooms (classroom_id, room_number, location, capacity, classroom_type, building, floor)
VALUES 
(1, '101', 'Main Building', 30, 'Standard', 'A Building', '1'),
(2, '202', 'Science Wing', 25, 'Laboratory', 'B Building', '2'),
(3, '303', 'Language Center', 20, 'Multimedia', 'C Building', '3');

-- Insert sample data for TEACHERS table
INSERT INTO teachers (teacher_id, first_name, last_name, specialization, education, employment_date, address, phone_number, email, department_id)
VALUES 
(1, 'John', 'Smith', 'Calculus', 'PhD in Mathematics', '2020-08-15', '123 Faculty Drive, Anytown', '555-123-4567', 'john.smith@school.edu', 1),
(2, 'Sarah', 'Johnson', 'Physics', 'MSc in Physics', '2019-06-20', '456 University Lane, Anytown', '555-234-5678', 'sarah.johnson@school.edu', 2),
(3, 'Michael', 'Williams', 'English Literature', 'MA in English', '2021-01-10', '789 College Road, Anytown', '555-345-6789', 'michael.williams@school.edu', 3);

-- Update DEPARTMENTS with department heads
UPDATE departments SET department_head_id = 1 WHERE department_id = 1;
UPDATE departments SET department_head_id = 2 WHERE department_id = 2;
UPDATE departments SET department_head_id = 3 WHERE department_id = 3;

-- Insert sample data for CLASSES table
INSERT INTO classes (class_id, class_name, grade_level, academic_year, homeroom_teacher_id)
VALUES 
(1, '10A', 10, 2024, 1),
(2, '11B', 11, 2024, 2),
(3, '12C', 12, 2024, 3);

-- Insert sample data for COURSES table
INSERT INTO courses (course_id, course_name, course_code, credit_hours, description, department_id)
VALUES 
(1, 'Advanced Algebra', 'MATH301', 4, 'Advanced topics in algebra for senior students', 1),
(2, 'Physics Mechanics', 'PHYS201', 4, 'Fundamental principles of mechanics and motion', 2),
(3, 'English Composition', 'ENGL101', 3, 'Basic principles of writing and composition', 3);

-- Insert sample data for STUDENTS table
INSERT INTO students (student_id, first_name, last_name, date_of_birth, gender, address, phone_number, email, admission_date, parent_id, class_id)
VALUES 
(1, 'James', 'Johnson', '2006-05-12', 'Male', '123 Family Street, Anytown', '555-111-2222', 'james.johnson@student.edu', '2022-09-01', 1, 1),
(2, 'Maria', 'Martinez', '2005-11-28', 'Female', '456 Parent Avenue, Anytown', '555-222-3333', 'maria.martinez@student.edu', '2021-09-01', 2, 2),
(3, 'Thomas', 'Thompson', '2004-07-03', 'Male', '789 Home Boulevard, Anytown', '555-333-4444', 'thomas.thompson@student.edu', '2020-09-01', 3, 3);



select * from parents;
