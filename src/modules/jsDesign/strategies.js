import React, {useEffect, useRef, useState} from "react";

/**
 *  策略模式
 **/
let strategyList = {
    "s":function (salary) {
        return salary * 4;
    },
    "a":function (salary) {
        return salary * 3;
    },
    "b":function (salary) {
        return salary * 2;
    },
};
let calculator = function (level,salary) {
    return strategyList[level](salary);
};
console.log('s', calculator('s', 10));
console.log('a', calculator('a', 10));
console.log('b', calculator('b', 10));



export default function Strategies() {

    useEffect(() => {

        let formStrategyList = {
            isNotEmpty: function (value,errorMsg) {
                if(value===""){
                    return errorMsg;
                }
            },
            minLength: function (value, length, errorMsg) {
                if (value.length < Number(length)) {
                    return errorMsg;
                }
            },
            isMobile: function (value, errorMsg) {
                if (!(/^1[\d]{10}$/.test(value))) {
                    return errorMsg;
                }
            },
        };

        let Validator = function () {
            this.cache = [];
        };
        Validator.prototype.add = function (dom,rules) {
            var _this = this;
            for(let i=0,j=rules.length;i<j;i++){
                let rule = rules[i];
                let strategyAr = rule.strategy.split(':');
                let strategy = strategyAr.shift();
                strategyAr.unshift(dom.value);
                strategyAr.push(rule.errorMsg);
                this.cache.push(function () {
                    return formStrategyList[strategy].apply(dom, strategyAr);
                })
            }
        };
        Validator.prototype.start = function () {
            for(let i=0,j=this.cache.length;i<j;i++) {
                let errorMsg = this.cache[i]();
                if(errorMsg){
                    return errorMsg;
                }
            }
        };

        var register = document.getElementById('registerForm')

        var validatorFunc = function () {
            var validatorInstance = new Validator();
            validatorInstance.add(register.userName,[{
                strategy:'isNotEmpty',
                errorMsg:'用户名不得为空'
            },{
                strategy:'minLength:6',
                errorMsg:'长度不小于6未'
            }])

            validatorInstance.add(register.password,[{
                strategy:'isNotEmpty',
                errorMsg:'密码不得为空'
            }])

            validatorInstance.add(register.phone,[{
                strategy:'isMobile',
                errorMsg:'手机号码格式不正确'
            }])

            let errorMsg = validatorInstance.start();
            return errorMsg;
        };

        register.onsubmit = function () {

            var errorMsg = validatorFunc();
            if(errorMsg){
                alert(errorMsg);
                return false;
            }

        }


    }, []);


    return (
        <div>
            <form action="xx.com" id="registerForm" method="post">
                请输入用户: <input type="text" name="userName"/>
                请输入密码: <input type="text" name="password"/>
                请输入手机号码: <input type="text" name="phone"/>
                <button>提交</button>
            </form>
        </div>
    );
}

