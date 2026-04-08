-- Create tables with proper relationships in logical order

-- 1. PARENTS table
CREATE TABLE parents (
    parent_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    relationship VARCHAR(30),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address TEXT
);

-- 2. DEPARTMENTS table (without dept_head FK initially)
CREATE TABLE departments (
    department_id INTEGER PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    description TEXT,
    department_head_id INTEGER -- Will be set after teachers table creation
);

-- 3. CLASSROOMS table
CREATE TABLE classrooms (
    classroom_id INTEGER PRIMARY KEY,
    room_number VARCHAR(20) NOT NULL,
    location VARCHAR(100),
    capacity INTEGER,
    classroom_type VARCHAR(50),
    building VARCHAR(50),
    floor VARCHAR(10)
);

-- 4. LIBRARY_BOOKS table
CREATE TABLE library_books (
    book_id INTEGER PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100),
    publication_year INTEGER,
    isbn VARCHAR(20),
    category VARCHAR(50),
    available_copies INTEGER
);

-- 5. TEACHERS table
CREATE TABLE teachers (
    teacher_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    specialization VARCHAR(100),
    education VARCHAR(100),
    employment_date DATE,
    address TEXT,
    phone_number VARCHAR(20),
    email VARCHAR(100),
    department_id INTEGER REFERENCES departments(department_id)
);

-- 6. Now set the foreign key for department head
ALTER TABLE departments
ADD CONSTRAINT fk_department_head
FOREIGN KEY (department_head_id) REFERENCES teachers(teacher_id);

-- 7. CLASSES table
CREATE TABLE classes (
    class_id INTEGER PRIMARY KEY,
    class_name VARCHAR(50) NOT NULL,
    grade_level INTEGER,
    academic_year INTEGER,
    homeroom_teacher_id INTEGER REFERENCES teachers(teacher_id)
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

-- 9. STUDENTS table
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(10),
    address TEXT,
    phone_number VARCHAR(20),
    email VARCHAR(100),
    admission_date DATE,
    parent_id INTEGER REFERENCES parents(parent_id),
    class_id INTEGER REFERENCES classes(class_id)
);

-- 10. TIMETABLE table
CREATE TABLE timetable (
    timetable_id INTEGER PRIMARY KEY,
    class_id INTEGER REFERENCES classes(class_id),
    course_id INTEGER REFERENCES courses(course_id),
    teacher_id INTEGER REFERENCES teachers(teacher_id),
    classroom_id INTEGER REFERENCES classrooms(classroom_id),
    day_of_week VARCHAR(10) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    
    -- Prevent scheduling conflicts
    CONSTRAINT unique_classroom_time 
    UNIQUE (classroom_id, day_of_week, start_time)
);

-- 11. ENROLLMENTS table
CREATE TABLE enrollments (
    enrollment_id INTEGER PRIMARY KEY,
    student_id INTEGER REFERENCES students(student_id),
    course_id INTEGER REFERENCES courses(course_id),
    academic_year INTEGER,
    semester VARCHAR(20),
    enrollment_date DATE,
    status VARCHAR(20),
    
    -- Each student can enroll in a course only once per semester
    CONSTRAINT unique_enrollment 
    UNIQUE (student_id, course_id, academic_year, semester)
);

-- 12. GRADES table
CREATE TABLE grades (
    grade_id INTEGER PRIMARY KEY,
    enrollment_id INTEGER REFERENCES enrollments(enrollment_id),
    term_grade DECIMAL(5,2),
    final_grade DECIMAL(5,2),
    letter_grade VARCHAR(2),
    comments TEXT
);

-- 13. ATTENDANCE table
CREATE TABLE attendance (
    attendance_id INTEGER PRIMARY KEY,
    student_id INTEGER REFERENCES students(student_id),
    class_id INTEGER REFERENCES classes(class_id),
    course_id INTEGER REFERENCES courses(course_id),
    date DATE NOT NULL,
    status VARCHAR(20) NOT NULL, -- Present, Absent, Late, Excused
    remarks TEXT,
    
    -- Each student can have only one attendance record per class per day
    CONSTRAINT unique_attendance 
    UNIQUE (student_id, class_id, date)
);

-- 14. FEES table
CREATE TABLE fees (
    fee_id INTEGER PRIMARY KEY,
    student_id INTEGER REFERENCES students(student_id),
    amount DECIMAL(10,2) NOT NULL,
    fee_type VARCHAR(50) NOT NULL,
    due_date DATE,
    payment_date DATE,
    payment_status VARCHAR(20),
    payment_method VARCHAR(50)
);

-- 15. EXAMS table
CREATE TABLE exams (
    exam_id INTEGER PRIMARY KEY,
    exam_name VARCHAR(100) NOT NULL,
    course_id INTEGER REFERENCES courses(course_id),
    exam_type VARCHAR(50),
    exam_date DATE,
    start_time TIME,
    end_time TIME,
    total_score INTEGER
);

-- 16. EXAM_RESULTS table
CREATE TABLE exam_results (
    result_id INTEGER PRIMARY KEY,
    exam_id INTEGER REFERENCES exams(exam_id),
    student_id INTEGER REFERENCES students(student_id),
    score DECIMAL(5,2),
    grade VARCHAR(2),
    comments TEXT,
    
    -- Each student can have only one result per exam
    CONSTRAINT unique_exam_result 
    UNIQUE (exam_id, student_id)
);

-- 17. BOOK_ISSUES table
CREATE TABLE book_issues (
    issue_id INTEGER PRIMARY KEY,
    book_id INTEGER REFERENCES library_books(book_id),
    borrower_id INTEGER REFERENCES students(student_id),
    borrow_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    fine_amount DECIMAL(6,2),
    status VARCHAR(20)
);

-- Create useful indexes
CREATE INDEX idx_student_name ON students(last_name, first_name);
CREATE INDEX idx_teacher_name ON teachers(last_name, first_name);
CREATE INDEX idx_course_code ON courses(course_code);
CREATE INDEX idx_attendance_date ON attendance(date);
CREATE INDEX idx_exam_date ON exams(exam_date);
CREATE INDEX idx_book_title ON library_books(title);
CREATE INDEX idx_timetable_day ON timetable(day_of_week);



-- Insert sample data for PARENTS table
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

-- Insert sample data for LIBRARY_BOOKS table
INSERT INTO library_books (book_id, title, author, publication_year, isbn, category, available_copies)
VALUES 
(1, 'Algebra Fundamentals', 'Jane Smith', 2019, '978-1234567890', 'Mathematics', 5),
(2, 'Physics Principles', 'Robert Brown', 2020, '978-0987654321', 'Science', 3),
(3, 'English Grammar Guide', 'Emily Davis', 2018, '978-5678901234', 'Language', 4);

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

-- Insert sample data for CLASS_SCHEDULES table
INSERT INTO class_schedules (schedule_id, student_id, classroom_id, class_id, teacher_id, course_id, day_of_week, start_time, end_time)
VALUES 
(1, 1, 1, 1, 1, 1, 'Monday', '09:00:00', '10:30:00'),
(2, 2, 2, 2, 2, 2, 'Tuesday', '11:00:00', '12:30:00'),
(3, 3, 3, 3, 3, 3, 'Wednesday', '13:00:00', '14:30:00');

-- Insert sample data for TIMETABLE table
INSERT INTO timetable (timetable_id, class_id, course_id, teacher_id, classroom_id, day_of_week, start_time, end_time)
VALUES 
(1, 1, 1, 1, 1, 'Monday', '09:00:00', '10:30:00'),
(2, 2, 2, 2, 2, 'Tuesday', '11:00:00', '12:30:00'),
(3, 3, 3, 3, 3, 'Wednesday', '13:00:00', '14:30:00');

-- Insert sample data for ENROLLMENTS table
INSERT INTO enrollments (enrollment_id, student_id, course_id, academic_year, semester, enrollment_date, status)
VALUES 
(1, 1, 1, 2024, 'Spring', '2024-01-15', 'Active'),
(2, 2, 2, 2024, 'Spring', '2024-01-15', 'Active'),
(3, 3, 3, 2024, 'Spring', '2024-01-15', 'Active');

-- Insert sample data for GRADES table
INSERT INTO grades (grade_id, enrollment_id, term_grade, final_grade, letter_grade, comments)
VALUES 
(1, 1, 85.5, 88.0, 'B+', 'Good understanding of concepts but needs more practice with applications'),
(2, 2, 92.0, 94.5, 'A', 'Excellent work throughout the semester, particularly in lab experiments'),
(3, 3, 78.5, 82.0, 'B', 'Writing has improved significantly over the course of the semester');

-- Insert sample data for ATTENDANCE table
INSERT INTO attendance (attendance_id, student_id, class_id, course_id, date, status, remarks)
VALUES 
(1, 1, 1, 1, '2024-04-15', 'Present', NULL),
(2, 2, 2, 2, '2024-04-15', 'Absent', 'Medical appointment'),
(3, 3, 3, 3, '2024-04-15', 'Late', 'Arrived 10 minutes late');

-- Insert sample data for FEES table
INSERT INTO fees (fee_id, student_id, amount, fee_type, due_date, payment_date, payment_status, payment_method)
VALUES 
(1, 1, 500.00, 'Tuition', '2024-03-01', '2024-02-25', 'Paid', 'Credit Card'),
(2, 2, 500.00, 'Tuition', '2024-03-01', NULL, 'Unpaid', NULL),
(3, 3, 100.00, 'Laboratory', '2024-03-15', '2024-03-10', 'Paid', 'Bank Transfer');

-- Insert sample data for EXAMS table
INSERT INTO exams (exam_id, exam_name, course_id, exam_type, exam_date, start_time, end_time, total_score)
VALUES 
(1, 'Algebra Midterm', 1, 'Midterm', '2024-04-20', '09:00:00', '11:00:00', 100),
(2, 'Physics Quiz 2', 2, 'Quiz', '2024-04-22', '11:00:00', '12:00:00', 50),
(3, 'English Composition Final', 3, 'Final', '2024-06-15', '13:00:00', '15:00:00', 100);

-- Insert sample data for EXAM_RESULTS table
INSERT INTO exam_results (result_id, exam_id, student_id, score, grade, comments)
VALUES 
(1, 1, 1, 86.5, 'B+', 'Good mastery of algebraic concepts'),
(2, 2, 2, 48.0, 'A', 'Excellent understanding of mechanics principles'),
(3, 3, 3, 79.0, 'B', 'Good essay structure but needs work on grammar');

-- Insert sample data for BOOK_ISSUES table
INSERT INTO book_issues (issue_id, book_id, borrower_id, borrow_date, due_date, return_date, fine_amount, status)
VALUES 
(1, 1, 1, '2024-04-01', '2024-04-15', '2024-04-14', 0.00, 'Returned'),
(2, 2, 2, '2024-04-05', '2024-04-19', NULL, 0.00, 'Borrowed'),
(3, 3, 3, '2024-04-10', '2024-04-24', '2024-04-26', 2.00, 'Returned Late');

SELECT * FROM actor;
