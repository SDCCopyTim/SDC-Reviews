drop database if exists copytim;

-- create a sinfonifry database
create database copytim;

\c copytim;

DROP TABLE if exists reviews;

CREATE TABLE reviews
(
  id SERIAL, -- The primary key
  campgroundid integer NOT NULL, -- The foreign key
  username varchar NOT NULL,
  bodytext varchar NOT NULL,
  profilephoto varchar NOT NULL,
  helpful integer NOT NULL,
  reviewdate date NOT NULL,
  PRIMARY KEY (id)
)