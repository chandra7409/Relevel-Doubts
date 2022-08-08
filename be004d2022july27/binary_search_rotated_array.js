function searchInRotatedArray(n, arr, target){
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        console.log(start, mid, end)
        if (arr[mid] == target) return mid;
        else if (arr[mid] >= arr[start]) {
          if (target >= arr[start] && target < arr[mid]) end = mid - 1;
          else start = mid + 1;
        }else {
          if (target <= arr[end] && target > arr[mid]) start = mid + 1;
          else end = mid - 1;
        }
    }
    return -1;
}
var n = 8
var arr = [19, 20, 1, 2, 3, 9, 12, 16]
var target = 1
// start   mid     end
// 0[16]   3[1]    7[12]
console.log(searchInRotatedArray(n, arr, target));    
