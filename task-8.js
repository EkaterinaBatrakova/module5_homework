let map = new Map();
map.set('one', 22);
map.set('two', 23);

for (let name of map.keys()) {
    console.log(`ключ - ${name}`);
}
for (let name of map.values()) {
    console.log(`значение - ${name}`);
}