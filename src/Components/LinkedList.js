import Node from "./Node";
export default class LinkedList {
    
    constructor(value)
    {
        this.head = null;
        this.size = 0;
        this.action = "No Activity!";
    }

    //Insert the first node
    addToHead(data) {
            this.head = new Node(data, this.head);
            this.size++;
        this.action = "Node added to Head " + data;
        return this;
    }
    
    
    //Insert the last node

    addToTail(data) {
        let node = new Node(data);
        let current;

        //If empty,make head
        if(!this.head) {
            this.head = node;
        }
        else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node
        }

        this.size++;
        this.action = "Node added to Tail " + data;
        return this;
        

    }

    //Insert at index
        insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return (this.action = "Please enter a valid index");
    else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;
  
        curr = this.head;
  
        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
  
            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
  
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
        this.action = "Node " + element +" inserted at "  + index + " index";
    }

        
    }

    //Get at index
    find(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                this.action = "Node " + current.data + " at " + index + " index"; 
                return this.action;
            }
            count++;
            current = current.next;
        }
        return this;
        
    }

    //Remove at index
    remove(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //Remove first
        if(index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current=current.next;
            }

            previous.next = current.next;
        }
        this.action = "Node deleted at index " + index;
        this.size--;
    }  
    //Clear list
    
    clearList() {
        this.head = null;
        this.size = 0;
        this.action = "List Cleared "; 
        return this;
    }
}
