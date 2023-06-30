function Node(element){
    this.value = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function display() {
    var currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.value);
        currNode = currNode.next;
    }
}

function find(item){
    var currNode = this.head;
    while(currNode.value != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function remove(item){
    var prevNode = this.findPrevious(item);
    if(!(prevNode.next == null)){
        prevNode.next = prevNode.next.next;
    }
}

function findPrevious(item){
    var currNode = this.head;
    while(!(currNode.next == null) && (currNode.next.element != item)){
        currNode = currNode.next;
    }
    return currNode;
}

var students = new LList();
students.insert("Carl","head");
students.insert("Sally","Carl");
students.display();
console.log();
