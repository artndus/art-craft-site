// Application Data with Indian Pricing and Features
const applicationData = {
    "channelName": "art.nd.us",
    "channelDescription": "Creating joy, one handmade piece at a time. New here — let's get crafty!",
    "currency": "INR",
    "currencySymbol": "₹",
    "gstRate": 18,
    "featuredProducts": [
        {
            "id": 1,
            "name": "Sunset Forest Painting",
            "category": "Paintings",
            "price": 12000,
            "originalPrice": 12000,
            "image": "sunset_forest.jpg",
            "description": "Handpainted landscape featuring a serene forest at sunset with silhouetted deer",
            "inStock": true,
            "emiAvailable": true
        },
        {
            "id": 2,
            "name": "Handwoven Tapestry",
            "category": "Crafts",
            "price": 6800,
            "originalPrice": 6800,
            "image": "tapestry.jpg",
            "description": "Colorful handwoven tapestry perfect for home decoration",
            "inStock": true,
            "emiAvailable": true
        },
        {
            "id": 3,
            "name": "Ceramic Pottery Set",
            "category": "Crafts",
            "price": 9600,
            "originalPrice": 9600,
            "image": "pottery.jpg",
            "description": "Hand-thrown ceramic bowls and mugs with unique glazing",
            "inStock": false,
            "emiAvailable": true
        },
        {
            "id": 4,
            "name": "DIY Embroidery Kit",
            "category": "DIY Kits",
            "price": 2000,
            "originalPrice": 2000,
            "image": "embroidery_kit.jpg",
            "description": "Complete embroidery kit with patterns, threads, and instructions",
            "inStock": true,
            "emiAvailable": false
        },
        {
            "id": 5,
            "name": "Handmade Jewelry Set",
            "category": "Jewelry",
            "price": 6000,
            "originalPrice": 6000,
            "image": "jewelry.jpg",
            "description": "Unique handcrafted necklace and earring set with natural stones",
            "inStock": true,
            "emiAvailable": true
        },
        {
            "id": 6,
            "name": "Watercolor Paint Set",
            "category": "Art Supplies",
            "price": 3600,
            "originalPrice": 3600,
            "image": "paint_set.jpg",
            "description": "Professional-grade watercolor paints with brushes and paper",
            "inStock": true,
            "emiAvailable": false
        }
    ],
    "paymentMethods": [
        {
            "name": "UPI",
            "methods": ["Google Pay", "PhonePe", "Paytm UPI", "BHIM", "Amazon Pay UPI"],
            "logo": "upi-logo.png",
            "popular": true
        },
        {
            "name": "Net Banking",
            "methods": ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Bank", "PNB", "Bank of Baroda"],
            "logo": "netbanking-logo.png",
            "popular": true
        },
        {
            "name": "Digital Wallets",
            "methods": ["Paytm Wallet", "PhonePe Wallet", "Amazon Pay", "Mobikwik", "Freecharge"],
            "logo": "wallet-logo.png",
            "popular": true
        },
        {
            "name": "Credit/Debit Cards",
            "methods": ["Visa", "Mastercard", "RuPay", "American Express"],
            "logo": "cards-logo.png",
            "popular": false
        },
        {
            "name": "EMI",
            "methods": ["No Cost EMI", "Standard EMI", "Cardless EMI"],
            "logo": "emi-logo.png",
            "popular": false
        },
        {
            "name": "Cash on Delivery",
            "methods": ["COD"],
            "logo": "cod-logo.png",
            "popular": false
        }
    ],
    "indianStates": [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
        "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir",
        "Ladakh", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Puducherry"
    ],
    "testimonials": [
        {
            "name": "Priya Sharma",
            "location": "Mumbai",
            "text": "Beautiful handmade pieces! Works perfectly on my phone and laptop.",
            "rating": 5
        },
        {
            "name": "Rajesh Kumar",
            "location": "Delhi",
            "text": "Great website design! Easy to shop on my tablet during commute.",
            "rating": 5
        },
        {
            "name": "Anita Patel",
            "location": "Ahmedabad",
            "text": "The pottery set is gorgeous! Great packaging and fast shipping to Gujarat.",
            "rating": 5
        }
    ],
    "festivalOffers": [
        {
            "name": "Diwali Special",
            "discount": "15% OFF",
            "code": "DIWALI15",
            "validTill": "2024-11-15"
        },
        {
            "name": "Holi Colors",
            "discount": "20% OFF",
            "code": "HOLI20",
            "validTill": "2024-03-15"
        }
    ],
    "deliveryInfo": {
        "metro": "2-3 days",
        "tier2": "4-5 days",
        "tier3": "5-7 days"
    },
    "supportInfo": {
        "phone": "+91-98765-43210",
        "whatsapp": "+91-98765-43210",
        "email": "support@art.nd.us",
        "hours": "10 AM - 7 PM (Mon-Sat)"
    }
};

// Application State
let cart = [];
let wishlist = [];
let currentSlide = 0;
let currentCheckoutStep = 1;
let currentProduct = null;
let selectedPaymentMethod = null;
let isMobileMenuOpen = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing responsive application...');
    renderFestivalOffers();
    renderFeaturedCarousel();
    renderGallery();
    renderProducts();
    renderTestimonials();
    populateStates();
    setupEventListeners();
    updateCartDisplay();
    addWhatsAppButton();
    setupResponsiveHandlers();
    console.log('Application initialized successfully');
});

// Mobile Menu Functions
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (!navMenu || !toggle) return;
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        navMenu.classList.add('active');
        toggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        navMenu.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (navMenu && toggle) {
        navMenu.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
        isMobileMenuOpen = false;
    }
}

// Responsive Handlers
function setupResponsiveHandlers() {
    window.addEventListener('resize', handleWindowResize);
    
    window.addEventListener('orientationchange', function() {
        setTimeout(handleWindowResize, 100);
    });
    
    setupTouchHandlers();
    
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('navMenu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (isMobileMenuOpen && 
            !navMenu.contains(event.target) && 
            !toggle.contains(event.target)) {
            closeMobileMenu();
        }
    });
}

function handleWindowResize() {
    const width = window.innerWidth;
    
    if (width >= 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
    
    if (width < 768) {
        currentSlide = 0;
        const container = document.getElementById('featuredCarousel');
        if (container) {
            container.style.transform = 'translateX(0)';
        }
    }
    
    updateCarouselLayout();
}

function updateCarouselLayout() {
    const width = window.innerWidth;
    const items = document.querySelectorAll('.featured-item');
    
    items.forEach(item => {
        if (width < 768) {
            item.style.flex = '0 0 100%';
        } else if (width < 1024) {
            item.style.flex = '0 0 50%';
        } else if (width < 1440) {
            item.style.flex = '0 0 33.333%';
        } else {
            item.style.flex = '0 0 25%';
        }
    });
}

function setupTouchHandlers() {
    const carousel = document.getElementById('featuredCarousel');
    if (carousel) {
        let startX = 0;
        let startY = 0;
        let scrolling = false;
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            scrolling = false;
        });
        
        carousel.addEventListener('touchmove', function(e) {
            if (scrolling) return;
            
            const deltaX = Math.abs(e.touches[0].clientX - startX);
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            
            if (deltaY > deltaX) {
                scrolling = true;
                return;
            }
            
            e.preventDefault();
        });
        
        carousel.addEventListener('touchend', function(e) {
            if (scrolling) return;
            
            const endX = e.changedTouches[0].clientX;
            const deltaX = startX - endX;
            
            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        });
    }
    
    const buttons = document.querySelectorAll('.btn, .filter-btn, .cart-btn, .close-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// Event Listeners Setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation smooth scrolling - Fixed navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                scrollToSection(targetId);
                closeMobileMenu();
            }
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterGallery(this.dataset.category);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    }

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }

    console.log('Event listeners set up successfully');
}

// Festival Offers
function renderFestivalOffers() {
    const container = document.getElementById('offersGrid');
    if (!container) {
        console.log('Offers container not found');
        return;
    }
    
    container.innerHTML = '';
    
    applicationData.festivalOffers.forEach(offer => {
        const offerCard = document.createElement('div');
        offerCard.className = 'offer-card festival-offer';
        offerCard.innerHTML = `
            <div class="offer-badge">${offer.discount}</div>
            <h4>${offer.name}</h4>
            <div class="offer-code">Code: ${offer.code}</div>
            <p class="offer-validity">Valid till: ${offer.validTill}</p>
            <button class="btn btn--primary" onclick="applyOfferCode('${offer.code}')">Apply Now</button>
        `;
        container.appendChild(offerCard);
    });
    console.log('Festival offers rendered');
}

// Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) {
        console.log('Testimonials container not found');
        return;
    }
    
    container.innerHTML = '';
    
    applicationData.testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">${testimonial.name.charAt(0)}</div>
                <div class="testimonial-info">
                    <h5>${testimonial.name}</h5>
                    <p class="testimonial-location">${testimonial.location}</p>
                </div>
            </div>
            <div class="stars">
                ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
            </div>
            <p>"${testimonial.text}"</p>
        `;
        container.appendChild(testimonialCard);
    });
    console.log('Testimonials rendered');
}

// Populate Indian States
function populateStates() {
    const stateSelect = document.getElementById('stateSelect');
    if (!stateSelect) {
        console.log('State select not found');
        return;
    }
    
    applicationData.indianStates.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
    console.log('States populated');
}

// Fixed smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbar = document.querySelector('.navbar');
        const offset = navbar ? navbar.offsetHeight : 0;
        const elementPosition = element.offsetTop - offset - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Featured Carousel Functions
function renderFeaturedCarousel() {
    const container = document.getElementById('featuredCarousel');
    if (!container) {
        console.log('Featured carousel container not found');
        return;
    }
    
    container.innerHTML = '';

    applicationData.featuredProducts.slice(0, 4).forEach(product => {
        const item = createFeaturedItem(product);
        container.appendChild(item);
    });
    
    updateCarouselLayout();
    console.log('Featured carousel rendered');
}

function createFeaturedItem(product) {
    const item = document.createElement('div');
    item.className = 'featured-item';
    const gstAmount = Math.round(product.price * applicationData.gstRate / 100);
    
    item.innerHTML = `
        <div class="featured-image" onclick="openProductModal(${product.id})" style="cursor: pointer; height: 200px; background: linear-gradient(135deg, var(--color-bg-2), var(--color-bg-3)); display: flex; align-items: center; justify-content: center; color: var(--color-text); font-weight: bold; border-radius: var(--radius-base) var(--radius-base) 0 0; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 10px; right: 10px; background: var(--color-primary); color: var(--color-btn-primary-text); padding: 4px 8px; border-radius: var(--radius-sm); font-size: var(--font-size-xs);">${product.category}</div>
            <i class="fas fa-image" style="font-size: 3rem; opacity: 0.6; margin-bottom: 8px;"></i>
            <br>
            <span style="font-size: var(--font-size-sm); text-align: center;">${product.name}</span>
        </div>
        <div class="featured-item-content">
            <h3 onclick="openProductModal(${product.id})" style="cursor: pointer;">${product.name}</h3>
            <div class="status status--info">${product.category}</div>
            <p>${product.description}</p>
            <div class="price">₹${product.price.toLocaleString('en-IN')}</div>
            <div class="product-gst">+₹${gstAmount} GST</div>
            ${product.emiAvailable ? '<span class="emi-badge">EMI Available</span>' : ''}
            <button class="btn btn--primary btn--sm" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;
    return item;
}

function nextSlide() {
    const container = document.getElementById('featuredCarousel');
    if (!container) return;
    
    const width = window.innerWidth;
    let itemsVisible, itemWidth;
    
    if (width < 768) {
        itemsVisible = 1;
        itemWidth = 100;
    } else if (width < 1024) {
        itemsVisible = 2;
        itemWidth = 50;
    } else if (width < 1440) {
        itemsVisible = 3;
        itemWidth = 33.333;
    } else {
        itemsVisible = 4;
        itemWidth = 25;
    }
    
    const maxSlides = Math.max(0, applicationData.featuredProducts.length - itemsVisible);
    currentSlide = Math.min(currentSlide + 1, maxSlides);
    
    container.style.transform = `translateX(-${currentSlide * itemWidth}%)`;
}

function prevSlide() {
    const container = document.getElementById('featuredCarousel');
    if (!container) return;
    
    const width = window.innerWidth;
    let itemWidth;
    
    if (width < 768) {
        itemWidth = 100;
    } else if (width < 1024) {
        itemWidth = 50;
    } else if (width < 1440) {
        itemWidth = 33.333;
    } else {
        itemWidth = 25;
    }
    
    currentSlide = Math.max(currentSlide - 1, 0);
    container.style.transform = `translateX(-${currentSlide * itemWidth}%)`;
}

// Gallery Functions
function renderGallery() {
    const container = document.getElementById('galleryGrid');
    if (!container) {
        console.log('Gallery container not found');
        return;
    }
    
    container.innerHTML = '';

    applicationData.featuredProducts.forEach(product => {
        const item = createGalleryItem(product);
        container.appendChild(item);
    });
    console.log('Gallery rendered');
}

function createGalleryItem(product) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.category = product.category;
    item.innerHTML = `
        <div class="gallery-image" onclick="openProductModal(${product.id})" style="cursor: pointer; height: 250px; background: linear-gradient(135deg, var(--color-bg-4), var(--color-bg-5)); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-text); border-radius: var(--radius-base) var(--radius-base) 0 0; position: relative;">
            <i class="fas fa-palette" style="font-size: 3rem; opacity: 0.6; margin-bottom: 12px;"></i>
            <span style="font-size: var(--font-size-sm); text-align: center; font-weight: 500;">${product.name}</span>
        </div>
        <div class="gallery-item-content">
            <h3 onclick="openProductModal(${product.id})" style="cursor: pointer;">${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">₹${product.price.toLocaleString('en-IN')}</div>
        </div>
    `;
    return item;
}

function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Products Functions
function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) {
        console.log('Products container not found');
        return;
    }
    
    container.innerHTML = '';

    applicationData.featuredProducts.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
    console.log('Products rendered');
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.name = product.name.toLowerCase();
    card.dataset.category = product.category;
    card.dataset.price = product.price;
    
    const gstAmount = Math.round(product.price * applicationData.gstRate / 100);
    
    card.innerHTML = `
        ${!product.inStock ? '<div class="out-of-stock">Out of Stock</div>' : ''}
        <div class="product-image" onclick="openProductModal(${product.id})" style="cursor: pointer; height: 250px; background: linear-gradient(135deg, var(--color-bg-5), var(--color-bg-6)); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-text); border-radius: var(--radius-base) var(--radius-base) 0 0; position: relative;">
            <i class="fas fa-image" style="font-size: 3rem; opacity: 0.6; margin-bottom: 12px;"></i>
            <span style="font-size: var(--font-size-sm); text-align: center; font-weight: 500;">${product.name}</span>
            ${product.emiAvailable ? '<div style="position: absolute; top: 10px; left: 10px; background: var(--color-warning); color: var(--color-btn-primary-text); padding: 4px 8px; border-radius: var(--radius-sm); font-size: var(--font-size-xs);">EMI</div>' : ''}
        </div>
        <div class="product-card-content">
            <h3 onclick="openProductModal(${product.id})" style="cursor: pointer;">${product.name}</h3>
            <div class="status status--info">${product.category}</div>
            <p>${product.description}</p>
            <div class="price">₹${product.price.toLocaleString('en-IN')}</div>
            <div class="product-gst">+₹${gstAmount} GST</div>
            ${product.emiAvailable ? '<span class="emi-badge">EMI Available</span>' : ''}
            <div class="product-actions">
                <button class="btn btn--primary" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i> ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button class="btn btn--outline" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i> Wishlist
                </button>
            </div>
        </div>
    `;
    return card;
}

function searchProducts(query) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const name = card.dataset.name;
        if (name.includes(query.toLowerCase()) || query === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function sortProducts(sortBy) {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    
    const cards = Array.from(container.children);

    cards.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.dataset.name.localeCompare(b.dataset.name);
            case 'price-low':
                return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
            case 'price-high':
                return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
            default:
                return 0;
        }
    });

    cards.forEach(card => container.appendChild(card));
}

// Shopping Cart Functions with GST
function addToCart(productId, quantity = 1) {
    console.log('Adding to cart:', productId, quantity);
    const product = applicationData.featuredProducts.find(p => p.id === productId);
    if (!product || !product.inStock) {
        console.log('Product not found or out of stock');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    updateCartDisplay();
    showNotification(`${product.name} added to cart!`, 'success');
    console.log('Cart updated:', cart);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    renderCartItems();
}

function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            renderCartItems();
        }
    }
}

function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const gst = Math.round(subtotal * applicationData.gstRate / 100);
    const total = subtotal + gst;
    
    return { subtotal, gst, total };
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

function toggleCart() {
    console.log('Toggling cart modal');
    const modal = document.getElementById('cartModal');
    if (!modal) {
        console.error('Cart modal not found');
        return;
    }
    
    if (modal.classList.contains('hidden')) {
        renderCartItems();
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Cart modal opened');
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        console.log('Cart modal closed');
    }
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    if (!container) {
        console.error('Cart items container not found');
        return;
    }
    
    const { subtotal, gst, total } = calculateCartTotals();

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        const subtotalEl = document.getElementById('cartSubtotal');
        const gstEl = document.getElementById('cartGST');
        const totalEl = document.getElementById('cartTotal');
        
        if (subtotalEl) subtotalEl.textContent = '0';
        if (gstEl) gstEl.textContent = '0';
        if (totalEl) totalEl.textContent = '0';
        return;
    }

    container.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--color-bg-8), var(--color-bg-1)); display: flex; align-items: center; justify-content: center; color: var(--color-text); border-radius: var(--radius-sm); font-weight: bold;">
                ${item.name.substring(0, 2)}
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price.toLocaleString('en-IN')} each</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
            <button class="close-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        container.appendChild(cartItem);
    });

    const subtotalEl = document.getElementById('cartSubtotal');
    const gstEl = document.getElementById('cartGST');
    const totalEl = document.getElementById('cartTotal');
    
    if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString('en-IN');
    if (gstEl) gstEl.textContent = gst.toLocaleString('en-IN');
    if (totalEl) totalEl.textContent = total.toLocaleString('en-IN');
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = applicationData.featuredProducts.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = wishlist.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification(`${product.name} removed from wishlist`, 'info');
    } else {
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist!`, 'success');
    }
}

// Product Modal Functions
function openProductModal(productId) {
    console.log('Opening product modal for ID:', productId);
    const product = applicationData.featuredProducts.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    currentProduct = product;
    const gstAmount = Math.round(product.price * applicationData.gstRate / 100);
    
    const modal = document.getElementById('productModal');
    if (!modal) {
        console.error('Product modal not found');
        return;
    }
    
    document.getElementById('productTitle').textContent = 'Product Details';
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price.toLocaleString('en-IN');
    document.getElementById('productGST').textContent = gstAmount.toLocaleString('en-IN');
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productCategory').textContent = product.category;
    
    // Show/hide EMI feature
    const emiFeature = document.getElementById('emiFeature');
    if (emiFeature) {
        if (product.emiAvailable) {
            emiFeature.style.display = 'flex';
        } else {
            emiFeature.style.display = 'none';
        }
    }
    
    const productImage = document.getElementById('productImage');
    if (productImage) {
        productImage.style.display = 'flex';
        productImage.style.flexDirection = 'column';
        productImage.style.alignItems = 'center';
        productImage.style.justifyContent = 'center';
        productImage.style.background = 'linear-gradient(135deg, var(--color-bg-1), var(--color-bg-2))';
        productImage.style.color = 'var(--color-text)';
        productImage.style.height = '300px';
        productImage.style.borderRadius = 'var(--radius-base)';
        productImage.innerHTML = `
            <i class="fas fa-image" style="font-size: 4rem; opacity: 0.6; margin-bottom: 16px;"></i>
            <span style="font-weight: 500;">${product.name}</span>
        `;
    }
    
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.value = 1;
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    console.log('Product modal opened');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    currentProduct = null;
}

function increaseQuantity() {
    const input = document.getElementById('quantity');
    if (input) {
        const currentValue = parseInt(input.value);
        if (currentValue < 10) {
            input.value = currentValue + 1;
        }
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    if (input) {
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    }
}

function addToCartFromModal() {
    if (currentProduct && currentProduct.inStock) {
        const quantityInput = document.getElementById('quantity');
        const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
        addToCart(currentProduct.id, quantity);
        closeProductModal();
    } else if (currentProduct && !currentProduct.inStock) {
        showNotification('This item is currently out of stock', 'error');
    }
}

// Checkout Functions
function proceedToCheckout() {
    if (cart.length === 0) return;

    toggleCart();
    renderCheckoutItems();
    updateCheckoutTotals();
    setupPaymentMethodListeners();
    document.getElementById('checkoutModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    currentCheckoutStep = 1;
    updateCheckoutSteps();
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    currentCheckoutStep = 1;
    selectedPaymentMethod = null;
}

function renderCheckoutItems() {
    const container = document.getElementById('checkoutItems');
    if (!container) return;
    
    container.innerHTML = '';

    cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
        `;
        container.appendChild(checkoutItem);
    });
}

function updateCheckoutTotals() {
    const { subtotal, gst, total } = calculateCartTotals();

    const subtotalEl = document.getElementById('checkoutSubtotal');
    const gstEl = document.getElementById('checkoutGST');
    const totalEl = document.getElementById('checkoutTotal');
    
    if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString('en-IN');
    if (gstEl) gstEl.textContent = gst.toLocaleString('en-IN');
    if (totalEl) totalEl.textContent = total.toLocaleString('en-IN');
}

function setupPaymentMethodListeners() {
    setTimeout(() => {
        document.querySelectorAll('.payment-option-card').forEach(card => {
            card.addEventListener('click', function() {
                selectPaymentMethod(this.dataset.payment);
            });
        });
    }, 100);
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    
    document.querySelectorAll('.payment-option-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = document.querySelector(`[data-payment="${method}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    const paymentForms = document.getElementById('paymentForms');
    if (paymentForms) {
        paymentForms.style.display = 'block';
        document.querySelectorAll('.payment-form').forEach(form => {
            form.style.display = 'none';
        });
        
        const selectedForm = document.getElementById(`${method}Form`);
        if (selectedForm) {
            selectedForm.style.display = 'block';
        }
    }
    
    if (method === 'emi') {
        const hasEmiProducts = cart.some(item => item.emiAvailable);
        if (!hasEmiProducts) {
            showNotification('EMI is not available for items in your cart', 'warning');
            return;
        }
    }
}

function nextCheckoutStep() {
    if (currentCheckoutStep < 3) {
        if (currentCheckoutStep === 1) {
            const form = document.querySelector('#step-1 form');
            if (form && !form.checkValidity()) {
                form.reportValidity();
                return;
            }
        }

        if (currentCheckoutStep === 2) {
            if (!selectedPaymentMethod) {
                showNotification('Please select a payment method', 'warning');
                return;
            }
            processPayment();
            return;
        }

        currentCheckoutStep++;
        updateCheckoutSteps();
    }
}

function prevCheckoutStep() {
    if (currentCheckoutStep > 1) {
        currentCheckoutStep--;
        updateCheckoutSteps();
    }
}

function updateCheckoutSteps() {
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 <= currentCheckoutStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    document.querySelectorAll('.checkout-step').forEach((step, index) => {
        if (index + 1 === currentCheckoutStep) {
            step.classList.remove('hidden');
        } else {
            step.classList.add('hidden');
        }
    });

    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    if (prevBtn) prevBtn.style.display = currentCheckoutStep > 1 ? 'block' : 'none';
    
    if (nextBtn) {
        if (currentCheckoutStep === 2) {
            nextBtn.textContent = 'Complete Order';
            nextBtn.className = 'btn btn--primary';
        } else if (currentCheckoutStep === 3) {
            nextBtn.textContent = 'Close';
            nextBtn.onclick = function() {
                closeCheckout();
                cart = [];
                updateCartDisplay();
            };
        } else {
            nextBtn.textContent = 'Continue';
            nextBtn.className = 'btn btn--primary';
        }
    }
}

function processPayment() {
    showNotification('Processing payment...', 'info');
    
    const nextBtn = document.getElementById('nextStepBtn');
    if (nextBtn) {
        nextBtn.innerHTML = '<div class="spinner"></div> Processing...';
        nextBtn.disabled = true;
    }
    
    setTimeout(() => {
        const orderNumber = 'ART-' + Date.now();
        const { total } = calculateCartTotals();
        
        const orderNumberEl = document.getElementById('orderNumber');
        const orderTotalEl = document.getElementById('orderTotal');
        const deliveryEstimateEl = document.getElementById('deliveryEstimate');
        
        if (orderNumberEl) orderNumberEl.textContent = orderNumber;
        if (orderTotalEl) orderTotalEl.textContent = total.toLocaleString('en-IN');
        
        const deliveryDays = total > 10000 ? applicationData.deliveryInfo.metro : applicationData.deliveryInfo.tier2;
        if (deliveryEstimateEl) deliveryEstimateEl.textContent = deliveryDays;
        
        currentCheckoutStep = 3;
        updateCheckoutSteps();
        
        if (nextBtn) {
            nextBtn.innerHTML = 'Close';
            nextBtn.disabled = false;
        }
        
        showNotification('Payment successful! Order confirmed.', 'success');
    }, 3000);
}

// Apply Offer Code
function applyOfferCode(code) {
    showNotification(`Offer code ${code} copied! Apply at checkout.`, 'success');
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).catch(() => {
            console.log('Could not copy to clipboard');
        });
    }
}

// Form Submission Functions
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showNotification(`Thank you for subscribing with ${email}!`, 'success');
    event.target.reset();
}

function submitContactForm(event) {
    event.preventDefault();
    showNotification('Thank you for your message! We\'ll get back to you soon on WhatsApp.', 'success');
    event.target.reset();
}

// WhatsApp Support Button
function addWhatsAppButton() {
    const existingBtn = document.querySelector('.whatsapp-float');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = `https://wa.me/919876543210?text=Hi! I need help with my order.`;
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.title = 'Chat on WhatsApp';
    
    document.body.appendChild(whatsappBtn);
    console.log('WhatsApp button added');
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Auto-advance carousel on desktop
let carouselInterval;

function startCarouselAutoPlay() {
    if (window.innerWidth > 768) {
        carouselInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
}

function stopCarouselAutoPlay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

window.addEventListener('resize', () => {
    stopCarouselAutoPlay();
    if (window.innerWidth > 768) {
        startCarouselAutoPlay();
    }
});

if (window.innerWidth > 768) {
    startCarouselAutoPlay();
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal:not(.hidden)');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
            if (modal.id === 'productModal') {
                currentProduct = null;
            }
            if (modal.id === 'checkoutModal') {
                selectedPaymentMethod = null;
            }
        }
    });
});

// Keyboard navigation for modals and accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const visibleModal = document.querySelector('.modal:not(.hidden)');
        if (visibleModal) {
            visibleModal.classList.add('hidden');
            document.body.style.overflow = '';
            if (visibleModal.id === 'productModal') {
                currentProduct = null;
            }
            if (visibleModal.id === 'checkoutModal') {
                selectedPaymentMethod = null;
            }
        }
        
        if (isMobileMenuOpen) {
            closeMobileMenu();
        }
    }
});

// Mobile Number Validation (Indian format)
function validateMobileNumber(number) {
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(number);
}

// PIN Code Validation
function validatePinCode(pincode) {
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    return pincodeRegex.test(pincode);
}

// Enhanced form validation with Indian specifics
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', function() {
            const value = this.value.replace(/\D/g, '');
            if (validateMobileNumber(value)) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.add('invalid');
                this.classList.remove('valid');
            }
        });
    });
    
    document.querySelectorAll('input[pattern="[0-9]{6}"]').forEach(input => {
        input.addEventListener('input', function() {
            if (validatePinCode(this.value)) {
                this.classList.add('pincode-valid');
                this.classList.remove('pincode-invalid');
            } else {
                this.classList.add('pincode-invalid');
                this.classList.remove('pincode-valid');
            }
        });
    });
});

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('resize', debounce(handleWindowResize, 250));

console.log('Responsive application fully loaded and optimized for all devices');