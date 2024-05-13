# About
Web app that will allow users to search for and book flights using a MySQL database.

## How to Run
A json file in /airline-reservation/backend named ```credentials.json``` is needed with keys
* host
* database
* port
* user
* password

Then, open one terminal in ```airline-reservation/backend``` to run the database using:  
```node db.js```

Finally, open another terminal in ```airline-reservation``` to run the app using:  
```npm run start```
