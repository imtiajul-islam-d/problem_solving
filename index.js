
const rotateLeft = (array, integer) => {
    for(let i = 0; i < integer; i++){
        const result = array.shift();
        array.push(result)
    }
    return array;
}

console.log(rotateLeft([1,2,3,4,5], 4))