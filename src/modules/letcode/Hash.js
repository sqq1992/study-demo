
// 哈希

//1
{

    var twoSum = function(nums, target) {

        let cacheObj = {};
        for (let i=0,j=nums.length;i<j;i++) {

            if(cacheObj[nums[i]]!==undefined){
                return [cacheObj[nums[i]], i];
            }else {
                cacheObj[target - nums[i]] = i;
            }

        }


    };

}