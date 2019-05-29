const NO_DATA = 'NO DATA'

class SetBuiltIn {
    constructor (dataArray) {
        this.storage = [];
        this.length = 0;
        (function () {
            for (let ele of dataArray) {
                if (this.storage.includes(ele)) {continue;}
                this.storage.push(ele)
            } 
        })()
    }
    add (data) {
        this.storage.push(data);
        this.length ++;
    }
    remove (data) {
        let index = this.storage.indexOf(data)
        if (index > -1) {
            this.length --;
            return this.storage.splice(index, 1);
        } else { 
            return NO_DATA
        }
    }
    size () {
        return this.length;
    }
    union (setObject) {
        return new SetBuiltIn ([...this.storage, ...setObject.storage])
    }
    intersect () {}
    subset () {}
    difference () {}
    show () {}
}