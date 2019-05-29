const NO_DATA = "STACK CONTAINS NO DATA";

// Sample of using Javascript - built-in methods to implement a stack. Other implementations this one will have similar methods but works differently.

class StackBuiltIn {
  constructor() {
    this.storage = [];
  }
  push(data) {
    this.storage.push(data);
  }
  pop() {
    return this.storage.pop();
  }
  peek() {
    let len = this.storage.length;
    if (len === 0) {
      return NO_DATA;
    }
    return this.storage[len - 1];
  }
  display() {
    return this.storage;
  }
  length() {
    return this.storage.length;
  }
  empty() {
    this.storage = [];
  }
}
/* 
  1/ Make a stack:
    let newStack = new StackBuiltIn()
  2/ Add data 3 to the stack:
    let three = 3;
    newStack.push(three)
  3/ Look at element on top of the stack: 
    console.log(newStack.peek()) //3
  4/ Remove an element:
    console.log(newStack.pop()) // 3
  5/ Show Data:
    console.log(newStack.display()) // []
  6/ Show amount of data points:
    console.log(newStack.length()) // 0
  7/ Empty Data:
    console.log(newStack.empty()) // 0
*/

//-----------------------------------------------
//Implementing a stack using LinkedList Redo - refractored and simplified
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class StackLinkedListRefractored {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  display(node = this.head) {
    if (this.length === 0) {
      return "NO DATA";
    }
    if (node === null) {
      return [];
    }
    return [node.value].concat(this.display(node.next));
  }
  empty() {
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value, this.head);
    this.head = node;
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return "NO DATA";
    }
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp.value;
  }
  peek() {
    if (this.length === 0) {
      return "NO DATA";
    }
    return this.head.value;
  }
  length() {
    return this.length;
  }
}

//-----------------------------------------------
//Implementing a stack using LinkedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class StackLinkedList {
  constructor() {
    this.head = new Node("head");
    this.tail = this.head;
    this.length = 0;
  }
  display(position = this.head) {
    if (position.next === null) {
      return [];
    } else {
      position = position.next;
      return [position.value].concat(this.display(position));
    }
  }
  push(data, position = this.head) {
    if (this.head.next === null) {
      let node = new Node(data);
      this.head.next = node;
      this.tail = node;
      this.length++;
    } else if (position.next === null) {
      let node = new Node(data);
      position.next = node;
      this.tail = node;
      this.length++;
    } else {
      this.push(data, position.next);
    }
  }
  pop(position = this.head) {
    if (this.length === 0) {
      return NO_DATA;
    }
    if (position.next.next === null) {
      let temp = position.next.value;
      this.tail = position;
      position.next = null;
      this.length--;
      return temp;
    } else {
      return this.pop(position.next);
    }
  }
  peek() {
    return this.tail.value;
  }
  length() {
    return this.length;
  }
  empty() {
    this.head = new Node("head");
    this.tail = this.head;
    this.length = 0;
  }
}

// This exercise aims not to use build in javascript methods, but to stimulate what other languages are working under the hood. IE: array is created with a predetermined size.
class StackArray {
  constructor(length) {
    this.storage = new Array(length).fill(undefined);
  }
  empty() {
    this.storage = new Array(length).fill(undefined);
  }
  display() {
    let ret = [];
    for (let i in this.storage) {
      if (i !== undefined) {
        ret.push(i);
      }
    }
    return ret;
  }
  push(data) {
    for (let indx = 0; indx < this.storage.length; indx++) {
      if (this.storage[indx] === undefined) {
        this.storage[indx] = data;
        return;
      }
    }
  }
  pop() {
    for (let indx in this.storage) {
      if (this.storage[indx + 1] === undefined) {
        let temp = this.storage[indx];
        this.storage[indx] = undefined;
        return temp;
      }
    }
  }
  peek() {
    for (let indx in this.storage) {
      if (this.storage[indx + 1] === undefined) {
        return this.storage[indx];
      }
    }
  }
  length() {
    return this.storage.filter(x => x !== undefined).length;
  }
}

/*
  1/ Make a stack of length 10
    let newStack = new StackArray(10)
  2/ Add data 3 to the stack:
    let three = 3;
    newStack.push(three)
  3/ Look at element on top of the stack: 
    console.log(newStack.peek()) //3 
  4/ Remove an element:
    console.log(newStack.pop()) // 3
  5/ Show Data:
    console.log(newStack.display()) // [] 
  6/ Show amount of data points:
    console.log(newStack.length()) // 0
  7/ Empty Data:
    console.log(newStack.empty()) // 0
*/
