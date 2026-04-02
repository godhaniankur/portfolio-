const express = require('express');
const productController = require('./src/controllers/productController');
const dbService = require('./src/services/dbService');

const app = express();
const PORT = 3000;


// Initialize: Reset on start
const cors = require('cors');
const { connectDB } = require('./database/db.connect');


app.use(express.json());

dbService.reset();
// This allows ALL origins and ALL methods (GET, POST, etc.)
app.use(cors());

// 5-Minute Timer Logic
setInterval(() => {
    dbService.reset();
}, 5 * 60 * 1000); // 300,000ms



// Routes
app.get('/products', productController.getAll);
app.post('/products', productController.create);
app.put('/products/:id', productController.update);
app.delete('/products/:id', productController.remove);




app.listen(PORT, () => console.log(`🚀 Production-ready Mock API on port ${PORT}`));