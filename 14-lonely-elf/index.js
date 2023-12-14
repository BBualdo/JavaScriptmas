const elf = document.getElementById("elf");
const btn = document.getElementById("btn");

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  if (elf.textContent.length < 100) {
    elf.textContent += "🧝";
  } else {
    console.log("There is too much elves!");
  }
}
