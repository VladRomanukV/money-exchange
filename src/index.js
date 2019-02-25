// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var H = 50;
    var Q = 25;
    var D = 10;
    var N = 5; 
    var P = 1; 
    var equally;

    var obj = {};

    var objBurj = {error: "You are rich, my friend! We don't have so much coins for exchange"}


    if(currency == 0) {
    	return obj;
    } else if (currency > 10000 ){
    	return objBurj;
    } else {
    	
    }

}
