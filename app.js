const carInventory = [
  {
    name: "Maserati GranTurismo",
    price: 175495,
    year: 2024,
    color: "White",
    condition: "Excellent",
    image: "imgs/mzgt24.png",
    orderCount: 0,
    stock: 10,
  },
  {
    name: "McLaren Artura",
    price: 237500,
    year: 2023,
    color: "Orange",
    condition: "Good",
    image: "imgs/mcLaren23.png",
    orderCount: 0,
    stock: 12,
  },
  {
    name: "Ferrari Roma",
    price: 226570,
    year: 2022,
    color: "Chrome",
    condition: "Excellent",
    image: "imgs/ferarriRoma22.png",
    orderCount: 0,
    stock: 10,
  },
  {
    name: "Porsche 911",
    price: 107550,
    year: 2023,
    color: "Black Matte",
    condition: "Good",
    image: "imgs/23porsche911.png",
    orderCount: 0,
    stock: 8,
  },
  {
    name: "Bentley Continental",
    price: 238325,
    year: 2023,
    color: "Silver",
    condition: "Excellent",
    image: "imgs/2023bc.png",
    orderCount: 0,
    stock: 9,
  },
  {
    name: "Audi R8",
    price: 160095,
    year: 2023,
    color: "Electric Green",
    condition: "Excellent",
    image: "imgs/limer8audi.png",
    orderCount: 0,
    stock: 1,
  },
  {
    name: "Nissan GT-R",
    price: 122885,
    year: 2024,
    color: "Coal",
    condition: "Good",
    image: "imgs/nissangtr.png",
    orderCount: 0,
    stock: 8,
  },
  {
    name: "Tesla Cybertruck",
    price: 96390,
    year: 2024,
    color: "Stainless Steel",
    condition: "Excellent",
    image: "imgs/cybertruck.png",
    orderCount: 0,
    stock: 8,
  },
];

//This function will create a container for the car element
function createCarCard(car) {
  const carContainer = document.createElement("div");
  carContainer.classList.add("car-card");

  //this line of code below will put the image of the specific car on that placard once looped through
  const carImageElement = document.createElement("img");
  carImageElement.setAttribute("src", car.image);

  //Year Make and Model of the car
  const carPlacardName = document.createElement("strong");
  carPlacardName.textContent = car.name;

  //Description of the car
  const carDescription = document.createElement("p");
  carDescription.textContent = ` This ${car.year} ${car.name} comes in ${car.color} and is in 
  ${car.condition} condition.`;

  //Cost of the car
  const carPrice = document.createElement("p");
  carPrice.textContent = `Priced at $${car.price}`;

  //Selector for adding cars to the order
  const selectorContainer = document.createElement("div");
  selectorContainer.classList.add("selector");

  const leftArrow = document.createElement("span");
  leftArrow.textContent = "⬅️";
  leftArrow.classList.add("inactive");
  const rightArrow = document.createElement("span");
  rightArrow.textContent = "➡️";

  const currentOrder = document.createElement("span");
  currentOrder.textContent = car.orderCount;
//removes a car and removes the car from the car inventory array
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    const index = carInventory.findIndex(
      (carItem) => carItem.name === car.name
    );

    carContainer.remove();

    if (index !== -1) {
      carInventory.splice(index, 1);
    }
  });

  leftArrow.addEventListener("click", () => {
    if (car.orderCount > 0) {
      currentOrder.textContent = --car.orderCount;
      car.stock++;
    }
    if (car.orderCount === 0) {
      leftArrow.classList.add("inactive");
    } else {
      leftArrow.classList.remove("inactive");
    }

    updateStockStatus();
  });

  rightArrow.addEventListener("click", () => {
    if (car.stock > 2) {
      currentOrder.textContent = ++car.orderCount;
      car.stock--;
    } else {
      alert(
        "This car is no longer available to order. Please contact the manager for backorder instructions due to limited stock"
      );
    }
    if (car.orderCount === 0) {
      leftArrow.classList.add("inactive");
    } else {
      leftArrow.classList.remove("inactive");
    }

    updateStockStatus();
  });

  //create an elemnent for stock status
  const inStockElement = document.createElement("p");
  inStockElement.classList.add("stock-status");
  carContainer.append(inStockElement);

  //updates the stock status based on the order count
  function updateStockStatus() {
    inStockElement.textContent =
      car.stock > 2 ? "In Stock" : "Out of Stock" ;
  }

  updateStockStatus();

  selectorContainer.append(leftArrow);
  selectorContainer.append(currentOrder);
  selectorContainer.append(rightArrow);

  //adding all the generated elements to the container
  carContainer.append(carImageElement);
  carContainer.append(carPlacardName);
  carContainer.append(carDescription);
  carContainer.append(carPrice);
  carContainer.append(selectorContainer);
  carContainer.append(removeButton);

  //add the car container to the main page
  const mainSection = document.querySelector("main");
  mainSection.append(carContainer);
}

function resetForm(){
  const formElement = document.querySelector("#addNewCar");
  formElement.reset();
}

for (let item of carInventory) {
  createCarCard(item);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const shippingLog = carInventory.filter((item) => item.orderCount > 0);
  if (shippingLog.length === 0) {
    alert("There are no cars to ship.");
  } else {
    const newShippingLog = shippingLog.map(
      (item) =>
        `${item.orderCount} order${
          item.orderCount === 1 ? "" : "s"
        } placed for the ${item.year} ${item.name}`
    );

    alert(newShippingLog.join("\n"));
  }
});

const carInventoryElements = document.querySelectorAll(".car-card");
for (let element of carInventoryElements) {
  element.addEventListener("mouseout", (event) => {
    if (event.target === element) {
      console.log(event.target, element);
      console.log("mouse out");
      element.style.borderColor = "gold";
    }
  });

  element.addEventListener("mouseover", (event) => {
    if (event.target === element) {
      console.log(event.target, element);
      console.log("mouse in");
      element.style.borderColor = "black";
    }
  });
}

const formElement = document.querySelector("#addNewCar");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const carName = formElement.carMakeModel.value;
  const carYear = formElement.carYear.value;
  const carPrice = formElement.carPrice.value;
  const carColor = formElement.carColor.value;
  const carCondition = formElement.carCondition.value;
  const carImage = formElement.carImageUrl.value;
  const carStock = formElement.carStock.value;

  if(!carName || !carPrice || !carImage || !carStock) {
alert("Please fill in at least three fields.");
return;
  }

  formElement.reset();
//creates and diplays a new placard for car entered
  createCarCard({
    name: carName,
    price: carPrice,
    year: carYear,
    color: carColor,
    condition: carCondition,
    image: carImage,
    orderCount: 0,
    stock: carStock,
  });
});
