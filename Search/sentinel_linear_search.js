function sentinelSearch(arr, n, key) {
    // last element of the array
    var last = arr[n -1];

    // element to be searched is placed at the last index
    arr[n-1] = key;
    var i = 0;
    while (arr[i] != key) {
        i++
    }

    arr[n - 1] = last;
    if((i < n - 1) || (arr[n - 1] == key)){
        console.log(key + " is present at index " + i);
    } else {
        console.log("Element is not found!");
    }

}

var arr = [10, 20, 180, 30, 60, 50, 110, 100, 70];
var n = arr.length;
var key = 180;
sentinelSearch(arr, n, key);