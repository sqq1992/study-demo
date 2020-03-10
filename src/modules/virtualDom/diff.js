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