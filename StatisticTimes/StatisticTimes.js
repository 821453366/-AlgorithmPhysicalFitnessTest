function statisticTimes(array, item) {
    return array.filter(data => data === item).length;
}

arr = [1, 3, 7, 1, 4];
item = 1;
console.log('[1, 3, 7, 1, 4]中 1 的个数：'+statisticTimes(arr, item));