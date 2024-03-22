const arr =[5,1,3,2,6]
function double (x){
    return x*2;
}
function binary (x){
    return x.toString(2);
}

const output = arr.map(double);
const ans =arr.map(binary);
console.log(output);
console.log(ans);