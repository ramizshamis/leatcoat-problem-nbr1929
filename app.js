

function containDuplicate(nums){
    nums.sort((a,b) => a-b);
    for (let i =0;i<nums.length -1;i++){
        if (nums[i] === nums[i + 1]){
            return true;
        }
         else{
            return false;
        }
    }
}
console.log(containDuplicate([1,2,3,1]))
console.log(containDuplicate([1,2,3,4]))
console.log(containDuplicate([1,1,1,3,3,4,3,2,4]))





function checkduplicate(arr){
    return new set(arr).size !==arr.length
}
console.log(checkduplicate([1,2,3,1]));