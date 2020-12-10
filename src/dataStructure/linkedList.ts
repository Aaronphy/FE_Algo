

export class LinkedListNode<T> {

    value:T;
    next:T|null;

    constructor(value:T,next=null) {
        this.value = value;
        this.next = next;
    }

    toString(cb:Function){
        return cb? cb(this.value):`${this.value}`
    }
}

export class LinkedList {
    head:any;
    tail:any;

    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value:any){
        const newNode = new LinkedListNode(value,this.head);
        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    append(value:any){
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

    deleteHead(){
        if(!this.head){
            return null;
        }
        const deleteNode = this.head;
        if(!this.head.next){
            this.head = null;
            this.tail = null;
        } else {
            this.head = deleteNode.next
        }
        return deleteNode;
    }

    deleteTail() {
        const deleteTail = this.tail;

        if(!this.head){
            return null
        }
        if(!this.head.next){
            this.head = null;
            this.tail = null;
            return deleteTail;
        }

        let currentNode = this.head;

        while(currentNode.next.next) {
            currentNode = currentNode.next
        }

        currentNode.next = null;

        this.tail = currentNode;

        return deleteTail;
    }

    delete(value:any) {
        if(!this.head) return null;

        let deleteNode = null;

        while(this.head && this.head.value === value) {
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode) {
            while(currentNode.next){
                if(currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                }else{
                    currentNode = currentNode.next;
                }
            }
        }

        this.tail = currentNode;

        return deleteNode;

    }

    reverse() {
        let curNode = this.head;
        let preNode = null;
        let nextNode = null;

        while(curNode) {
            nextNode = curNode.next;
            curNode.next = preNode;
            preNode = curNode;
            curNode = nextNode;
        }

        this.tail = this.head;
        this.head = preNode;

        return this;
    }

    fromArray(values:any[]) {
        values.forEach((value:any)=>this.append(value));
        return this;
    }

    toArray() {
        let curNode = this.head;
        let arr = [];
        while(curNode) {
            arr.concat(curNode);
            curNode = curNode.next;
        }
        return arr;
    }

}