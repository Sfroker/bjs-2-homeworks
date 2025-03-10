function getArrayParams(...arr) {
  if (arr.length === 0) {
      return { min: null, max: null, avg: null };
  }
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let avg = (sum / arr.length).toFixed(2);
  
  return { min, max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
      } else {
          sumOddElement += num;
      }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
          countEvenElement++;
      }
  }
  
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) return 0;
  
  let maxWorkerResult = -Infinity;
  
  for (let arr of arrOfArr) {
      const result = func(...arr);
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }
  
  return maxWorkerResult;
}