class Node {
    constructor(value) {
        this.data = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyList {
    constructor() {
        this._length = 0;
        this.head = null;
        this.tail = null;
    }

    addItemToTheBeginning(node){
        if (this.head.next && this.head.previous === null){
            this.head = node
            return
        }
        else { 
            let temp = node;
            temp = this.head;
            temp.next = this.head.previous
            temp.previous = null
            node.next = temp.next
            node.previous = temp.previous
            this.head = node             

        }
        
    }
}

const list = new DoublyList();

const newNode = new Node(data);
