# Addtocart
I added an Add to Cart system with a limit of 4 items.
# ShopX

ShopX is a simple e-commerce website built using **HTML, CSS, and JavaScript**.

This project was created while learning JavaScript and practicing how to build interactive features for a real-world style shopping website.

## Features

* Dark-themed e-commerce UI
* Product cards with:

  * Product image
  * Description
  * Rating
  * Current price
  * Old price
* Add to Cart functionality
* Cart item counter
* Cart page
* Product hover effects
* Search bar UI
* Product categories section
* Responsive layout

## Add to Cart

The main JavaScript functionality allows users to add products to the cart.

Products are stored inside a JavaScript array:

```javascript
let cart = [];
```

When the user clicks **Add to Cart**, the product is added to the array and the cart counter is updated.

```javascript
function addToCart(product) {
    cart.push(product);

    const cartCount = document.querySelector(".cart span");

    cartCount.innerHTML = cart.length;
}
```

This helped me understand:

* Arrays
* Functions
* DOM manipulation
* `querySelector()`
* `innerHTML`
* Button click events
* Basic shopping-cart logic

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
ShopX/
│
├── index.html
├── cart.html
├── style.css
├── script.js
│
├── logo1.png
├── headphone1.webp
├── watch.webp
├── mouse.webp
└── keyboard.webp
```

## How to Run

1. Clone this repository.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Open the project folder.

3. Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code for a better development experience.

## Live Preview

Add your deployed website link here:

**Live Preview:** YOUR_LIVE_PREVIEW_LINK

## What I Learned

While building ShopX, I practiced connecting HTML, CSS, and JavaScript together to create an interactive website.

The Add to Cart feature was one of the first steps toward understanding how real e-commerce websites manage user interactions and data.

I'm continuing to improve the project as I learn more JavaScript concepts and advanced functions.

## Future Improvements

Some features I plan to add:

* Remove items from cart
* Increase/decrease product quantity
* Save cart using `localStorage`
* Search functionality
* Category filtering
* Product details page
* Total price calculation
* Checkout page
* Better mobile responsiveness

## Author

**Gaurav**

Learning and building with JavaScript, one project at a time.
