const maxSubArray = function(nums) {
    let index = 1;
    let max = currMax = nums[0]
    while(index < nums.length){
      currMax = Math.max(nums[index], currMax + nums[index])
      max = Math.max(max, currMax)
     index++
    }
    return max
}