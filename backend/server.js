const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// CONFIG
dotenv.config({ path: "backend/config/config.env" });

// CONNECT TO DATABASE
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
