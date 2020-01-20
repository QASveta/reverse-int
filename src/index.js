module.exports = function reverse (n) {
   if (n>0) { 
    const intRev = n.toString().split('').reverse().join('');
    return parseInt(intRev) * Math.sign(n);
} 
const intRev = n.toString().split('').reverse().join('');
    return parseInt(intRev) * -Math.sign(n);
}
