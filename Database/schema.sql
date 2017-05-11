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
  mindSleep int(2),
  mindRead int(2),
  bodyExercise int(2),
  bodyWater int(2),
  soulMood int(2),
  soulYoga int(2),
  foreign key (users_id) references users(id)
);


 -- To run, enter the following in the Terminal:
 -- mysql -u root < server/schema.sql
