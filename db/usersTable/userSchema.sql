create table if not exists users
(
  userID serial primary key,
  authID varchar(80) not null unique,
  userName varchar(40) not null,
  userEmail varchar(40) not null unique,
  userImage text not null
);