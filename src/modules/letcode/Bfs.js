
/**
 *  广度优先遍历 (BFS)
 **/

//111
{

    var minDepth = function(root) {
        if (root === null) return 0;
        let queue = [root];
        let depth = 0;

        while (queue.length){

            let len = queue.length;
            for (let i=0;i<len;i++) {
                let cur = queue.shift();
                if(cur){
                    if(cur.left===null && cur.right===null) return depth + 1;
                    queue.push(cur.left);
                    queue.push(cur.right);
                }
            }

            depth++;
        }
    };

}

//752
{

    var openLock = function(deadends, target) {

        let plus = (str, index) => {
            let changedNum = Number(str[index])

            if(changedNum===9){
                changedNum = 0;
            }else {
                changedNum += 1;
            }

            return str.slice(0, index) + changedNum + str.slice(index + 1);
        };

        let minus = (str,index) => {
            let changedNum = Number(str[index])

            if(changedNum===0){
                changedNum = 9;
            }else {
                changedNum -= 1;
            }
            return str.slice(0, index) + changedNum + str.slice(index + 1);
        };

        let queue = ['0000'];
        let visited = [];
        let step = 0;

        while (queue.length) {
            let size = queue.length;
            for (let i=0;i<size;i++) {
                let currentStr = queue.shift();

                if(deadends.includes(currentStr)) continue;
                if(target===currentStr) return step;


                for (let j=0;j<4;j++) {

                    let strUp = plus(currentStr, j);
                    if(!visited.includes(strUp)){
                        visited.push(strUp);
                        queue.push(strUp);
                    }

                    let strDown = minus(currentStr, j);
                    if(!visited.includes(strDown)){
                        visited.push(strDown);
                        queue.push(strDown);
                    }
                }

            }

            step++;
        }

        return -1;
    };


    console.log('openLock', openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));

}