import { LinkedList } from './linkedList';

export default class Queue {

    linkedList: any;

    constructor(){
        this.linkedList = new LinkedList();
    }

    isEmpty(){
        return !this.linkedList.head;
    }

    peek() {
        if(this.isEmpty())return null;
        return this.linkedList.head.value;
    }

    enqueue(value:any){
        return this.linkedList.append(value);
    }

    dequeue() {
        if(this.isEmpty()) return null;
        return this.linkedList.deleteHead();
    }

    toString(cb?:Function) {
        return this.linkedList.toString(cb);
    }

}