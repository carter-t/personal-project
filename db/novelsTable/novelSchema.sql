create table if not exists novels
(
  novelID serial primary key,
  authID varchar(80) not null,
  novelTitle varchar(40) not null unique,
  novelVolume varchar(40),
  novelGenre varchar(40),
  novelWorlds varchar(40),
  novelFactions varchar(40),
  novelPlaces varchar(40),
  novelPeople varchar(40),
  novelSynopsis text
);