-- create table if not exists cubes (
--   tag varchar(80) not null,
--   name varchar(40) not null unique,
--   fronttype varchar(40) not null,
--   frontfile varchar(40) not null,
--   lefttype varchar(40) not null,
--   leftfile varchar(40) not null,
--   righttype varchar(40) not null,
--   rightfile varchar(40) not null,
--   backtype varchar(40) not null,
--   backfile varchar(40) not null,
--   toptype varchar(40) not null,
--   topfile varchar(40) not null,
--   bottomtype varchar(40) not null,
--   bottomfile varchar(40) not null
-- );

create table if not exists cubes (
  tag varchar(80) not null,
  name varchar(40) not null unique,
  frontface text not null,
  backface text not null,
  leftface text not null,
  rightface text not null,
  topface text not null,
  bottomface text not null
);