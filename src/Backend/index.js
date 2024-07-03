const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const issueRoutes = require('./routes/issueRoutes');
const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/issues', issueRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
