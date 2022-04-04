// O(n) time | O(n) space - where n is the length of the input array
function twoSum(nums, target) {
    let seenNum = {}
    for (const [index, element] of nums.entries()) {
        const potentialMatch = target - element;
        if (potentialMatch in seenNum) {
            return [seenNum[potentialMatch], index];
        } else {
            seenNum[element] = index;
        }
    }
}
/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:
nums[0]+nums[1] is 9
*/
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-2, 7, 11, 15], 9));
console.log(twoSum([4, 4, 11, 15], 8));