//  Linked List Example

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            // Doubling the list
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // adding a new value to the end of the list
    append(value) {
        const newNode = {
            value: value,
            next: null,
            // Doubling the list
            prev: null
        }
        // Doubling the list
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    // Adding a value to the beginngin of the list 
    prepend(value){
        const newNode = {
            value: value,
            next: null,
            // Doubling the list
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
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
        console.log(array);
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
            next: null,
            prev: null
        }
        // reference to the leader
        const leader = this.traverseToIndex(index-1)
        // Referencing the next node
        const follower = leader.next;
        // Pointing to new node
        leader.next = newNode;
        // New node pointing to the next node
        newNode.next = follower;
        newNode.prev = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this)
        return this.printList();
    }

    // Removing 
    remove(index){
        // Reference to the Leader
        const leader = this.traverseToIndex(index-1)
        // Reference to unwanted node
        const unwantedNode = leader.next;
        // Point to the unwanted 
        leader.next = unwantedNode.next;
        // decrease the length
        this.length--;
        return this.printList();
    }

    // Reversing the list 
    reverse(){
        // Checking if theres is only 1 on the list
        if(!this.head.next){
            return this.head;
        }
        // Referencing the first 3 nodes
        let first = this.head;
        let second = first.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;


    }

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 99);
// myLinkedList.insert(14, 88);
// myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.remove(2);

// myLinkedList.remove();
