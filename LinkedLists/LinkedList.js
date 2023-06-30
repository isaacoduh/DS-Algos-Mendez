import LinkedListNode from "./NodeClass";
export default class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value){
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if(this.tail){
            this.tail = newNode;
        }

        return this;
    }

    append(value){
        const newNode = new LinkedListNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    toString(callback){
        return this.Array().map((node) => node.toString(callback)).toString();
    }
}