class LinkedList {
  constructor(headNode, tailValue) {
    this.head = headNode;
    this.tail = new ListNode(tailValue);
  }
  append(value) {
    const newNode = new ListNode(value);
    this.tail.nextNode = newNode;
  }
  prepend(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
  }
  pop() {
    this.head = this.head.nextNode;
  }
}

class ListNode {
  constructor(value, nextNode) {
    this.value = value ?? null;
    this.nextNode = nextNode ?? null;
  }
}
