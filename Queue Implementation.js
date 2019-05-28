const NO_DATA = "NO DATA";

class QueueBuiltIn {
  constructor() {
    this.storage = [];
    this.length = 0;
  }
  enqueue(data) {
    this.storage.push(data);
    this.length++;
  }
  dequeue() {
    this.length--;
    return this.storage.shift();
  }
  front() {
    if (this.length === 0) {
      return NO_DATA;
    }
    return this.storage[0];
  }
  back() {
    if (this.length === 0) {
      return NO_DATA;
    }
    return this.storage[this.length - 1];
  }
  display() {
    if (this.length === 0) {
      return NO_DATA;
    }
    return this.storage;
  }
  empty() {
    this.storage = [];
    this.length = [];
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  front() {
    return this.head.data;
  }
  back() {
    return this.tail.data;
  }
  enqueue(data) {
    let node = new Node(data, null);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
  dequeue() {
    if (this.length === 0) {
      return NO_DATA;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp.data;
  }
  length() {
    return this.length;
  }
  display() {
    if (this.length === 0) {
      return NO_DATA;
    }
    let temp = this.head;
    let ret = [];
    while (temp) {
      ret.push(temp.data);
      temp = temp.next;
    }
    return ret;
  }
  empty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

/* This exercise is to create different implementations of queue, in this case, using array and linkedList
    USING QUEUE:
    const queue = new QueueLinkedList() or new QueueBuiltIn;

    Method 1: front  () // show member in front of queue
    Method 2: back   () // show last member of queue
    Method 3: enqueue(data) // add data to back of queue
    Method 4: dequeue () // take out first member. function return said member
    Method 5: length () // return length of queue
    Method 6: display () // display all members of queue in form of array
    Method 7: empty () // clear queue
*/
