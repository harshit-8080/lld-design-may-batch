class DoubleLLNode<K, V> {
  constructor(
    public key: K,
    public value: V,
    public prev: DoubleLLNode<K, V> = null,
    public next: DoubleLLNode<K, V> = null,
  ) {}
}

class DoublyLinkedList<K, V> {
  private head: DoubleLLNode<K, V>;
  private tail: DoubleLLNode<K, V>;

  constructor() {
    this.head = new DoubleLLNode<K, V>(null, null);
    this.tail = new DoubleLLNode<K, V>(null, null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToFront(newNode: DoubleLLNode<K, V>) {
    newNode.prev = this.head;
    newNode.next = this.head.next;

    this.head.next.prev = newNode;
    this.head.next = newNode;
  }

  removeNode(node: DoubleLLNode<K, V>) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  // deleteing least recently used node
  removeLast(): DoubleLLNode<K, V> {
    const lastNode = this.tail.prev;
    if (lastNode == this.head) {
      return;
    }
    this.removeNode(lastNode);
    return lastNode;
  }

  makeMRU(node: DoubleLLNode<K, V>) {
    this.removeNode(node);
    this.addToFront(node);
  }
}
