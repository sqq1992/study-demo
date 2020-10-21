
const add = (a:number,b:number=10,c?:object)=>{
    return a + b;
}
console.log('add', add(2));


//1
interface counter{
    (start: string): string;
}

function counter1(age) {

    return age
}
let aa = <counter>function (age) {

}