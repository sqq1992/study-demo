

//857
{
    let minEatingSpeed = function(piles, H) {

        let sortedPiles = piles.sort((a, b) => {
            return a - b;
        });
        let sumPiles = piles.reduce((prev, next) => {
            return prev + next;
        }, 0);
        let minSpeed = Math.ceil(sumPiles / H);
        let maxSpeed = sortedPiles[sortedPiles.length - 1];
        let resultSpeed = maxSpeed;

        while (minSpeed<=maxSpeed){

            let tempMidSpeed = Math.floor((maxSpeed - minSpeed) / 2) + minSpeed;
            let needHours = piles.reduce((prev, next) => {
                return prev + Math.ceil(next / tempMidSpeed);
            }, 0);

            if(needHours>H){
                minSpeed = tempMidSpeed + 1;
            }else {
                maxSpeed = tempMidSpeed - 1;
                resultSpeed = Math.min(resultSpeed, tempMidSpeed);
            }

        }

        return resultSpeed;
    };

    console.log('minEatingSpeed', minEatingSpeed([30,11,23,4,20], 5));

}

//275
{
    var hIndex = function(citations) {
        let staticIndex = citations.length - 1;
        if(citations.length===0 || citations[staticIndex]===0){
            return 0;
        }


        let maxLen = 1;
        let left = 0;

        let right = citations.length - 1;

        while (left<=right) {
            let middleIndex = Math.floor((right - left) / 2) + left;
            let middleValue = citations[middleIndex];
            let rightNums = staticIndex - middleIndex + 1;

            if (middleValue >= rightNums) {
                maxLen = Math.max(maxLen, staticIndex - middleIndex + 1);
            }


            if(middleValue<=rightNums){
                left = middleIndex + 1;
            }else {
                right = middleIndex - 1;
            }



        }

        return maxLen;



    };

    console.log('hIndex', hIndex([11,15]));

}
