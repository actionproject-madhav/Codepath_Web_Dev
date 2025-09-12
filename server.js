const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Set view engine (we'll use basic HTML files)
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Coffee shop detail routes
app.get('/coffee-shops/:id', (req, res) => {
    const shopId = req.params.id;
    
    // Valid coffee shop IDs
    const validShops = [
        'blue-bottle', 
        'local-grounds', 
        'rustic-roasters', 
        'sunrise-cafe', 
        'mountain-peak', 
        'espresso-express'
    ];
    
    // Check if the shop ID is valid
    if (validShops.includes(shopId)) {
        res.sendFile(path.join(__dirname, 'public', 'detail.html'));
    } else {
        // Invalid shop ID - serve 404
        res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    }
});

// 404 handler - must be last
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});