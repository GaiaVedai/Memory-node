class LinkedList {
    constructor(){
      this._length = 0;
      this.head = null;
    }
    print(){
      let currentNode = this.head
      while (currentNode.next !== null){
        console.log (currentNode.data)
        currentNode = currentNode.next
      }
      return
    }
    addToTheBeginning(data) {
      let newNode = new Node(data)
        let newNode = this.head;
        this.head = newNode;
        this._length++
      }
      addToTheEnd(newNode) {
      if (this.head === null){
        this.head = newNode;
        this._length++
        return newNode
        }
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode;
      this._lenth++;
      return newNode
      
    }
    deleteItem(nodeToDelete) {

        if (this.head == nodeToDelete) {
          this.head = nodeToDelete.next; 
          this._length--;
          return; 
        }
      
        let currentNode = this.head;
          while (currentNode !== null) {
          if (currentNode.next === nodeToDelete) {
            currentNode.next = nodeToDelete.next;
            this._length--;
            return; 
          }
          currentNode = currentNode.next;
        }
      }
      removeItemByIndex(index) {

        if (index === 0) {
          this.head = this.head.next;
          this._length--;
          return;
        }
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
          currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next; 
        this._length--;
      }
  }
  
  class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
    
  }
  var list = new LinkedList();
  const newNode = new Node(data);
  