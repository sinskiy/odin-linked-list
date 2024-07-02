class LinkedList {
  constructor(headValue, tailValue) {
    const tail = tailValue ? new ListNode(tailValue, null) : null;
    this.head = new ListNode(headValue ?? null, tail);
  }
  tail() {
    let maybeTail = this.head;
    while (maybeTail.nextNode !== null) {
      maybeTail = maybeTail.nextNode;
    }
    return maybeTail;
  }
  append(value) {
    const newNode = new ListNode(value);
    this.tail().nextNode = newNode;
  }
  prepend(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
  }
  size() {
    let size = 1;
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      size++;
      currentNode = currentNode.nextNode;
    }
    return size;
  }
  pop() {
    this.at(this.size() - 2).nextNode = null;
  }
  at(index) {
    let currentNode = this.head;
    let walked = 0;
    while (walked !== index) {
      if (!currentNode) return null;
      currentNode = currentNode.nextNode;
      walked++;
    }
    return currentNode;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return currentIndex;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }
  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += "null";
    return string;
  }
  insertAt(value, index) {
    const newNode = new ListNode(value, this.head);
    if (index === 0) {
      this.head = newNode;
    }
    const hasNextNodeInserted = this.at(index - 1);
    if (!hasNextNodeInserted) return;
    hasNextNodeInserted.nextNode = newNode;
  }
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    this.at(index - 1).nextNode = this.at(index + 1);
  }
}

class ListNode {
  constructor(value, nextNode) {
    this.value = value ?? null;
    this.nextNode = nextNode ?? null;
  }
}
