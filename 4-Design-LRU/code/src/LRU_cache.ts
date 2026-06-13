interface ICache<K, V> {
  get(key: K): V;
  put(key: K, value: V): null;
  size(): number;
  remove(key: K);
}

class LRUCache<K, V> implements ICache<K, V> {
  private maxCapacity: number = 5;
  private map: Map<K, DoubleLLNode<K, V>> = new Map();

  private doublyLinkedList: DoublyLinkedList<K, V> = new DoublyLinkedList();

  get(key: K): V {
    const node = this.map.get(key);
    this.doublyLinkedList.makeMRU(node);

    return node.value;
  }
  remove(key: K) {
    const node = this.map.get(key);

    this.doublyLinkedList.removeNode(node);
    this.map.delete(key);
  }

  size(): number {
    return this.map.size;
  }

  getCapacity(): number {
    return this.maxCapacity;
  }

  put(key: K, value: V): null {
    // step 1: check for existing node or entry
    const existingNode = this.map.get(key);
    if (existingNode != null) {
      existingNode.value = value;
      this.doublyLinkedList.makeMRU(existingNode);
    }
    // step: 2 check if you hit the capacity then evict LRU Node
    // and insert new Node and make new Node as MRU
    else if (this.size() >= this.getCapacity()) {
      const lruNode = this.doublyLinkedList.removeLast();
      this.map.delete(lruNode.key);

      const newNode = new DoubleLLNode(key, value);
      this.doublyLinkedList.addToFront(newNode);
      this.map.set(key, newNode);
      return;
    } // step: 3 for fresh new entry just insert and make them MRU
    else {
      const newNode = new DoubleLLNode(key, value);
      this.doublyLinkedList.addToFront(newNode);
      this.map.set(key, newNode);
    }
  }
}

// class LFUCache<K, V> implements ICache<K, V> {
//   get(key: K): V {
//     throw new Error("Method not implemented.");
//   }
//   put(key: K, value: V): null {
//     throw new Error("Method not implemented.");
//   }
//   size(): number {
//     throw new Error("Method not implemented.");
//   }
//   remove(key: K) {
//     throw new Error("Method not implemented.");
//   }
// }

// class WhatEver<K, V> implements ICache<K, V> {
//   get(key: K): V {
//     throw new Error("Method not implemented.");
//   }
//   put(key: K, value: V): null {
//     throw new Error("Method not implemented.");
//   }
//   size(): number {
//     throw new Error("Method not implemented.");
//   }
//   remove(key: K) {
//     throw new Error("Method not implemented.");
//   }
// }

// class Redis<K, V> {
//   strategy: ICache<K, V> = null;

//   setStrategy(newStrategy) {
//     this.strategy = newStrategy;
//   }

//   get(key) {
//     this.strategy.get(key);
//   }

//   put(key: K, value: V) {
//     this.strategy.put(key, value);
//   }
// }

// const harshit_redis = new Redis();
// harshit_redis.setStrategy(new LFUCache());
// harshit_redis.get("hasrhit");

// const arun_redis = new Redis();
// arun_redis.setStrategy(new LRUCache());
// arun_redis.get("arun");
