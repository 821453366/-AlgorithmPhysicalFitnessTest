function repeatingElement(array) {
    let setArray = Array.from(new Set(array));

    return setArray.filter(item => (array.filter(data => item === data).length) > 1);
}

let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log("['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']===>  " + repeatingElement(arr))