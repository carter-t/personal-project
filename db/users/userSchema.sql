create table if not exists users
(
  ID serial primary key,
  tag varchar(80) not null unique,
  name varchar(40) not null,
  email varchar(40) not null unique,
  image text not null
);