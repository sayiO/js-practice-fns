// add whatever parameters you deem necessary - good luck!
function lastIndexOf(arr, num) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === num) {
            return i;

        }

    }
    return -1;

}