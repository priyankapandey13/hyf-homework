class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    fetch(`https://api.exchangerate-api.com/v4/latest/DKK`)
    .then((response) => response.json())
    .then((data) => {
      return this.getPrice(data, currency);
    });
  }
  
  getPrice(data, currency){
    let currencyConvert = (data.rates[currency] * this.price).toFixed(2);
    console.log(
      `Price of ${this.name} in ${currency} is ${currencyConvert}`
    );
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    const updatedArrayList = this.products.filter(
      (itemname) => product !== itemname
    );   
    this.products = updatedArrayList;
  }

  searchProduct(productName) {
    // Implement functionality here
    const SearchProductName = this.products.filter(item=> {
    return (item.name === productName)}
    );
    console.log(SearchProductName);
  }

  getTotal() {
    // Implement functionality here
    const pricelist = this.products.map(product => product.price);
    const TotalPrice = pricelist.reduce((sum, item) => sum + item);
    console.log(`Total price of all products is: ${TotalPrice}`);
    return TotalPrice;
  }

  renderProducts() {
    const container = document.querySelector("#products");
    const allnames = this.products.map(
      (item) => `${item.name}    --   ${item.price} Kr`
    );

    allnames.forEach((sub) => {
      const item = document.createElement("li");
      item.innerHTML = sub;
      container.appendChild(item);
    });
  }

  getUser(){
    // Implement functionality here
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((Response) => Response.json())
      .then(user => {
         return user;
      });
  }

  renderuser(data) {
    const Div = document.getElementById("resultbox");
    const p = document.createElement("p");
    Div.appendChild(p);
    let total = this.getTotal();
    p.innerText = `Hi my name is ${data.name}. I spent total ${total} kr. I can be contacted at : ${data.phone} / ${data.email} or ather website : ${data.website}`;
    this.renderProducts();
  }
}

const shoppingCart = new ShoppingCart("Phone", 3000);
const flatscreen = new Product("flat-screen", 5000);

const Phone = new Product("Phone", 1000);
const Fridge = new Product("Fridge", 2000);
const laptop = new Product("laptop", 3500);
const TV = new Product("TV", 3000);
const Playstation = new Product("Playstation", 1000);
const Keyboard = new Product("Keyboard", 800);

// Adding products in Shopping cart
shoppingCart.addProduct(Phone);
shoppingCart.addProduct(Fridge);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(TV);
shoppingCart.addProduct(Playstation);
shoppingCart.addProduct(Keyboard);

// Removing products from Shopping cart
shoppingCart.removeProduct('Playstation');

// Searching for products in Shopping cart
shoppingCart.searchProduct('Playstation');

// Getting total of all products in Shopping cart
// shoppingCart.getTotal();

// Rendering all products from Shopping cart
// shoppingCart.renderProducts();

// Getting user details from API and rendering it with it's shopping cart details

shoppingCart.getUser()
.then(userdata => {
  shoppingCart.renderuser(userdata);
});

Phone.convertToCurrency("EUR");
laptop.convertToCurrency("USD");
