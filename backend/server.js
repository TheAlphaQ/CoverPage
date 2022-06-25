const app = require("./app");

const dotenv = require("dotenv");

//Config

dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log("Server is working on http://localhost:${process.env.PORT}");
});
