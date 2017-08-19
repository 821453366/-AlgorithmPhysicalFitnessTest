function repeatingElement(array) {
    let setArray = Array.from(new Set(array));

    return setArray.filter(item => (array.filter(data => item === data).length) > 1);
}

let arr = ['DuplicateRemoval', 'ab', 'ed', 'da', 'DuplicateRemoval', 'ed', 'b'];
console.log("['DuplicateRemoval', 'ab', 'ed', 'da', 'DuplicateRemoval', 'ed', 'b']===>  " + repeatingElement(arr));