let arr = [2, 2, 2, 2];
let check = arr.every(function (elem) {
    if (elem === 2) {
        return true;
    } else {
        return false;
    }
});
console.log(check);