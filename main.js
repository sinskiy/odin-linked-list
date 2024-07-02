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
    let currentNode = this.head;
    for (let i = 0; i < this.size() - 2; i++) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }
  at(index) {
    let currentNode = this.head;
    let walked = 0;
    while (walked !== index) {
      if (!currentNode) return null;
      currentNode = currentNode.nextNode;
      walked++;
    }
    return currentNode.value;
  }
}

class ListNode {
  constructor(value, nextNode) {
    this.value = value ?? null;
    this.nextNode = nextNode ?? null;
  }
}

const myList = new LinkedList("hello, world!", "goodbye, world!");
myList.append("final goodbye, world!");
myList.prepend("first hello, world!");
console.log(myList.at(3));
myList.pop();
console.log(myList.tail());
myList.pop();
console.log(myList.tail());
