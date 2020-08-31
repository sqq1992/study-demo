
//1. 交叉类型
function extend<T, U>(first: T, second: U): T & U {

    let result = {} as T & U;

    for(let i in first){
        result[i] = first[i] as any;
    }

    for(let i in second){
        result[i] = second[i] as any;
    }

    return result;
}

//2. 联合类型
let aa: string | number = 1;


//3. 类型断言
interface Bird {
    fly()
    layEggs()
}
interface Fish {
    swim()
    layEggs()
}

function getSmallPet(): Fish | Bird {

}

let pet = getSmallPet();
pet.layEggs();
if(isFish(pet)){
    pet.swim()
}else {
    pet.fly()
}

//3-1: 类型保护
function isFish(pet:Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}