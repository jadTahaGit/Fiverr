let array = [
  'hund',
  'katze',
  'maus',
  'elefant',
  'schlange',
  'stachelschwein',
  'affe',
  'giraffe',
];

function addArrayElement(element) {
  let arrayCopy = [...array];
  // TODO: implement me
  if (!arrayCopy.includes(element)) arrayCopy.push(element);
  return arrayCopy;
}

function getArrayElements(number, startIndex) {
  let result = [];
  // TODO: implement me
  for (
    let index = startIndex;
    i < array.length || i == startIndex + number;
    i++
  ) {
    result.push[array[i]];
  }
  return result;
}

function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = [...array];
  let removedItems = [];
  // TODO: implement me
  return {
    newResult: arrayCopy,
    removedItems: removedItems,
  };
}
