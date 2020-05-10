

//986
{



    var intervalIntersection = function(A, B) {

        let aLen = A.length;
        let bLen = B.length;
        let aIndex = 0;
        let bIndex = 0;
        let result = [];

        while (aIndex<aLen && bIndex<bLen) {
            let aArr = A[aIndex];
            let bArr = B[bIndex];

            let min = Math.max(aArr[0], bArr[0]);
            let max = Math.min(aArr[1], bArr[1]);
            if(min<=max){
                result.push([min, max]);
            }

            if(aArr[1]<=bArr[1]){
                aIndex++;
            }else {
                bIndex++;
            }

        }


        return result;
    };


}


//567
{
    var checkInclusion = function(s1, s2) {
        let s1Len = s1.length;
        let s2Len = s2.length;
        let s1Record = new Map();

        for(let i=0;i<s1Len;i++){
            s1Record.set(s1[i], (s1Record.get(s1[i]) || 0) + 1);
        }


        let end = 0;
        let start = 0;
        let s2Record = new Map();
        let isEqual = (firstObj,secondObj) => {

            for(let [key, value] of firstObj){
                if(secondObj.get(key)!==value){
                    return false;
                }
            }

            return true;
        };

        while (end<s2Len){

            if((end-start+1)>s1Len) {
                s2Record.set(s2[start], s2Record.get(s2[start]) - 1);
                start++
            }

            s2Record.set(s2[end], (s2Record.get(s2[end]) || 0) + 1);

            if ((end - start + 1) === s1Len && isEqual(s1Record, s2Record)) {
                return true;
            }

            end++;
        }

        return false;
    };




}
