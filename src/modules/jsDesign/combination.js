/**
 * 组合模式  父元素操作子元素
 */



//todo 1
let Folder = function (name) {
    this.name = name;
    this.parent = null;
    this.files = [];
};
Folder.prototype.add = function (file) {
    file.parent = this;
    this.files.push(file);
}
Folder.prototype.scan = function () {
    console.log('开始扫描文件夹' + this.name);
    this.files.forEach((elem)=>{
        elem && elem.scan();
    })
};
Folder.prototype.remove = function () {
    if(!this.parent){
        return;
    }

    for(let i=this.parent.files.length-1;i>=0;i--) {
        let childFile = this.parent.files[i];

        if(childFile===this) {
            this.parent.files.splice(i, 1);
        }

    }
};

let File = function (name) {
    this.name = name;
}
File.prototype.add = function () {
    throw new Error('文件下面不能添加文件!')
};
File.prototype.scan = function () {
    console.log('开始扫描文件' + this.name);
};
File.prototype.remove = function () {
    if(!this.parent){
        return;
    }

    for(let i=this.parent.files.length-1;i>=0;i--) {
        let childFile = this.parent.files[i];

        if(childFile===this) {
            this.parent.files.splice(i, 1);
        }

    }

};

let folder = new Folder('我的书');
let folder1 = new Folder('js');
let folder2 = new Folder('java');


let file1 = new File('JS权威');
let file2 = new File('JAVA权威')

folder.add(folder1);
folder.add(folder2);
folder1.add(file1);
folder1.add(file2);

folder1.remove();

folder.scan();






