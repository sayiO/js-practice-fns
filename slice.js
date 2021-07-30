// add whatever parameters you deem necessary - good luck!
function slice(arr, start, end) {
    let arr1 = [];
    if (end === undefined || end > arr.length) {
        end = arr.length;

    }
    for (let i = start; i < end; i++) {
        arr1.push(arr[i]);

    }

    return arr1;

}