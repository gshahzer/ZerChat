const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieparser = require("cookie-parser");

const ChatRoute = require("./Routes/ChatRoute.js");
const MessageRoute = require("./Routes/MessageRoute.js");
const authRoute = require("./Routes/auth.Route.js");
const UserRoute = require("./Routes/User.Route.js");
const { app, server } = require("./socket/socket.js");


app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true, methods:["GET", "POST"] }));
app.use(cookieparser());

mongoose.connect(process.env.MONGO_URI);

app.use("/", authRoute);
app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);
app.use("/users", UserRoute);

server.listen(process.env.PORT, () => {
  console.log("SERVER IS RUNNING AND CONNECTED TO MONGO");
});
