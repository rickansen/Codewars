function sortAnimal(animal) {
  if (!animal) return null;
  if (animal.length === 0) return [];
  return [...new Set(animal.map((x) => x.numberOfLegs).sort((a, b) => a - b))]
    .map((x) =>
      animal
        .filter((a) => a.numberOfLegs === x)
        .map((a) => a.name)
        .sort()
    )
    .reduce((a, b) => a.concat(b))
    .map((x) => animal.find((a) => a.name === x));
}
