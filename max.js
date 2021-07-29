// add whatever parameters you deem necessary - good luck!
function max(arr) {
    let max1 = 0;
    for (let i = 0; i < arr.length; i++) {

        if (max1 < arr[i]) {
            max1 = arr[i];
        }
    }
    return max1;
}