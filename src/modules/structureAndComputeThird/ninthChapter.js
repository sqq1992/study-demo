
// 递归


{

    // let i = 0;
    // function recursiveFn() {
    //     i++;
    //     recursiveFn();
    // }
    //
    // try {
    //     recursiveFn();
    // }catch (e) {
    //     console.log(`i=${i}__${e}`)
    // }

}

//1
{

    let factorial = (n) => {

        if(n===1 || n===0){
            return 1;
        }

        return n * factorial(n - 1);
    };
    // console.log('factorial', factorial(5));

}