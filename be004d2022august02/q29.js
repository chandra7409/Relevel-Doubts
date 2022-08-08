var arr = [21, 8, 17, 3, 42, 28, 14, 36]

var stack = []
var queue = []
for(var i = arr.length - 1; i >= 0; i--){
    stack.push(arr[i])
}
console.log("After reverse adding array in stack")
console.log("Stack -> " + stack)
console.log("Queue -> " + queue)
for(var i = 0; i < 5; i++){
    queue.push(stack.pop())
}
console.log("After popping stack for 5 times into queue")
console.log("Stack -> " + stack)
console.log("Queue -> " + queue)
var dequeued = queue.splice(0, 2)
stack.push(...dequeued)
console.log("After popping stack for 5 times into queue")
console.log("Stack -> " + stack)
console.log("Queue -> " + queue)
console.log("Pop stack")
console.log(stack.pop())