//K Divisions
function solve(arr, k){
    var goodness = 0
    arr.sort((a, b) => a - b)
    for(var i = 0; i < k; i++){
        goodness += arr[arr.length - 1 - i] - arr[i]
    }
    return goodness
}
console.log(solve([2, 4, 3, 6, 1], 2))