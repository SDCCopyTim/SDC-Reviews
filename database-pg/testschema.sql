drop database if exists testtim;

-- create a sinfonifry database
create database testtim;

\c testtim;

DROP TABLE if exists testreviews;

CREATE TABLE testreviews
(
  id SERIAL, -- The primary key
  campgroundid integer NOT NULL, -- The foreign key
  username varchar NOT NULL,
  profilephoto varchar NOT NULL,
  reviewdate date NOT NULL,
  PRIMARY KEY (id)
)