/**
 *  map等数据结构
 */

//map

//1
{

    const m = new Map([
        ['key1', 'val1'],
        ['key2', 'val2'],
        ['key3', 'val3'],
    ]);

    //1
    // for (let [x,y] of m.entries()){
    //     console.log('mm', x, y);
    // }



}


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


}


