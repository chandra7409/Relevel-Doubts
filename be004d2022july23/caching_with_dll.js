class Node{
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}
var dlCacheHead = null
var lastElementPosition = null
var map = {}
var count = 0
var MAX_SIZE = 5
function printCache(){
    var arr = []
    q = dlCacheHead
    while(q != null){
        arr.push({key: q.key, value:q.value})
        q = q.next
    }
    console.log(arr)
}
function setCache(key, value){
    var cacheNode = new Node(key, value)
    if(dlCacheHead === null){
        map[key] = cacheNode
        dlCacheHead = cacheNode
        lastElementPosition = cacheNode
        count += 1
        return
    }
    if(map[key] === undefined){
        map[key] = cacheNode
        dlCacheHead.prev = cacheNode
        cacheNode.next = dlCacheHead
        dlCacheHead = cacheNode
        count += 1
    }else{
        cacheNode = map[key]
        cacheNode.value = value
        if(cacheNode.next == null){
            lastElementPosition = cacheNode.prev != null? cacheNode.prev: cacheNode
        }
        cacheNode.prev.next = cacheNode.next
        cacheNode.next.prev = cacheNode.prev
        cacheNode.next = dlCacheHead
        dlCacheHead.prev = cacheNode
        cacheNode.prev = null
        dlCacheHead = cacheNode
    }
    if(count > MAX_SIZE){
        count -= 1
        lastElementPosition.prev.next = null
    }
}
function getCache(key){
    // for(var i = 0; i < cache.length; i++){
    //     if(cache[i].key == key){
    //         var value = cache[i].value
    //         updateRecent(i)
    //         return value
    //     }
    // }
    var cacheNode = map[key]
    if(cacheNode.next == null){
        lastElementPosition = cacheNode.prev != null? cacheNode.prev: cacheNode
    }else{
        cacheNode.next.prev = cacheNode.prev
    }
    if(cacheNode.prev != null){
        cacheNode.prev.next = cacheNode.next
    }
    cacheNode.next = dlCacheHead
    dlCacheHead.prev = cacheNode
    cacheNode.prev = null
    dlCacheHead = cacheNode
    return cacheNode.value
}

setCache("a", 1)
printCache()
setCache("b", 2)
printCache()
setCache("c", 3)
printCache()
setCache("d", 4)
printCache()
setCache("b", 7254893)
printCache()
console.log(getCache("b"))