function findIndex(arr, item) {
    let result =[];

    arr.reduce((accumu,data,index) => {
        if(data === item)
            result.push(index);
    },0);

     return result;
}
let arr = [1, 3, 7, 1, 4];
let item = 1;
console.log("[1, 3, 7, 1, 4]中1元素的下标===>"+findIndex(arr, item));