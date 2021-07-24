// add whatever parameters you deem necessary - good luck!
function stringIncludes(str, ch) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === ch.toLowerCase()) {
            return true;
        }

    }
    return false;

}