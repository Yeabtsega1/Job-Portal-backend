
    // const express = require("express");
    // const bodyParser = require("body-parser");
    // const mongoose = require("mongoose");
    // const passportConfig = require("./lib/passportConfig");
    // const cors = require("cors");
    // const fs = require("fs");
    // require("dotenv").config(); // Load environment variables
    
    // // MongoDB
    // mongoose
    //   .connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //   })
    //   .then(() => console.log("Connected to DB"))
    //   .catch((err) => console.log(err));
    
    // // Initialising directories
    // if (!fs.existsSync("./public")) {
    //   fs.mkdirSync("./public");
    // }
    // if (!fs.existsSync("./public/resume")) {
    //   fs.mkdirSync("./public/resume");
    // }
    // if (!fs.existsSync("./public/profile")) {
    //   fs.mkdirSync("./public/profile");
    // }
    
    // const app = express();
    // const port = process.env.PORT || 4444; // Use environment variable or fallback to 4444
    
    // app.use(bodyParser.json()); // Support JSON encoded bodies
    // app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies
    
    // // Setting up middlewares
    // app.use(cors());
    // app.use(express.json());
    // app.use(passportConfig.initialize());
    
    // // Routing
    // app.use("/auth", require("./routes/authRoutes"));
    // app.use("/api", require("./routes/apiRoutes"));
    // app.use("/upload", require("./routes/uploadRoutes"));
    // app.use("/host", require("./routes/downloadRoutes"));
    
    // app.listen(port, () => {
    //   console.log(`Server started on port ${port}!`);
    // });
    
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./lib/passportConfig");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config(); // Load environment variables

// MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// Initialising directories
if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public");
}
if (!fs.existsSync("./public/resume")) {
  fs.mkdirSync("./public/resume");
}
if (!fs.existsSync("./public/profile")) {
  fs.mkdirSync("./public/profile");
}

const app = express();
const port = process.env.PORT || 4444; // Use environment variable or fallback to 4444

app.use(bodyParser.json()); // Support JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies

// Setting up middlewares
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Job Portal Backend!"); // Your custom response
});

// Routing
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/host", require("./routes/downloadRoutes"));

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
