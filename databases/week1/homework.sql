-- ques1 : Find out how many tasks are in the task table
select count(id)
from task;


-- ques2 : Find out how many tasks in the task table do not have a valid due date

select count(title)
from task
where due_date is null;


-- ques3 : Find all the tasks that are marked as done

select count(title)
from task
where status_id = 3 ;


-- ques4 : Find all the tasks that are not marked as done

select count(title)
from task
where status_id = '1' or status_id = '2';


-- ques5 : Get all the tasks, sorted with the most recently created first

select *
from task
order by due_date desc;


-- ques6 : Get the single most recently created task

select (id)
,(title)
,(description)
,(created)
,(updated)
,(due_date)
,(status_id)
,(user_id)
from task
order by due_date desc limit 1;



-- ques7 : Get the title and due date of all tasks where the title or description contains database

select (title) ,(due_date)
from task
where title like '%database%' OR description like '%database%';



-- ques8 : Get the title and status (as text) of all tasks

select task.title, status.name
from task join status on task.status_id=status.id;


-- ques9 : Get the name of each status, along with a count of how many tasks have that status

select count(status_id), name
from status join task on status.id = task.status_id
GROUP BY status.name;


-- ques10 : Get the names of all statuses, sorted by the status with most tasks first

select count(status_id), name 
from status join task on status.id = task.status_id
GROUP BY status.name
order by count(status_id) desc;
