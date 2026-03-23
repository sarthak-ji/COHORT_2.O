/**
 * Server ko start karne ke liye.
 * Database se connect karne ke liye.
 */

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect("Your MODEL_Uri")
  .then(() => {
    console.log("Database is connected");
  });
}

connectToDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
