//Hash Table simple LinkedList implementation

class Node {
  constructor(key, data) {
    this.key = null;
    this.data = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  print() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    console.log(array);
  }
  insert(data, key) {
    let node = new Node(data);
    node.data = data;
    node.key = key;
    if (!this.head) {
      this.head = node;
      return;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  remove(key) {
    let current = this.head;
    if (current === this.head && current.key === key) {
      this.head = this.head.next;
    } else {
      while (current.next.key !== key) {
        current = current.next;
      }
      current.next = current.next.next;
    }
  }
  contains(key) {
    function search(key, position = this.head) {
      if (position === null) {
        return false;
      }
      if (position.key === key) {
        return true;
      } else {
        return search(key, position.next);
      }
    }
    return search(key);
  }
  searchNode(key) {
    return (key => {
      let current = this.head;
      while (current) {
        if (current.key === key) {
          return current;
        }
        current = current.next;
      }
      return 'NO DATA';
    })(key);
  }
}

class HashTableLinkedL {
  constructor(size = 97) {
    this.table = new Array(size);
    this.size = size;
  }

  hashFunction(key) {
    const constant = 69;
    let preCode = key.split("").reduce((a, cur) => a + cur.charCodeAt(0), 0);
    let hashCode = (preCode * constant) % this.size;
    return hashCode;
  }
  putting(data, key) {
    let hashCode = this.hashFunction(key);
    if (this.table[hashCode] === undefined) {
      this.table[hashCode] = new LinkedList();
    }
    this.table[hashCode].insert(data, key);
  }
  removing(key) {
    let hashCode = this.hashFunction(key);
    this.table[hashCode].remove(key);
  }
  getting(key) {
    let hashCode = this.hashFunction(key);
    if (this.table[hashCode] === undefined) {
      throw new Error("No data");
    }
    return this.table[hashCode].searchNode(key);
  }
}
