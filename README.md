# Shopping Cart Project

This project is an interactive shopping cart where users can adjust the quantity of items, remove items, and see the total price update dynamically.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue)

## Installation

To set up the project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shopping-cart.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shopping-cart
   ```
3. Open the `index.html` file in your browser.

## Features

1. **Quantity Adjustment**: Users can increase or decrease the quantity of each item using `+` and `-` buttons.
2. **Remove Item**: Users can remove items from the cart using a trash icon, and the cart updates accordingly.
3. **Like Item**: Users can click on a heart icon to "like" an item, toggling its color to red.
4. **Total Price Calculation**: The total price of all items in the cart updates automatically with every change.


## Code Structure

The project code primarily consists of JavaScript functions for handling interactivity with event listeners.

### Key Elements Selected

- **Buttons**: 
  - Plus (`.fa-plus-circle`) and Minus (`.fa-minus-circle`) buttons for adjusting item quantities
  - Trash (`.fa-trash-alt`) button for deleting items
  - Heart (`.fa-heart`) button for liking items
- **Quantity Display**: `.quantity` spans for each item
- **Total Price**: `.total` element for displaying the total cart value


### JavaScript Functions

#### 1. updateTotal()
- **Purpose**: Calculates and updates the total price based on the quantity and unit price of each item in the cart.
- **How it Works**: 
  - `updateTotal()` iterates over each item's quantity (selected by `.quantity` class)
  - It multiplies the quantity by the item's unit price (extracted using `.unit-price` class within each card) and adds up the values
  - The total is then displayed by updating the `textContent` of the `.total` element with the calculated price

```javascript
function updateTotal() {
    let total = 0;
    const quantities = document.querySelectorAll('.quantity');
    quantities.forEach((quantity) => {
        const unitPrice = parseInt(quantity.closest('.card').querySelector('.unit-price').textContent);
        total += parseInt(quantity.textContent) * unitPrice;
    });
    const totalPrice = document.querySelector('.total');
    totalPrice.textContent = total + ' \n';
}
```


#### 2. Event Listeners
Each button in the cart has an event listener to handle specific user actions, ensuring the cart is dynamic and responsive to changes.

##### Plus Button
- **Purpose**: Increases the quantity of the corresponding item by 1.
- **How it Works**: When clicked, the plus button finds its associated quantity, increments it by 1, and then calls `updateTotal()` to recalculate the total price.

```javascript
plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        quantities[index].textContent = parseInt(quantities[index].textContent) + 1;
        updateTotal();
    });
});
```


##### Minus Button
- **Purpose**: Decreases the item's quantity by 1, without going below 0.
- **How it Works**: When clicked, the minus button finds its associated quantity, checks if it's greater than 0, and decrements it by 1 if so. Then, it calls `updateTotal()` to reflect any changes in the total price.

```javascript
minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (parseInt(quantities[index].textContent) > 0) {
            quantities[index].textContent = parseInt(quantities[index].textContent) - 1;
            updateTotal();
        }
    });
});
```


##### Trash Button
- **Purpose**: Removes the item from the cart.
- **How it Works**: When clicked, the trash button removes the entire `.card` section for the item and then calls `updateTotal()` to update the total price without the deleted item.

```javascript
trashButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.closest('.card').remove();
        updateTotal();
    });
});
```


##### Heart Button
- **Purpose**: Toggles the "liked" state of the item by changing the color of the heart icon.
- **How it Works**: When clicked, the heart button toggles the `text-danger` class on the heart icon, changing its color to red. If clicked again, it removes the red color.

```javascript
heartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('text-danger');
    });
});
```


#### 3. Initial Calculation
- **Purpose**: Sets the total price on page load based on any preset quantities or prices.
- **How it Works**: The `updateTotal()` function is called initially to calculate the total based on any pre-defined item quantities and prices.

```javascript
updateTotal();
```


## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. We welcome improvements and new features!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue on GitHub.

## Feedback

Your feedback is highly appreciated! Please reach out via GitHub issues.