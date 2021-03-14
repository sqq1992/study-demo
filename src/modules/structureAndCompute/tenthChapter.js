
{

    function Node(data, left=null,right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }


    function Bst(dataList) {
        this.root = null;
        this.insert(dataList);
    }
    Bst.prototype.insert = function (dataList) {

        dataList.forEach((elem,index)=>{

            let nodeInstance = new Node(elem, null, null);

            if(this.root===null){
                this.root = nodeInstance;
            }else {
                let current = this.root;
                while (true){
                    if(elem<current.data){
                        if(current.left === null){
                            current.left = nodeInstance;
                            break;
                        }else {
                            current = current.left;
                        }
                    }else {
                        if(current.right === null){
                            current.right = nodeInstance;
                            break;
                        }else {
                            current = current.right;
                        }
                    }

                }

            }
        })
    }

    // 中序遍历 选左子树, 然后根节点, 然后右子树
    Bst.prototype.inOrder = function () {
        let tempFunc = (root) => {
            if(root){
                tempFunc(root.left)
                console.log(root.data + " ");
                tempFunc(root.right);
            }
        };
        tempFunc(this.root);
    };

    //前序遍历 先根节点, 然后左节点, 然后右节点
    Bst.prototype.preOrder = function () {
        let tempFunc = (root) => {
            if(root){
                console.log(root.data + " ");
                tempFunc(root.left)
                tempFunc(root.right);
            }
        };
        tempFunc(this.root);
    };

    //后序遍历 先叶子节点, 从左子树到右子树, 再到根节点
    Bst.prototype.postOrder = function () {
        let tempFunc = function (root) {
            if(root){
                tempFunc(root.left);
                tempFunc(root.right);
                console.log(root.data + " ");
            }
        };
        tempFunc(this.root);
    };

    Bst.prototype.findMin = function () {
        let current = this.root;
        while (current.left!==null){
            current = current.left;
        }
        return current.data;
    };

    Bst.prototype.findMax = function () {
        let current = this.root;
        while (current.right!==null){
            current = current.right;
        }
        return current.data;
    };

    Bst.prototype.find = function (data) {
        let current = this.root;

        while (current){

            if(current.data===data){
                return current;
            }else if(current.data<data){
                current = current.right;
            }else {
                current = current.left;
            }

        }

        return null;
    };


    //todo test
    // let testData = [3, 16, 22, 23, 37, 45, 99];
    let testData = [4, 56, 22, 10, 30, 81, 77, 92];
    let bst1 = new Bst(testData);
    console.log(bst1.root);


    //遍历
    // bst1.inOrder();
    // bst1.preOrder();


    console.log('findMin', bst1.findMin());
    console.log('findMax', bst1.findMax());
    console.log('find', bst1.find(81));


    // bst1.remove(77);


}









































{
    // function BaseNode(data, left = null, right = null) {
    //
    //     this.data = data;
    //     this.left = left;
    //     this.right = right;
    // }
    //
    //
    // function Bst(dataList) {
    //
    //     this.root = null;
    //     this.init(dataList);
    // }
    //
    // Bst.prototype.init = function (dataList) {
    //     for(let i=0,j=dataList.length;i<j;i++) {
    //         let tempVal = dataList[i];
    //         if(tempVal!==null){
    //             let tempNode = new BaseNode(tempVal);
    //             if(!this.root){
    //                 this.root = tempNode;
    //             }else {
    //                 let current = this.root;
    //                 let parent;
    //                 while (true){
    //                     parent = current;
    //                     if(tempVal<current.data){
    //                         current = current.left;
    //                         if(current===null){
    //                             parent.left = tempNode;
    //                             break;
    //                         }
    //                     }else {
    //                         current = current.right;
    //                         if(current===null) {
    //                             parent.right = tempNode;
    //                             break;
    //                         }
    //                     }
    //
    //                 }
    //
    //             }
    //
    //         }
    //
    //
    //     }
    // };
    //
    // //中序遍历 选左子树, 然后根节点, 然后右子树
    // Bst.prototype.inOrder = function () {
    //
    //     let tempFunc = function (root) {
    //         if(root){
    //             tempFunc(root.left);
    //             console.log(root.data + " ");
    //             tempFunc(root.right);
    //         }
    //
    //
    //     };
    //     tempFunc(this.root);
    // };
    //
    // //前序遍历 先根节点, 然后左节点, 然后右节点
    // Bst.prototype.preOrder = function () {
    //     let tempFunc = function (root) {
    //         if(root){
    //             console.log(root.data + " ");
    //             tempFunc(root.left);
    //             tempFunc(root.right);
    //         }
    //     };
    //     tempFunc(this.root);
    // };
    //
    // //后序遍历 先叶子节点, 从左子树到右子树, 再到根节点
    // Bst.prototype.postOrder = function () {
    //     let tempFunc = function (root) {
    //         if(root){
    //             tempFunc(root.left);
    //             tempFunc(root.right);
    //             console.log(root.data + " ");
    //         }
    //     };
    //     tempFunc(this.root);
    // };
    //
    //
    // Bst.prototype.findMin = function () {
    //     let current = this.root;
    //
    //     while (current.left!==null){
    //         current = current.left;
    //     }
    //     return current.data;
    // };
    //
    //
    // Bst.prototype.findMax = function () {
    //     let current = this.root;
    //
    //     while (current.right!==null){
    //         current = current.right;
    //     }
    //
    //     return current.data;
    // };
    //
    // Bst.prototype.find = function (data) {
    //     let current = this.root;
    //
    //     while (current!==null){
    //
    //         if(data===current.data){
    //             return current;
    //         }else if(data<current.data){
    //             current = current.left;
    //         }else {
    //             current = current.right;
    //         }
    //
    //     }
    //
    //     return null;
    // };
    //
    // Bst.prototype.remove = function (data) {
    //     var root = this._removeNode(this.root, data);
    // };
    // Bst.prototype._removeNode = function (node, data) {
    //
    //     if(node===null){
    //         return null;
    //     }
    //
    //
    //     if(data===node.data){
    //
    //         if(node.left===null && node.right===null){
    //             return null;
    //         }
    //
    //         if(node.left===null) {
    //             return node.right;
    //         }
    //
    //         if(node.right === null){
    //             return node.left;
    //         }
    //
    //         var tempNode = this._getSmallest(node.right);
    //         node.data = tempNode.data;
    //         node.right = this._removeNode(node.right, tempNode.data);
    //         return node;
    //     }else if(data<node.data){
    //         node.left = this._removeNode(node.left, data);
    //         return node;
    //     }else {
    //         node.right = this._removeNode(node.right, data);
    //         return node;
    //     }
    //
    // };
    // Bst.prototype._getSmallest = function (node) {
    //
    //     if(node.left===null){
    //         return node;
    //     }else {
    //         return this._getSmallest(node.left);
    //     }
    //
    // };
    //
    // // let testData = [3, 16, 22, 23, 37, 45, 99];
    // let testData = [56, 22, 10, 30, 81, 77, 92];
    // let bst1 = new Bst(testData);
    //
    //
    // // console.log('findMin', bst1.findMin());
    // // console.log('findMax', bst1.findMax());
    // // console.log('find', bst1.find(81));
    //
    //
    // // bst1.remove(77);
    // console.log(bst1.root);

}


