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
    for(var i = 0; i < cache.length; i++){
        if(cache[i].key == key){
            var value = cache[i].value
            updateRecent(i)
            return value
        }
    }
}

setCache("a", 1) 