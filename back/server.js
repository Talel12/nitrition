const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db_connect");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
// connect to DB
connectDB();

// midlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static("public"));

app.use(express.json());
// routes
app.use("/user", require("./routes/user"));
app.use("/dossier", require("./routes/patientDossier"));
app.use("/rendezvous", require("./routes/rendezvous"));
app.use("/consultation", require("./routes/consultation"));
app.use("/article", require("./routes/article"));
app.use("/chat", require("./routes/ChatRoute"));
app.use("/message", require("./routes/MessageRoute"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
