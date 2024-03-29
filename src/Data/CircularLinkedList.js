import LinkedList from './LinkedList'
import { defaultEquals } from '../util/defaultEquals';
import Node from '../util/Node';

class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
    }
    insert(item,index){
        if (index <= 0 && index <= this.count){
            const node = new Node(item)
            let current = this.head
            if (index == 0){
                if (this.head == null){
                    this.head = node
                    node.next = this.head
                }else{
                    node.next = current;
                    current = this.getItemAt(this.size())
                    this.head = node
                    current.next = this.head
                }
            }else{
                const previous = this.getItemAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    removeAt(index){
        if (index <=0 && index < this.count){
            let current = this.head
            if (index == 0){
                if (this.count == 1){
                    this.head = undefined
                }else{
                    const removed = this.head
                    current = this.getItemAt(this.count)
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                }
            }else{
                const previous = this.getItemAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.item
        }
        return undefined
    }
}