const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const openModalBtn = document.getElementById("add-new");
const closeModalBtn = document.getElementById("close-btn");
const newChildInput = document.getElementById("child-name");
const wasNiceCheckbox = document.getElementById("was-nice");
const addChildBtn = document.getElementById("add-child");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

function sort() {
  naughtyList.innerHTML = "";
  niceList.innerHTML = "";
  const niceChildren = sorteesArr.filter((child) => child.hasBeenGood === true);
  const naughtyChildren = sorteesArr.filter(
    (child) => child.hasBeenGood === false
  );

  niceChildren.forEach((child) => {
    const p = document.createElement("p");
    p.textContent = child.name;
    niceList.appendChild(p);
  });

  naughtyChildren.forEach((child) => {
    const p = document.createElement("p");
    p.textContent = child.name;
    naughtyList.appendChild(p);
  });
}

btn.addEventListener("click", sort);

function toggleModal() {
  if (modal.classList.contains("hidden") && form.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    form.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    form.classList.add("hidden");
  }
}

function addChild() {
  const p = document.createElement("p");
  p.textContent = newChildInput.value;
  if (wasNiceCheckbox.checked) {
    niceList.appendChild(p);
  } else {
    naughtyList.appendChild(p);
  }
}

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);
addChildBtn.addEventListener("click", () => {
  addChild();
  toggleModal();
});
