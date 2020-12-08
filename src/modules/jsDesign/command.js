import React, {useEffect, useRef, useState} from "react";


export default function Command() {

    useEffect(() => {

        let ManList = {
            attack:function () {
                console.log('攻击');
            },
            defense:function () {
                console.log('防御');
            },
            jump:function () {
                console.log('跳跃');
            },
            crouch:function () {
                console.log('蹲下');
            },
        };

        let MakeCommand = function (receiver,state) {
            return function () {
                receiver[state] && receiver[state]();
            }
        };
        let commands = {
            "119": "jump",
            "115": "crouch",
            "97": "defense",
            "100": "attack",
        };

        var commandStack = [];

        document.onkeypress = function (ev) {

            var keyCode = ev.keyCode;
            var command = MakeCommand(ManList, commands[keyCode]);

            if(command){
                command();
                commandStack.push(command);
            }

        };

        document.getElementById('reply').onclick = function () {
            var command;
            while (command=commandStack.shift()){
                command();
            }

        };

    }, []);


    useEffect(() => {

        let a1Command = {
            execute: function () {
                console.log('a1Command')
            }
        };
        let a2Command = {
            execute: function () {
                console.log('a2Command')
            }
        };
        let a3Command = {
            execute: function () {
                console.log('a3Command')
            }
        };


        let MacroCommand = function () {
            return{
                commandList: [],
                add: function (command) {
                    this.commandList.push(command)
                },
                execute:function () {
                    this.commandList.forEach((command)=>{
                        command && command.execute && command.execute();
                    })

                }
            }
        };


        //1
        var t1Command = MacroCommand();
        t1Command.add(a1Command);
        t1Command.add(a2Command);
        t1Command.add(a3Command);

        t1Command.execute();



    }, []);


    return (
        <div>
            <button id="reply">播放录像</button>
        </div>
    );
}

