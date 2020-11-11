function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	//BASE CASES
	if(!array.length) return 0;
	if(array.length === 1) return array[0];
	//Create a new array using the first element in array
	let maxSums = array.slice()
	//Array[i] contains either the previous number or the sum of all previous non adjacent numbers, whichever is greater
	maxSums[1] = Math.max(array[0], array[1]);
	for(let i = 2; i < array.length; i++){
			maxSums[i] = Math.max(maxSums[i-1], maxSums[i - 2] + array[i])	
	}
	return maxSums[maxSums.length -1]
}
// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
