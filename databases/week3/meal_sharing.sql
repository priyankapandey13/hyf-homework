create database meal_sharing;
use meal_sharing;

SET NAMES utf8mb4;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` decimal(6,4) NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE,
  CONSTRAINT `fk_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `created_date` DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




-- meal

-- insert into meal value (null, 'Yellow lentils soup', 'Yellow lentils soup is made with yellow lentils cooked together aromatic spices', 'Amagar','2020-02-15 13:16:30' ,'8', '30', '2020-02-17');

insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (1, 'Yellow lentils soup', 'Yellow lentils soup is made with yellow lentils cooked together aromatic spices', 'Amagar','2020-02-15 13:16:30' ,'8', '30', '2020-02-17');
-- insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (2, 'Black lentils soup', 'Black lentils soup is made with black lentils cooked together aromatic spices', 'WestAmagar','2020-02-14 15:16:30' '5', '70', '2020-02-16');
-- insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (3, 'Burger', 'Chicken/ Veg burger with spicy sauce', 'Orested','2020-02-13 10:15:30' '18', '50', '2020-02-15');
-- insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (4, 'Noodles', 'Chicken/ Veg steir fry noodles', 'Enghavesvej','2020-02-12 14:56:30' '17', '60', '2020-02-14');


-- reservation
insert into reservation (id, number_of_guests, meal_id, created_date) values (1, 20, 3, '2020-02-17');
insert into reservation (id, number_of_guests, meal_id, created_date) values (2, 13, 4, '2020-02-10');
insert into reservation (id, number_of_guests, meal_id, created_date) values (3, 8, 1, '2020-02-15');
insert into reservation (id, number_of_guests, meal_id, created_date) values (4, 15, 2, '2020-02-16');


-- review
insert into review (id, title, description, meal_id, stars, created_date) values (1, 'Not good','It was not tasty', 1, 2,'2020-02-15' );
insert into review (id, title, description, meal_id, stars, created_date) values (2, 'Good','It was good', 4.5, 4,'2020-02-13' );
insert into review (id, title, description, meal_id, stars, created_date) values (3, 'Okay','It was okay', 2.5, 2,'2020-02-16' );
insert into review (id, title, description, meal_id, stars, created_date) values (4, 'Awesome','It was really awesome', 5, 3,'2020-02-14' );




select * from meal;
select * from reservation;
select * from review;

drop table meal;
drop table reservation;
drop table review;
