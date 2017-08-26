create table if not exists users
(
  userID serial primary key,
  usertag varchar(80) not null unique,
  username varchar(40) not null,
  email varchar(40) not null unique,
  image text not null
);