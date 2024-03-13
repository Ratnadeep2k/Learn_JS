const arr=[5,1,3,2,6];

function isOdd(x){
    return x%2;
}
const output =arr.filter(isOdd);
console.log(output);