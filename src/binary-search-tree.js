const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootF = null;
  }

  root() {
    return this.rootF;
  }

  add(data) {
    this.rootF = addS(this.rootF, data);

    function addS(node, v) {
      if (!node) {
        return new Node(v);
      }

      if (node.data === v) {
        return node;
      }

      if (v < node.data) {
        node.left = addS(node.left, v);
      } else {
        node.right = addS(node.right, v);
      }
      return node;
    }
  }

  has(data) {
    return hadS(this.rootF, data);

    function hadS(node, v) {
      if (!node) {
        return false;
      }

      if (node.data === v) {
        return true;
      }

      if (v < node.data) {
        return hadS(node.left, v);
      } else {
        return hadS(node.right, v);
      }
    }
  }

  find(data) {
    return hadS(this.rootF, data);
        function hadS(node, v) {
          if (!node) {
            return null;
          }
          if (node.data === v) {
            return node;
          }
          if (v < node.data) {
            return hadS(node.left, v);
          } else {
            return hadS(node.right, v);
          }
        }
    }

  remove(data) {
    this.rootF = removeS(this.rootF, data);

    function removeS(node, v) {
      if (!node) {
        return null;
      }

      if (v < node.data) {
        node.left = removeS(node.left, v);
        return node;
      } else if (node.data < v) {
        node.right = removeS(node.right, v);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minR = node.right;
        while (minR.left) {
          minR = minR.left;
        }
        node.data = minR.data;

        node.right = removeS(node.right, minR.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootF) {
      return;
    }

    let node = this.rootF;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootF) {
      return;
    }

    let node = this.rootF;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};