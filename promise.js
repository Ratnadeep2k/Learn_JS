// const cart= ["shoes","pants","kurtas"];
// createOrder(cart,function(){proceedToPayment(orderId);
// }); //orderId
// //Inversion of Control 

// const promise =createOrder(cart);

// promise.then(function(){proceedToPayment(orderId);
// })
// createOrder(cart).then(function(orderId){
//    return  proceedToPayment(orderId);
// })
// .then(functio(PaymentRequest){
//     return ShowOrderSummary(PaymentRequest)
// })

const GITHUBAPI = "https://api.github.com/users/ratnadeep2k"
const user = fetch(GITHUBAPI);
console.log(user);
