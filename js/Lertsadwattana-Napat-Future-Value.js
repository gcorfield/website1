// the	future	value	of	$10000	in	cash	invested	into	market	with	a	15%	rate	of	return	for	35	years.	
// 𝐹𝑢𝑡𝑢𝑟𝑒 𝑉𝑎𝑙𝑢𝑒 = 𝐶𝑎𝑠ℎ × (1+ 𝑅𝑎𝑡𝑒 𝑜𝑓 𝑅𝑒𝑡𝑢𝑟𝑛)^ 𝑇𝑖𝑚e
window.addEventListener("load", main) // Call main after page loads
function main() {
    // Call function when button is clicked.
    btFutureValue.addEventListener("click", FutureValue)
}
function FutureValue() {
    // Variables
    var FutureValue
    var Cash
    var RateOfReturn
    var Time
    // Inputs from html form
    Cash = parseFloat(txCash.value)
    RateOfReturn = parseFloat(txRateOfReturn.value)
    Time = parseFloat(txTime.value)
    // Processing
    FutureValue=Cash*(1+RateOfReturn)**Time
    // Output to html results page
    // console.log("The future value is $" +FutureValue.toFixed(2))
    spFutureValue.innerHTML = FutureValue.toFixed(2)
    // Add comments about the results
    // Future Value (FV): “over 100% return!”, if FV is more than double the principal; “growth”, otherwise
    if(FutureValue>(2*Cash)) {
        spComments.innerHTML = "over 100% return!"
    } else {
        spComments.innerHTML = "growth"
    }
}
