var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var mysql = require("mysql");
const e = require("express");
var PORT = 5001;
var db = mysql.createConnection({
  host: "bcxjvebcajhn59xh8frj-mysql.services.clever-cloud.com",
  user: "uaoq171yudqwovoo",
  password: "U51UNBQY15aM5XBeoRZP",
  database: "bcxjvebcajhn59xh8frj"
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
// ----------------------------------------------------------
app.get("/get", (req, res) => {
  db.query("Select * from new_table", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
app.post("/post", (req, res) => {
  var title = req.body.title;

  var date = req.body.date;
  var reminder = req.body.rem;

  console.log(req.body);

  var insertQuery =
    'INSERT INTO new_table(title,date,reminder) VALUES("' +
    title +
    '","' +
    date +
    '","' +
    reminder +
    '")';

  console.log(insertQuery);
  db.query(insertQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("sent");
  });
});

//-----------------------------------------------------------
app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
