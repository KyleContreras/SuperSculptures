const express = require('express');
const app = express();
const port = 3000;
const client = require('./db');

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to sculptures database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}
connectToDatabase();


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    const searchQuery = req.query.q;

    if (!searchQuery) {
        res.render('statues', { statues });
    } else {
        const filteredStatues = statues.filter(statue => statue.name.toLowerCase().includes(searchQuery.toLowerCase()));
        res.render('statues', { statues: filteredStatues });
    }
});

app.get('/description/:id', (req, res) => {
    const statueId = parseInt(req.params.id);
    const statue = statues.find(statue => statue.id === statueId);

    console.log(statue);

    if (!statue) {
        //res.render('error');
        res.status(404).send('Statue not found');
    } else {
        res.render('description', { statue: statue });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
