create table if not exists factions
(
  factionID serial primary key,
  authID varchar(80) not null,
  factionName varchar(40) not null unique,
  factionAlign varchar(40),
  factionMantra varchar(40),
  factionType varchar(80),
  factionPowers varchar(80),
  factionHoldings varchar(80),
  factionDesc text,
  factionOrigin text
);