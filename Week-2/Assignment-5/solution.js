function binarySearchPosition(numbers, target) {
    let l = 0, r = numbers.length;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (numbers[m] === target) {
            return m;
        }
        if (numbers[m] > target) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
}
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0 
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
console.log( binarySearchPosition([1, 2, 5, 6, 7], 3) ); // should print 
