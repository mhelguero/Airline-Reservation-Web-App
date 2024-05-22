const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const credentials = require("./credentials.json");

// Enable CORS for all requests
app.use(cors());

const connection = mysql.createConnection(credentials);

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

// TODO: fix query to get departure/arrival time in format like on status table
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
