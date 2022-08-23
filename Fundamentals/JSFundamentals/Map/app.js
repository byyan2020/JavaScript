map1 = new Map()

const key1 = 'some string',
      key2 = {},
      key3 = function() {};

map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

console.log(map1.get(key1));

console.log(map1.size);

for(let value of map1.values()) {
    console.log(value);
}

map1.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});


const keyValArr = Array.from(map1);
console.log(keyValArr);

const keyArr = Array.from(map1.values());
console.log(keyArr);

const valArr = Array.from(map1.keys());
console.log(valArr);