console.log('Script loaded');


const availProducts = getAvailableProducts();
console.log(availProducts)


renderProducts(availProducts); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text

function renderProducts(products){
    const ulname = document.querySelector("section.products > ul");








    for(let i=0; i<availProducts.length;i++)
    {
        
        let liname = document.createElement("li");
        let ulname1 = document.createElement("ul");
        let liname1 = document.createElement("li");
        ulname.appendChild(liname);
        liname.appendChild(ulname1);
        ulname1.appendChild(liname1);

        liname1.textContent = `${availProducts[i].name}   |   ${availProducts[i].price}   |   ${availProducts[i].rating}   |   ${availProducts[i].shipsTo} `;
        
        
    }


}
    

