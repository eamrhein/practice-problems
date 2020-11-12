var lengthOfLIS = function(nums) {
    if(nums.length === 0) {
        return 0
    }
    let dpMat = new Array(nums.length)
    dpMat[0] = 1;
    let maxCount = 1
    for(let i =1; i < dpMat.length; i++){
        let max = 0;
        for( let j = 0; j < i; j++){
            if(nums[i] > nums[j])
                {
                    max = Math.max(max, dpMat[j])
                }
        }
        dpMat[i] = max + 1
        maxCount = Math.max(max, dpMat[i])
    }
    return maxCount
    
};