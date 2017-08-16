create table content
(
  contentID serial primary key,
  userID integer references users not null,
  rating (integer???) not null,
  comment text not null
);