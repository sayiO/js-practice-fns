// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return count++;
        }


    }
    return -1;

}