const wishlist = [
  "Macbook Air M2",
  "Developer Job",
  "Second Monitor",
  "ChatGPT in my head (maybe not...)",
];

const wishlistDisplay = document.querySelector(".wishlist");

wishlist.forEach((wish) => {
  const listItem = document.createElement("p");
  listItem.textContent = wish;
  wishlistDisplay.appendChild(listItem);
});

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/
