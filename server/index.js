const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {
  getCompliment,
  getRandomFortune,
  addChoiceToList,
  deleteChoiceFromList
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getRandomFortune);
app.post("/api/list", addChoiceToList);
app.delete("/api/list/:value", deleteChoiceFromList);

app.listen(4000, () => console.log("Server running on 4000"));