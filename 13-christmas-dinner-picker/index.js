/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const dishes = {
  meat: [
    "Cranberry Glazed Pork Roast",
    "Rosemary Pomegranate Lamb Chops",
    "Maple Bacon Turkey Breast",
    "Spiced Honey Glazed Ham",
    "Cranberry Sage Chicken Thighs",
    "Peppercorn Beef Tenderloin",
  ],
  vege: [
    "Vegetarian Stuffed Bell Peppers",
    "Spinach and Feta Quiche",
    "Mushroom and Spinach Pasta",
    "Vegetable Stir-Fry with Tofu",
    "Caprese Salad with Balsamic Glaze",
    "Butternut Squash and Sage Risotto",
  ],
  simpleMeat: [
    "Garlic Herb Butter Shrimp",
    "Honey Mustard Glazed Chicken Thighs",
    "Pan-Seared Lemon Dill Salmon",
  ],
  simpleVege: [
    "Mushroom and Spinach Quesadillas",
    "Vegetarian Lentil Curry",
    "Caprese Pesto Portobello Mushrooms",
  ],
};

const dishPlaceholder = document.getElementById("food");
const calculateBtn = document.getElementById("btn");
const vegeCheckbox = document.getElementById("vegetarian-input");
const guestsInput = document.getElementById("num-input");

function getFood() {
  const numberOfGuests = guestsInput.value;
  const randomIndex = Math.floor(Math.random() * 6);

  if (numberOfGuests > 4) {
    if (vegeCheckbox.checked) {
      dishPlaceholder.textContent = dishes.vege[randomIndex];
    } else {
      dishPlaceholder.textContent = dishes.meat[randomIndex];
    }
  } else {
    if (vegeCheckbox.checked) {
      dishPlaceholder.textContent = dishes.simpleVege[randomIndex];
    } else {
      dishPlaceholder.textContent = dishes.simpleMeat[randomIndex];
    }
  }
}

calculateBtn.addEventListener("click", getFood);
