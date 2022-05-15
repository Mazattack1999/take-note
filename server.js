const express = require('express');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);

// Default response for any other request 
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    if (PORT === 3001){
        console.log(`API server now listening at http://localhost:${PORT}`);
    } else {
        console.log(`API server now listening at ${PORT}`);
    }n
});