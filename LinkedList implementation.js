class Node {
  constructor(data, prev = null, next = null) {
    this.value = data;
    this.prev = prev;
    this.next = next;
  }
}

class linkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addFront(data) {
    let newFront = new Node(data, null, this.head);
    if (!this.tail) this.tail = newFront;
    if (this.head) this.head.prev = newFront;
    this.head = newFront;
    this.size++;
  }

  addBack(data) {
    let newBack = new Node(data, this.tail, null);
    if (!this.head) this.head = newBack;
    if (this.tail) this.tail.next = newBack;
    this.tail = newBack;
    this.size++;
  }
  popFront() {
    if (this.size === 0) throw new Error("No data");
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }
  popBack() {
    if (this.size === 0) throw new Error("No data");
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
  }
  //----------------------------
  addAtIndex(index, data) {
    if (this.size < index) {throw new Error ('Too many Index');}
    if (index < 0) {throw new Error ('Invalid Index');}
    let i = 0;
    let newNode = new Node(data);
    let tracer = this.head;
    while (i < index) {
      tracer = tracer.next;
      i++;
    }
    tracer.next.pre = newNode;
    tracer.next = newNode;
    newNode.next = tracer.next;
    newNode.pre = tracer;
    this.size++;
  }
  //---------------------

  popAtIndex(index) {
    if (this.size < index) {throw new Error ('Too many Index');}
    if (index < 0) {throw new Error ('Invalid Index');}
    let i = 0;
    let tracer = this.head;
    while (i < index) {
      tracer = tracer.next;
      i++;
    }
    tracer.prev.next = tracer.next;
    tracer.next.pre = tracer.pre;
    this.size--;
  }
}

let aList = new linkList();
aList.addFront(1);
const alphabet = "a".split("");
for (let i of alphabet) {
  aList.addBack(i);
}
