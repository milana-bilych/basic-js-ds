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
class Queue {

  constructor() {
    this.rootF = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.rootF;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.rootF = new ListNode(value);
    } else {
      let now = this.rootF;

      while (now.next) {
        now = now.next;
      }

      now.next = new ListNode(value);
    }

    this.length++;
  }

  dequeue() {
    let returnS = this.rootF.value;
    let now = this.rootF;

    if (this.length) {
      this.rootF = now.next;
    } else {
      this.rootF = null;
    }
    return returnS;
  }
}

module.exports = {
  Queue
};
