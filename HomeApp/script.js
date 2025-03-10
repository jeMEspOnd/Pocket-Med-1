$(document).ready(function () {
    let searchTimeout;

    $('#searchButton').click(function () {
        performSearch();
    });

    $('#searchInput').on('input', function () {
        clearTimeout(searchTimeout);
        if ($(this).val().length > 0) { // Check if input value is greater than 0
            searchTimeout = setTimeout(performSearch, 300); // 300ms debounce
        } else {
            $('#productPage').hide();
            $('#featuredProductsSection').show();
        }
    });

    function performSearch() {
        const query = $('#searchInput').val();
        const results = getSearchResults(query);
        displayResults(results);
    }

    function getSearchResults(query) {
        const dummyData = [
            {
                name: 'Omega-3 Fish Oil Capsules',
                pharmacy: 'Ocean Health Pharmacy',
                price: '$18.50',
                contact: '123-987-6543',
                rating: 4.6,
                imageUrl: '/images/medicine-3308108.jpg' // New image
            },
            {
                name: 'Probiotic Digestive Support',
                pharmacy: 'Gut Wellness Center',
                price: '$25.00',
                contact: '987-123-4567',
                rating: 4.9,
                imageUrl: '/images/health-846862_1280.jpg' // New image
            },
            {
                name: 'Melatonin Sleep Aid',
                pharmacy: 'Dreamland Pharmacy',
                price: '$12.75',
                contact: '555-678-9012',
                rating: 4.3,
                imageUrl: '/images/health-846862_1280.jpg' // New image
            },
            {
                name: 'Collagen Skin & Hair Vitamins',
                pharmacy: 'Beauty Health Pharmacy',
                price: '$30.00',
                contact: '111-222-3333',
                rating: 4.7,
                imageUrl: '/images/medicine-3308108.jpg' // New image
            },
            {
                name: 'Iron Supplement Tablets',
                pharmacy: 'Vital Iron Store',
                price: '$9.99',
                contact: '444-555-6666',
                rating: 4.1,
                imageUrl: '/images/medicine-8287535.jpg' // New image
            },
            {
                name: 'Vitamin D3 Capsules',
                pharmacy: 'Sunshine Vitamins',
                price: '$14.25',
                contact: '777-888-9999',
                rating: 4.5,
                imageUrl: '/images/health-846862_1280.jpg' // New image
            },
            {
                name: 'Calcium with Magnesium',
                pharmacy: 'Bone Health Center',
                price: '$22.50',
                contact: '100-200-3000',
                rating: 4.8,
                imageUrl: '/images/medications-257336_1280.jpg' // New image
            },
            {
                name: 'CoQ10 Heart Health',
                pharmacy: 'Heart Smart Pharmacy',
                price: '$28.00',
                contact: '400-500-6000',
                rating: 4.4,
                imageUrl: '/images/medicine-2207622_1280.jpg' // New image
            },
            {
                name: 'Biotin Hair Growth',
                pharmacy: 'Hair & Nail Care',
                price: '$16.90',
                contact: '700-800-9000',
                rating: 4.2,
                imageUrl: '/images/medicine-2449607_1280.jpg' // New image
            },
            {
                name: 'Turmeric Curcumin Capsules',
                pharmacy: 'Joint Relief Store',
                price: '$19.75',
                contact: '123-789-4560',
                rating: 4.6,
                imageUrl: '/images/medicine-2449619_1280.jpg'// new image
            },
            {
                name: 'Elderberry Immune Support',
                pharmacy: 'Immunity Boost',
                price: '$15.50',
                contact: '123-456-7893',
                rating: 4.7,
                imageUrl: '/images/tablets-5620566.jpg' // new image
            },
            {
                name: 'Magnesium Citrate Powder',
                pharmacy: 'Relaxation Station',
                price: '$11.25',
                contact: '987-654-3213',
                rating: 4.3,
                imageUrl: '/images/tablets-5620566.jpg' // New image
            },
            {
                name: 'Zinc Lozenges',
                pharmacy: 'Cold & Flu Relief',
                price: '$8.99',
                contact: '555-123-4570',
                rating: 4.1,
                imageUrl: '/images/medicine-2449619_1280.jpg' // New image
            },
            {
                name: 'Vitamin B12 Sublingual',
                pharmacy: 'Energy Boosters',
                price: '$17.00',
                contact: '111-222-3336',
                rating: 4.5,
                imageUrl: '/images/medicine-3308108.jpg' // New image
            },
            {
                name: 'Potassium Chloride Tablets',
                pharmacy: 'Electrolyte Essentials',
                price: '$13.50',
                contact: '444-555-6669',
                rating: 4.4,
                imageUrl: '/images/medicine-3308108.jpg' // New image
            },
            {
                name: 'Vitamin E Oil Capsules',
                pharmacy: 'Skin Care Plus',
                price: '$21.00',
                contact: '777-888-9998',
                rating: 4.8,
                imageUrl: '/images/medicine-8287535.jpg' // New image
            },
            {
                name: 'Selenium Supplement',
                pharmacy: 'Antioxidant Avenue',
                price: '$10.50',
                contact: '100-200-3003',
                rating: 4.2,
                imageUrl: '/images/health-846862_1280.jpg' // New image
            },
            {
                name: 'Folic Acid Tablets',
                pharmacy: 'Prenatal Care',
                price: '$9.50',
                contact: '400-500-6003',
                rating: 4.6,
                imageUrl: '/images/medications-257336_1280.jpg' // New image
            },
            {
                name: 'Vitamin K2 Capsules',
                pharmacy: 'Cardiovascular Care',
                price: '$23.75',
                contact: '700-800-9003',
                rating: 4.9,
                imageUrl: '/images/medicine-2207622_1280.jpg' // New image
            },
            {
                name: 'Choline Bitartrate',
                pharmacy: 'Brain Boosters',
                price: '$18.25',
                contact: '123-789-4561',
                rating: 4.7,
                imageUrl: '/images/medicine-2449607_1280.jpg' // New image
            }
        ];

        return dummyData.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.pharmacy.toLowerCase().includes(query.toLowerCase())
        );
    }

    function displayResults(results) {
        debugger
        const productPage = $('#productPage');
        const featuredProductsSection = $('#featuredProductsSection');
        const productCardRow = $('<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4"></div>');

        productPage.empty();
        if (results.length > 0) {
            productPage.append(productCardRow);
            results.forEach(function (item) {
                const resultHtml = `
                <div class="col-md-4 col-sm-6 col-12 mb-4">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${item.imageUrl}" alt="${item.name}" onerror="this.onerror=null;this.src='/images/placeholder.png';">
                        </div>
                        <div class="product-details">
                            <h3 class="product-name">${item.name}</h3>
                            <p class="product-pharmacy">${item.pharmacy}</p>
                            <div class="product-rating">
                                ${generateStarRating(item.rating)}
                            </div>
                            <div class="product-price">
                                <strong>Price:</strong> $${parseFloat(item.price.replace('$', '')).toFixed(2)}
                            </div>
                            <div class="product-contact">
                                <strong>Contact:</strong> ${item.contact}
                            </div>
                            <div class="product-total">
                                <strong>Total:</strong> $${parseFloat(item.price.replace('$', '')).toFixed(2)}
                            </div>
                            <button class="visit-btn" data-contact="${item.contact}">Visit Pharmacy</button>
                        </div>
                    </div>
                </div>
            `;

                // Function to generate star rating HTML
                function generateStarRating(rating) {
                    const fullStars = Math.floor(rating);
                    const hasHalfStar = rating % 1 !== 0;
                    let starsHtml = '';

                    for (let i = 0; i < fullStars; i++) {
                        starsHtml += '<i class="fas fa-star"></i>'; // Full star icon
                    }

                    if (hasHalfStar) {
                        starsHtml += '<i class="fas fa-star-half-alt"></i>'; // Half star icon
                    }
                    for (let i = rating; i < 5; i++) {
                        starsHtml += '<i class="far fa-star"></i>';
                    }

                    return starsHtml;
                }

                // Add CSS for product card styling
                $('head').append(`
                <style>
                    .product-card {
                        border-radius: 15px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                        background-color: white;
                        overflow: hidden;
                        display: flex; /* Use flexbox for consistent height */
                        flex-direction: column; /* Stack elements vertically */
                        height: 100%; /* Ensure cards take up full height of their container */
                    }
            
                    .product-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                    }
            
                    .product-image {
                        height: 250px;
                        overflow: hidden;
                    }
            
                    .product-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                        border-radius: 15px 15px 0 0;
                    }
            
                    .product-details {
                        padding: 20px;
                        flex-grow: 1; /* Allow details to take up remaining space */
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between; /* Distribute space evenly */
                    }
            
                    .product-name {
                        font-size: 1.2rem;
                        font-weight: 600;
                        margin-bottom: 5px;
                    }
            
                    .product-pharmacy {
                        font-size: 0.9rem;
                        color: #6c757d;
                        margin-bottom: 10px;
                    }
            
                    .product-rating i {
                        color: #ffc107;
                    }
            
                    .product-price, .product-contact, .product-total {
                        margin-bottom: 8px;
                    }
            
                    .visit-btn {
                        background-color: #007bff;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 8px;
                        cursor: pointer;
                        width: 100%;
                        transition: background-color 0.3s ease;
                    }
            
                    .visit-btn:hover {
                        background-color: #0069d9;
                    }
                </style>
            `);
                productCardRow.append(resultHtml);
            });
            featuredProductsSection.hide();
            productPage.fadeIn(300); // Fade in
        } else {
            productPage.html(`
                <div style="min-height: 80vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    <i class="fas fa-search fa-3x" style="animation: shake 0.8s ease-in-out;"></i>
                    <p class="text-center mt-3 no-data-text" style="opacity: 0; transition: opacity 0.5s ease-in-out;">No data found.</p>
                </div>
            `).fadeIn(300);

            setTimeout(function () {
                $('.no-data-text').css('opacity', 1);
            }, 800); // Fade in text after shake animation
            featuredProductsSection.hide(); // Hide featured products.
        }
        // Add CSS keyframes for shake animation
        $('head').append(`
    <style>
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    </style>
`);
        $('.visit-btn').click(function () {
            const contact = $(this).data('contact');
            alert(`Visiting pharmacy contact: ${contact}`);
        });
        $('#searchInput').focus()
    }
});