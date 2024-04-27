use airline;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS airport;

DROP TABLE IF EXISTS boarding_passes;

DROP TABLE IF EXISTS seats;

DROP TABLE IF EXISTS aircraft;

DROP TABLE IF EXISTS ticket;

DROP TABLE IF EXISTS ticket_flights;

DROP TABLE IF EXISTS bookings;

DROP TABLE IF EXISTS flights;

DROP TABLE IF EXISTS aircraft; 

DROP TABLE IF EXISTS customer;

SET FOREIGN_KEY_CHECKS = 1;
/*create tables*/
CREATE TABLE aircraft(
    aircraft_code CHAR(3) PRIMARY KEY,
    model CHAR(25),
    INDEX aircraft_code_index (aircraft_code),
    CONSTRAINT flights_aircraft_code_fkey FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code),
    CONSTRAINT seats_aircraft_code_fkey FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code) ON DELETE CASCADE
);
CREATE TABLE airport (
    airport_code CHAR(3) NOT NULL,
    airport_name CHAR(40),
    city CHAR(20),
    coordinates POINT,
    timezone TEXT,
    PRIMARY KEY (airport_code)
);

CREATE TABLE flights (
    flight_id INT NOT NULL,
    flight_no CHAR(6) NOT NULL,
    scheduled_departure DATETIME NOT NULL,
    scheduled_arrival DATETIME NOT NULL,
    departure_airport CHAR(3) NOT NULL,
    arrival_airport CHAR(3) NOT NULL,
    STATUS VARCHAR(20) NOT NULL,
    aircraft_code CHAR(3) NOT NULL,
    seats_available INT NOT NULL,
    seats_booked INT NOT NULL,
    PRIMARY KEY (flight_id),
    FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code),
    FOREIGN KEY (arrival_airport) REFERENCES airport(airport_code),
    FOREIGN KEY (departure_airport) REFERENCES airport(airport_code),
    CHECK (scheduled_arrival > scheduled_departure),
    CHECK (STATUS IN ('On Time', 'Delayed', 'Departed', 'Arrived', 'Scheduled', 'Cancelled'))
);

CREATE TABLE bookings (
    book_ref CHAR(6) NOT NULL,
    book_date DATETIME NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY(book_ref)
);

CREATE TABLE ticket(
    ticket_no CHAR(13) NOT NULL,
    book_ref CHAR(6) NOT NULL,
    passenger_id VARCHAR(20) NOT NULL,
    passenger_name TEXT NOT NULL,
    email CHAR(50),
    phone CHAR(15),
    PRIMARY KEY (ticket_no),
    FOREIGN KEY (book_ref) REFERENCES bookings(book_ref)
);

CREATE TABLE ticket_flights (
    ticket_no CHAR(13) NOT NULL,
    flight_id INT NOT NULL,
    fare_conditions VARCHAR(10) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (ticket_no, flight_id),
    FOREIGN KEY (flight_id) REFERENCES flights(flight_id),
    FOREIGN KEY (ticket_no) REFERENCES ticket(ticket_no),
    CHECK (amount >= 0),
    CHECK (fare_conditions IN ('Economy', 'Comfort', 'Business'))
);

CREATE TABLE boarding_passes (
    ticket_no CHAR(13) NOT NULL,
    flight_id INT NOT NULL,
    boarding_no INT NOT NULL,
    seat_no VARCHAR(4) NOT NULL,
    PRIMARY KEY(ticket_no, flight_id),
    FOREIGN KEY (ticket_no, flight_id) REFERENCES ticket_flights(ticket_no, flight_id)
);

CREATE TABLE seats (
    aircraft_code CHAR(3) NOT NULL,
    seat_no VARCHAR(4) NOT NULL,
    fare_conditions VARCHAR(10) NOT NULL,
    PRIMARY KEY (aircraft_code, seat_no),
    FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code),
    CHECK (fare_conditions IN ('Economy', 'Comfort', 'Business'))
);

CREATE TABLE customer (
    passenger_id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    telephone VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    boarding_no INT,
    party VARCHAR(20) NOT NULL,
    card_number VARCHAR(16) NOT NULL,
    flight_no CHAR(6) NOT NULL,
    boarded CHAR(3),
    PRIMARY KEY (passenger_id, boarding_no)  
);

/* INSERT VALUES */
/* airport table */
INSERT INTO airport
VALUES
('HOU', 'George Bush Airport', 'Houston', NULL, 'CT'),
('JFK', 'John F Kennedy Airport', 'New York', NULL, 'ET'),
('LAX', 'Los Angeles Airport', 'Los Angeles', NULL, 'PT'),
('ORD', 'O Hare Airport', 'Chicago', NULL, 'CT'),
('MIA', 'Miami Airport', 'Miami', NULL, 'ET');

/* aircraft */
INSERT INTO aircraft
VALUES
('773', 'Boeing 777-300'),
('763', 'Boeing 767-300'),
('SU9', 'Boeing 777-300'),
('320', 'Boeing 777-300'),
('321', 'Boeing 777-300');

/* flights table */
INSERT INTO flights
VALUES
(1001, 'PG0010', '2020-11-10 09:50:00', '2020-11-10 14:55:00', 'HOU', 'JFK', 'Scheduled', '773', 50, 0),
(1002, 'PG0020', '2020-11-11 09:50:00', '2020-11-11 15:55:00', 'LAX', 'JFK', 'Scheduled', '763', 50, 0),
(1003, 'PG0030', '2020-11-11 09:50:00', '2020-11-11 16:55:00', 'ORD', 'MIA', 'Scheduled', 'SU9', 50, 0),
(1004, 'PG0040', '2020-11-12 09:50:00', '2020-11-12 12:55:00', 'JFK', 'ORD', 'Scheduled', '320', 50, 0),
(1005, 'PG0050', '2020-11-12 09:50:00', '2020-11-12 12:55:00', 'MIA', 'LAX', 'Scheduled', '321', 50, 0),
(1006, 'PG0060', '2020-11-13 09:50:00', '2020-11-13 12:55:00', 'JFK', 'HOU', 'Scheduled', '773', 50, 0),
(1007, 'PG0070', '2020-11-14 09:50:00', '2020-11-14 12:55:00', 'JFK', 'LAX', 'Scheduled', '763', 50, 0),
(1008, 'PG0080', '2020-11-14 09:50:00', '2020-11-14 16:55:00', 'MIA', 'ORD', 'Scheduled', 'SU9', 50, 0),
(1009, 'PG0090', '2020-11-15 09:50:00', '2020-11-15 12:55:00', 'ORD', 'JFK', 'Scheduled', '320', 50, 0),
(1010, 'PG0100', '2020-11-12 09:50:00', '2020-11-12 12:55:00', 'LAX', 'MIA', 'Scheduled', '321', 50, 0);

select * from flights;