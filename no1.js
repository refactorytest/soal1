const numbers = [4, 9, 7, 5, 8, 9, 3];

let tempNumbers = numbers;
let jumlahSwap = 0;

function tampilArray(inputArr) {
  return inputArr.join(" ");
}

let bubbleSort = (inputArr = []) => {
  let i = 0;
  while (i <= inputArr.length) {
    if (inputArr[i] > inputArr[i + 1]) {
      jumlahSwap++;
      let swappedVar = `[${inputArr[i + 1]},${inputArr[i]}]`;
      [inputArr[i + 1], inputArr[i]] = [inputArr[i], inputArr[i + 1]];

      console.log(
        `${jumlahSwap}. ${swappedVar} -> ${tampilArray(inputArr)} \n `
      );
      i = 0;
    } else {
      i++;
    }
  }

  console.log("Jumlah swap : " + jumlahSwap);
};

bubbleSort(numbers);