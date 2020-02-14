
--  ++++++++++++++++++++++++++++++++		Part 1: Working with tasks		++++++++++++++++++++++++++++++++ 

select * from task;

	-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
	insert into task ( title, description, created, updated, due_date, status_id) values ( 'Wash car', 'Dont forget', '2017-10-25 07:54:16', '2017-10-15 13:05:09', null, 2);

	-- Change the title of a task
	update task
	set title = 'Plan meeting with Priyanka'
	where id = 3;

	-- Change a task due date
	update task
	set due_date = '2020-02-08 14:31:02'
	where id = 1;
    
--     Change a task status 		+		 Mark a task as complete

	update task
	set status_id = '3'
	where id = 1;
    
  
--     Delete a task
	delete from task
	where id = 21;
    
    
    
--  ++++++++++++++++++++++++++++++++		Part 2: School database		++++++++++++++++++++++++++++++++ 


-- Create a new database containing the following tables:
create database hyf_homework_DB2;
use hyf_homework_DB2;

SET NAMES utf8mb4;


-- Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NULL DEFAULT NULL,
  `ends` DATETIME NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

select * from Class;

-- Class
insert into Class (id, name, begins, ends) values (1, 'Aarika Ellingworth', '2017-10-15 13:05:09', '2017-10-25 06:54:16');
insert into Class (id, name, begins, ends) values (2, 'Pren Goldsworthy', '2017-10-20 04:14:31', '2017-10-08 06:14:31');
insert into Class (id, name, begins, ends) values (3, 'Pablo Kisbee', '2017-12-25 16:00:46', '2017-12-24 15:01:16');
insert into Class (id, name, begins, ends) values (4, 'Rodie Duncan', '2017-11-30 16:00:46', '2017-10-28 10:30:40');



-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,  
  CONSTRAINT `fk_class_id` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

select * from Student;

-- Student
insert into Student (id, name, email, phone, class_id) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795', 1);
insert into Student (id, name, email, phone, class_id) values (2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467', 2);
insert into Student (id, name, email, phone, class_id) values (3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683', 3);
insert into Student (id, name, email, phone, class_id) values (4, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191', 4);



-- to ask from mantors

-- what these 2 lines below do
--   CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--     If you are done with the above tasks, you can continue with these advanced tasks:
	-- Create an index on the name column of the student table.
	-- Did not really inderstood the question

--         Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE Student ADD status ENUM('not-started', 'ongoing', 'finished');

update Student set status = 'finished' where id = 1;
update Student set status = 'ongoing' where id = 2; 
update Student set status = 'not-started' where id = 3;
update Student set status = 'ongoing' where id = 4;



-- ALTER TABLE Student DROP COLUMN status;


-- what is this for : "[FIRST|AFTER existing_column]" ??
-- ADD [COLUMN] column_name column_definition [FIRST|AFTER existing_column];



--  ++++++++++++++++++++++++++++++++		Part 3: More queries		++++++++++++++++++++++++++++++++ 

-- You should do these queries on the database hyf_lesson2, which we created last class. You can find the data here if you need to create the DB again.

use hyf_lesson2;

--  Get all the tasks assigned to users whose email ends in @spotify.com

SELECT * FROM user
where email like '%@spotify.com';



-- select * from task where status_id != 3;
-- Use join status on task.status_id = status.id where status.name LIKE 'done'


-- GROUP BY status.name
-- order by count(status_id) desc;

select title 
from task
join user_task on task.id = user_task.task_id
join user on user.id = user_task.user_id
where user.email like '%@spotify.com';


-- Get all the tasks for 'Donald Duck' with status 'Not started'

select title , status_id
from task
join user_task on user_task.task_id = task.id
join user on user.id = user_task.user_id
where user.name like 'Donald Duck' and status_id like 1;


-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select title , status_id, task.created
from task
join user_task on user_task.task_id = task.id
join user on user.id = user_task.user_id
where user.name like 'Maryrose Meadows' and month(task.created) = 9;


-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

select monthname(created) as Created_month, count(created) as Task_numbers
from task
GROUP BY monthname(created);

