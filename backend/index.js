const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/api/data", (req, res) => {
  const data = {
    id: "1234",
    first_name: "Kraipob",
    last_name: "Saengkhunthod",
    phone: "0989878765",
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
