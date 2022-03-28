function count(input) {
    let charCount = {};
    for (let char of input) {
        if (charCount.hasOwnProperty(char)) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x']; 
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    let keyCount = {};
    for (let keyValuePair of input) {
        let k = keyValuePair["key"], v = keyValuePair["value"];
        if (keyCount.hasOwnProperty(k)) {
            keyCount[k] += v
        } else {
            keyCount[k] = v
        }
    }
    return keyCount;
}
let input2 = [
    {key: 'a', value: 3},
    {key: 'b', value: 1}, 
    {key: 'c', value: 2}, 
    {key: 'a', value: 3}, 
    {key: 'c', value: 5}
] 
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}