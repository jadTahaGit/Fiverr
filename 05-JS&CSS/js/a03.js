let object = {
  a: 'hund',
  b: 'katze',
  c: 'maus',
  d: 'elefant',
  e: 'schlange',
  f: 'stachelschwein',
  g: 'affe',
  h: 'giraffe',
};

function addObjectElement(key, value) {
  let objectCopy = Object.assign({}, object);
  // TODO: implement me
  if (!objectCopy[key]) objectCopy[key] = value;
  else {
    let i = 1;
    while (objectCopy[`${key}_${i}`]) {
      i++;
    }
    objectCopy[`${key}_${i}`] = value;
  }
  return objectCopy;
}

function getObjectElements(keys) {
  let result = [];
  // TODO: implement me
  keys.forEach((key) => {
    if (object[key]) result.push(object[key]);
    else result.push('not found');
  });
  return result;
}

function deleteObjectElements(keys) {
  let objectCopy = Object.assign({}, object);
  // TODO: implement me
  keys.forEach((key) => {
    delete objectCopy[key];
  });
  return objectCopy;
}
