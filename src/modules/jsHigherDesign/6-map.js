/**
 *  map等数据结构
 */

//weakMap
{
    let key1 = {id: 1};
    let key2 = {id: 2};
    let key3 = {id: 3};

    const wm1 = new WeakMap([
        [key1,"value1"],
        [key2,"value2"],
        [key3,"value3"],
    ])
    console.log('wm1', wm1);

}


