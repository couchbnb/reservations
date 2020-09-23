CREATE DATABASE couch_reservations;

USE couch_reservations;

CREATE TABLE listings (
  id INT NOT NULL AUTO-INCREMENT,
  listing_id INT,
  base_price INT,
  surge_price INT,
  PRIMARY KEY (id)
)

CREATE TABLE reservations (
  id INT NOT NULL AUTO-INCREMENT,
  listing_id INT,
  PRIMARY KEY (id)
)