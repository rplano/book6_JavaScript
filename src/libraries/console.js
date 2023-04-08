/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: classes mimicking behavior of ACM Java console programs.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 * @version 0.02
 */

"use strict";

var CONSOLE_ROWS = 10;
var CONSOLE_COLS = 32;

var textarea;
var textKeyDown;   // needed for readLine()
var textEntered = '';   // needed for readLine()
var enterPressed = false; // needed for readLine()

function createConsole(rows, cols) {
    // redefine print():
    print = function (msg) {
        if (msg === undefined) {
            msg = '';
        }
        // textarea.append(msg);
        textarea.value += msg;
        textarea.scrollTop = textarea.scrollHeight;
    }

    // redefine clear():
    clear = function () {
        textarea.value = '';
    }

    // remove the p5js canvas:
    let element = document.getElementById("defaultCanvas0");
    // element.remove();
    element.style = 'visibility: hidden;';
    element.width = 0;
    element.height = 0;

    // init some values
    noLoop();
    frameRate(0);   // just to make sure
    if (cols !== undefined) {
        CONSOLE_COLS = cols;
    }
    if (rows !== undefined) {
        CONSOLE_ROWS = rows;
    }

    // // add key listeners
    // document.addEventListener('keydown',
    //     function (ev) {
    //         keyDown(ev.key, ev.code);
    //     }
    // );
    document.addEventListener('keyup',
        function (ev) {
            keyUp(ev.key, ev.code);
        }
    );
    // // not working on Android Chrome:
    // document.addEventListener('keypress',
    //     function (ev) {
    //         keyPress(ev.key, ev.code);
    //     }
    // );

    // create text area
    textarea = document.createElement('textarea');
    textarea.id = 'console';
    // textarea.value = 'hi';
    textarea.rows = CONSOLE_ROWS;
    textarea.cols = CONSOLE_COLS;
    // textarea.style.position = "absolute";
    // textarea.style.left = '0px';
    // textarea.style.top = '0px';
    textarea.readOnly = false; // needed for mobile devices to show keyboard
    // textarea.readOnly = true; 

    // add text area to body
    let _body = document.getElementsByTagName('body')[0];
    _body.appendChild(textarea);

    textarea.focus();
}

function setFont(fon) {
    textarea.style.font = fon;   // '30px Arial'
}

// function keyDown(key, code) {
//     // console.log('keyDown(' + key + ',' + code + ')');
//     // textKeyDown = textarea.value;
//     // if (key === 'Backspace' && textarea !== undefined) {
//     //     // textarea.value = textarea.value.slice(0, -1);
//     //     textEntered = textEntered.slice(0, -1);
//     // }
// }

function keyUp(key, code) {
    // console.log('keyUp(' + key + ',' + code + ')');
    let textKeyUp = textarea.value;
    let dif = textKeyUp.length - textKeyDown.length;
    let lastChar = textKeyUp.slice(-1);
    if (lastChar === '\n' || lastChar === '\r') {
        enterPressed = true;
    } else if (dif >= 0) {
        textEntered = textarea.value.substring(textKeyDown.length, textKeyUp.length);
    }
}

function println(msg) {
    if (msg === undefined) {
        msg = '';
    }
    textarea.value += msg + '\n';
    textarea.scrollTop = textarea.scrollHeight;
}

function readLine(msg) {
    if (msg === undefined) {
        msg = '';
    }
    textarea.value += msg;

    enterPressed = false;
    textEntered = '';
    textKeyDown = textarea.value;
    return new Promise((resolveOuter) => {
        resolveOuter(
            new Promise((resolveInner) => {
                var check = function () {
                    if (enterPressed) {
                        // print('Enter');
                        // textarea.value += '\n';
                        resolveInner(textEntered);
                    } else {
                        // print('No Enter');
                        setTimeout(check, 100); // check again in a second
                    }
                }
                check();
            })
        );
    });
}

async function readInt(msg) {
    let nr;
    do {
        let res = await readLine(msg);
        nr = Number(res);
    }
    while (!Number.isInteger(nr));
    return nr;
}

async function readDouble(msg) {
    let nr;
    do {
        let res = await readLine(msg);
        nr = Number(res);
    }
    while (!Number.isFinite(nr));
    return nr;
}