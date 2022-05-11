// Implementing a Hash Table

Object
class HashTable {
    // constructor receiving memory space size
    constructor(size){
        // this data store the size of the space in a new array
        // Array instantiation 
    this.data = new Array(size);

    


    }

    // Hash function to generate a hash for the key
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            // charCodeAt gives us a character code at whatever index we declare
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    }

    // Setting a key value pair
    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return this.data
    }

    // Get method to receive a key
    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] == key){
                    return currentBucket[i][0]
                }
            }
        }
        return undefined
    }

    keys(){
        const keysArray = [];
        for (let i=0; i < this.data.length; i++){
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 100000);
myHashTable.set('oranges', 10);
myHashTable.set('apples', 5);
myHashTable.keys();




// First recurring character

function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++){
            if(input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
} // O(n^2)
firstRecurringCharacter([]);



// Better Simplified version

function firstRecurringCharacter2(input) {
    let map = {};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    return undefined;
} // O(n)

firstRecurringCharacter2([3,4,6,5,2,4,7]);