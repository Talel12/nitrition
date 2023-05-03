const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db_connect");

require("dotenv").config();

const app = express();
// connect to DB
connectDB();

// midlewares
app.use(cors());
app.use(express.json());
// routes
app.use("/user", require("./routes/user"));
app.use("/dossier", require("./routes/patientDossier"));
app.use("/rendezvous", require("./routes/rendezvous"));
app.use("/consultation", require("./routes/consultation"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
