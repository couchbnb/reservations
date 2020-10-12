CREATE DATABASE IF NOT EXISTS fec_res;

USE fec_res;

CREATE TABLE IF NOT EXISTS listings (
  id INT NOT NULL AUTO_INCREMENT,
  base_price FLOAT (6, 2) NOT NULL,
  tax FLOAT (4, 4) NOT NULL,
  service_fee FLOAT (4, 4) NOT NULL,
  cleaning_fee FLOAT (6, 2) NOT NULL,
  review_average FLOAT (3, 2) NOT NULL,
  review_count INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reservations (
  id INT NOT NULL AUTO_INCREMENT,
  listing_id INT NOT NULL,
  start_year INT NOT NULL,
  start_month INT NOT NULL,
  start_day INT NOT NULL,
  end_year INT NOT NULL,
  end_month INT NOT NULL,
  end_day INT NOT NULL,
  PRIMARY KEY (id)
);

/*
mysql -u root -p < schema.sql
mysql -u root -p
*/

