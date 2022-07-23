var count = 0
function print(str){
    console.log(str)
}
function swap(str, i, j){
    var temp = str[i]
    str[i] = str[j]
    str[j] = temp
    return str
}
function permutation(str, i){
    if(i == str.length) return count++
    for(let j = i; j < str.length; j++){
        str = swap(str, i, j)
        permutation(str, i + 1)
        str = swap(str, i, j)
    }
}
function driver(str){
    permutation(str, 0)
    console.log(count)
}

driver(['A', 'B', 'C'])
