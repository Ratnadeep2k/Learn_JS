const carts =["shoes","pants","kurtas"];

//order 
//payment 

api.createOrder(carts,function (){
    api.proceedToPayment(function(){
        api.showOrderSummary(function()
        {
            api.updateWallet()}
            )
        }
     )
})