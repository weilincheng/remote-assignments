function binarySearchPosition(numbers, target) {
    let leftIdx = 0, rightIdx = numbers.length;
    while (leftIdx < rightIdx) {
        let midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
        if (numbers[midIdx] === target) {
            return midIdx;
        }
        if (numbers[midIdx] > target) {
            rightIdx = midIdx;
        } else {
            leftIdx = midIdx + 1;
        }
    }
    return leftIdx;
}
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0 
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
console.log( binarySearchPosition([1, 2, 5, 6, 7], 4) ); // should print 2
