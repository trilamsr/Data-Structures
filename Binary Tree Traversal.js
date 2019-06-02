/* eslint-disable no-console */
class Noode {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class Binary {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  insert(data) {
    this.root = this._insert(this.root, data);
  }
  _insert(current, data) {
    if (!current) {
      return new Noode(data);
    }
    if (data > current.data) {
      current.right = this._insert(current.right, data);
    }
    if (data < current.data) {
      current.left = this._insert(current.left, data);
    }
    return current;
  }
  contain(data) {
    let temp = this.root;
    while (temp) {
      if (temp.data === data) {
        return true;
      }
      temp.data > data ? (temp = temp.left) : (temp = temp.right);
    }
    return false;
  }
  containV2(data, current = this.root) {
    if (current === null) {
      return false;
    }
    if (current.data === data) {
      return true;
    }
    if (current.data > data) {
      return this.containV2(data, current.left);
    }
    if (current.data < data) {
      return this.containV2(data, current.right);
    }
  }

  printInReverseOrder(root = this.root) {
    if (root.right && root.left) {
      return this.printInReverseOrder(root.left)
        .concat([root.data])
        .concat(this.printInReverseOrder(root.right));
    }
    if (!root.right && !root.left) {
      return [root.data];
    }
    if (root.left) {
      return this.printInReverseOrder(root.left).concat([root.data]);
    }
    if (root.right) {
      return [root.data].concat(this.printInReverseOrder(root.right));
    }
  }

  printInOrder(root = this.root) {
    if (root.right && root.left) {
      return this.printInOrder(root.left)
        .concat([root.data])
        .concat(this.printInOrder(root.right));
    }
    if (!root.right && !root.left) {
      return [root.data];
    }
    if (root.right) {
      return [root.data].concat(this.printInOrder(root.right));
    }
    if (root.left) {
      return this.printInOrder(root.left).concat([root.data]);
    }
  }

  printInOrderV2(root = this.root) {
    return root
      ? this.printInOrderV2(root.left)
          .concat([root.data])
          .concat(this.printInOrderV2(root.right))
      : [];
  }

  printPreOrder(root = this.root) {
    if (root.left && root.right) {
      return [root.data]
        .concat(this.printPreOrder(root.left))
        .concat(this.printPreOrder(root.right));
    }
    if (!root.left && !root.right) {
      return [root.data];
    }
    if (root.left) {
      return [root.data].concat(this.printPreOrder(root.left));
    }
    if (root.right) {
      return [root.data].concat(this.printPreOrder(root.right));
    }
  }
  printPreOrderV2(root = this.root) {
    return root
      ? [root.data]
          .concat(this.printPreOrderV2(root.left))
          .concat(this.printPreOrderV2(root.right))
      : [];
  }

  printPostOrder(root = this.root) {
    if (!root.left && !root.right) {
      return [root.data];
    }
    if (root.left && root.right) {
      return this.printPostOrder(root.left)
        .concat(this.printPostOrder(root.right))
        .concat([root.data]);
    }
    if (root.left) {
      return this.printPostOrder(root.left).concat([root.data]);
    }
    if (root.right) {
      return this.printPostOrder(root.right).concat([root.data]);
    }
  }

  printPostOrderV2(root = this.root) {
    return root
      ? this.printPostOrderV2(root.left)
          .concat(this.printPostOrderV2(root.right))
          .concat(root.data)
      : [];
  }
}

let aloha = new Binary();
aloha.insert(10);
aloha.insert(7);
aloha.insert(9);
aloha.insert(8);
aloha.insert(5);
aloha.insert(15);
aloha.insert(14);
aloha.insert(20);
aloha.insert(25);
// console.log(aloha.printInOrder());
// console.log(aloha.printInOrderV2());
// console.log(aloha.printPreOrder());
// console.log(aloha.printPreOrderV2());
// console.log(aloha.printPostOrder());
// console.log(aloha.printPostOrderV2());
console.log(aloha.containV3(10));
console.log(aloha.containV3(7));
// console.log(aloha.containV3(10))
// console.log(aloha.containV3(25))
// console.log(aloha.containV3(5))
// console.log(aloha.containV3(100))
((n, A) => {
  for (i = 0; i++ < n; )
    console.log(A.reduce((a, [k, v]) => a + (i % v ? "" : k), "") || i);
})(50, [["Tri", 3], ["Hard", 5], ["er", 7]]);
