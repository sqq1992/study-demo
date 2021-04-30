
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