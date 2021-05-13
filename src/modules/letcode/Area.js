
/**
 *  区间问题
 **/

//1288
{

    var removeCoveredIntervals = function(intervals) {

        intervals = intervals.sort((a,b)=>{
            if(a[0]===b[0]){
                return a[1]-b[1]
            }
            return a[0]-b[0]
        })
        let fullLen = 0;
        let left = intervals[0][0];
        let right = intervals[0][1];

        for (let i=1,j=intervals.length;i<j;i++) {
            let interval = intervals[i];

            if((interval[0]>=left && interval[1]<=right) || (interval[0]===left && interval[1]>=right)){
                fullLen++;
            }

            if(right>=interval[0] && right<=interval[1]){
                right = interval[1];
            }

            if(right<interval[0]){
                left = interval[0];
                right = interval[1];
            }

        }

        return intervals.length - fullLen;
    };

    // console.log('removeCoveredIntervals',removeCoveredIntervals([[1,2],[1,4],[3,4]]))

}

//56
{

    var merge = function(intervals) {

        intervals = intervals.sort((a,b)=>{
            return a[0]-b[0]
        })

        let res = [intervals[0]];
        let last;


        for (let i=1,j=intervals.length;i<j;i++) {
            let interval = intervals[i];
            last = res[res.length - 1];

            if(interval[0]<=last[1]){
                last[1] = Math.max(interval[1], last[1]);
            }else {
                res.push(interval);
            }
        }


        return res;
    };

    // console.log('merge',merge([[1,3],[2,6],[8,10],[15,18]]))

}

//57
{

    var insert = function(intervals, newInterval) {

        const res = [];
        let i = 0;
        const len = intervals.length;

        while (i < len && intervals[i][1] < newInterval[0]) { // 当前遍历的是蓝左边的，不重叠的区间
            res.push(intervals[i]);
            i++;
        }

        while (i < len && intervals[i][0] <= newInterval[1]) { // 当前遍历是有重叠的区间
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
            i++;
        }
        res.push(newInterval); // 循环结束后，兰区间为合并后的区间，推入res

        while (i < len) {                 // 在蓝右边，没重叠的区间
            res.push(intervals[i]);
            i++;
        }

        return res;
    };

    // console.log('insert', insert([[1,2]], [4, 8]));

}

//986
{

    var intervalIntersection = function(firstList, secondList) {

        let aLen = firstList.length;
        let bLen = secondList.length;
        let aIndex = 0;
        let bIndex = 0;
        let res = [];


        while (aIndex<aLen && bIndex<bLen) {


            let left = Math.max(firstList[aIndex][0], secondList[bIndex][0]);
            let right = Math.min(firstList[aIndex][1], secondList[bIndex][1]);

            if(left<=right){
                res.push([left, right]);
            }


            if(firstList[aIndex][1]>=secondList[bIndex][1]){
                bIndex++;
            }else {
                aIndex++;
            }


        }
        return res;

    };

}