function generateNumberBetween(min, max, blockNumbers) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;

    if (blockNumbers.includes(random)) {
      reject("Number block");
    } else {
      resolve(random);
    }
  });
}

async function generateMegaSenaNumbers(quantityNumbers) {
  try {
    const numbers = [];

    for (let _ of Array(quantityNumbers).fill()) {
      numbers.push(await generateNumberBetween(1, 60, numbers));
    }

    return numbers;
  } catch (error) {
    await generateMegaSenaNumbers(1, 60, numbers);
  }
}

generateMegaSenaNumbers(8).then(console.log).catch(console.error);
