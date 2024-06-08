document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', function() {
            navItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            updateCategories();
        });
    });

    function updateCategories() {
        let activeCategories = [];
        let inactiveCategories = [];

        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item) => {
            const category = item.dataset.category;
            if (item.classList.contains('active')) {
                activeCategories.push(category);
            } else {
                inactiveCategories.push(category);
            }
        });

        updateProductVisibility(activeCategories, inactiveCategories);
    }

    function updateProductVisibility(activeCategories, inactiveCategories) {
        const productItems = document.querySelectorAll('.product');

        // Check if "All Products" is active
        const allProductsActive = activeCategories.includes('essentials guideBook metalRecovery rockHounding lapidary other');

        productItems.forEach((product) => {
            let shouldDisplay = false;

            if (allProductsActive) {
                shouldDisplay = true;
            } else {
                activeCategories.forEach((category) => {
                    if (product.classList.contains(category)) {
                        shouldDisplay = true;
                    }
                });
            }

            if (shouldDisplay) {
                product.classList.add('displayed');
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
                product.classList.remove('displayed');
            }
        });
    }
});
