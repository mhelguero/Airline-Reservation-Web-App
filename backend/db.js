const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const credentials = require("./credentials.json");

// Enable CORS for all requests
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection(credentials);
let allBoardingNos = [];
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    process.exit(1);
  }
  console.log("Connected to database");
});

// close connection when app terminated
process.on("SIGINT", () => {
  connection.end();
  process.exit();
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// All Flights
app.get("/all-flights", (req, res) => {
  const query = `SELECT flight_id, flight_no, TIME_FORMAT(scheduled_departure, '%H:%m') AS scheduled_departure, TIME_FORMAT(scheduled_arrival, '%H:%m') AS scheduled_arrival, departure_airport, arrival_airport, flight_status, first_class_seats_available, economy_seats_available FROM flights;`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database: ", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json(results);
  });
});

// Searched Flights
app.get("/search", (req, res) => {
  const destination = req.query.destination;
  const query = `SELECT flight_id, flight_no, TIME_FORMAT(scheduled_departure, '%H:%m') AS scheduled_departure, TIME_FORMAT(scheduled_arrival, '%H:%m') AS scheduled_arrival, departure_airport, arrival_airport, flight_status FROM flights WHERE arrival_airport = '${destination}';`;
  connection.query(query, destination, (err, results) => {
    if (err) {
      console.error("Error doing search query: ", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json(results);
  });
});

// Flights Status
app.get("/status", (req, res) => {
  const query =
    "SELECT flight_id, flight_no, TIME_FORMAT(scheduled_departure, '%H:%m') AS scheduled_departure, TIME_FORMAT(scheduled_arrival, '%H:%m') AS scheduled_arrival, departure_airport, arrival_airport, flight_status FROM flights;";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database: ", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json(results);
  });
});

// getting info for specific flight
app.get("/flight", (req, res) => {
  const flight_id = req.query.flight_id;
  const query =
    'SELECT flight_no, departure_airport, arrival_airport, DATE_FORMAT(scheduled_departure, "%M %e") AS scheduled_departure_date, TIME_FORMAT(scheduled_departure, "%H:%i") AS scheduled_departure, TIME_FORMAT(scheduled_arrival, "%H:%i") AS scheduled_arrival, TIME_FORMAT(TIMEDIFF(scheduled_arrival, scheduled_departure), "%lh %im") AS flight_duration, first_class_seats_available,economy_seats_available, flight_status FROM flights  WHERE flight_id = ?';

  connection.query(query, flight_id, (err, results) => {
    if (err) {
      console.error("Error doing search query: ", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json(results);
    console.log(results);
  });
});

app.post("/customer", (req, res) => {
  console.log(req.body);
  const { name, phoneNumber, email, cardNumber } = req.body;

  const query =
    "INSERT INTO customer (passenger_name, phone_no, email, card_no, boarding_no, boarded) VALUES (?, ?, ?, ?, ?, ?)";
  const boarding_no = generateBoardingNo(); // Function to generate boarding number
  const boarded = false;

  connection.query(
    query,
    [name, phoneNumber, email, cardNumber, boarding_no, boarded],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server error");
      } else {
        res.status(201).send("Customer added");
      }
    }
  );
});

const generateBoardingNo = () => {
  let boardingNo = "BN" + Math.floor(Math.random() * 1000000);
  while (true) {
    if (!allBoardingNos.includes(boardingNo)) {
      allBoardingNos.push(boardingNo);
      break;
    }
    boardingNo = "BN" + Math.floor(Math.random() * 1000000);
  }
  return boardingNo;
};
