let arr = [0, 1, 2, 3, 4, 5, null, '!'];
let even = 0;
let odd = 0;
let zero = 0;

for (let elem of arr) {
    if (elem == '0') {
        zero++;
    } else if (elem % 2 === 0 && elem != null) {
        even++;
    } else if (elem % 2 != 0 && elem != '!') {
        odd++;
    }
}
console.log(`Количесво четных элементов в массиве ${even}`);
console.log(`Количесво нечетных элементов в массиве ${odd}`);
console.log(`Количесво нулей в массиве ${zero}`);