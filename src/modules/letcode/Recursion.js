let node = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let Bst = function (array) {
    this.root = null;
    this.init(array);
};
Bst.prototype.init = function (dataList) {

    for(let i=0,j=dataList.length;i<j;i++) {
        let tempVal = dataList[i];

        if(tempVal===null){
            continue;
        }

        let tempNode = new node(tempVal);

        if(!this.root) {
            this.root = tempNode;
        }else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if(tempVal<current.val){
                    current = current.left;
                    if(current===null){
                        parent.left = tempNode;
                        break;
                    }
                }else {
                    current = current.right;
                    if(current===null){
                        parent.right = tempNode;
                        break;
                    }
                }


            }
        }

    }
};



//102
{

    //1 递归
    var levelOrder = function(root) {

        let result = [];

        let tempFunc = (tempRoot,index) => {
            if(tempRoot){
                result[index] = result[index] || [];
                result[index].push(tempRoot.val);

                tempFunc(tempRoot.left, index + 1);
                tempFunc(tempRoot.right, index + 1);
            }

        };
        tempFunc(root, 0);
        return result;
    };

    //2 递归
    var levelOrder2 = function(root) {

        let result = [];
        if(!root){
            return result;
        }

        let stack = [root];

        while (stack.length){
            let children = [];
            let max = stack.length;

            for(let i=0;i<max;i++) {
                let tempRoot = stack.pop();
                children.push(tempRoot.val);

                tempRoot.left && stack.unshift(tempRoot.left);
                tempRoot.right && stack.unshift(tempRoot.right);
            }

            result.push(children);
        }


        return result;
    };
}


//145
{
    var postorderTraversal = function(root) {

        let result = [];
        let stack = [root];

        while (stack.length){
            let tempRoot = stack.pop();

            tempRoot.right && stack.push(tempRoot.right);
            tempRoot.left && stack.push(tempRoot.left);
            result.push(tempRoot.val);
        }

        return result;
    };
}



//107
{
    let temp1 = new node(1);
    let temp2 = new node(2);
    let temp3 = new node(3);
    let temp4 = new node(4);
    let temp5 = new node(5);

    temp1.left = temp2;
    temp1.right = temp3;
    temp3.left = temp4;
    temp3.right = temp5;


    var levelOrderBottom = function(root) {


        let stack = [root];
        let result = [];
        let index = 0;
        while (stack.length) {

            let tempNode = stack.pop();
            if(tempNode){
                result[index] = result[index] || [];
                result[index].push(tempNode.val);
            }

            if(tempNode && (tempNode.left || tempNode.right)){
                index++;
                tempNode.right && stack.push(tempNode.right);
                tempNode.left && stack.push(tempNode.left);
            }
        }


        return result.reverse();
    };


    // console.log('levelOrderBottom', levelOrderBottom(temp1));



    // var bst1 = new Bst([3,9,20,null,null,15,7]);
    // console.log('bst', bst1);
    // var levelOrderBottom = function(root) {
    //
    //     let result = [];
    //
    //     let tempFunc = (tempRoot,index) => {
    //
    //         if(tempRoot){
    //             result[index] = result[index] || [];
    //             result[index].push(tempRoot.val);
    //             tempFunc(tempRoot.left,index+1);
    //             tempFunc(tempRoot.right,index+1);
    //         }
    //     };
    //     tempFunc(root,0);
    //     return result.reverse();
    // };



}


//104
{

    var maxDepth = function(root) {

        if(!root){
            return 0;
        }

        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    };

    // var maxDepth = function(root) {
    //
    //     if(!root){
    //         return 0;
    //     }
    //
    //     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    // };

}


//226
{

    var invertTree = function(root) {

        if(!root){
            return root;

        }

        let leftNode = root.left;
        let rightNode = root.right;

        root.left = rightNode;
        root.right = leftNode;

        invertTree(root.left);
        invertTree(root.right);

        return root;
    };


    // var invertTree = function(root) {
    //
    //     if(!root){
    //         return root;
    //     }
    //
    //
    //     let rightNode = root.right;
    //     let leftNode = root.left;
    //     root.right = invertTree(leftNode);
    //     root.left = invertTree(rightNode);
    //
    //     return root;
    // };

}




//144
{

    var bst1 = new Bst([1, null, 2, 3]);
    console.log('bst', bst1);

    var preorderTraversal = function(root) {

        let result = [];
        let tempFunc = (tempRoot) => {
            if(tempRoot){
                if(tempRoot.val!==null){
                    result.push(tempRoot.val);
                }
                tempFunc(tempRoot.left);
                tempFunc(tempRoot.right);
            }
        };
        tempFunc(root);
        return result;
    };
    // console.log('preorderTraversal', preorderTraversal(bst1.root));


    // var preorderTraversal = function(root) {
    //     let result = [];
    //     let tempFunc = (tempRoot) => {
    //         if(tempRoot){
    //             if(tempRoot.val!==null){
    //                 result.push(tempRoot.val);
    //             }
    //             tempFunc(tempRoot.left);
    //             tempFunc(tempRoot.right);
    //         }
    //     };
    //     tempFunc(root);
    //
    //     return result;
    // };


    // console.log('preorderTraversal', preorderTraversal(bst1.root));
}


//513
{


    var findBottomLeftValue = function(root) {


        let queue = [root];
        let node;
        while (queue.length) {
            node = queue.shift();

            if(node.right!==null){
                queue.push(node.right);
            }

            if(node.left!==null){
                queue.push(node.left);
            }

        }


        return node.val

    }

}


//100
{
    var isSameTree = function(p, q) {

        if(p===null && q===null) return true;
        if(p===null || q===null) return false;


        return p.val===q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
}

//94
{

    var inorderTraversal = function(root) {

        let result = [];
        let tempFunc = (tempRoot) => {

            if(tempRoot){
                tempFunc(tempRoot.left);
                result.push(tempRoot.val);
                tempFunc(tempRoot.right);
            }

        };
        tempFunc(root);

        return result;
    };


}



//654
{

    var constructMaximumBinaryTree = function(nums) {
        if(!nums.length){
            return null;
        }

        var maxIndex = nums.indexOf(Math.max(...nums));
        const currentNode = new TreeNode(nums[maxIndex]);

        currentNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
        currentNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));


        return currentNode;
    };
}


//112
{

    var hasPathSum = function(root, sum) {

        let l1 = false;
        let r1 = false;


        if(root){
            sum = sum - root.val;
            if(root.left){
                l1 = hasPathSum(root.left, sum);
            }
            if(root.right){
                r1 = hasPathSum(root.right, sum);
            }

            if(root.left===null && root.right===null && sum===0){
                return true;
            }

        }


        return l1 || r1;
    };


}


//101
{

    var isSymmetric = function(root) {

        let tempFunc = (leftRoot, rightRoot) => {

            if(leftRoot===null && rightRoot===null){
                return true;
            }else if (leftRoot && rightRoot && leftRoot.val === rightRoot.val) {
                let l1 = tempFunc(leftRoot.left, rightRoot.right);
                let r1 = tempFunc(leftRoot.right, rightRoot.left);

                return l1 && r1;
            }


            return false;
        };


        if(root){
            return tempFunc(root.left, root.right);

        }else {
            return true;
        }
    };

}


//617
{


    var mergeTrees = function(t1, t2) {

        if(t1===null){
            return t2;
        }

        if(t2===null){
            return t1;
        }

        t1.val += t2.val;

        t1.left = mergeTrees(t1.left, t2.left);
        t1.right = mergeTrees(t1.right, t2.right);
        return t1;
    };


}


//965
{
    var isUnivalTree = function(root) {


        let leftFlag = root.left === null || ((root.left.val === root.val) && (isUnivalTree(root.left)));
        let rightFlag = root.right === null || ((root.right.val === root.val) && (isUnivalTree(root.right)));


        return leftFlag && rightFlag;

    };
}



//98
{

    var isValidBST = function(root) {

        let tempFunc = (node, max, min) => {
            if(!node) return true;

            if(min!==null && node.val<=min) return false;
            if(max!==null && node.val>=max) return false;


            return tempFunc(node.left, node.val, min) && tempFunc(node.right, max, node.val);
        };

        return tempFunc(root, null, null);
    };






    // var isValidBST = function(root) {
    //
    //     let tempFunc = (tempRoot, lower, upper) => {
    //
    //         if(tempRoot===null) return true;
    //
    //         let val = tempRoot.val;
    //
    //         if(lower!==null && val<=lower) return false;
    //         if(upper!==null && val>=upper) return false;
    //
    //         if(!tempFunc(tempRoot.right, val, upper)) return false;
    //         if(!tempFunc(tempRoot.left,lower,val)) return false;
    //
    //         return true;
    //     };
    //
    //
    //     return tempFunc(root, null, null);
    // };

}



//814
{

    let temp1 = new node(1);
    let temp2 = new node(0);
    let temp3 = new node(0);
    let temp4 = new node(1);
    temp1.right = temp2;
    temp2.left = temp3;
    temp2.right = temp4;


    var pruneTree = function(root) {

        if(!root){
            return null;
        }


        if(root){
            root.left = pruneTree(root.left);
            root.right = pruneTree(root.right);

            if(root.left===null && root.right===null && root.val===0) {
                root = null;
            }

        }




        return root
    };

    console.log('pruneTree', pruneTree(temp1));

}

//1008
{

    var bstFromPreorder = function(preorder) {

        let root = null;

        for(let i=0,j=preorder.length;i<j;i++) {
            let tempVal = preorder[i];
            let tempNode = new TreeNode(tempVal);

            if(!root){
                root = tempNode;
            }else {

                let current = root;
                let parent;

                while (true){

                    parent = current;

                    if(tempVal<current.val){
                        current = current.left;
                        if(current===null){
                            parent.left = tempNode;
                            break;
                        }
                    }else {
                        current = current.right;
                        if(current===null){
                            parent.right = tempNode;
                            break;
                        }
                    }

                }


            }


        }


        return root;
    };


}


//701
{

    var insertIntoBST = function(root, val) {

        var tempNode = new TreeNode(val);

        let current = root;
        while (true) {

            if(val<current.val){

                if(current.left===null){
                    current.left = tempNode;
                    break;
                }else {
                    current = current.left;
                }

            }else {
                if(current.right===null){
                    current.right = tempNode;
                    break;
                }else {
                    current = current.right;
                }
            }


        }


        return root;
    };

}


//116
{

    var connect = function(root) {

        if(!root){
            return root;
        }

        let tempFunc = (leftNode,rightNode) => {

            if(leftNode===null || rightNode===null) return;

            leftNode.next = rightNode;

            tempFunc(leftNode.left, leftNode.right);
            tempFunc(rightNode.left, rightNode.right);
            tempFunc(leftNode.right, rightNode.left);
        };

        tempFunc(root.left, root.right);
        return root;
    };

    // var connect = function(root) {
    //
    //     if(root===null) return root;
    //
    //     let tempFunc = (leftNode, rightNode) => {
    //
    //         if(leftNode===null || rightNode===null) return;
    //
    //         leftNode.next = rightNode;
    //
    //         tempFunc(leftNode.left, leftNode.right);
    //         tempFunc(rightNode.left, rightNode.right);
    //         tempFunc(leftNode.right, rightNode.left);
    //
    //     };
    //     tempFunc(root.left, root.right);
    //
    //     return root;
    // };
}

//114
{

    var flatten = function(root) {
        let list = [];
        let tempFunc = (currentRoot,list) => {
            if(currentRoot){
                list.push(currentRoot);
                tempFunc(currentRoot.left,list);
                tempFunc(currentRoot.right, list);
            }
        };
        tempFunc(root, list);

        let prev;
        let curr;
        for (let i=1,j=list.length;i<j;i++) {
            prev = list[i - 1];
            curr = list[i];

            prev.left = null;
            prev.right = curr;
        }
    };


    //todo test1
    // let temp1 = new node(1);
    // let temp2 = new node(2);
    // let temp3 = new node(5);
    // let temp4 = new node(3);
    // let temp5 = new node(4);
    // let temp6 = new node(6);
    //
    // temp1.left = temp2;
    // temp1.right = temp3;
    // temp2.left = temp4;
    // temp2.right = temp5;
    // temp3.right = temp6;
    // console.log('temp1', temp1);
    // console.log('flatten', flatten(temp1));

}

//105
{
    var buildTree = function(preorder, inorder) {

        if(!preorder.length && !inorder.length) return null;

        let head = preorder[0];
        let pos = inorder.indexOf(head);

        let preOrderLeft = preorder.slice(1, pos + 1);
        let preOrderRight = preorder.slice(pos + 1)
        let inorderLeft = inorder.slice(0, pos);
        let inorderRight = inorder.slice(pos + 1);



        let tree = new TreeNode(head);
        tree.left = buildTree(preOrderLeft, inorderLeft);
        tree.right = buildTree(preOrderRight, inorderRight)


        return tree;
    };

    // console.log('buildTree', buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

}

//106
{

    var buildTree = function(inorder, postorder) {

        if(!inorder.length && !postorder.length) return null;

        let head = postorder.pop();
        let pos = inorder.indexOf(head);

        let inorderLeft = inorder.slice(0, pos);
        let inorderRight = inorder.slice(pos + 1);
        let postorderLeft = postorder.slice(0, pos);
        let postorderRight = postorder.slice(pos);


        let tree = new TreeNode(head);
        tree.left = buildTree(inorderLeft, postorderLeft);
        tree.right = buildTree(inorderRight, postorderRight)


        return tree;
    };

}

//222
{

    var countNodes = function(root) {

        if(!root){
            return 0;
        }

        let leftCount = countNodes(root.left);
        let rightCount = countNodes(root.right);


        return leftCount + rightCount + 1;
    };

}

//652
{

    var findDuplicateSubtrees = function(root) {

        let record = {};
        let res = [];

        let tempFunc = (currentNode) => {

            if(!currentNode){
                return '#';
            }

            let left = tempFunc(currentNode.left);
            let right = tempFunc(currentNode.right);
            let result = left + "." + right + "." + currentNode.val;


            record[result] = (record[result] || 0) + 1;

            if(record[result]===2){
                res.push(currentNode);
            }

            return result;
        };
        tempFunc(root);
        return res;
    };

}

//230
{
    var kthSmallest = function(root, k) {
        let res = [];

        let tempFunc = (currentNode) => {

            if(!currentNode){
                return;
            }

            tempFunc(currentNode.left);
            res.push(currentNode.val);
            tempFunc(currentNode.right);
        };
        tempFunc(root);

        return res[k - 1];
    };
}


//538
{

    var convertBST = function(root) {

        let sum = 0;

        let tempFunc = (currentNode) => {

            if(!currentNode){
                return;
            }

            tempFunc(currentNode.right);
            sum += currentNode.val;
            currentNode.val = sum;
            tempFunc(currentNode.left);

        };
        tempFunc(root);

        return root;
    };

}

//700
{

    var searchBST = function(root, val) {

        let cur = root;
        while (cur){

            if (val < cur.val) {
                cur = cur.left;
            }else if(val>cur.val){
                cur = cur.right;
            }else {
                break;
            }
        }

        return cur;
    };

}


//450
{
    var deleteNode = function(root, key) {




    };
}