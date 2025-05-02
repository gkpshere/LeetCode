
//Two Sum - Easy
function twoSum(nums: number[], target: number): any {

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(target - nums[i]) > -1 && (nums.indexOf(target - nums[i]) != i)) {
            return [i, nums.indexOf(target - nums[i])]
        } 
    }
};