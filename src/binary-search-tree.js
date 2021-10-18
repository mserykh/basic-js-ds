const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      }
      else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasThisNode(this.rootNode, data);

    function hasThisNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }
      return data < node.data ? hasThisNode(node.left, data) : hasThisNode(node.right, data);
    }
  }

  find(data) {
    return searchNode(this.rootNode, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.right === null) {
          console.log(node.left);
          return node.left;
        }

        if (node.left === null) {
          return node.right;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}