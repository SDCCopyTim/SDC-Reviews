drop database if exists copytim;

-- create a sinfonifry database
create database copytim;

\c copytim;

DROP TABLE if exists reviews;

CREATE TABLE reviews
(
  id integer NOT NULL, -- The primary key
  campgroundId integer NOT NULL, -- The foreign key
  username varchar NOT NULL,
  bodyText varchar NOT NULL,
  profilePhoto varchar NOT NULL,
  helpful integer NOT NULL,
  date date NOT NULL,
  userPhotos varchar NOT NULL,
  PRIMARY KEY (id)
)