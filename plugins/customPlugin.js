
class CustomPlugin {
    constructor(doneCallback,failCallback) {
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }

    apply(compiler){

        // 成功完成一次完整的编译和输出流程时，会触发 done 事件
        compiler.hooks.done.tap("No1",()=>{
            console.log('compiler')
        })

        compiler.hooks.compilation.tap('No2', (compilation) => {
            console.log('compilation')
            compilation.hooks.chunkAsset.tap('No2', (chunk, filename) => {
                console.log(chunk)
                console.log(filename)
            });
        })


    }

}

module.exports = CustomPlugin;