let value = prompt('Введите значение');
value = +value;
if (isNaN(value)) {
    console.log('Упс, кажется, вы ошиблись');
} else if (typeof value === 'number' && value % 2 == 0) {
    console.log('Четное');
} else if (typeof value === 'number' && value % 2 != 0) {
    console.log('Нечетное');
}