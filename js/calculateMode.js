exports.calculateMode = function(arr) {
    let countObj = {};
    let modeList = [];
    arr.forEach(elem => {
        if (elem in countObj === false) {
            countObj[elem] = 1;
        } else {
            countObj[elem] += 1;
        }
    })
    Object.keys(countObj).forEach(key => {
        if (modeList.length === 0) {
            modeList.push(key);
        } else if (countObj[key] === countObj[modeList[0]]) {
            modeList.push(key);
        } else if (countObj[key] > countObj[modeList[0]]) {
            modeList = [];
            modeList.push(key);
        }
    })
    return modeList
}
