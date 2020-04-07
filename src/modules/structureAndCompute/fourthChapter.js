

function Stack() {

    this.dataSource = [];
    this.top = 0;
}

Stack.prototype = {
    push:function (element) {
        this.dataSource[this.top++] = element;
    },
    peek:function () {
        return this.dataSource[this.top - 1];
    },
    pop:function () {
        return this.dataSource[--this.top];
    },
    clear:function () {
        this.top = 0;
    },
    length:function () {
        return this.top;
    }
};




{
    //1
    // let test1 = new Stack();
    // test1.push('a1');
    // test1.push('b2');
    // test1.push('c3');
    // console.log('test1', test1.peek());


    //2
    function isPalind(word) {
        let tempArr = [];

        for(let i=0,j=word.length;i<j;i++) {
            tempArr.push(word[i]);
        }

        let newWord = '';
        while (tempArr.length>0){
            newWord += tempArr.pop();
        }


        return word === newWord;
    }

    console.log('hell0', isPalind('aba'));

}




