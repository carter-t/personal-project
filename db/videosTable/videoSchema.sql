create table videos
(
  videoID serial primary key,
  userID integer references users not null,
  URL (BLOB) not null unique
);