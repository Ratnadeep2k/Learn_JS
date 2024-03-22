const cart =["shoes","pants","kurta"]

createOrder(cart) //orderId
.then(function(orderId){
     console.log(orderId);
     return orderId;
})
.then (function(orderId){
    return proceedToPayment(orderId); 
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})
//  creating a promise
//producer end
function createOrder(cart){
const pr = new Promise(function(resolve,reject){
        //createOrder 
        //validateCart 
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }
        //logic for create order 
        const orderId ="12345";
        if(orderId){
            resolve(orderId)
        }
    })
     return pr;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    });

}
function validateCart(cart){
    return true;
}
