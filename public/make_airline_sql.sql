DROP DATABASE IF EXISTS airline;
CREATE DATABASE airline;
USE airline;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS airport;

DROP TABLE IF EXISTS boarding_pass;

DROP TABLE IF EXISTS booked_seats;

DROP TABLE IF EXISTS bookings;

DROP TABLE IF EXISTS flights;

DROP TABLE IF EXISTS customer;

SET FOREIGN_KEY_CHECKS = 1;

/*create tables*/
CREATE TABLE airport (
    airport_code CHAR(3) NOT NULL,
    airport_name CHAR(40) NOT NULL,
    city CHAR(20) NOT NULL,
    timezone TEXT NOT NULL,
    PRIMARY KEY (airport_code)
);

CREATE TABLE flights (
    flight_id INT NOT NULL,
    flight_no CHAR(6) NOT NULL,
    scheduled_departure DATETIME NOT NULL,
    scheduled_arrival DATETIME NOT NULL,
    departure_airport CHAR(3) NOT NULL,
    arrival_airport CHAR(3) NOT NULL,
    flight_status VARCHAR(20) NOT NULL,
    economy_seats_available INT NOT NULL,
    economy_seats_booked INT NOT NULL,
    first_class_seats_available INT NOT NULL,
    first_class_seats_booked INT NOT NULL,
    PRIMARY KEY (flight_id),
    FOREIGN KEY (arrival_airport) REFERENCES airport(airport_code),
    FOREIGN KEY (departure_airport) REFERENCES airport(airport_code),
    CHECK (scheduled_arrival > scheduled_departure),
    CHECK (flight_status IN ('On Time', 'Delayed', 'Departed', 'Arrived', 'Scheduled', 'Cancelled'))
);

CREATE TABLE bookings (
    book_ref CHAR(6) NOT NULL,
    book_date DATETIME NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY(book_ref)
);

CREATE TABLE boarding_pass (
    boarding_no INT AUTO_INCREMENT,
    flight_id INT NOT NULL,
    book_ref CHAR(6) NOT NULL,
    seat_no INT NOT NULL,
    fare_class VARCHAR(11) NOT NULL,
    fare_amount DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY(boarding_no),
    FOREIGN KEY(book_ref) REFERENCES bookings(book_ref),
    FOREIGN KEY(flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE booked_seats (
	flight_id INT NOT NULL,
    seat_no INT NOT NULL,
    PRIMARY KEY (flight_id, seat_no),
    FOREIGN KEY (flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE customer (
    passenger_id INT AUTO_INCREMENT,
    passenger_name VARCHAR(50) NOT NULL,
    phone_no char(10) NOT NULL,
    email VARCHAR(50) NOT NULL,
    boarding_no INT NOT NULL,
    card_no VARCHAR(16) NOT NULL,
    boarded VARCHAR(3) NOT NULL,
    PRIMARY KEY (passenger_id)  
);

/* INSERT VALUES */
/* airport table */
INSERT INTO airport
VALUES
('HOU', 'George Bush Airport', 'Houston', 'CT'),
('JFK', 'John F Kennedy Airport', 'New York', 'ET'),
('LAX', 'Los Angeles Airport', 'Los Angeles', 'PT'),
('ORD', 'O Hare Airport', 'Chicago', 'CT'),
('MIA', 'Miami Airport', 'Miami', 'ET');


/* flights table */
INSERT INTO flights
VALUES
(1001, 'PG0010', '2020-11-10 09:50:00', '2020-11-10 14:55:00', 'HOU', 'JFK', 'Scheduled', 40, 0, 10, 0),
(1002, 'PG0020', '2020-11-11 09:50:00', '2020-11-11 15:55:00', 'LAX', 'JFK', 'Scheduled', 40, 0, 10, 0),
(1003, 'PG0030', '2020-11-11 09:50:00', '2020-11-11 16:55:00', 'ORD', 'MIA', 'Scheduled', 40, 0, 10, 0),
(1004, 'PG0040', '2020-11-12 09:50:00', '2020-11-12 12:55:00', 'JFK', 'ORD', 'Scheduled', 40, 0, 10, 0),
(1005, 'PG0050', '2020-11-12 09:50:00', '2020-11-12 12:55:00', 'MIA', 'LAX', 'Scheduled', 40, 0, 10, 0),
(1006, 'PG0060', '2020-11-13 09:50:00', '2020-11-13 12:55:00', 'JFK', 'HOU', 'Scheduled', 40, 0, 10, 0),
(1007, 'PG0070', '2020-11-14 09:50:00', '2020-11-14 12:55:00', 'JFK', 'LAX', 'Scheduled', 40, 0, 10, 0),
(1008, 'PG0080', '2020-11-14 09:50:00', '2020-11-14 16:55:00', 'MIA', 'ORD', 'Scheduled', 40, 0, 10, 0),
(1009, 'PG0090', '2020-11-15 09:50:00', '2020-11-15 12:55:00', 'ORD', 'JFK', 'Scheduled', 40, 0, 10, 0),
(1010, 'PG0100', '2020-11-12 09:50:00', '2020-11-12 12:55:00', 'LAX', 'MIA', 'Scheduled', 40, 0, 10, 0);

select * from flights;