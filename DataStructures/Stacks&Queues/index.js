class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  // Stack example
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    // Look at the first titem
    peek() {
      return this.top;
    }

    push(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }
    pop(){
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return this;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.pop();

//  Queue Implementation 
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    dequeue(){
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return this;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.peek();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();