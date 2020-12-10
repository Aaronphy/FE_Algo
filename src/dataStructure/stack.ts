import { LinkedList } from './linkedList';

export default class Stack {

    linkedList:any

    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty(){
        return !this.linkedList.head
    }

    peek(){
        if(this.isEmpty())return null;
        return this.linkedList.head.value;
    }

    push(value:any){
        return this.linkedList.prepend(value);
    }

    pop(){
        return this.linkedList.deleteHead();
    }

    toString(cb?:Function){
        return this.linkedList.toString(cb);
    }

}

