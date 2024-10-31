// Select all necessary elements
const plusButtons = document.querySelectorAll('.fa-plus-circle'); // Select all plus buttons
const minusButtons = document.querySelectorAll('.fa-minus-circle'); // Select all minus buttons
const quantities = document.querySelectorAll('.quantity'); // Select all quantity elements
const trashButtons = document.querySelectorAll('.fa-trash-alt'); // Select all trash buttons
const heartButtons = document.querySelectorAll('.fa-heart'); // Select all heart buttons

// Function to update total price
function updateTotal() {
    // Calculate the total price
    let total = 0;
    // Select remaining quantity elements within card bodies
    const quantities = document.querySelectorAll('.quantity');
    // Loop through each quantity and its associated unit price
    quantities.forEach((quantity) => {
        const unitPrice = parseInt(quantity.closest('.card').querySelector('.unit-price').textContent);
        total += parseInt(quantity.textContent) * unitPrice;
    });
    // Update the total price element
    const totalPrice = document.querySelector('.total'); // Selecting total price element in case it wasn't globally defined
    totalPrice.textContent = total + ' $';
}


// Add event listeners to plus buttons
plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Increment the quantity of the item
    quantities[index].textContent = parseInt(quantities[index].textContent) + 1;
    // Update the total price
    updateTotal();
  });
});

// Add event listeners to minus buttons
minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Check if the quantity is greater than 0
    if (parseInt(quantities[index].textContent) > 0) {
      // Decrement the quantity of the item
      quantities[index].textContent = parseInt(quantities[index].textContent) - 1;
      // Update the total price
      updateTotal();
    }
  });
});

// Add event listeners to trash buttons
trashButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove the item from the cart
    quantities[index].closest('.card').remove();
    // Update the total price
    updateTotal();
  });
});

// Add event listeners to heart buttons
heartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle the color of the heart button
    button.classList.toggle('text-danger');
  });
});


// Add hover effects for interactive elements
const allIcons = document.querySelectorAll('i');
allIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        if (icon.classList.contains('fa-plus-circle')) {
            icon.style.color = '#28a745'; // green for plus
        } else if (icon.classList.contains('fa-minus-circle')) {
            icon.style.color = '#dc3545'; // red for minus
        }
    });

    icon.addEventListener('mouseleave', () => {
        if (icon.classList.contains('fa-plus-circle') || 
            icon.classList.contains('fa-minus-circle')) {
            icon.style.color = 'black';
        }
    });
});

// Initial total price calculation
updateTotal();
