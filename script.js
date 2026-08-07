// Search Button
let searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", function () {
    let input = document.querySelector(".search input").value;

    if (input === "") {
        alert("Please enter something to search.");
    } else {
        alert("Searching for: " + input);
    }
});

// Location
let locationBox = document.querySelector(".location");

locationBox.addEventListener("click", function () {
    alert("Current delivery location: India");
});

// Returns & Orders
let orders = document.querySelector(".nav-right div:nth-child(2)");

orders.addEventListener("click", function () {
    alert("Opening your Orders...");
});

// Cart
let cart = document.querySelector(".cart");
let badge = document.querySelector(".badge");

let count = Number(badge.innerText);

cart.addEventListener("click", function () {
    alert("Items in Cart: " + count);
});

// Add to Cart Buttons
let buttons = document.querySelectorAll(".card button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        count++;
        badge.innerText = count;
        alert("Product added to cart!");
    });
}

// Logo Click
let logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
    alert("Welcome to Amazon Clone!");
});