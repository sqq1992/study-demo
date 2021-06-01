
/**
 *  数组和树结构的转化
 **/

//1. 数组转化为树
{

    function listToTree(data) {

        let map = {};
        let treeData = [];

        data.forEach((elem)=>{
            map[elem.id] = elem;
        })

        for (let i in map){

            if(map[i].parentId!==0){

                if(!map[map[i].parentId].children){
                    map[map[i].parentId].children = [];
                }
                map[map[i].parentId].children.push(map[i]);
            }else {
                treeData.push(map[i]);
            }

        }


        return treeData;
    }
    // console.log('listToTree',listToTree([
    //     {
    //         id: 1,
    //         text: '节点1',
    //         parentId: 0 //这里用0表示为顶级节点
    //     },
    //     {
    //         id: 2,
    //         text: '节点1_1',
    //         parentId: 1 //通过这个字段来确定子父级
    //     }
    // ]))

}

//2. 树形结构转成列表
{

    function treeToList(treeData) {
        let data = [];
        function dfs(tree) {
            tree.forEach((elem)=>{
                data.push(elem);
                if(elem.children){
                    dfs(elem.children);
                    delete elem.children;
                }
            })
        }
        dfs(treeData);
        return data;
    }
    console.log('treeToList',treeToList(
        [
            {
                id: 1,
                text: '节点1',
                parentId: 0,
                children: [
                    {
                        id:2,
                        text: '节点1_1',
                        parentId:1
                    }
                ]
            }
        ]
    ))

}