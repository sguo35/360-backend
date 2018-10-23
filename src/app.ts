import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import logger from "./util/logger";
import lusca from "lusca";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

import * as controllers from "./controllers/api";

const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });


// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.get("/oauthCallback", controllers.oauthCallback);

app.use("/", express.static(path.join(__dirname, "../public")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(path.join(__dirname, "../public"), "index.html"));
});
app.get("*.js", function (request, response) {
  response.sendFile(path.resolve(path.join(__dirname, "../public"), request.originalUrl));
});
app.get("*.css", function (request, response) {
  response.sendFile(path.resolve(path.join(__dirname, "../public"), request.originalUrl));
});
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

app.post("/oauth", controllers.oauthToken);
app.post("/updateProjectGrade", controllers.updateProjectGrade);
app.post("/getAccount", controllers.getAccount);
app.post("/getProjectGradeIds", controllers.getProjectGradeIds);

/**
 * Primary app routes.
 */


/**
 * API examples routes.
 */


/**
 * OAuth authentication routes. (Sign in)
 */


export default app;