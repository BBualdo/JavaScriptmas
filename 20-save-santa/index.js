const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"],
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"],
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"],
    ],
  ],
];

function saveSanta(arr) {
  return arr.map((item) => {
    if (Array.isArray(item)) {
      return saveSanta(item);
    } else {
      return item === "🎅" ? item : "";
    }
  });
}

const filteredResult = saveSanta(dangerArray);
console.log(filteredResult);
