let node = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
};

let Bst = function (array) {
    this.root = null;
    this.init(array);
};
Bst.prototype.init = function (dataList) {

    for(let i=0,j=dataList.length;i<j;i++) {
        let tempVal = dataList[i];
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






//104
{

    var maxDepth = function(root) {

        if(!root){
            return 0;
        }

        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    };

}


//226
{

    var invertTree = function(root) {

        if(!root){
            return root;
        }


        let rightNode = root.right;
        let leftNode = root.left;
        root.right = invertTree(leftNode);
        root.left = invertTree(rightNode);

        return root;
    };



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


    console.log('preorderTraversal', preorderTraversal(bst1.root));
}


//513
{
    var findBottomLeftValue = function (root) {


        let tempFind = (tempRoot, index) => {

            if(tempRoot!==null){
                while (tempRoot.left !== null) {
                    tempRoot = tempRoot.left;
                    index++;
                }
                return {
                    val: tempRoot.val,
                    index
                }
            }

            return {

            }

        };
        let leftObj = tempFind(root.left, 1);
        let rightObj = tempFind(root.right, 1);


        if(leftObj.index>rightObj.index){
            return leftObj.val;
        }
        return rightObj.val;
    };
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


        let tempFunc = (tempRoot, lower, upper) => {

            if(tempRoot===null) return true;

            let val = tempRoot.val;

            if(lower!==null && val<=lower) return false;
            if(upper!==null && val>=upper) return false;

            if(!tempFunc(tempRoot.right, val, upper)) return false;
            if(!tempFunc(tempRoot.left,lower,val)) return false;

            return true;
        };


        return tempFunc(root, null, null);
    };


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




