function intersectionArray(nums1, nums2) {
    let result = [];

    nums1.forEach(item => {
        let index = nums2.indexOf(item);
        if (index !== -1) {
            result.push(nums2[index]);
            nums2[index] = "";
        }
    });

    return result;
}

module.exports = intersectionArray;
console.log(intersectionArray([1, 2, 2, 1], [2, 2]));