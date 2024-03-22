const users = [
    { name: 'John', lastname:"Doe",age: 25 },
    { name: 'Johnoo', lastname:"Cina",age: 20 },
    { name: 'Johnai', lastname:"kakoti",age: 20 },
    { name: 'Johny', lastname:"kakoti",age: 39}
];
//map: :
// const output = users.map((x)=> x.name+x.lastname);
// console.log(output);


// reduce ::
// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age]=1;
//     }
//     return acc;

// },{})
// console.log(output);

//filter : : 

const output = users.filter((x)=> x.age<30).map((x)=> x.name);
console.log(output);