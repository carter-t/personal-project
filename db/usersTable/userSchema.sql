create table if not exists users
(
  userID serial primary key,
  authID varchar(80) not null unique,
  userName varchar(40) not null unique,
  firstName varchar(40),
  lastName varchar(40)
);