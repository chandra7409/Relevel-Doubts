let input = readline().split(" ").map(x => parseInt(x));

class ListNode{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}

function oddEvenList(head) {
    if (head == null) return null;
    let odd = head, even = head.next, evenHead = even;
    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}

function main(input){
    let head = new ListNode(input[0]);
    let temp = head;
    for(let i = 1; i < input.length; i++){
        temp.next = new ListNode(input[i]);
        temp = temp.next;
    }
    head = oddEvenList(head);
    let str = "";
    while(head != null){
        str += head.data + " ";
        head = head.next;
    }
    return str.trim();
}

console.log(main(input)); 
