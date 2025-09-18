// Client-side JavaScript - should be in public/js/script.js

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

// Only run if we're in the browser
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    
    // Utility functions
    function safeGetElement(id, required = false) {
        const element = document.getElementById(id);
        if (required && !element) {
            console.error(`Required element with ID '${id}' not found`);
            return null;
        }
        return element;
    }

    function createErrorHTML(title, message, showBackButton = true) {
        return `
            <div class="error-message">
                <h2>${title}</h2>
                <p>${message}</p>
                ${showBackButton ? '<a href="/" role="button">← Back to All Shops</a>' : ''}
            </div>
        `;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function getCoffeeShopIdFromUrl() {
        try {
            const pathParts = window.location.pathname.split('/').filter(part => part);
            
            if (pathParts.length === 0) {
                return null;
            }
            
            if (pathParts.length >= 1) {
                return pathParts[pathParts.length - 1];
            }
            
            return null;
        } catch (error) {
            console.error('Error parsing URL:', error);
            return null;
        }
    }

    function loadCoffeeShopDetail(shopId) {
        const detailContainer = safeGetElement('coffee-detail', true);
        const pageTitle = safeGetElement('page-title');
        
        if (!detailContainer) {
            console.error('Detail container not found');
            return;
        }
        
        if (!shopId || typeof shopId !== 'string') {
            detailContainer.innerHTML = createErrorHTML(
                'Invalid Coffee Shop',
                'No coffee shop specified in the URL.'
            );
            return;
        }
        
        if (!coffeeShops[shopId]) {
            detailContainer.innerHTML = createErrorHTML(
                'Coffee Shop Not Found',
                `Sorry, we couldn't find information about "${shopId}". This coffee shop might not exist or the link might be broken.`
            );
            
            if (pageTitle) {
                pageTitle.textContent = 'Coffee Shop Not Found - Coffee Spots';
            }
            return;
        }
        
        const shop = coffeeShops[shopId];
        
        try {
            if (pageTitle) {
                pageTitle.textContent = `${shop.name} - Coffee Spots`;
            }
            
            detailContainer.innerHTML = `
                <div class="detail-header">
                    <h1>${escapeHtml(shop.name)}</h1>
                    <p class="lead">${escapeHtml(shop.description)}</p>
                </div>
                
                <img src="${escapeHtml(shop.image)}" alt="${escapeHtml(shop.name)}" class="detail-image" 
                     onerror="this.src='https://via.placeholder.com/600x300/e5e5e5/1a1a1a?text=${encodeURIComponent(shop.name)}'; this.alt='${escapeHtml(shop.name)} - Image not available';">
                
                <div class="detail-info">
                    <h2>About ${escapeHtml(shop.name)}</h2>
                    <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">${escapeHtml(shop.fullDescription)}</p>
                    
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>📍 Neighborhood</strong>
                            ${escapeHtml(shop.neighborhood)}
                        </div>
                        
                        <div class="info-item">
                            <strong>☕ Specialty</strong>
                            ${escapeHtml(shop.specialty)}
                        </div>
                        
                        <div class="info-item">
                            <strong>💰 Price Range</strong>
                            ${escapeHtml(shop.priceRange)}
                        </div>
                        
                        <div class="info-item">
                            <strong>🎵 Vibe</strong>
                            ${escapeHtml(shop.vibe)}
                        </div>
                        
                        <div class="info-item">
                            <strong>🕒 Hours</strong>
                            ${escapeHtml(shop.hours)}
                        </div>
                        
                        <div class="info-item">
                            <strong>📶 WiFi</strong>
                            ${escapeHtml(shop.wifi)}
                        </div>
                        
                        <div class="info-item">
                            <strong>🎯 Good For</strong>
                            ${escapeHtml(shop.goodFor)}
                        </div>
                        
                        <div class="info-item">
                            <strong>🚗 Parking</strong>
                            ${escapeHtml(shop.parking)}
                        </div>
                    </div>
                    
                    <div style="margin-top: 2rem; padding: 1.5rem; background: #f8f8f8; border-radius: 4px; border-left: 3px solid #1a1a1a;">
                        <h3 style="margin: 0 0 1rem 0; color: #1a1a1a;">⭐ Signature Drink</h3>
                        <p style="margin: 0; font-size: 1.1rem;"><strong>${escapeHtml(shop.signatureDrink)}</strong></p>
                    </div>
                    
                    <div style="margin-top: 2rem; padding: 1.5rem; background: #ffffff; border-radius: 4px; border: 1px solid #e5e5e5;">
                        <h3 style="margin: 0 0 1rem 0; color: #1a1a1a;">🏪 About This Location</h3>
                        <p style="margin: 0 0 1rem 0;"><strong>Founded:</strong> ${escapeHtml(shop.founded)}</p>
                        <p style="margin: 0; font-style: italic; color: #666666;">${escapeHtml(shop.atmosphere)}</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin: 3rem 0;">
                    <a href="/" role="button" class="secondary">← Back to All Coffee Shops</a>
                </div>
            `;
            
        } catch (error) {
            console.error('Error rendering coffee shop detail:', error);
            detailContainer.innerHTML = createErrorHTML(
                'Loading Error',
                'Sorry, there was an error loading this coffee shop\'s details. Please try again.'
            );
        }
    }

    function setupHomepageInteractions() {
        try {
            const coffeeCards = document.querySelectorAll('.coffee-card');
            
            coffeeCards.forEach((card, index) => {
                if (!card.getAttribute('tabindex')) {
                    card.setAttribute('tabindex', '0');
                }
                
                card.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        card.click();
                    }
                });
                
                card.addEventListener('click', function(e) {
                    try {
                        if (card.classList.contains('loading')) {
                            return;
                        }
                        
                        card.classList.add('loading');
                        card.style.opacity = '0.7';
                        card.style.transform = 'scale(0.98)';
                        
                        setTimeout(() => {
                            card.classList.remove('loading');
                            card.style.opacity = '';
                            card.style.transform = '';
                        }, 3000);
                        
                    } catch (error) {
                        console.error('Error handling card click:', error);
                    }
                });
            });
            
        } catch (error) {
            console.error('Error setting up homepage interactions:', error);
        }
    }

    function initializePage() {
        try {
            document.body.classList.add('loaded');
            
            const pathParts = window.location.pathname.split('/').filter(part => part);
            const isDetailPage = pathParts.some(part => part === 'coffee-shops') || 
                                (pathParts.length === 1 && pathParts[0] !== 'index.html');
            
            if (isDetailPage) {
                const shopId = getCoffeeShopIdFromUrl();
                if (shopId) {
                    loadCoffeeShopDetail(shopId);
                }
            }
            
            setupHomepageInteractions();
            
        } catch (error) {
            console.error('Error initializing page:', error);
            document.body.classList.add('loaded');
        }
    }

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', initializePage);

    // Handle browser navigation
    window.addEventListener('popstate', initializePage);

    // Handle page visibility
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && !document.body.classList.contains('loaded')) {
            document.body.classList.add('loaded');
        }
    });

    // Global image error handling
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            const img = e.target;
            if (!img.dataset.errorHandled) {
                img.dataset.errorHandled = 'true';
                const shopName = img.alt.replace(' - Image not available', '');
                img.src = `https://via.placeholder.com/400x300/e5e5e5/1a1a1a?text=${encodeURIComponent(shopName)}`;
                img.alt = `${shopName} - Image not available`;
            }
        }
    }, true);

    // Export for global access
    window.loadCoffeeShopDetail = loadCoffeeShopDetail;
    window.coffeeShops = coffeeShops;
    window.getCoffeeShopIdFromUrl = getCoffeeShopIdFromUrl;
}

// For Node.js/server environments, export the data only
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { coffeeShops };
}