function cb(x){
    console.log(x);
}
function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    var res = a + b;
    return cb(res);
}

module.exports = RunCallback;
