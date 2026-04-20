// Another example: create keyed object from array, we use the reduce function
function groupById(arr){
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
};

