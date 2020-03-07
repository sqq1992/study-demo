

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