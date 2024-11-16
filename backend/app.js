const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
