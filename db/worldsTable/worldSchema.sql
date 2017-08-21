create table if not exists worlds
(
  worldID serial primary key,
  authID varchar(80) not null,
  worldName varchar(40) not null,
  worldEra varchar(40),
  worldUni varchar(40),
  worldLand varchar(80),
  worldPractice varchar(80),
  worldInhab varchar(80),
  worldDesc text,
  worldLore text
);