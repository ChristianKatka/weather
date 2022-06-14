const countConsecutiveDaysOfWarmth = (temperatures: any) => {
  let finalMostConsecutiveDaysOfWarmth: any = [];
  let currentMostConsecutiveDaysOfWarmth: any = [];

  for (let index = 0; index < temperatures.length; index++) {
    const temperature = temperatures[index];

    if (temperature > 5) {
      currentMostConsecutiveDaysOfWarmth.push(index);
    } else {
      if (
        currentMostConsecutiveDaysOfWarmth.length >
        finalMostConsecutiveDaysOfWarmth.length
      ) {
        finalMostConsecutiveDaysOfWarmth = currentMostConsecutiveDaysOfWarmth;
      }
      currentMostConsecutiveDaysOfWarmth = [];
    }
  }

  if (
    currentMostConsecutiveDaysOfWarmth.length >
    finalMostConsecutiveDaysOfWarmth.length
  ) {
    return currentMostConsecutiveDaysOfWarmth;
  } else {
    return finalMostConsecutiveDaysOfWarmth;
  }
};

const temperatures = [-4, 10, 10, 2, 2, 9, 9, 9, 9, 9, 9, 9];

const mostConsecutiveDaysOfWarmth = countConsecutiveDaysOfWarmth(temperatures);

const startDay = mostConsecutiveDaysOfWarmth[0];
const endDay = mostConsecutiveDaysOfWarmth.at(-1);

console.log('startDay');
console.log(startDay);
console.log('endDay');
console.log(endDay);
