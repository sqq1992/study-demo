import { isString } from 'lodash';
import { StateEnums } from './utils';

export default function diff(oldDomTree, newDomTree) {

    let patches = {};

    dfs(oldDomTree, newDomTree, 0, patches);
    return patches;
};

function dfs(oldNode, newNode, index, patches) {
    let currentPatches = [];

    if(!newNode) {

    }else if(newNode.tag===oldNode.tag && newNode.key===oldNode.key) {
        let props = diffProps(oldNode.props, newNode.props);
        if(props.length){
            currentPatches.push({
                type: StateEnums.ChangeProps,
                props
            });
        }
        diffChildren(oldNode.children, newNode.children, index, patches)

    }else {
        currentPatches.push({type:StateEnums.Replace, node: newNode})
    }

}

function diffChildren(oldChild, newChild, index, patches) {
    let oldListKeys = getListKeys(oldChild);
    let newListKeys = getListKeys(newChild);
    let listChanges = [];
    let listKeys = [];

    oldListKeys.forEach((elem, index) => {
        let tempKeyIndex = newListKeys.indexOf(elem);
        if (tempKeyIndex === -1) {
            listKeys.push(null);
        } else {
            listKeys.push(elem);
        }
    });

    let listKeyLen = listKeys.length;
    for(let i=listKeyLen-1;i>=0;i--) {
        if(!listKeys[i]){
            listKeys.splice(i, 1);
            listChanges.push({
                type: StateEnums.Remove,
                index: i
            })
        }
    }


    newListKeys.forEach((elem,index)=>{
        let tempKeyIndex = listKeys.indexOf(elem);

        if(tempKeyIndex===-1){
            listChanges.push({
                type: StateEnums.Insert,
                index: index
            })
        }else {

            if(tempKeyIndex!==index) {


            }


        }

    })


}

function diffProps(oldProps, newProps) {
    let changes = [];

    //通过oldProps判断newProps的属性删除情况
    for(let i in oldProps) {
        if(oldProps[i] && !newProps[i]){
            changes.push({
                props: i
            });
        }
    }

    for(let i in newProps) {
        if(newProps[i] && oldProps[i]!==newProps[i]){
            changes.push({
                props:i,
                value:newProps[i]
            })
        }
    }


    return changes;
}

function getListKeys(list) {
    let listArr = [];
    list.forEach((elem, index) => {
        let tempKey;
        if (isString(elem)) {
            tempKey = elem;
        } else {
            tempKey = elem.key;
        }
        listArr.push(tempKey);
    });
    return listArr;
}
