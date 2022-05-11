// Implementing an array

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    // Getting the index of the data array
    get(index){
        return this.data[index];
    }

    // pushing an item to the start of the array
    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    // deleting the last item of the array
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    // delete method
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    // shifting the items in the array
    shiftItems(index){
        for(let i =0; i < this.length -1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;

    }
}

const newArray = new MyArray();
console.log(newArray.get(0));







// Reversing a string

function reverse(str) {
    // check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Should be a string';
    }

    // convert the string into an array
    const backwards = [];

    // length of the array or string
    const totalItems = str.length - 1;

    // looping though the string with i being total items until i =0 and decrement
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards);

    // returning back to string with join
    return backwards.join('');
}

reverse("Hi my name is prince");


// Simmplified

function reverse2(str) {
    return str.split('').reverse().join('');
}

// ES6
const reverse3 = str => str.split('').reverse().join('');


// Merging Arrays 