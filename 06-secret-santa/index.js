const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  const pairs = {};
  for (let i = 0; i < arr.length; i++) {
    const currentPerson = arr[i];
    const assignedPersonIndex = (i + 1) % arr.length;
    const assignedPerson = shuffledArr[assignedPersonIndex];

    // Avoid pairing a person with themselves
    if (currentPerson === assignedPerson) {
      const newIndex = (assignedPersonIndex + 1) % arr.length;
      pairs[currentPerson] = shuffledArr[newIndex];
    } else {
      pairs[currentPerson] = assignedPerson;
    }
  }

  return pairs;
}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
