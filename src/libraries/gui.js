/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * GUI: classes mimicking Java Swing classes.  They are basically wrappers for HTML tags.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 * @version 0.03
 */

"use strict";

const DEFAULT_PADDING = '0px 0px 0px 0px';
// const DEFAULT_PADDING = '2px 2px 2px 2px';
const DEFAULT_MARGIN = '2px 2px 2px 2px';
// const DEFAULT_MARGIN = '0px 0px 0px 0px';

let GUI_WIDTH = 300;
let GUI_HEIGHT = 150;
let GUI_FRAME_RATE = 0;

function createGUI(_WIDTH, _HEIGHT) {

    // redefine println():
    println = function (msg) {
        if (msg === undefined) {
            msg = '';
        }
        print(msg + '\n');
    }

    // init some values
    if (_WIDTH !== undefined) {
        GUI_WIDTH = _WIDTH;
    }
    if (_HEIGHT !== undefined) {
        GUI_HEIGHT = _HEIGHT;
    }

    // find body tag 
    let _body = document.getElementsByTagName('body')[0];

    // add key listeners: onkeydown, onkeypress, onkeyup
    this.program = this;
    document.addEventListener('keydown',
        function (ev) {
            program.keyDown(ev.key, ev.code);
        }
    );
    document.addEventListener('keyup',
        function (ev) {
            program.keyUp(ev.key, ev.code);
        }
    );
    document.addEventListener('keypress',
        function (ev) {
            program.keyTyped(ev.key, ev.code);
        }
    );
    // document.addEventListener('onmousedown',
    //     function (ev) {
    //         print('onmousedown');
    //     }
    // );

    // add panel to body
    this.body = _body;
    this.pnl = new JSPanel('flow');
    this.pnl.windw = this;
    this.pnl.addStyle('position: absolute; border: 1px solid black');
    // this.element.style.border = '1px solid red'; //"thick solid #0000FF";

    this.pnl.setLocation(0, 0);
    this.pnl.setSize(GUI_WIDTH + 'px', GUI_HEIGHT + 'px');
    // this.pnl.setLayout('border');
    this.body.appendChild(this.pnl.element);
}

function updateJSCanvas(canvas) {
    // print('updateJSCanvas ' + canvas._gobjects.length);

    // dirty hack to get defaultCanvas0 to get right size and scaling
    const canvs = document.getElementById("defaultCanvas0");
    const ctx = canvs.getContext("2d");
    if (ctx.canvas.clientWidth != canvs.width) {
        // print('1 ' + canvs.offsetWidth);
        // print('2 ' + canvs.width);
        // print('3 ' + ctx.canvas.clientWidth);
        resizeCanvas(ctx.canvas.clientWidth, ctx.canvas.clientHeight, false);
    }

    // draw gobjects
    clear();
    for (var i = 0; i < canvas._gobjects.length; i++) {
        // print(i + ',' + canvas._gobjects[i]);
        canvas._gobjects[i].draw();
    }
}

function setLayout(_layout, _cols) {
    this.pnl.setLayout(_layout, _cols);
}

function addWidget(obj, where) {
    // this.addActionListener(obj);
    if (obj instanceof JSPanel) {
        if (obj.windw === null) {
            // print('JSPanel: ' + obj.windw);
            obj.windw = this;
            // print('JSPanel: ' + obj.windw);
        }
    }
    this.pnl.add(obj, where);
}

function removeWidget(obj, where) {
    this.pnl.removeWidget(obj, where);
}

function addActionListener(obj) {
    // print('addActionListener(' + obj.constructor.name + ')');
    if (obj instanceof JSAbstractButton) {
        // print(obj.constructor.name + '(' + obj.element.id + ')');
        // add action listener
        //const program = this;
        obj.element.addEventListener('click',
            function (ev) {
                let ae = new ActionEvent(ev.target.id, obj);
                program.actionPerformed(ae);
            }
        );
    } else if (obj instanceof JSCanvas) {
        obj.element.addEventListener('click',
            function (ev) {
                // we can not call this 'mouseClicked', because 
                // mouseClicked gets also called from some other place
                const rect = obj.element.getBoundingClientRect();
                program.canvasClicked(ev.clientX - rect.left, ev.clientY - rect.top);
            }
        );
    } else if (obj instanceof JSTextField) {
        // print('addActionListener() for JSTextField not implemented');
        obj.element.addEventListener("keyup",
            function (ev) {
                if (ev.key === "Enter") {
                    // print('enter was pressed');
                    let ae = new ActionEvent(ev.target.id, obj);
                    program.actionPerformed(ae);
                }
            }
        );
    } else if (obj instanceof JSTextArea) {
        print('addActionListener() for JSTextArea not implemented');
    }
}

function actionPerformed(ev) {
    //console.log('actionPerformed(' + ev + ')');
}
function canvasClicked(mouseX, mouseY) {
    // console.log('canvasClicked(' + mouseX + ',' + mouseY + ')');
}

function addChangeListener(obj) {
    if (obj instanceof JSFileUpload) {
        // print(obj.constructor.name + '(' + obj.element.id + ')');
        // add action listener
        //const program = this;
        obj.element.addEventListener('change',
            function (ev) {
                // let ae = new ActionEvent(ev.target.id, obj);
                program.onChange(ev);
            }
        );
        // } else  {
        //     print('addChangeListener() not implemented for '+obj.constructor.name);
    }
}

function onChange(ev) {
    // console.log('onChange(' + ev + ')');
}

function keyDown(key, code) {
    //console.log('keyDown(' + key + ',' + code + ')');
}
function keyUp(key, code) {
    //console.log('keyUp(' + key + ',' + code + ')');
}
function keyTyped(key, code) {
    //console.log('keyPressed(' + key + ',' + code + ')');
}

class ActionEvent {

    constructor(id, obj) {
        this.command = '' + id;
        this.source = obj;
    }

    getActionCommand() {
        return this.command;
    }

    getSource() {
        return this.source;
    }
}

class JSObject {

    constructor() {
        this.element = document.createElement('span');
    }

    setStyle(css) {
        this.element.style = css;
        //this.element.style.display = 'inline-block';
        //this.element.style.width = '100px';
        //this.element.style.fontFamily= 'serif'; 
        //this.element.style.fontStyle= 'italic';
        //this.element.style.border = '1px solid red';
        //this.element.style += 'width: '+width+'px; height: '+height+'px;';
    }

    addStyle(css) {
        //this.element.style.cssText += 'text-align: right; font: 15px monospace;';
        this.element.style.cssText += css;
    }

    getWidth() {
        // print('getWidth: '+this.element.width);
        return this.element.width;
    }

    getHeight() {
        // print('getHeight: '+this.element.height);
        return this.element.height;
    }
}

class JSLabel extends JSObject {

    constructor(text) {
        super();
        this.element = document.createElement('span');
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
        // this.element.style.backgroundColor = 'yellow';
        this.element.innerHTML = text;
    }

    getText() {
        return this.element.innerHTML;
    }

    setText(text) {
        this.element.innerHTML = text;
    }
}

class JSLink extends JSObject {

    constructor(text, href) {
        super();
        this.element = document.createElement('a');
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
        this.element.innerHTML = text;
        this.element.href = href;
    }

    getText() {
        return this.element.innerHTML;
    }

    setText(text) {
        this.element.innerHTML = text;
    }
}

class JSTextField extends JSObject {

    constructor(_size, _text) {
        super();
        this.element = document.createElement('input');
        this.element.type = 'text';
        if (_text !== undefined) {
            this.element.value = _text;
        }
        this.element.size = _size;
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
        //this.element.style='text-align: right; font: 15px monospace;';
    }

    getText() {
        return this.element.value;
    }

    setText(text) {
        this.element.value = text;
    }
}


class JSTextArea extends JSObject {
    constructor(text, rows, cols) {
        super();
        this.element = document.createElement('textarea');
        if (text !== undefined) {
            this.element.value = text;
        }
        if (rows !== undefined) {
            this.element.rows = rows;
        }
        if (cols !== undefined) {
            this.element.cols = cols;
        }
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
        // this.element.style.width = '100%';
        // this.element.style.height = '100%';
        // this.element.style='font: 30px Arial;';
    }

    getText() {
        return this.element.value;
    }

    setText(text) {
        this.element.value = text;
    }

    append(text) {
        this.element.value += text;
    }
}

class JSAbstractButton extends JSObject {
    constructor() {
        super();
    }
}

class JSButton extends JSAbstractButton {

    constructor(text) {
        super();
        this.element = document.createElement('button');
        this.element.innerText = text;
        this.element.id = text;
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
    }

    getText() {
        return this.innerText.value;
    }

    setText(text) {
        this.element.innerText = text;
        this.element.id = text;
    }
}

class JSCheckBox extends JSAbstractButton {

    constructor(text) {
        super();
        this.element = document.createElement('span');
        this.element.style.display = 'inline-block';
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;

        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';
        this.checkbox.name = 'name';
        this.checkbox.value = 'value';
        this.checkbox.id = text;

        this.label = document.createElement('label');
        this.label.appendChild(document.createTextNode(text));

        this.element.appendChild(this.checkbox);
        this.element.appendChild(this.label);
    }

    isSelected() {
        return this.checkbox.checked;
    }
}

class JSRadioButton extends JSAbstractButton {

    constructor(text, _name) {
        super();
        this.element = document.createElement('span');
        this.element.style.display = 'inline-block';
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;

        this.radio = document.createElement('input');
        this.radio.type = 'radio';
        this.radio.name = _name;
        this.radio.value = 'value';
        this.radio.id = text;

        this.label = document.createElement('label');
        this.label.appendChild(document.createTextNode(text));

        this.element.appendChild(this.radio);
        this.element.appendChild(this.label);
    }

    isSelected() {
        return this.radio.checked;
    }

    setSelected(state) {
        this.radio.checked = state;
    }
}

class JSComboBox extends JSAbstractButton {

    constructor() {
        super();
        this.element = document.createElement('select');
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
    }

    addItem(item) {
        const option = document.createElement('option');
        option.text = item;
        this.element.add(option);
    }

    getSelectedIndex() {
        return this.element.selectedIndex;
    }

    getSelectedItem() {
        return this.element.options[this.getSelectedIndex()].value;
    }
}


class JSCanvas extends JSObject {
    constructor() {
        super();

        // get the p5js canvas:
        this.element = document.getElementById("defaultCanvas0");
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
        this.element.style = 'border: 1px solid green;';

        // this.element.addEventListener('onmousedown', function () {
        //     print('onclick');
        // });

        this._gobjects = [];
    }

    getAllGObjects() {
        return this._gobjects;
    }

    add(obj, x, y) {
        if (x !== undefined && y !== undefined) {
            obj.setLocation(x, y);
        }
        this._gobjects.push(obj);
    }

    remove(obj) {
        const pos = this._gobjects.indexOf(obj);
        if (pos > -1) {
            this._gobjects.splice(pos, 1);
        }
    }

    removeAll() {
        this._gobjects = [];
    }

    setBackgroundColor(col) {
        this.element.style.backgroundColor = col;
    }

    // getElementsAt(x, y) {
    //     var retObj = [];
    //     for (var i = 0; i < this._gobjects.length; i++) {
    //         const r = this._gobjects[i];
    //         if (r.contains(x, y)) {
    //             retObj.push(r);
    //         }
    //     }
    //     return retObj;
    // }
}


class JSPanel extends JSObject {

    // layout: flow, border, grid
    constructor(_layout, _cols) {
        super();
        this.windw = null;
        this.layout = 'flow';
        if (_layout !== undefined) {
            this.layout = _layout;
        }
        this.element = document.createElement('div');
        // this.element.style.display = 'inline-block';
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
        // this.element.style.verticalAlign = 'top'; // top, middle, bottom
        // this.element.style.width = '100px'; //width: auto
        // this.element.style.height='50%';
        this.setLayout(_layout, _cols);
    }

    // flow, border, grid
    setLayout(_layout, _cols) {
        // print('setLayout: ' + _layout);
        if (_layout !== undefined) {
            this.layout = _layout;
        }

        if (this.layout == 'border') {
            // print('border');

            // // load css from file:
            // var head = document.getElementsByTagName('head')[0];
            // var link = document.createElement('link');
            // link.rel = 'stylesheet';
            // link.type = 'text/css';
            // link.href = 'flexbox2.css';
            // head.appendChild(link);

            // load css from string:
            let stle = document.createElement("style");
            stle.innerHTML = ".flexbox-parent { width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; align-content: stretch;}";
            stle.innerHTML += ".flexbox-item-grow { flex: 1;}";
            stle.innerHTML += ".fill-area-content { overflow: auto;}";
            document.getElementsByTagName("head")[0].appendChild(stle);

            this.element.style.display = '';
            this.element.setAttribute('class', 'flexbox-parent');
            if (_cols == 'horizontal') {
                this.element.style.flexDirection = 'row';
            }

            this.north = new JSPanel('flow');
            this.north.element.setAttribute('class', 'flexbox-item header');
            this.north.element.setAttribute('align', 'center');
            // this.north.element.innerHTML += 'Header';
            // this.north.addStyle('border: 1px solid green');
            this.element.appendChild(this.north.element);

            this.center = new JSPanel('flow');
            this.center.element.setAttribute('class', 'fill-area-content flexbox-item-grow');
            this.center.element.setAttribute('align', 'center');
            // this.center.element.innerHTML += 'Center';
            // this.center.addStyle('border: 1px solid blue');
            this.element.appendChild(this.center.element);

            this.south = new JSPanel('flow');
            this.south.element.setAttribute('class', 'flexbox-item footer');
            this.south.element.setAttribute('align', 'center');
            // this.south.element.innerHTML += 'Footer';
            // this.south.addStyle('border: 1px solid cyan');
            this.element.appendChild(this.south.element);

        } else if (this.layout == 'grid') {
            // print('grid');
            // @see https://css-tricks.com/snippets/css/complete-guide-grid/
            this.element.style.display = 'inline-block';
            this.element.setAttribute('class', 'wrapper');
            this.element.style.display = 'grid';
            this.element.style.gridTemplateColumns = 'repeat(' + _cols + ', ' + Math.trunc(100 / _cols) + '%)';//'100px 100px 100px';

        } else {
            // print('flow');
            this.element.style.display = 'inline-block';

        }
    }

    add(obj, where) {
        // make sure we have a reference to window, needed for actionListener
        if (obj instanceof JSPanel) {
            if (obj.windw === null) {
                print('obj.windw === null');
                obj.windw = this.windw;
            }
        }

        // buttons, etc need to be registered with parent
        if (this.windw !== null) {
            // print('JSPanel.add(): ' + obj + ', ' + this.windw.constructor.name);
            this.windw.addActionListener(obj);
            this.windw.addChangeListener(obj);
        } else {
            // throw new Error('JSPanel has no reference to window, hence addActionListener() not possible!');
        }

        if (this.layout == 'border') {
            if (where.toLowerCase() == 'north' || where.toLowerCase() == 'west') {
                this.north.add(obj);
            } else if (where.toLowerCase() == 'south' || where.toLowerCase() == 'east') {
                this.south.add(obj);
            } else {
                this.center.add(obj);
            }

        } else if (this.layout == 'grid') {
            this.element.appendChild(obj.element);

        } else {
            this.element.appendChild(obj.element);
        }
    }

    // not sure if this really works...
    removeWidget(obj, where) {
        // ToDo: buttons, etc need to be unregistered!
        // if (this.windw !== null) {
        //     // print('JSPanel.add(): ' + obj + ', ' + this.windw.constructor.name);
        //     this.windw.removeActionListener(obj);
        //     this.windw.removeChangeListener(obj);
        // } else {
        //     // throw new Error('JSPanel has no reference to window, hence addActionListener() not possible!');
        // }        

        if (this.layout == 'border') {
            if (where.toLowerCase() == 'north' || where.toLowerCase() == 'west') {
                this.north.removeWidget(obj);
            } else if (where.toLowerCase() == 'south' || where.toLowerCase() == 'east') {
                this.south.removeWidget(obj);
            } else {
                this.center.removeWidget(obj);
            }

        } else if (this.layout == 'grid') {
            this.element.removeChild(obj.element);

        } else {
            this.element.removeChild(obj.element);
        }
    }

    // seems to complicated to implement... better to create new JSPanel
    removeAll() {
        if (this.layout == 'border') {
            throw new Error('JSPanel.removeAll() for border layout not implemented!  Use removeWidget() instead!');
        } else {
            let first = this.element.firstElementChild;
            while (first) {
                first.remove();
                first = this.element.firstElementChild;
            }
        }
    }

    setLocation(x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }

    setSize(width, height) {
        this.element.style.width = width;
        this.element.style.height = height;
    }

    setBackgroundColor(col) {
        this.element.style.backgroundColor = col;
    }
}


class JSFileUpload extends JSObject {

    constructor(_fileType,) {
        super();
        // <input type='file' accept='image/*' onchange='openFile(event)'>
        this.element = document.createElement('input');
        this.element.type = 'file';
        if (_fileType !== undefined) {
            this.element.accept = _fileType;
        }
        // this.element.onchange = 'openFile(event)';
        this.element.style.padding = DEFAULT_PADDING;
        this.element.style.margin = DEFAULT_MARGIN;
        //this.element.style='text-align: right; font: 15px monospace;';
    }

    openFile(event) {
        print('openFile(' + event + ')');
    }

    getText() {
        return this.element.value;
    }

    setText(text) {
        this.element.value = text;
    }
}

class JSOptionPane {
    // The confirm() Method
    // The prompt() Method
    static showMessageDialog(parentComponent, message, title, messageType) {
        alert(message);
    }
}