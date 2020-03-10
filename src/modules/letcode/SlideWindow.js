


//986
{

    let intervalIntersection = function(A, B) {
        let aIndex = 0;
        let bIndex = 0;
        let result = [];

        while (aIndex<A.length && bIndex<B.length) {

            let left = Math.max(A[aIndex][0], B[bIndex][0]);
            let right = Math.min(A[aIndex][1], B[bIndex][1]);


            if(left<=right){
                result.push([left, right]);
            }


            if(A[aIndex][1]>=B[bIndex][1]){
                bIndex++;
            }else {
                aIndex++;
            }

        }


        return result;
    };

    console.log('intervalIntersection', intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]));

}