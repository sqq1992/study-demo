

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

        if(citations.length===0){
            return 0;
        }else if(citations.length<=1){
            return 1;
        }


        let len = citations.length;
        let left = 0;
        let right = len-1;
        let h = citations[len - 1];


        while (left<=right){
            let middleIndex = Math.floor((right - left) / 2) + left;
            let tempVal = citations[middleIndex];
            let rightNums = right - middleIndex + 1;

            if(rightNums>=tempVal) {
                h = Math.min(h, middleIndex);
            }

            if(tempVal>rightNums){
                right--;
            }else {
                left++;
            }

        }

        return len - h;
    };

    console.log('hIndex', hIndex([0,1,3,5,6]));

}