create table users
(
  userID serial primary key,
  firstName varchar(40) not null,
  lastName varchar(40) not null,
  email varchar(40) not null unique,
  username varchar(40) not null unique,
  password varchar(40) not null
);