
let ROWS = 10;
let COLS = 40;

function createConsole(_ROWS, _COLS) {
    // redefine print():
    print = function (msg) {
        if (msg === undefined) {
            msg = '';
        }
        // this.textarea.append(msg);
        this.textarea.value += msg;
    }

    // redefine println():
    println = function (msg) {
        if (msg === undefined) {
            msg = '';
        }
        this.textarea.value += msg + '\n';
    }

    // redefine clear():
    clear = function () {
        this.textarea.value = '';
    }

    // init some values
    frameRate(0);
    if (_COLS !== undefined) {
        COLS = _COLS;
    }
    if (_ROWS !== undefined) {
        ROWS = _ROWS;
    }

    // find body tag 
    let _body = document.getElementsByTagName('body')[0];

    // add key listeners
    const program = this;
    document.addEventListener('keydown',
        function (ev) {
            program.keyDown(ev.key, ev.code);
        }
    );
    document.addEventListener('keypress',
        function (ev) {
            program.keyPress(ev.key, ev.code);
        }
    );

    // create text area
    this.textarea = document.createElement('textarea');
    // this.textarea.value = 'hi';
    this.textarea.rows = ROWS;
    this.textarea.cols = COLS;
    this.textarea.style.position = "absolute";
    this.textarea.style.left = '0px';
    this.textarea.style.top = '0px';
    this.textarea.readOnly = true;

    // add text area to body
    this.body = _body;
    this.body.appendChild(this.textarea);

    // needed for readLine()
    this.textEntered = '';
}

function setFont(fon) {
    this.textarea.style.font = fon;   // '30px Arial'
}

function keyDown(key, code) {
    // console.log('keyDown(' + key + ',' + code + ')');
    if (key === 'Backspace') {
        this.textarea.value = this.textarea.value.slice(0, -1);
        this.textEntered = this.textEntered.slice(0, -1);
    }
}

function keyPress(key, code) {
    if (key === 'Enter') {
        this.enterPressed = true;
    } else {
        this.textarea.value += key;
        this.textEntered += key;
    }
}

function readLine(msg) {
    if (msg === undefined) {
        msg = '';
    }
    this.textarea.value += msg;

    this.enterPressed = false;
    this.textEntered = '';
    return new Promise((resolveOuter) => {
        resolveOuter(
            new Promise((resolveInner) => {
                var check = function () {
                    if (this.enterPressed) {
                        // print('Enter');
                        this.textarea.value += '\n';
                        resolveInner(this.textEntered);
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
    var nr;
    do {
        let res = await readLine(msg);
        nr = Number(res);
    }
    while (!Number.isInteger(nr));
    return nr;
}

async function readDouble(msg) {
    var nr;
    do {
        let res = await readLine(msg);
        nr = Number(res);
    }
    while (!Number.isFinite(nr));
    return nr;
}