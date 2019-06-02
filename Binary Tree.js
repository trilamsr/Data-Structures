/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
class Node {
  constructor(data, leftNode = null, rightNode = null) {
    this.data = data;
    this.left = leftNode;
    this.right = rightNode;
    this.frequency = 0;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data, current = this.root) {
    if (!this.root) {
      let node = new Node(data);
      node.frequency++;
      this.root = node;
      return;
    }
    if (current.data > data) {
      if (current.left === null) {
        let node = new Node(data);
        node.frequency++;
        current.left = node;
      } else {
        this.insert(data, current.left);
      }
    }
    if (current.data < data) {
      if (current.right === null) {
        let node = new Node(data);
        node.frequency++;
        current.right = node;
      } else {
        this.insert(data, current.right);
      }
    }
    if (current.data === data) {
      current.frequency++;
    }
  }

  locate(data, current = this.root) {
    if (current === null) return null;
    if (data === current.data) return current;
    if (data > current.data) return this.locate(data, current.right);
    if (data < current.data) return this.locate(data, current.left);
  }

  locateParent(data, current = this.root) {
    if (current.left.data === data || current.right.data === data) {
      return current;
    }
    if (current.data > data) {
      return this.locateParent(data, current.left);
    }
    if (current.data < data) {
      return this.locateParent(data, current.right);
    }
  }

  delete(data) {
    let parent = this.locateParent(data);
    let target = this.locate(data);
    if (target === this.root) {
      let lowest = target.right;
      while (lowest.left !== null) {
        lowest = lowest.left;
      }
      this.root = this.root.right;
      lowest.left = target.left;
    } else if (target.left === null && target.right === null) {
      if (parent.right === target) {
        parent.right = null;
      }
      if (parent.left === target) {
        parent.left = null;
      }
    } else if (target.left !== null && target.right !== null) {
      let lowest = target.right;
      while (lowest.left !== null) {
        lowest = lowest.left;
      }
      if (parent.right === target) {
        lowest.left = target.left;
        parent.right = target.right;
      } else {
        lowest.left = target.left;
        parent.left = target.right;
      }
    } else {
      if (parent.left === target) {
        if (target.right !== null) {
          parent.left = target.right;
        } else {
          parent.left = target.left;
        }
      } else if (parent.right === target) {
        if (target.right !== null) {
          parent.right = target.right;
        } else {
          parent.right = target.left;
        }
      }
    }
  }
}
//--------------------------------------
//TRY TO DO RECURSIVELY


