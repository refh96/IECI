const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const espacioRoutes = require('./routes/espacioRoutes');
const arrendatarioRoutes = require('./routes/arrendatarioRoutes');
const arriendoRoutes = require('./routes/arriendoRoutes');

app.use(cors());
app.use(express.json());
app.options('*', cors());
app.use('/api', espacioRoutes);
app.use('/api', arrendatarioRoutes);
app.use('/api', arriendoRoutes);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to database");
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})
