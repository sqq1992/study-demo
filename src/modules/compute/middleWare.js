function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function f1(num) {
    console.log('f1', num);
    return num + "F1";
}
function f2(next) {
    console.log('f2',num);
    return () => {

    };
}
function f3() {
    console.log('f3',num);
    return () => {

    };
}


let aa2 = [f1, f2, f3].reduce((a, b) => {
    return function (...args) {
        a(b(...args));
    };
});
