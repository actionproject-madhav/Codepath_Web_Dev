// Coffee Shops Data
const coffeeShops = {
    'blue-bottle': {
        id: 'blue-bottle',
        name: 'Blue Bottle Coffee',
        neighborhood: 'Downtown',
        specialty: 'Single-origin pour-overs',
        price: '$$$',
        vibe: 'Modern & Minimalist',
        description: 'Known for their meticulous brewing methods and premium beans sourced directly from farmers.',
        image: 'images/image1.jpg',
        fullDescription: 'Blue Bottle Coffee revolutionized the specialty coffee scene with their commitment to freshness and quality. Every cup is brewed to order using beans roasted within 48 hours. Their minimalist aesthetic creates a calm environment perfect for coffee purists who appreciate the subtle notes in each carefully crafted cup.',
        hours: 'Mon-Fri: 6:00 AM - 8:00 PM, Sat-Sun: 7:00 AM - 9:00 PM',
        wifi: 'Excellent',
        goodFor: 'Coffee dates, quiet work sessions',
        parking: 'Street parking available',
        signatureDrink: 'Gibraltar (double espresso with steamed milk)',
        priceRange: '$4-8',
        founded: '2002',
        atmosphere: 'Clean lines, natural light, and carefully curated music create an environment where coffee is the star.'
    },
    'local-grounds': {
        id: 'local-grounds',
        name: 'Local Grounds',
        neighborhood: 'Arts District',
        specialty: 'House blend espresso',
        price: '$$',
        vibe: 'Cozy & Artistic',
        description: 'A neighborhood favorite with local art on the walls and the perfect spot for studying.',
        image: 'images/image2.jpg',
        fullDescription: 'Local Grounds embodies the creative spirit of the Arts District. This community-focused coffee shop showcases rotating exhibitions by local artists while serving consistently excellent coffee. The comfortable seating and welcoming atmosphere make it a second home for students, artists, and remote workers.',
        hours: 'Mon-Thu: 6:30 AM - 9:00 PM, Fri-Sat: 6:30 AM - 10:00 PM, Sun: 7:00 AM - 8:00 PM',
        wifi: 'Good',
        goodFor: 'Studying, creative work, community meetups',
        parking: 'Small lot behind building',
        signatureDrink: 'Artists Latte (house blend with choice of alternative milk)',
        priceRange: '$3-6',
        founded: '2015',
        atmosphere: 'Exposed brick walls covered in local artwork, mismatched vintage furniture, and the gentle hum of creative energy.'
    },
    'rustic-roasters': {
        id: 'rustic-roasters',
        name: 'Rustic Roasters',
        neighborhood: 'Old Town',
        specialty: 'Dark roast blends',
        price: '$$',
        vibe: 'Vintage & Rustic',
        description: 'Housed in a converted warehouse with exposed brick and communal wooden tables.',
        image: 'images/image3.jpg',
        fullDescription: 'Step into Rustic Roasters and feel transported to a bygone era. This converted warehouse maintains its industrial charm while serving bold, full-bodied coffee blends. The communal seating encourages conversation, making it a popular spot for both first dates and business meetings.',
        hours: 'Daily: 7:00 AM - 7:00 PM',
        wifi: 'Good',
        goodFor: 'Meetings, social gatherings, weekend brunches',
        parking: 'Large parking lot',
        signatureDrink: 'Warehouse Blend (dark roast with notes of chocolate and nuts)',
        priceRange: '$3-7',
        founded: '2010',
        atmosphere: 'Reclaimed wood tables, Edison bulb lighting, and the rich aroma of dark roasted beans create a warm, inviting space.'
    },
    'sunrise-cafe': {
        id: 'sunrise-cafe',
        name: 'Sunrise Cafe',
        neighborhood: 'University District',
        specialty: 'Flavored lattes',
        price: '$',
        vibe: 'Casual & Student-Friendly',
        description: 'Popular with students, offering free WiFi and late-night hours during finals.',
        image: 'https://via.placeholder.com/400x300?text=Sunrise+Cafe',
        fullDescription: 'Sunrise Cafe has been fueling students through late-night study sessions for over a decade. Known for creative latte flavors and budget-friendly prices, this casual spot extends its hours during finals week and offers study group discounts. The menu features comfort food alongside quality coffee.',
        hours: 'Mon-Thu: 6:00 AM - 11:00 PM, Fri-Sat: 6:00 AM - 12:00 AM, Sun: 7:00 AM - 10:00 PM',
        wifi: 'Excellent',
        goodFor: 'Studying, group projects, late-night caffeine fixes',
        parking: 'University parking garage nearby',
        signatureDrink: 'Cinnamon Roll Latte (espresso with cinnamon and vanilla)',
        priceRange: '$2-5',
        founded: '2012',
        atmosphere: 'Bright lighting, comfortable study nooks, charging stations at every table, and a bulletin board full of campus announcements.'
    },
    'mountain-peak': {
        id: 'mountain-peak',
        name: 'Mountain Peak Coffee',
        neighborhood: 'Hillside',
        specialty: 'Cold brew',
        price: '$$',
        vibe: 'Outdoorsy & Fresh',
        description: 'Perfect for hikers and outdoor enthusiasts, with patio seating and mountain views.',
        image: 'https://via.placeholder.com/400x300?text=Mountain+Peak+Coffee',
        fullDescription: 'Mountain Peak Coffee caters to the adventure-seeking crowd with premium cold brew and stunning mountain views. The large outdoor patio is dog-friendly and features picnic-style seating. Inside, gear from local outdoor brands decorates the walls, and trail maps help plan your next adventure.',
        hours: 'Mon-Fri: 5:30 AM - 6:00 PM, Sat-Sun: 6:00 AM - 8:00 PM',
        wifi: 'Fair (encourages outdoor time!)',
        goodFor: 'Pre-hike fuel, outdoor meetings, dog-friendly socializing',
        parking: 'Ample parking with bike racks',
        signatureDrink: 'Summit Cold Brew (16-hour steeped, served over ice)',
        priceRange: '$3-6',
        founded: '2018',
        atmosphere: 'Natural wood, stone accents, large windows overlooking hiking trails, and the fresh mountain air flowing through open doors.'
    },
    'espresso-express': {
        id: 'espresso-express',
        name: 'Espresso Express',
        neighborhood: 'Business District',
        specialty: 'Quick espresso shots',
        price: '$$',
        vibe: 'Fast & Professional',
        description: 'Perfect for busy professionals who need their caffeine fix on the go.',
        image: 'https://via.placeholder.com/400x300?text=Espresso+Express',
        fullDescription: 'Espresso Express understands that time is money. This sleek coffee bar specializes in quick service without compromising quality. Pre-order through their app, grab your coffee from the express pickup counter, and get to your meeting on time. Despite the fast pace, every drink is crafted with precision.',
        hours: 'Mon-Fri: 5:00 AM - 6:00 PM, Sat: 7:00 AM - 2:00 PM, Sun: Closed',
        wifi: 'Excellent',
        goodFor: 'Quick meetings, morning commute, lunch break escapes',
        parking: 'Paid parking garage connected',
        signatureDrink: 'Double Shot Express (double espresso with a splash of steamed milk)',
        priceRange: '$2-6',
        founded: '2019',
        atmosphere: 'Sleek modern design with standing tables, quick-serve counter, and the efficient energy of the business district.'
    }
};

// Function to load coffee shop detail
function loadCoffeeShopDetail(shopId) {
    const detailContainer = document.getElementById('coffee-detail');
    const pageTitle = document.getElementById('page-title');
    
    // Check if shop exists
    if (!coffeeShops[shopId]) {
        detailContainer.innerHTML = `
            <div class="error-message">
                <h2>Coffee Shop Not Found</h2>
                <p>Sorry, we couldn't find information about this coffee shop.</p>
                <a href="/" role="button">← Back to All Shops</a>
            </div>
        `;
        return;
    }
    
    const shop = coffeeShops[shopId];
    
    // Update page title
    pageTitle.textContent = `${shop.name} - Coffee Spots`;
    
    // Create detail HTML
    detailContainer.innerHTML = `
        <div class="detail-header">
            <h1>${shop.name}</h1>
            <p class="lead">${shop.description}</p>
        </div>
        
        <img src="${shop.image}" alt="${shop.name}" class="detail-image" 
             onerror="this.src='https://via.placeholder.com/600x300?text=${encodeURIComponent(shop.name)}'">
        
        <div class="detail-info">
            <h2>About ${shop.name}</h2>
            <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">${shop.fullDescription}</p>
            
            <div class="info-grid">
                <div class="info-item">
                    <strong>📍 Neighborhood</strong>
                    ${shop.neighborhood}
                </div>
                
                <div class="info-item">
                    <strong>☕ Specialty</strong>
                    ${shop.specialty}
                </div>
                
                <div class="info-item">
                    <strong>💰 Price Range</strong>
                    ${shop.priceRange}
                </div>
                
                <div class="info-item">
                    <strong>🎵 Vibe</strong>
                    ${shop.vibe}
                </div>
                
                <div class="info-item">
                    <strong>🕒 Hours</strong>
                    ${shop.hours}
                </div>
                
                <div class="info-item">
                    <strong>📶 WiFi</strong>
                    ${shop.wifi}
                </div>
                
                <div class="info-item">
                    <strong>🎯 Good For</strong>
                    ${shop.goodFor}
                </div>
                
                <div class="info-item">
                    <strong>🚗 Parking</strong>
                    ${shop.parking}
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: #faf8f3; border-radius: 8px; border-left: 4px solid #d4a574;">
                <h3 style="margin: 0 0 1rem 0; color: #6b4423;">⭐ Signature Drink</h3>
                <p style="margin: 0; font-size: 1.1rem;"><strong>${shop.signatureDrink}</strong></p>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: #ffffff; border-radius: 8px; border: 1px solid #e8d5b7;">
                <h3 style="margin: 0 0 1rem 0; color: #6b4423;">🏪 About This Location</h3>
                <p style="margin: 0 0 1rem 0;"><strong>Founded:</strong> ${shop.founded}</p>
                <p style="margin: 0; font-style: italic; color: #8b6f47;">${shop.atmosphere}</p>
            </div>
        </div>
        
        <div style="text-align: center; margin: 3rem 0;">
            <a href="/" role="button" class="secondary">← Back to All Coffee Shops</a>
        </div>
    `;
}

// Function to get coffee shop ID from URL (for detail pages)
function getCoffeeShopIdFromUrl() {
    const pathParts = window.location.pathname.split('/');
    return pathParts[pathParts.length - 1];
}

// Add some interactive features for the homepage
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation for coffee cards
    const coffeeCards = document.querySelectorAll('.coffee-card');
    
    coffeeCards.forEach(card => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        
        // Add keyboard navigation
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
        
        // Add loading states
        card.addEventListener('click', function() {
            card.style.opacity = '0.7';
            card.style.transform = 'scale(0.98)';
        });
    });
    
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Export for use in detail pages (if needed)
if (typeof window !== 'undefined') {
    window.loadCoffeeShopDetail = loadCoffeeShopDetail;
    window.coffeeShops = coffeeShops;
}