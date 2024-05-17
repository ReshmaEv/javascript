function findMedian(num1, num2) {
    const mergArr =num1.concat(num2)
    const merged =mergArr.sort((a, b) => a - b);
    const total = merged.length;
    const mid = Math.floor(total / 2);

    if (total % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}


const num1 = [1, 2,3];
const num2 = [4];
const median = findMedian(num1, num2);
console.log("Median of the two sorted arrays is:", median);
