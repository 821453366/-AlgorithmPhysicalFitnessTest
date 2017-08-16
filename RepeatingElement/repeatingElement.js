function repeatingElement(array) {
    let setArray = Array.from(new Set(array));
    let result = [];
    let data = [];

    setArray.forEach(item => {
       result.push({key:item,count:0});
    });
    array.forEach(item => {
        result.forEach(data => {
            if (item === data.key)
                data.count++;
        })
    });
     result.forEach(item => {
        if(item.count>1)
            data.push(item.key);
    });

     return data;
}

let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log("['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']===>  "+repeatingElement(arr))