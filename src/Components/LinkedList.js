export default class LinkedList {


    constructor(value) {
        this.head = "null";
        this.length = 0;
        this.action = "No Activity!";
        this.tail = "null";
       
    }

    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        this.action = "Node added " + value;
        return this;
    }

    addToTail(value) {
        const newNode = { value };
        newNode.next = this.tail;
        this.tail = newNode;
        this.length++;
        this.action = "Node added to tail" + value;
        return this;
        
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.head.value;
        this.action = "Node Removed " + this.head.value;
        this.head = this.head.next;
        this.length--;
        

        return value;
    }

    find(val) {
        let thisNode = this.head;
        let count = 0;

        while (thisNode) {
            if (thisNode.value === val) {
                console.log(count);
                return thisNode;
                //return count;
            }

            thisNode = thisNode.next;
            count++;
        }

        return thisNode;
    }

    remove(val) {
        if (this.length === 0) {
            return undefined;
        }

        if (this.head.value === val) {
            return this.removeFromHead();
        }

        let previousNode = this.head;
        let thisNode = previousNode.next;

        while (thisNode) {
            if (thisNode.value === val) {
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
        }

        if (thisNode === null) {
            return undefined;
        }

        previousNode.next = thisNode.next;
        this.length--;
        this.action = "Node removed " + val;
        return this;
    }
}