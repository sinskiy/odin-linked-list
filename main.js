class LinkedList {
  constructor(headNode, tailValue) {
    this.head = headNode;
    this.tail = new Node(tailValue);
  }
}

class Node {
  constructor(value, nextNode) {
    this.value = value ?? null;
    this.nextNode = nextNode ?? null;
  }
}
