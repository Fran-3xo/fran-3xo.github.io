require("dotenv").config();
const express = require("express");

const { validateRequestOriginMiddleware } = require("./middlewares/validateRequestOriginMiddleware");
const { initWebchatController } = require("./controllers/initWebchatController");
const { refreshTokenController } = require("./controllers/refreshTokenController");
const { emailTranscriptController } = require("./controllers/emailTranscriptController");

const cors = require("cors");
const { allowedOrigins } = require("./helpers/getAllowedOrigins");

const app = express();
const port = 3001;

app.use(express.json());

app.use(
    cors({ allowedOrigins: true })
);
app.listen(port, () => {
    console.log(`Twilio Webchat App server running on port ${port}`);
});

app.post("/initWebchat", initWebchatController);
app.post("/refreshToken", refreshTokenController);
app.post("/email", emailTranscriptController);
