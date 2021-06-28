require("dotenv").config();
const app = require('./app')
const PORT = process.env.PORT;
const mongoose = require('mongoose');

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}.`);
  });

mongoose.connect(process.env.DB_URL, () =>console.log('DB connected')).catch((error) => console.log(error.message));