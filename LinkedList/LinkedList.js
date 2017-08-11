function linkedList(str, val) {
    let linked = str;
    let linkedArray = linked.split('->')

    return linkedArray.filter(item => parseInt(item) !== val).join('->');
}

let str = '1->2->3->3->4->5->3';
let val = 3
console.log(linkedList(str, val));