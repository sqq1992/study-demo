
class Chain {
    constructor(fn) {
        this.fn = fn;
        this.nextChain = null;
    }

    setNextNode(chain){
        this.nextChain = chain;
    }

    passRequest(){
        let res = this.fn.apply(this, arguments);
        if(res==="toNextNode"){
            return this.nextChain && this.nextChain.fn.apply(this.nextChain, arguments);
        }
        return res;
    }




}

//1
{
    // 预缴1000定金
    const order1000 = (orderType, pay, stock) => {
        if (orderType === 1 && pay === true) {
            console.log('1000 元定金预购, 得到 500 优惠券');
        } else {
            return 'toNextNode'; // 我不知道下一个节点是谁，反正把请求往后面传递
        }
    };
// 预缴500定金
    const order500 = (orderType, pay, stock) =>{
        if (orderType === 2 && pay === true) {
            console.log('500 元定金预购, 得到 200 优惠券');
        } else {
            return 'toNextNode'; // 我不知道下一个节点是谁，反正把请求往后面传递
        }
    };
// 普通购买订单
    const orderNormal = (orderType, pay, stock) =>{
        if (stock > 0) {
            console.log('普通购买, 无优惠券');
        } else {
            console.log('手机库存不足');
        }
    };


    const chainOrder1000 = new Chain(order1000);
    const chainOrder500 = new Chain(order500);
    const chainOrderNormal = new Chain( orderNormal);


    chainOrder1000.setNextNode( chainOrder500 );
    chainOrder500.setNextNode( chainOrderNormal );

    // chainOrder1000.passRequest( 1, true, 500 ); // 输出：1000 元定金预购，得到 500 优惠券
    chainOrder1000.passRequest( 2, true, 500 ); // 输出：500 元定金预购，得到 200 优惠券
    // chainOrder1000.passRequest( 3, true, 500 ); // 输出：普通购买，无优惠券
    // chainOrder1000.passRequest( 1, false, 0 ); // 输出：手机库存不足




}