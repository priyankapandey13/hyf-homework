console.log('Script loaded');


let availProducts = getAvailableProducts();
console.log(availProducts)


// renderProducts(availProducts); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text

function renderProducts(product){ //searchValue, sortValue, countryValue, priceValue
    const ulname = document.querySelector("section.products > ul");

    // for(let i=0; i<availProducts.length;i++)
    // {
        
        let liname = document.createElement("li");
        let ulname1 = document.createElement("ul");
        let liname1 = document.createElement("li");
        ulname.appendChild(liname);
        liname.appendChild(ulname1);
        ulname1.appendChild(liname1);

        liname1.textContent = `${product.name}   |   ${product.price}   |   ${product.rating}   |   ${product.shipsTo} `;
        // liname1.textContent = `${searchValue.value}   |   ${sortValue.value}   |   ${countryValue.value}   |   ${priceValue.value} `;
    // }
}


// searchValue, countryValue, sortValue, priceValue
// =======================================================================  Filter products + Searching for products





// Global variables

// let searchValue, shippedCountry, sortOption, pricing;

// function printValues() {
//     console.log(searchValue, shippedCountry, sortOption, pricing);
// }

// const searchbox = document.querySelector('.search input');
// searchbox.addEventListener('keydown', (event) => {
//     if (event.keyCode !== 13) {
//         return;
//     }
 
//    searchValue = searchbox.value;
//    printValues();
//    let searching = availProducts.filter((product) =>
//         product.name.toLowerCase() === searchValue.toLowerCase()
//     );

//     if (searching.length === 0) {
//         console.log(`Prod is not available`);
//     } else {
//         console.log(searching)
//     }
    
// //    renderProducts(searching);
   
// });


// =======================================================================  Showing products that ships to country - optional


// //   Getting Shipping country here
// const shippingCountry = document.querySelector('.country select');
// shippingCountry.addEventListener(`change`, () => {
//     console.log(shippingCountry.value)
//     shippedCountry = shippingCountry.value;
//     printValues();
// });

// //   Getting sorting option here
// const sorting = document.querySelector('.sort select');
// sorting.addEventListener(`change`, () => {
//     console.log(sorting.value)
//     sortOption = sorting.value;
//     printValues();
// });

// // Getting price option here
// const pricingOption = document.getElementById(`start`);
// pricingOption.addEventListener(`change`, () => {
//     console.log(pricingOption.value)
//     pricing = pricingOption.value;
//     printValues();
// });

const searchbox = document.querySelector('.search input');
const shippingCountry = document.querySelector('.country select');
const sorting = document.querySelector('.sort select');
const pricingOption = document.getElementById(`start`);

function searchProducts(event) {
    
    //return event.keyCode !== 13; // I tried to compact the if loop but somethings wrong, the code below is unreachable for browser
    if (event.keyCode !== 13) { //          why my event is undefined
                return;
        }

    const searchValue = searchbox.value
    const sortValue = sorting.value
    const countryValue = shippingCountry.value
    const priceValue = pricingOption.value;

    console.log(searchValue, countryValue, sortValue, priceValue);
}


searchbox.addEventListener('input', () => searchProducts());
shippingCountry.addEventListener('change', () => searchProducts());
sorting.addEventListener('change', () => searchProducts());
pricingOption.addEventListener('change', () => searchProducts());


// renderProducts(searchbox, shippingCountry, sorting, pricingOption);



















// Add to cart

addProducts();
function addProducts(){ //product
    const ulname = document.querySelector("section.cart > ul");

    // for(let i=0; i<availProducts.length;i++)
    // {
        
        let liname = document.createElement("li");
        let ulname1 = document.createElement("ul");
        let liname1 = document.createElement("li");
        ulname.appendChild(liname);
        liname.appendChild(ulname1);
        ulname1.appendChild(liname1);

        // liname1.textContent = `${product.name}   |   ${product.price}   |   ${product.rating}   |   ${product.shipsTo} `;
        liname1.textContent = `Product name   |   Product Price `;
    // }
}


{/* <li>
    <div class="name">Drone</div>
    <div class="price">1234</div>
</li> */}