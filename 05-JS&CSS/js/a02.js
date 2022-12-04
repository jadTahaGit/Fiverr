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
  if (startIndex > array.length) startIndex = startIndex % array.length;
  for (let i = startIndex; i < array.length; i++) {
    if (i == startIndex + number) break;
    result.push(array[i]);
  }
  return result;
}

function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = [...array];
  let removedItems = [];
  // TODO: implement me
  if (startIndex > arrayCopy.length) startIndex = startIndex % arrayCopy.length;
  for (let i = startIndex; i < arrayCopy.length; i = i + everyIth) {
    if (i == startIndex + number) break;
    removedItems.push(arrayCopy[i]);
    arrayCopy[i] = null;
  }

  return {
    newResult: arrayCopy,
    removedItems: removedItems,
  };
}
