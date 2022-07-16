//Which Classroom
function solve(arr, N){
    var i = 0
    for(; i < arr.length && N > 0; i++){
        N -= arr[i]
    }
    return i
}
console.log(solve([2, 1, 7], 3))