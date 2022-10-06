//Вариант 1
let str = "Hello";
console.log(str[4] + str[3] + str[2] + str[1] + str[0]);

//Вариант 2
function reverseString(str) {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    console.log(str2);
}
reverseString('Hello');