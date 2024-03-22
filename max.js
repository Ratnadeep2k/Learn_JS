const arr =[5,2,1,4,6]
// function findMax (arr){
//     let max = 0 ;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max)
//         {
//             max=arr[i];
//         }

//     }
//     return max;
// }
// console.log(findMax(arr));
const output =arr.reduce(function (max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
},0)
console.log(output);