create table if not exists people
(
  charID serial primary key,
  authID varchar(80) not null,
  firstName varchar(40) not null unique,
  lastName varchar(40),
  charTitle varchar(40),
  charAge varchar(40),
  charGender varchar(40),
  charRace varchar(40),
  charAlign varchar(40),
  charMantra varchar(40),
  charTemp varchar(40),
  charRole varchar(80),
  charValue varchar(80),
  charAbility varchar(80),
  charDesc text,
  charStory text
);