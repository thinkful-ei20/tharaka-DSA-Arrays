const memory = require('./Memory');
const newMem = new memory;

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = newMem.allocate(this.length);
    }

    push(value) {

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        newMem.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = newMem.allocate(size);

        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        newMem.copy(this.ptr, oldPtr, this.length);
        newMem.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return newMem.get(this.ptr + index);
    }

    pop() {
        
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = newMem.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        newMem.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        newMem.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        newMem.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

function main() {
    Array.SIZE_RATIO = 3;

    //create an instance of the array class
    let arr = new Array;

    //add an item to the array
    arr.push(3);
    // What is the length, capacity and memory address of your array?
    // Length = 1  capacity = 3  memory address = 0

    
    //What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    
    // Length = 6    capacity = 12    memory address = 3
    // Since the length of the array is over the capacity limit, it would resize and allocate the new pointer (3) and set the capacity to (current array length + 1) * Array.SIZE_RATIO



    //What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code
    arr.pop();
    arr.pop();
    arr.pop();

    //Length = 3    capacity = 12    memory addess = 3
    //Capacity and memory address remains the same be the same because pop method doesn't modify them. The array length is shortened by the pop method.


    console.log(arr.get(0));

    arr.remove(2);
    arr.remove(1);
    arr.remove(0);

    arr.push('tauhida');

    console.log(arr.get(0));
    // We NaN because newMem accepts datatype of floats and does not accept strings. 
  
    //The resize method is used when the length of the array is more than the capacity of the array.
}

main();