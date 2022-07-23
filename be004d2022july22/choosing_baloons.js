// Alex has an integer array A, of size N.

// Each element in the array represents the color of balloons Alex has. (Same integer representing same color balloon, while different integer representing a different color balloon).

// Now, Alex needs to select M consecutive balloons, such that he gets the maximum number of distinct color balloons.
// 1<=M<=N<=3*105
// 1<=A[i]<=109
// Sample Input 1

// 5 3

// 3 1 1 2 3

// Sample Output 1

// 3

function driver(colors, M){
    var arr = Array(111).fill(0)
    var colorCount = 0
    var rangeCount = 0
    var start = 0
    for(var i = M; i < colors.length; i++){
        if(rangeCount === M){
            
        }else{
            colorCount += arr[colors[i]] === 0? 1: 0
            start += arr[colors[i]] === 0? i + 1: -1
            arr[colors[i]] += 1
            rangeCount += 1
        }
    }
}
driver([3, 1, 1, 2, 3], 3)