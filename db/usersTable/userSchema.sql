create table if not exists users
(
  userID serial primary key,
  authID varchar(40) not null unique,
  firstName varchar(40) not null,
  lastName varchar(40) not null
);