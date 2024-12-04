

//1 接口的使用

interface Say {
    (word: string): string;
}

interface User {
    name: string,
    age: number,
    readonly isMale: boolean,        //只读属性
    say?: Say;
}


const getUserName = (user: User) => {
    user.age = 28;
    return user.name;
};
console.log('getUserName', getUserName({
    name: "sun1992",
    age: 24,
    isMale: true
}));


//2属性检查
interface Config {
    width?: number;
    [propName: string]: any;    //任意类型的值
}

function calculateSquare(cofig: Config):{ area: number} {
    let square = 100;
    if(cofig.width){
        square = cofig.width * cofig.width;
    }
    return {
        area: square
    }
}
let mySquare = calculateSquare({width: 5,name:'sun'});
console.log('mySquare', mySquare);



