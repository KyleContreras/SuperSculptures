const fs = require('fs');
const Statue = require('../models/Statue');

fs.readFile('data/statues.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        const statuesData = JSON.parse(data);

        Statue.bulkCreate(statuesData)
            .then(() => {
                console.log('Statues inserted successfully.');
            })
            .catch((error) => {
                console.error('Error inserting statues:', error);
            });
    } catch (error) {
        console.error('Error parsing JSON data:', error);
    }
});

// node scripts/statuesForDataTable.js
