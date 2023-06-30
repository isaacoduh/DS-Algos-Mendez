function search(arr, n, x)
{
    for(let i = 0; i < n; i++){
        if(arr[i] == x){
            return i;
        }   
    }
    return -1;
}

let arr = [0,9,4,7,10];
let x = 10;
let n = arr.length;

let result = search(arr, n, x);
(result == -1)
    ? console.log("Element is not present in array")
    : console.log("Element is present at index " + result);