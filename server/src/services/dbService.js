const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../../data/db.json');
const ORIGINAL_PATH = path.join(__dirname, '../../data/original.json');

const dbService = {
    // Read from the active fake database
    read: () => JSON.parse(fs.readFileSync(DB_PATH, 'utf-8')),

    // Write to the active fake database
    write: (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2)),

    // The Reset Logic: Copy original.json -> db.json
    reset: () => {
        const originalData = fs.readFileSync(ORIGINAL_PATH, 'utf-8');
        fs.writeFileSync(DB_PATH, originalData);
        console.log('🔄 Database reset to original state.');
    }
};

module.exports = dbService;