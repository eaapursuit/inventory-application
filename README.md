# Car Inventory Management System
- This JavaScript application manages a car inventory. It allows users to view details about different cars, place orders, and dynamically update the inventory based on user interactions.

## Car Data Structure
- The car inventory is represented as an array of objects, where each object contains details about a specific car. Each car has properties such as name, price, year, color, condition, image URL, order count, and stock.


## Displaying Cars
- The createCarCard function is responsible for generating a visual representation (card) for each car. It creates HTML elements dynamically, including an image, name, description, price, a selector for ordering, and a button to remove the car from the inventory.

## User Interaction
- Ordering Cars: Users can click left and right arrows to increase or decrease the order count. The stock is updated accordingly, and the stock status is displayed.

- Removing Cars: Clicking the "Remove" button removes the car from the inventory.

## Shipping Orders
- A button at the bottom of the page allows users to view a shipping log. It filters cars with a positive order count and displays an alert with the details of ordered cars.

## Adding New Cars
- A form at the top allows users to add new cars to the inventory. After filling in the required details, submitting the form creates a new car placard dynamically.

## Styling
- The application provides visual feedback by changing the border color of a car card when the mouse is over it.

## Resetting Form
- The resetForm function resets the form after a new car is added.

### Notes
- The application uses basic HTML, CSS, and vanilla JavaScript.
- The styling provides a simple and clean user interface.
- User interactions are handled with event listeners.
- The application dynamically updates the DOM based on user actions.
- Feel free to explore and enhance the application based on your requirements!