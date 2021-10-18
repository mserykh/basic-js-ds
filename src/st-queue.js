const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const item = new ListNode(value);
    
    if (!this.head) {
    this.head = item;
    }
    else {
      let currentItem = this.head;
      while (currentItem.next) {
        currentItem = currentItem.next;
      }
      currentItem.next = item;
    }
  }

  dequeue() {
    let headValue = this.head.value;
    this.head = this.head.next;

    return headValue;
  }
}
