const express = require('express');
const path = require('path');
const { coffeeShops } = require('./coffee-data.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Coffee shop detail pages
app.get('/coffee-shops/:shopId', (req, res) => {
    const shopId = req.params.shopId;
    
    // Check if coffee shop exists
    if (coffeeShops[shopId]) {
        res.sendFile(path.join(__dirname, 'public', 'detail.html'));
    } else {
        res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    }
});

// API endpoint to get coffee shop data (optional)
app.get('/api/coffee-shops', (req, res) => {
    res.json(coffeeShops);
});

// API endpoint to get single coffee shop (optional)
app.get('/api/coffee-shops/:shopId', (req, res) => {
    const shopId = req.params.shopId;
    
    if (coffeeShops[shopId]) {
        res.json(coffeeShops[shopId]);
    } else {
        res.status(404).json({ error: 'Coffee shop not found' });
    }
});

// Handle 404s
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('  - http://localhost:' + PORT + '/');
    console.log('  - http://localhost:' + PORT + '/coffee-shops/blue-bottle');
    console.log('  - http://localhost:' + PORT + '/coffee-shops/local-grounds');
    console.log('Available coffee shops:', Object.keys(coffeeShops).join(', '));
});

// Handle server shutdown gracefully
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});