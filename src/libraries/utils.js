/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Utils: utility classes mimicking some often used Java classes.  
 * They do not work exactly the same way, but close enough.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 * @version 0.01
 */

class RandomGenerator {
    // the order of the method declaration is important!!!
    nextColor() {
        return 'rgb(' + this.nextInt(256) + ',' + this.nextInt(256) + ',' + this.nextInt(256) + ')';
    }

    // there is no overloading in JavaScript
    nextInt(low, high) {
        if (high !== undefined) {
            return parseInt(low + Math.random() * (high - low), 10);
        } else {
            return this.nextInt(0, low);
        }
    }

    nextDouble(low, high) {
        if (high !== undefined) {
            return low + Math.random() * (high - low);
        } else {
            return this.nextDouble(0, low);
        }
    }

    nextBoolean() {
        if (Math.random() < 0.5) {
            return true;
        }
        return false;
    }
}


class StorageReader {

    constructor(fileName) {
        this.fileName = fileName;
    }

    read() {
        if (Storage !== undefined) {
            const text = localStorage.getItem(this.fileName);
            return text;

        } else {
            throw new Error('localStorage is not supported!');
        }
    }

    close() {
        // does nothing
    }
}


class StorageWriter {

    constructor(fileName) {
        this.fileName = fileName;
    }

    clear() {
        if (Storage !== undefined) {
            localStorage.clear(this.fileName);

        } else {
            throw new Error('localStorage is not supported!');
        }
    }

    write(text) {
        if (Storage !== undefined) {
            localStorage.setItem(this.fileName, text);

        } else {
            throw new Error('localStorage is not supported!');
        }
    }

    append(text) {
        if (Storage !== undefined) {
            let msg = localStorage.getItem(this.fileName);
            if (msg === null) {
                msg = '';
            }
            localStorage.setItem(this.fileName, msg + text);

        } else {
            throw new Error('localStorage is not supported!');
        }
    }

    close() {
        // does nothing
    }
}


/**
 * must be same origin!
 * let urlReader = new URLReader('http://localhost:5500/');
 * let text = urlReader.read();
 */
class URLReader {

    constructor(_url) {
        this.url = _url;
    }

    read() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", this.url, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    close() {
        // does nothing
    }
}

// class FileReader2 {

//     constructor(uri) {
//         let xhttp = new XMLHttpRequest();
//         xhttp.open("GET", uri, false);	// load syncronously
//         xhttp.send();
//         const content = xhttp.responseText;
//         this.lines = content.split('\n');
//         this.pos = 0;
//     }

//     readLine() {
//         if (this.pos < this.lines.length) {
//             return this.lines[this.pos++];
//         } else {
//             return null;
//         }
//     }

//     close() {
//         // does nothing
//     }
// }

// we need a namespace, since FileReader exists in normal JS
let Utils = {}
Utils.FileReader = class {

    constructor(uri) {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", uri, false);	// load syncronously
        xhttp.send();
        const content = xhttp.responseText;
        this.lines = content.split('\n');
        this.pos = 0;
    }

    readLine() {
        if (this.pos < this.lines.length) {
            return this.lines[this.pos++];
        } else {
            return null;
        }
    }

    close() {
        // does nothing
    }
}

Utils.FileWriter = class {

    constructor(uri) {
        this.uri = uri;
        this.text = '';
    }

    write(text) {
        this.text = text;
    }

    append(text) {
        this.text += text;
    }

    close() {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.text));
        element.setAttribute('download', this.uri);

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}


class StringTokenizer {
    constructor(text, separators) {
        if (separators === undefined) {
            separators = ' ';
        }
        let tmpArray = [];
        tmpArray.push(text);
        for (let i = 0; i < separators.length; i++) {
            tmpArray = this._splitText(tmpArray, separators.charAt(i));
        }
        this.array = tmpArray;
        this.position = 0;
    }

    _splitText(inArray, separator) {
        // if separator is a special character with respect to regexp
        switch (separator) {
            case '.':
                separator = '\.';
                break;
            case '?':
                separator = '\?';
                break;
            default:
                break;
        }

        // split text
        let outArray = [];
        for (let i = 0; i < inArray.length; i++) {
            let tmpArray = inArray[i].split(separator);
            outArray = outArray.concat(tmpArray);
        }

        // remove empty strings
        let finalArray = [];
        for (let i = 0; i < outArray.length; i++) {
            if (outArray[i].length > 0) {
                finalArray.push(outArray[i]);
            }
        }

        return finalArray;
    }

    hasMoreTokens() {
        if (this.position < this.array.length) {
            return true;
        }
        return false;
    }

    nextToken() {
        return this.array[this.position++];
    }
}


// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
class HashMap {

    constructor(_map) {
        if (_map === undefined) {
            _map = new Map();
        }
        this.map = _map;
    }

    put(key, value) {
        this.map.set(key, value);
    }

    get(key) {
        return this.map.get(key);
    }

    remove(key) {
        this.map.delete(key);
    }

    containsKey(key) {
        return this.map.has(key);
    }

    keySet() {
        return this.map.keys();
    }

    values() {
        return this.map.values();
    }

    size() {
        return this.map.size;
    }

    sort() {
        return new HashMap(new Map([...this.map.entries()].sort()));
    }

    toString() {
        let s = 'HashMap[';
        for (const [key, value] of this.map.entries()) {
            s += key + ':' + value + ',';
        }
        s += ']';
        return s;
    }
}

// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
class HashSet {

    constructor() {
        this.set = new Set();
    }

    add(key) {
        this.set.add(key);
    }

    contains(key) {
        return this.set.has(key);
    }

    remove(key) {
        this.set.delete(key);
    }

    size() {
        return this.set.size;
    }

    values() {
        return this.set;
    }
    
    union(setA) {
        const _union = new Set(setA);
        for (const elem of this.set) {
            _union.add(elem);
        }
        return _union;
    }

    intersection(setA) {
        const _intersection = new Set();
        for (const elem of this.set) {
            if (setA.has(elem)) {
                _intersection.add(elem);
            }
        }
        return _intersection;
    }

    difference(setA) {
        const _difference = new Set(setA);
        for (const elem of this.set) {
            _difference.delete(elem);
        }
        return _difference;
    }

    toString() {
        let s = 'HashSet[';
        for (const key of this.set) {
            s += key + ',';
        }
        s += ']';
        return s;
    }
}

// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples
class ArrayList {
    constructor() {
        this.arry = new Array();
    }

    add(value) {
        this.arry.push(value);
    }

    get(idx) {
        return this.arry.at(idx);
    }

    remove(value) {
        const start = this.arry.indexOf(value);
        this.arry.splice(start, 1);
    }

    contains(value) {
        return this.arry.includes(value);
    }

    indexOf(value) {
        return this.arry.indexOf(value);
    }

    size() {
        return this.arry.length;
    }

    values() {
        return this.arry;
    }

    toString() {
        let s = 'ArrayList[';
        for (const value of this.arry) {
            s += value + ',';
        }
        s += ']';
        return s;
    }
}

// we may want to add form submission... or HTTP GET, PUT, DELETE, POST