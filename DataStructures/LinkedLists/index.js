//  Linked List Example

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // adding a new value to the end of the list
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    // Adding a value to the beginngin of the list 
    preprend(value){
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //printing the list
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    //Inserting into the list
    insert(index, value){
        //check params
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index-1)
    }

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
