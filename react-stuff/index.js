const express = require('express'); 
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const basicRoutes = require('./routes/basic.js')
PORT = process.env.PORT || 5000;

app.use(basicRoutes);
app.use(cors());
app.use(bodyparser.json());
CONNECTION_URL = "mongodb+srv://alexanderes_:lokacitron12@cluster0.4rngd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`app now listening to this port: ${PORT}`)))
.catch((error) => console.log(error.message));






