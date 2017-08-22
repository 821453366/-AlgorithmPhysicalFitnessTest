function mostFrequently(str) {
    let array = str.split("");
    let setArray = Array.from(new Set(array));
    let result = statisticNumber(setArray, array);
    let max = findTheMaximum(result);
    let data = obtainedMaxNumber(result, max);

    return data;
}

function statisticNumber(setArray, array) {
    let result = [];

    setArray.filter(data => {
        result.push({key: data, count: (array.filter(item => item === data)).length});
    });

    return result;
}

function findTheMaximum(result) {
    let max = 0;

    result.forEach(item => {
        if (item.count >= max) {
            max = item.count;
        }
    });

    return max;
}

function obtainedMaxNumber(result, max) {
    let data = {};

    result.forEach(item => {
        if (item.count === max) {
            data[item.key] = item.count;
        }
    });

    return data;
}

module.exports = mostFrequently;
