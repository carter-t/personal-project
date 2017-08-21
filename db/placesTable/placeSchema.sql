create table if not exists places
(
  novelID serial primary key,
  authID varchar(80) not null,
  placeName varchar(40) not null unique,
  placeEra varchar(40),
  placeLocation varchar(40),
  placeType varchar(80),
  placeLand varchar(80),
  placeContext varchar(80),
  placeDesc text
  placeOrigin text
);