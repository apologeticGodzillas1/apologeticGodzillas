drop database if exists valence;

create database valence;

use valence;

create table if not exists users (
  id int(4) primary key auto_increment,
  username varchar(15) unique
);

create table if not exists entries (
  id int(5) primary key auto_increment,
  users_id int(2),
  mind1 int(2),
  mind2 int(2),
  mind3 int(2),
  body1 int(2),
  body2 int(2),
  body3 int(2),
  soul1 int(2),
  soul2 int(2),
  soul3 int(2),
  foreign key (users_id) references users(id)
);


 -- To run, enter the following in the Terminal:
 -- mysql -u root < server/schema.sql
