function count(input) {
    let ans = {};
    for (let char of input) {
        if (ans.hasOwnProperty(char)) {
            ans[char] += 1;
        } else {
            ans[char] = 1;
        }
    }
    return ans;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x']; 
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    let ans = {};
    for (let pair of input) {
        let k = pair["key"];
        let v = pair["value"];
        if (ans.hasOwnProperty(k)) {
            ans[k] += v
        } else {
            ans[k] = v
        }
    }
    return ans;
}
let input2 = [
    {key: 'a', value: 3},
    {key: 'b', value: 1}, 
    {key: 'c', value: 2}, 
    {key: 'a', value: 3}, 
    {key: 'c', value: 5}
] 
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}