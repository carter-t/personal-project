create table photos
(
  photoID serial primary key,
  userID integer references users not null,
  URL (BLOB) not null unique
);