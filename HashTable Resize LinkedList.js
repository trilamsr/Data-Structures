class Node {
  constructor(key, data) {
    this.next = null;
    this.data = data;
    this.key = key;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  *generator() {
    let current = this.head;
    while (current !== null) {
      yield current;
      current = current.next;
    }
  }

  addNode(key, data) {
    const node = new Node(key, data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  locateNode(key) {
    const temp = [null, this.head];
    let [parent, current] = temp;
    while (current) {
      if (current.key === key) {
        return { parent, current };
      }
      parent = current;
      current = current.next;
    }
    return { parent: null, current: null };
  }
  removingNode(key) {
    let { parent, current } = this.locateNode(key);
    let temp = current;
    if (!parent && !current) {
      return "NO DATA";
    }
    if (current === this.head && current === this.tail) {
      this.head = null;
      this.tail = null;
      this.size--;
    }
    if (!parent) {
      this.head = current.next;
      this.size--;
      return temp;
    }
    if (current.next === null) {
      this.tail = parent;
      this.size--;
      return temp;
    }
    parent.next = current.next;
    this.size--;
    return temp;
  }
  getNode(key) {
    let temp = this.head;
    while (temp) {
      if (temp.key === key) {
        return temp;
      }
      temp = temp.next;
    }
    return "NO DATA";
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.elementCount = 0;
    this.table = new Array(size);
  }
  hashCode(keyString, size = this.size) {
    const charCode = keyString
      .split("")
      .reduce((a, b) => a + b.charCodeAt(0), 0);
    const postConstant = 0.6180339887 * charCode;
    return Math.floor((postConstant % 1) * size);
  }
  put(key, data, target = this.table, size = this.size) {
    const hashCode = this.hashCode(key, size);
    if (target === this.table) {
      this.elementCount++;
    }
    if (target[hashCode] === undefined) {
      target[hashCode] = new LinkedList();
    }
    target[hashCode].addNode(key, data);
    if (this.elementCount > this.size) {
        this.resizeTable();
    }
  }
  get (key) {
    const hashCode = this.hashCode(key);
    if (this.table[hashCode] === undefined) {
      return "NO KEY";
    }
    return this.table[hashCode].getNode(key);
  }
  resizeTable() {
      const newTable = new Array (this.size * 2);
      this.size = this.size*2;
      for (let list of this.table) {
          if (list instanceof LinkedList) {
              for (let node of [...list.generator()]) {
                this.put(node.key, node.data, newTable, newTable.length)
              }
          }
      }
      this.table = newTable;
  }
}

const aloha = new HashTable (5);

aloha.put('abc', 100)
aloha.put('abcr', 101)
aloha.put('abcd', 102)
aloha.put('abcc', 103)
console.log(aloha)
// aloha.put('abce', 104)
// aloha.put('boo', 107)
// aloha.put('bee', 105)
// console.log(aloha);

