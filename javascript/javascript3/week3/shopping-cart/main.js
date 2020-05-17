class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    fetch(`https://api.exchangerate-api.com/v4/latest/DKK`)
      .then((response) => response.json())
      .then((data) => {
        let currencyConvert = (data.rates[currency] * this.price).toFixed(2);
        console.log(
          `Price of ${this.name} in ${currency} is ${currencyConvert}`
        );
      });
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
    const removedProduct = this.products.filter(
      (itemname) => product !== itemname
    );
    this.products = removedProduct;
  }

  searchProduct(productName) {
    // Implement functionality here
    let SearchProductName = this.products.filter(
      (itemname) => itemname === productName
    );
    console.log(SearchProductName);
  }

  getTotal() {
    // Implement functionality here
    const pricelist = this.products.map((product) => product.price);
    const TotalPrice = pricelist.reduce((sum, item) => sum + item);
    console.log(TotalPrice);
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

  getUser() {
    // Implement functionality here
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((Response) => Response.json())
      // .then(data=> console.log(data))
      .then((user) => {
        this.renderuser(user);
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
// shoppingCart.addProduct(flatscreen);

const Phone = new Product("Phone", 1000);
const Fridge = new Product("Fridge", 2000);
const laptop = new Product("laptop", 3500);
const TV = new Product("TV", 3000);
const Playstation = new Product("Playstation", 1000);
const Keyboard = new Product("Keyboard", 800);

shoppingCart.addProduct(Phone);
shoppingCart.addProduct(Fridge);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(TV);
shoppingCart.addProduct(Playstation);
shoppingCart.addProduct(Keyboard);

// console.log(shoppingCart);

// shoppingCart.removeProduct('Playstation');
// shoppingCart.searchProduct('Playstation');
// shoppingCart.getTotal();
// shoppingCart.renderProducts();

shoppingCart.getUser();

// console.log(shoppingCart);

Phone.convertToCurrency("EUR");
laptop.convertToCurrency("USD");
