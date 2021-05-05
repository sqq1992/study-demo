
/**
 *  栈
 **/

var MinStack = function() {

    this.items = {};
    this.count = 0;
    this.lowestCount = 0;

};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    this.items[this.count] = val;
    this.count++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    delete this.items[this.lowestCount];
    this.lowestCount++;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.lowestCount];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    let result;
    for (let i in this.items){
        if(result===undefined || result>this.items[i]){
            result = this.items[i];
        }
    }

    return result;
};